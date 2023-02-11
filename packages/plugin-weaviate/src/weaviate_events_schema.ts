export const EntitySchema = {
  "class" : "Entity",
  "description": "Entity Object many to one as Entity List ",
  "invertedIndexConfig": {
      "indexTimestamps": false
  },
/*   "vectorizer": "text2vec-openai",
    "moduleConfig": {
      "text2vec-openai": {
        "model": "ada",
        "modelVersion": "002",
        "type": "embeddings",
        "vectorizeClassName": true
      }
  }, */
  "properties": [
    {
      "dataType": [
        "string"
      ],
      "description": "Name of the entity",
      "name": "name"
    },
    {
      "dataType":[
        "Event"
      ],
      "description": "Event Linked With",
      "name": "event"
    }
  ]

}
export const EventSchema = {
    "class": "Event",
    "description": "A Event for storing the and recalling at a later point of time",
    "invertedIndexConfig": {
        "indexTimestamps": true
    },
    /* "vectorizer": "text2vec-openai",
    "moduleConfig": {
      "qna-openai": {
        "model": "text-curie-001",
        "maxTokens": 50,
        "temperature": 0.0,
        "topP": 1,
        "frequencyPenalty": 0.0,
        "presencePenalty": 0.0
      },
      "text2vec-openai": {
        "model": "ada",
        "modelVersion": "002",
        "type": "embeddings"
      }
    }, */
    "properties": [
      {
        "dataType": [
          "text"
        ],
        "description": "Content that will be vectorized",
/*         "moduleConfig": {
          "text2vec-openai": {
            "skip": false,
            "vectorizePropertyName": false
          }
        }, */
        "name": "content",
        "tokenization": "word"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Type of the event",
        "name": "type"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Name of the client from which event was created.",
        "name": "client"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Name of the channel through which event was created.",
        "name": "channel"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Type of the channel through which event was created.",
        "name": "channelType"
      },
      {
        "dataType": [
          "int"
        ],
        "description": "The ID of the agent.",
        "name": "agentId"
      },{
        "dataType": [
          "string"
        ],
        "description": "The date at which the event was created",
        "name": "date"
      }

    ],
    "vectorIndexType": "hnsw",
    "vectorIndexConfig": { 
          "skip": false,
          "cleanupIntervalSeconds": 300,
          "maxConnections": 64,
          "efConstruction": 128,
          "ef": -1,
          "dynamicEfMin": 100,
          "dynamicEfMax": 500,
          "dynamicEfFactor": 8,
          "vectorCacheMaxObjects": 2000000,
          "flatSearchCutoff": 40000,
          "distance": "cosine"
      }
}

