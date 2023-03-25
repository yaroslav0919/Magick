import axios from 'axios'
import Rete from 'rete'

import { API_ROOT_URL } from '../../config'
import { InputControl } from '../../dataControls/InputControl'
import { MagickComponent } from '../../engine'
import {
  arraySocket, eventSocket, stringSocket, triggerSocket
} from '../../sockets'
import {
  Event, MagickNode,
  MagickWorkerInputs,
  MagickWorkerOutputs,
  WorkerData
} from '../../types'

const info = 'Event Store is used to store events for an event and user'

export class EventStore extends MagickComponent<Promise<void>> {
  constructor() {
    super('Store Event', {
      outputs: {
        trigger: 'option',
      },
    }, 'Event', info)

    this.display = true
  }

  builder(node: MagickNode) {
    const nameInput = new InputControl({
      dataKey: 'name',
      name: 'Input name',
      placeholder: 'Conversation',
    })

    const type = new InputControl({
      dataKey: 'type',
      name: 'Type',
      icon: 'moon',
      placeholder: 'conversation',
    })

    const contentInput = new Rete.Input('content', 'Content', stringSocket)
    const senderInput = new Rete.Input(
      'sender',
      'Sender Override',
      stringSocket
    )
    const eventInput = new Rete.Input('event', 'Event', eventSocket)
    const embedding = new Rete.Input('embedding', 'Embedding', arraySocket)

    node.inspector.add(nameInput).add(type)

    const dataInput = new Rete.Input('trigger', 'Trigger', triggerSocket, true)
    const dataOutput = new Rete.Output('trigger', 'Trigger', triggerSocket)

    return node
      .addInput(dataInput)
      .addInput(contentInput)
      .addInput(senderInput)
      .addInput(eventInput)
      .addInput(embedding)
      .addOutput(dataOutput)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async worker(
    node: WorkerData,
    inputs: MagickWorkerInputs,
    _outputs: MagickWorkerOutputs,
    context
  ) {
    const { projectId } = context

    const event = inputs['event'][0] as Event
    const sender = (inputs['sender'] ? inputs['sender'][0] : null) as string
    let content = (inputs['content'] ? inputs['content'][0] : null) as string
    let embedding = (
      inputs['embedding'] ? inputs['embedding'][0] : null
    ) as number[]
    if (typeof embedding == 'string')
      embedding = (embedding as string).split(',').map(x => parseFloat(x))

    const typeData = node?.data?.type as string

    const type =
      typeData !== undefined && typeData.length > 0
        ? typeData.toLowerCase().trim()
        : 'none'

    //content is none, event content is defined
    if (!content) {
      content = (event as Event).content || 'Error'
      if (!content) console.log('Content is null, not storing the event !!')
    }

    type Data = {
      sender: string
      projectId: string
      content: string
      type: string
      embedding?: number[] | string[]
    }
    const data: Data = {
      ...event,
      sender: sender ?? event.sender,
      projectId,
      content,
      type,
    }
    if (embedding) data.embedding = embedding

    if (content && content !== '') {
      const response = await axios.post(`${API_ROOT_URL}/events`, data)
      return {
        output: response.data,
      }
    }
  }
}
