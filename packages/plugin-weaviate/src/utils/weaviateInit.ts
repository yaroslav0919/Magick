import { CreateEventArgs, GetEventArg, SemanticSearch } from '@magickml/engine'
import weaviate from 'weaviate-client'
import {EventSchema, EntitySchema} from '../weaviate_events_schema'
import { OPENAI_API_KEY } from '@magickml/engine'
var weaviate_client

function generateUUID() {
  var d = new Date().getTime()
  var d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0 
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 
    if (d > 0) {
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

async function class_creator(client, schema) {
    await client.schema
    .classCreator()
    .withClass(schema)
    .do()
    .then(re => {
      console.log(re)
    })
    .catch(async (err) => {
      console.log(err)
      if (err.search("422")){
          await client.schema
                      .classDeleter()
                      .withClassName(schema.class)
                      .do()
                      .catch(async(err) => {
                        console.log(err)
                      })
          await client.schema
                      .classCreator()
                      .withClass(schema)
                      .do()
      }
    })
}

async function bulkReferences(client, uuid_main, prop, class_name, obj){
  obj.map(async (obj_uuid)=>{
      obj_uuid.then(async (data)=> {
        await client.data
                    .referenceCreator()
                    .withClassName('Entity')
                    .withId(data)
                    .withReferenceProperty(prop)
                    .withReference(
                      client.data
                            .referencePayloadBuilder()
                            .withClassName(class_name)
                            .withId(uuid_main)
                            .payload()
                    )
                    .do()
                    .then((res)=> console.log(res))
                    .catch((err)=> console.log(err))

      })
      
  })
}


async function addReferences(client, uuid_main, ref_uuid, prop, class_name){
  await client.data
              .referenceCreator()
              .withClassName('Event')
              .withId(uuid_main)
              .withReferenceProperty(prop)
              .withReference(
                client.data
                  .referencePayloadBuilder()
                  .withClassName(class_name)
                  .withId(ref_uuid)
                  .payload(),
              )
              .do()
              .then(res => {})
              .catch(err => {console.log(err)})
}

async function class_creator(client, schema) {
    await client.schema
    .classCreator()
    .withClass(schema)
    .do()
    .then(re => {
      console.log(re)
    })
    .catch(async (err) => {
      console.log(err)
      if (err.search("422")){
          await client.schema
                      .classDeleter()
                      .withClassName(schema.class)
                      .do()
                      .catch(async(err) => {
                        console.log(err)
                      })
          await client.schema
                      .classCreator()
                      .withClass(schema)
                      .do()
      }
    })
}

async function bulkReferences(client, uuid_main, prop, class_name, obj){
  obj.map(async (obj_uuid)=>{
      obj_uuid.then(async (data)=> {
        await client.data
                    .referenceCreator()
                    .withClassName('Entity')
                    .withId(data)
                    .withReferenceProperty(prop)
                    .withReference(
                      client.data
                            .referencePayloadBuilder()
                            .withClassName(class_name)
                            .withId(uuid_main)
                            .payload()
                    )
                    .do()
                    .then((res)=> console.log(res))
                    .catch((err)=> console.log(err))

      })
      
  })
}


async function addReferences(client, uuid_main, ref_uuid, prop, class_name){
  await client.data
              .referenceCreator()
              .withClassName('Event')
              .withId(uuid_main)
              .withReferenceProperty(prop)
              .withReference(
                client.data
                  .referencePayloadBuilder()
                  .withClassName(class_name)
                  .withId(ref_uuid)
                  .payload(),
              )
              .do()
              .then(res => {})
              .catch(err => {console.log(err)})
}

export async function initWeaviateClientEvent() {
  weaviate_client = await weaviate.client({
    scheme: process.env.WEAVIATE_CLIENT_SCHEME,
    host: process.env.WEAVIATE_CLIENT_HOST,
    headers: { 'X-OpenAI-Api-Key': OPENAI_API_KEY },
  })

  await class_creator(weaviate_client, EventSchema)
  await class_creator(weaviate_client, EntitySchema)

      
}

export class weaviate_connection {

  static async createEntity(entity: {name: string}){
    let UUID = generateUUID()
    await weaviate_client.data
                          .creator()
                          .withClassName('Entity')
                          .withId(UUID)
                          .withProperties({
                            name: entity['name'],
                          })
                          .do()
                          .then(res => {})
                          .catch(err => {console.log(err)})
    return UUID                      

  }
  static async createEvent(_data: CreateEventArgs) {
    if (!weaviate_client) {
      await initWeaviateClientEvent()
    }
    console.log('data is', _data)
    const data = { ..._data }
    const validFields = ['type', 'sender', 'observer', 'client', 'channel', 'channelType', 'content', 'entities', 'agentId']
    for (const key in data) {
      if (!validFields.includes(key)) {
        delete data[key]
      }
    }
    console.log('SS')
    console.log(data)
    return await weaviate_client.data
      .creator()
      .withClassName('Event')
      .withId(generateUUID())
      .withProperties({
        type: data['type'],
        sender: data['sender'],
        observer: data['observer'],
        client: data['client'],
        channel: data['channel'],
        entities: data['entities'],
        agentId: parseInt(data['agentId'].toString()),
        channelType: data['channelType'],
        content: data['content'],
        date: new Date().toUTCString(),
      })
      .do()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }

  static async getEvents(params: GetEventArg) {
    const { entities, maxCount } = params
    if (!weaviate_client) {
      console.log('init weaviate client')
      await initWeaviateClientEvent()
    }
    console.log('get events', params)
    const events = await weaviate_client.graphql
      .get()
      .withClassName('Event')
      .withFields([
        'type',
        'observer',
        'sender',
        'entities',
        'client',
        'channel',
        'sender',
        'content',
        'date',
        '_additional {id}',
      ])
      .withWhere({
        path: ['entities'],
        operator: 'InArray',
        valueArray: entities,
      })
      .withLimit(maxCount)
      .do()
      .catch(err => {
        console.log(err)
      })

    console.log('events', events.data.Get.Event)

    const event_obj = events.data.Get.Event

    return event_obj
  }
  static async getAllEvents() {
    if (!weaviate_client) {
      await initWeaviateClientEvent()
    }
    const events = await weaviate_client.data
      .getter()
      .withClassName('Event')
      .do()
      .catch(err => {
        console.error(err)
      })
    return events
  }

  static async getAndDeleteEvents(params: GetEventArg) {
    if (!weaviate_client) {
      await initWeaviateClientEvent()
    }
    const events = await this.getEvents(params)
    events.forEach(element => {
      console.log(element)
      this.deleteEvents(element["_additional"]["id"])
    });

    return events.length

  }


  static async deleteEvents(id: string) {
    if (!weaviate_client) {
      await initWeaviateClientEvent()
    }
    await weaviate_client.data
      .deleter()
      .withClassName('Event')
      .withId(id)
      .do()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static async searchEvents(question: String, entities: string[]) {
    if (!weaviate_client) {
      await initWeaviateClientEvent()
    }
    const answer = await weaviate_client.graphql
      .get()
      .withClassName('Event')
      .withWhere({
        // check that entities contains the entity
        operator: 'InArray',
        path: ['entities'],
        valueInt: entities,
      })
      .withAsk(({
        question: question
      }))
      .withFields('content _additional { answer { hasAnswer property result startPosition endPosition } }')
      .withLimit(1)
      .do()
      .catch(err => {
        console.log(err)
      })

    console.log(answer)
    if (answer['data']['Get']['Event']['0'] === (undefined)) {
      return {
        _additional: {
          answer: {
            endPosition: 3,
            hasAnswer: false,
            property: 'NONE',
            result: 'NONE',
            startPosition: 0
          }
        },
        content: 'No Result Found'
      }
    } else {
      return answer['data']['Get']['Event']['0']
    }
    return answer
  }

  static async semanticSearch(_data: SemanticSearch) {
    if (!weaviate_client) {
      await initWeaviateClientEvent()
    }
    const data = { ..._data }
    const validFields = ['concept', 'positive', 'negative', 'distance', 'positive_distance', 'negative_distance']
    for (const key in data) {
      if (!validFields.includes(key)) {
        delete data[key]
      }
    }
    const events = await weaviate_client.graphql
      .explore()
      .withNearText({
        concepts: [data["concept"]],
        distance: 0.6,
        moveAwayFrom: {
          concepts: [data["negative"]],
          force: data["negative_distance"]
        },
        moveTo: {
          concepts: [data["positive"]],
          force: data["positive_distance"]
        }
      })
      .withCertainty(0.7)
      .withFields('beacon certainty className')
      .do()
      .catch(err => {
        console.log(err)
      })

    return events
  }
}
