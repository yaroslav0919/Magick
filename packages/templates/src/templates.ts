export default {
  "spells": [
    {
      "id": "454ebe81-de1e-43c0-a9fe-fed9aa9e653d",
      "name": "Starter",
      "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
      "hash": "d77560be63efd7bf3945a0c153441f8a",
      "createdAt": "1678834942490",
      "updatedAt": "1678834952146",
      "graph": {
        "id": "demo@0.1.0",
        "nodes": {
          "232": {
            "id": 232,
            "data": {
              "name": "Input - Default",
              "text": {
                "id": "2eb64348-adee-4118-bcca-19697ca3a16a",
                "inputs": {
                  "Input - Default": {
                    "type": "playtest",
                    "client": "playtest",
                    "sender": "playtestSender",
                    "agentId": "preview",
                    "channel": "playtest",
                    "content": "testing",
                    "entities": [
                      "playtestSender",
                      "Agent"
                    ],
                    "observer": "Agent",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest"
                  }
                },
                "secrets": {},
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "spellName": "Starter",
                "publicVariables": "[]"
              },
              "isInput": true,
              "outputs": [],
              "success": false,
              "socketKey": "9d61118c-3c5a-4379-9dae-41965e56207f",
              "useDefault": false,
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "defaultValue": "Hello world",
              "playtestToggle": {
                "outputs": [],
                "receivePlaytest": false
              },
              "inputType": "Default"
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 494,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 494,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -619.70703125,
              -3.83203125
            ],
            "name": "Input"
          },
          "233": {
            "id": 233,
            "data": {
              "name": "Output",
              "success": false,
              "socketKey": "0f17a35e-1380-428b-bc87-4a38d207fefc",
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "sendToAvatar": {
                  "expanded": true
                },
                "sendToPlaytest": {
                  "expanded": true
                }
              },
              "sendToAvatar": false,
              "sendToPlaytest": true,
              "isOutput": true
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 493,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "input": {
                "connections": [
                  {
                    "node": 493,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": []
              },
              "output": {
                "connections": []
              }
            },
            "position": [
              200,
              0
            ],
            "name": "Output"
          },
          "493": {
            "id": 493,
            "data": {
              "success": false
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 494,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "string": {
                "connections": [
                  {
                    "node": 494,
                    "output": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 233,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 233,
                    "input": "input",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -67.12109375,
              1.0078125
            ],
            "name": "Echo"
          },
          "494": {
            "id": 494,
            "data": {
              "success": false,
              "socketKey": "bbd9c07c-7bcc-454a-b5fe-cc6fd63f6a94"
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 232,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 232,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 493,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "agentId": {
                "connections": []
              },
              "content": {
                "connections": [
                  {
                    "node": 493,
                    "input": "string",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "client": {
                "connections": []
              },
              "channel": {
                "connections": []
              },
              "channelType": {
                "connections": []
              },
              "entities": {
                "connections": []
              },
              "projectId": {
                "connections": []
              },
              "observer": {
                "connections": []
              },
              "sender": {
                "connections": []
              }
            },
            "position": [
              -338.375,
              -0.98828125
            ],
            "name": "Event Destructure"
          }
        },
        "comments": []
      }
    },
    {
      "id": "584398a2-cae3-4410-961b-2ef6310d055f",
      "name": "Discort Bot",
      "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
      "hash": "ee30d3235b59fb88034728b332ccc2d0",
      "createdAt": "1678740354815",
      "updatedAt": "1678834871012",
      "graph": {
        "id": "demo@0.1.0",
        "nodes": {
          "260": {
            "id": 260,
            "data": {
              "name": "Output",
              "sendToPlaytest": true,
              "sendToAvatar": false,
              "socketKey": "faedf39a-0504-4da7-91f4-9a8118fb8248",
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "sendToPlaytest": {
                  "expanded": true
                },
                "sendToAvatar": {
                  "expanded": true
                }
              },
              "success": false,
              "error": false,
              "isOutput": true
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 261,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "input": {
                "connections": [
                  {
                    "node": 261,
                    "output": "result",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 286,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 379,
                    "input": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              1113.9956616232623,
              -32.49936009181222
            ],
            "name": "Output"
          },
          "261": {
            "id": 261,
            "data": {
              "stop": "###,\\n",
              "temperature": 0.7,
              "max_tokens": 50,
              "frequency_penalty": 0,
              "dataControls": {
                "modelName": {
                  "expanded": true
                },
                "inputs": {
                  "expanded": true
                },
                "fewshot": {
                  "expanded": true
                },
                "temperature": {
                  "expanded": true
                },
                "max_tokens": {
                  "expanded": true
                },
                "frequency_penalty": {
                  "expanded": true
                },
                "presence_penalty": {
                  "expanded": true
                },
                "stop": {
                  "expanded": true
                }
              },
              "fewshot": "The following is a conversation between {{speakerName}} and {{agentName}}. {{agentName}} is a helpful chatbot.\n{{conversation}}\n{{speakerName}}: {{input}}\n{{agentName}}:",
              "inputs": [
                {
                  "name": "input",
                  "taskType": "output",
                  "socketKey": "input",
                  "connectionType": "input",
                  "socketType": "anySocket"
                },
                {
                  "name": "conversation",
                  "taskType": "output",
                  "socketKey": "conversation",
                  "connectionType": "input",
                  "socketType": "anySocket"
                },
                {
                  "name": "speakerName",
                  "taskType": "output",
                  "socketKey": "speakerName",
                  "connectionType": "input",
                  "socketType": "anySocket"
                },
                {
                  "name": "agentName",
                  "taskType": "output",
                  "socketKey": "agentName",
                  "connectionType": "input",
                  "socketType": "anySocket"
                }
              ],
              "modelName": "text-ada-001",
              "error": false,
              "success": false,
              "presence_penalty": 0
            },
            "inputs": {
              "input": {
                "connections": [
                  {
                    "node": 317,
                    "output": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "conversation": {
                "connections": [
                  {
                    "node": 378,
                    "output": "conversation",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "speakerName": {
                "connections": [
                  {
                    "node": 317,
                    "output": "sender",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "agentName": {
                "connections": [
                  {
                    "node": 317,
                    "output": "observer",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "trigger": {
                "connections": [
                  {
                    "node": 288,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 260,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "result": {
                "connections": [
                  {
                    "node": 260,
                    "input": "input",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "composed": {
                "connections": []
              }
            },
            "position": [
              773.0373737573882,
              -6.885085295757591
            ],
            "name": "Generator"
          },
          "286": {
            "id": 286,
            "data": {
              "success": false,
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "type": {
                  "expanded": true
                }
              },
              "name": "conversation",
              "type": "conversation",
              "error": false
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 260,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "content": {
                "connections": [
                  {
                    "node": 317,
                    "output": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "sender": {
                "connections": []
              },
              "event": {
                "connections": [
                  {
                    "node": 418,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "embedding": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 379,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              1503.6795650081237,
              -24.768506315340684
            ],
            "name": "Store Event"
          },
          "288": {
            "id": 288,
            "data": {
              "max_count": "6",
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "type": {
                  "expanded": true
                },
                "max_count": {
                  "expanded": true
                }
              },
              "name": "conversation",
              "type": "conversation",
              "success": false,
              "error": false
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 317,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 418,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "embedding": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 261,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "events": {
                "connections": [
                  {
                    "node": 378,
                    "input": "events",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              8.406780587163269,
              5.003741393630614
            ],
            "name": "Event Recall"
          },
          "317": {
            "id": 317,
            "data": {
              "socketKey": "6fc09be7-92d9-45c5-af9c-7d669d5c7664",
              "success": false
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 418,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 418,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 288,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "agentId": {
                "connections": []
              },
              "content": {
                "connections": [
                  {
                    "node": 261,
                    "input": "input",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 286,
                    "input": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "client": {
                "connections": []
              },
              "channel": {
                "connections": []
              },
              "channelType": {
                "connections": []
              },
              "entities": {
                "connections": []
              },
              "projectId": {
                "connections": []
              },
              "observer": {
                "connections": [
                  {
                    "node": 261,
                    "input": "agentName",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 379,
                    "input": "sender",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "sender": {
                "connections": [
                  {
                    "node": 261,
                    "input": "speakerName",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -351.7287822276103,
              -18.00802946009783
            ],
            "name": "Event Destructure"
          },
          "378": {
            "id": 378,
            "data": {
              "success": false
            },
            "inputs": {
              "events": {
                "connections": [
                  {
                    "node": 288,
                    "output": "events",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "trigger": {
                "connections": []
              }
            },
            "outputs": {
              "conversation": {
                "connections": [
                  {
                    "node": 261,
                    "input": "conversation",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "trigger": {
                "connections": []
              }
            },
            "position": [
              385.9205728014596,
              -13.954538944883438
            ],
            "name": "Events to Conversation"
          },
          "379": {
            "id": 379,
            "data": {
              "error": false,
              "success": false,
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "type": {
                  "expanded": true
                }
              },
              "name": "conversation",
              "type": "conversation"
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 286,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "content": {
                "connections": [
                  {
                    "node": 260,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "sender": {
                "connections": [
                  {
                    "node": 317,
                    "output": "observer",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 418,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "embedding": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": []
              }
            },
            "position": [
              1874.2849514671577,
              -24.890813076678157
            ],
            "name": "Store Event"
          },
          "388": {
            "id": 388,
            "data": {
              "isInput": true,
              "name": "Input - Discord (Text)",
              "useDefault": false,
              "defaultValue": "Hello world",
              "socketKey": "2255eef5-2b18-4f0f-b0f5-1c8fb8e347f7",
              "text": {
                "spellName": "Discord Example",
                "id": "4305e4af-f91d-4869-b570-f317c1ed9058",
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "inputs": {
                  "Input - Discord (Voice)": {
                    "content": "hello",
                    "sender": "playtestSender",
                    "observer": "Agent",
                    "agentId": "preview",
                    "client": "playtest",
                    "channel": "playtest",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest",
                    "type": "playtest",
                    "entities": [
                      "playtestSender",
                      "Agent"
                    ]
                  }
                },
                "publicVariables": "[]",
                "secrets": {}
              },
              "success": false,
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "inputType": "Discord (Text)"
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 418,
                    "input": "text trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 418,
                    "input": "text data",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -1081.428534649755,
              -1.7585139444544495
            ],
            "name": "Input"
          },
          "417": {
            "id": 417,
            "data": {
              "isInput": true,
              "name": "Input - Discord (Voice)",
              "useDefault": false,
              "defaultValue": "Hello world",
              "socketKey": "5907593e-a177-4123-8fa8-d743d60ed342",
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "inputType": "Discord (Voice)",
              "text": {
                "spellName": "Discord Example",
                "id": "4305e4af-f91d-4869-b570-f317c1ed9058",
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "inputs": {
                  "Input - Discord (Voice)": {
                    "content": "hello",
                    "sender": "playtestSender",
                    "observer": "Agent",
                    "agentId": "preview",
                    "client": "playtest",
                    "channel": "playtest",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest",
                    "type": "playtest",
                    "entities": [
                      "playtestSender",
                      "Agent"
                    ]
                  }
                },
                "publicVariables": "[]",
                "secrets": {}
              },
              "success": false
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 418,
                    "input": "voice trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 418,
                    "input": "voice data",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -1077.3249707945567,
              209.8951202273657
            ],
            "name": "Input"
          },
          "418": {
            "id": 418,
            "data": {
              "dataControls": {
                "inputs": {
                  "expanded": true
                }
              },
              "inputs": [
                {
                  "name": "text trigger",
                  "taskType": "option",
                  "socketKey": "text trigger",
                  "connectionType": "input",
                  "socketType": "triggerSocket"
                },
                {
                  "name": "text data",
                  "taskType": "output",
                  "socketKey": "text data",
                  "connectionType": "input",
                  "socketType": "anySocket"
                },
                {
                  "name": "voice trigger",
                  "taskType": "option",
                  "socketKey": "voice trigger",
                  "connectionType": "input",
                  "socketType": "triggerSocket"
                },
                {
                  "name": "voice data",
                  "taskType": "output",
                  "socketKey": "voice data",
                  "connectionType": "input",
                  "socketType": "anySocket"
                }
              ],
              "success": false
            },
            "inputs": {
              "text trigger": {
                "connections": [
                  {
                    "node": 388,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "text data": {
                "connections": [
                  {
                    "node": 388,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "voice trigger": {
                "connections": [
                  {
                    "node": 417,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "voice data": {
                "connections": [
                  {
                    "node": 417,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 317,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 317,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 288,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 286,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 379,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -712.1918012213798,
              3.596469524117472
            ],
            "name": "Exclusive Gate"
          }
        },
        "comments": [
          {
            "text": "Prompt template and GPT-3 completion",
            "position": [
              721.796330053565,
              -87.95492558011667
            ],
            "links": [
              261
            ],
            "type": "frame",
            "width": 300.9999999999999,
            "height": 359
          },
          {
            "text": "recall the last 6 conversation events",
            "position": [
              -32.644720754678026,
              -71.91190165739141
            ],
            "links": [
              288
            ],
            "type": "frame",
            "width": 301,
            "height": 266
          },
          {
            "text": "format the events into a conversation script",
            "position": [
              348.6576362977702,
              -92.22722244220095
            ],
            "links": [
              289,
              318,
              378
            ],
            "type": "frame",
            "width": 301,
            "height": 179
          },
          {
            "text": "Respond with the output",
            "position": [
              1097.6646843137023,
              -95.95149005277733
            ],
            "links": [
              260
            ],
            "type": "frame",
            "width": 301,
            "height": 230
          },
          {
            "text": "store the input from sender",
            "position": [
              1462.4918444086727,
              -93.14081431629018
            ],
            "links": [
              286
            ],
            "type": "frame",
            "width": 301,
            "height": 302
          },
          {
            "text": "store the response from api",
            "position": [
              1833.6116971958797,
              -89.30901586253435
            ],
            "links": [
              291,
              319,
              379
            ],
            "type": "frame",
            "width": 301,
            "height": 302
          },
          {
            "text": "Break out the event to get the inner fields",
            "position": [
              -400.22581737165865,
              -72.69227958005936
            ],
            "links": [
              317
            ],
            "type": "frame",
            "width": 301,
            "height": 518
          },
          {
            "text": "first in gets handled",
            "position": [
              -758.4320684099528,
              -69.10810048805959
            ],
            "links": [
              418
            ],
            "type": "frame",
            "width": 302,
            "height": 304
          },
          {
            "text": "input",
            "position": [
              -1121.8979788311847,
              -69.14012304787181
            ],
            "links": [
              388,
              417
            ],
            "type": "frame",
            "width": 304.3241457459012,
            "height": 456.8949592747954
          }
        ]
      }
    },
    {
      "id": "5fb3fd48-f866-45ee-91a6-a1c3e2fdc5e8",
      "name": "REST API",
      "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
      "hash": "2a72f1fcd8954e673938a0400a96631f",
      "createdAt": "1678834897709",
      "updatedAt": "1678834917468",
      "graph": {
        "id": "demo@0.1.0",
        "nodes": {
          "232": {
            "id": 232,
            "data": {
              "name": "Input - REST API (GET)",
              "text": {
                "id": "368b5a50-310c-4060-8771-9d2b3e1fc3aa",
                "inputs": {
                  "Input - REST API (GET)": {
                    "type": "playtest",
                    "client": "playtest",
                    "sender": "moon",
                    "agentId": "preview",
                    "channel": "playtest",
                    "content": "testing",
                    "entities": [
                      "playtestSender",
                      "DAN"
                    ],
                    "observer": "DAN",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest"
                  }
                },
                "secrets": {},
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "spellName": "Rest API Example",
                "publicVariables": "[]"
              },
              "isInput": true,
              "outputs": [],
              "success": false,
              "inputType": "REST API (GET)",
              "socketKey": "9d61118c-3c5a-4379-9dae-41965e56207f",
              "useDefault": false,
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "defaultValue": "Hello world",
              "playtestToggle": {
                "outputs": [],
                "receivePlaytest": false
              }
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 245,
                    "input": "CREATE trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 245,
                    "input": "CREATE data",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -1120.923435239697,
              -6.010720652032001
            ],
            "name": "Input"
          },
          "241": {
            "id": 241,
            "data": {
              "name": "Input - REST API (POST)",
              "text": {
                "id": "368b5a50-310c-4060-8771-9d2b3e1fc3aa",
                "inputs": {
                  "Input - REST API (GET)": {
                    "type": "playtest",
                    "client": "playtest",
                    "sender": "moon",
                    "agentId": "preview",
                    "channel": "playtest",
                    "content": "testing",
                    "entities": [
                      "playtestSender",
                      "DAN"
                    ],
                    "observer": "DAN",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest"
                  }
                },
                "secrets": {},
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "spellName": "Rest API Example",
                "publicVariables": "[]"
              },
              "isInput": true,
              "outputs": [],
              "success": false,
              "inputType": "REST API (POST)",
              "socketKey": "9d61118c-3c5a-4379-9dae-41965e56207f",
              "useDefault": false,
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "defaultValue": "Hello world",
              "playtestToggle": {
                "outputs": [],
                "receivePlaytest": false
              }
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 245,
                    "input": "READ trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 245,
                    "input": "READ data",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -1119.7505522542906,
              217.908534820487
            ],
            "name": "Input"
          },
          "242": {
            "id": 242,
            "data": {
              "name": "Input - REST API (PUT)",
              "text": {
                "id": "368b5a50-310c-4060-8771-9d2b3e1fc3aa",
                "inputs": {
                  "Input - REST API (GET)": {
                    "type": "playtest",
                    "client": "playtest",
                    "sender": "moon",
                    "agentId": "preview",
                    "channel": "playtest",
                    "content": "testing",
                    "entities": [
                      "playtestSender",
                      "DAN"
                    ],
                    "observer": "DAN",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest"
                  }
                },
                "secrets": {},
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "spellName": "Rest API Example",
                "publicVariables": "[]"
              },
              "isInput": true,
              "outputs": [],
              "success": false,
              "inputType": "REST API (PUT)",
              "socketKey": "9d61118c-3c5a-4379-9dae-41965e56207f",
              "useDefault": false,
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "defaultValue": "Hello world",
              "playtestToggle": {
                "outputs": [],
                "receivePlaytest": false
              }
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 245,
                    "input": "UPDATE trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 245,
                    "input": "UPDATE data",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -1120.298349541579,
              442.46702001284933
            ],
            "name": "Input"
          },
          "244": {
            "id": 244,
            "data": {
              "name": "Input - REST API (DELETE)",
              "text": {
                "id": "368b5a50-310c-4060-8771-9d2b3e1fc3aa",
                "inputs": {
                  "Input - REST API (GET)": {
                    "type": "playtest",
                    "client": "playtest",
                    "sender": "moon",
                    "agentId": "preview",
                    "channel": "playtest",
                    "content": "testing",
                    "entities": [
                      "playtestSender",
                      "DAN"
                    ],
                    "observer": "DAN",
                    "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                    "channelType": "playtest"
                  }
                },
                "secrets": {},
                "projectId": "bb1b3d24-84e0-424e-b4f1-57603f307a89",
                "spellName": "Rest API Example",
                "publicVariables": "[]"
              },
              "isInput": true,
              "outputs": [],
              "success": false,
              "inputType": "REST API (DELETE)",
              "socketKey": "9d61118c-3c5a-4379-9dae-41965e56207f",
              "useDefault": false,
              "dataControls": {
                "inputType": {
                  "expanded": true
                },
                "useDefault": {
                  "expanded": true
                },
                "defaultValue": {
                  "expanded": true
                }
              },
              "defaultValue": "Hello world",
              "playtestToggle": {
                "outputs": [],
                "receivePlaytest": false
              }
            },
            "inputs": {},
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 245,
                    "input": "DELETE trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 245,
                    "input": "DELETE data",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -1119.8546330555519,
              682.7687558192347
            ],
            "name": "Input"
          },
          "245": {
            "id": 245,
            "data": {
              "inputs": [
                {
                  "name": "CREATE trigger",
                  "taskType": "option",
                  "socketKey": "CREATE trigger",
                  "socketType": "triggerSocket",
                  "connectionType": "input"
                },
                {
                  "name": "CREATE data",
                  "taskType": "output",
                  "socketKey": "CREATE data",
                  "socketType": "anySocket",
                  "connectionType": "input"
                },
                {
                  "name": "READ trigger",
                  "taskType": "option",
                  "socketKey": "READ trigger",
                  "socketType": "triggerSocket",
                  "connectionType": "input"
                },
                {
                  "name": "READ data",
                  "taskType": "output",
                  "socketKey": "READ data",
                  "socketType": "anySocket",
                  "connectionType": "input"
                },
                {
                  "name": "UPDATE trigger",
                  "taskType": "option",
                  "socketKey": "UPDATE trigger",
                  "socketType": "triggerSocket",
                  "connectionType": "input"
                },
                {
                  "name": "UPDATE data",
                  "taskType": "output",
                  "socketKey": "UPDATE data",
                  "socketType": "anySocket",
                  "connectionType": "input"
                },
                {
                  "name": "DELETE trigger",
                  "taskType": "option",
                  "socketKey": "DELETE trigger",
                  "socketType": "triggerSocket",
                  "connectionType": "input"
                },
                {
                  "name": "DELETE data",
                  "taskType": "output",
                  "socketKey": "DELETE data",
                  "socketType": "anySocket",
                  "connectionType": "input"
                }
              ],
              "success": false,
              "dataControls": {
                "inputs": {
                  "expanded": true
                }
              }
            },
            "inputs": {
              "CREATE trigger": {
                "connections": [
                  {
                    "node": 232,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "CREATE data": {
                "connections": [
                  {
                    "node": 232,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "READ trigger": {
                "connections": [
                  {
                    "node": 241,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "READ data": {
                "connections": [
                  {
                    "node": 241,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "UPDATE trigger": {
                "connections": [
                  {
                    "node": 242,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "UPDATE data": {
                "connections": [
                  {
                    "node": 242,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "DELETE trigger": {
                "connections": [
                  {
                    "node": 244,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "DELETE data": {
                "connections": [
                  {
                    "node": 244,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 317,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 317,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 288,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 286,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 319,
                    "input": "event",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -714.854256259665,
              0.430436868743591
            ],
            "name": "Exclusive Gate"
          },
          "260": {
            "id": 260,
            "data": {
              "name": "Output",
              "success": false,
              "socketKey": "faedf39a-0504-4da7-91f4-9a8118fb8248",
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "sendToAvatar": {
                  "expanded": true
                },
                "sendToPlaytest": {
                  "expanded": true
                }
              },
              "sendToAvatar": false,
              "sendToPlaytest": true,
              "isOutput": true
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 261,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "input": {
                "connections": [
                  {
                    "node": 261,
                    "output": "result",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 286,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "output": {
                "connections": [
                  {
                    "node": 319,
                    "input": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              1144.6830623410754,
              -29.098171607390274
            ],
            "name": "Output"
          },
          "261": {
            "id": 261,
            "data": {
              "stop": "###,\\n",
              "error": false,
              "inputs": [
                {
                  "name": "input",
                  "taskType": "output",
                  "socketKey": "input",
                  "socketType": "anySocket",
                  "connectionType": "input"
                },
                {
                  "name": "conversation",
                  "taskType": "output",
                  "socketKey": "conversation",
                  "socketType": "anySocket",
                  "connectionType": "input"
                },
                {
                  "name": "speakerName",
                  "taskType": "output",
                  "socketKey": "speakerName",
                  "socketType": "anySocket",
                  "connectionType": "input"
                },
                {
                  "name": "agentName",
                  "taskType": "output",
                  "socketKey": "agentName",
                  "socketType": "anySocket",
                  "connectionType": "input"
                }
              ],
              "fewshot": "The following is a conversation between {{speakerName}} and {{agentName}}. {{agentName}} is a helpful chatbot.\n{{conversation}}\n{{speakerName}}: {{input}}\n{{agentName}}:",
              "success": false,
              "modelName": "text-ada-001",
              "max_tokens": 50,
              "temperature": 0.7,
              "dataControls": {
                "stop": {
                  "expanded": true
                },
                "inputs": {
                  "expanded": true
                },
                "fewshot": {
                  "expanded": true
                },
                "modelName": {
                  "expanded": true
                },
                "max_tokens": {
                  "expanded": true
                },
                "temperature": {
                  "expanded": true
                },
                "presence_penalty": {
                  "expanded": true
                },
                "frequency_penalty": {
                  "expanded": true
                }
              },
              "presence_penalty": 0,
              "frequency_penalty": 0
            },
            "inputs": {
              "input": {
                "connections": [
                  {
                    "node": 317,
                    "output": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "conversation": {
                "connections": [
                  {
                    "node": 318,
                    "output": "conversation",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "speakerName": {
                "connections": [
                  {
                    "node": 317,
                    "output": "sender",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "agentName": {
                "connections": [
                  {
                    "node": 317,
                    "output": "observer",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "trigger": {
                "connections": [
                  {
                    "node": 288,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 260,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "result": {
                "connections": [
                  {
                    "node": 260,
                    "input": "input",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "composed": {
                "connections": []
              }
            },
            "position": [
              774.7768136343911,
              -17.653194916159315
            ],
            "name": "Generator"
          },
          "286": {
            "id": 286,
            "data": {
              "name": "conversation",
              "type": "conversation",
              "success": false,
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "type": {
                  "expanded": true
                }
              }
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 260,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "content": {
                "connections": [
                  {
                    "node": 317,
                    "output": "content",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "sender": {
                "connections": []
              },
              "event": {
                "connections": [
                  {
                    "node": 245,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "embedding": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 319,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              1509.464199981857,
              -21.496864576280057
            ],
            "name": "Store Event"
          },
          "288": {
            "id": 288,
            "data": {
              "name": "conversation",
              "type": "conversation",
              "success": false,
              "max_count": "6",
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "type": {
                  "expanded": true
                },
                "max_count": {
                  "expanded": true
                }
              }
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 317,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 245,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "embedding": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 261,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "events": {
                "connections": [
                  {
                    "node": 318,
                    "input": "events",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              14.249445158269625,
              9.976311559690851
            ],
            "name": "Event Recall"
          },
          "317": {
            "id": 317,
            "data": {
              "success": false,
              "socketKey": "6fc09be7-92d9-45c5-af9c-7d669d5c7664"
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 245,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 245,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "outputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 288,
                    "input": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "agentId": {
                "connections": []
              },
              "content": {
                "connections": [
                  {
                    "node": 286,
                    "input": "content",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 261,
                    "input": "input",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "client": {
                "connections": []
              },
              "channel": {
                "connections": []
              },
              "channelType": {
                "connections": []
              },
              "entities": {
                "connections": []
              },
              "projectId": {
                "connections": []
              },
              "observer": {
                "connections": [
                  {
                    "node": 261,
                    "input": "agentName",
                    "data": {
                      "hello": "hello"
                    }
                  },
                  {
                    "node": 319,
                    "input": "sender",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "sender": {
                "connections": [
                  {
                    "node": 261,
                    "input": "speakerName",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              }
            },
            "position": [
              -358.9471955248946,
              -3.2350465566463704
            ],
            "name": "Event Destructure"
          },
          "318": {
            "id": 318,
            "data": {
              "success": false
            },
            "inputs": {
              "events": {
                "connections": [
                  {
                    "node": 288,
                    "output": "events",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "trigger": {
                "connections": []
              }
            },
            "outputs": {
              "conversation": {
                "connections": [
                  {
                    "node": 261,
                    "input": "conversation",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "trigger": {
                "connections": []
              }
            },
            "position": [
              395.55570684840876,
              -20.693798664114986
            ],
            "name": "Events to Conversation"
          },
          "319": {
            "id": 319,
            "data": {
              "name": "conversation",
              "type": "conversation",
              "success": false,
              "dataControls": {
                "name": {
                  "expanded": true
                },
                "type": {
                  "expanded": true
                }
              }
            },
            "inputs": {
              "trigger": {
                "connections": [
                  {
                    "node": 286,
                    "output": "trigger",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "content": {
                "connections": [
                  {
                    "node": 260,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "sender": {
                "connections": [
                  {
                    "node": 317,
                    "output": "observer",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "event": {
                "connections": [
                  {
                    "node": 245,
                    "output": "output",
                    "data": {
                      "hello": "hello"
                    }
                  }
                ]
              },
              "embedding": {
                "connections": []
              }
            },
            "outputs": {
              "trigger": {
                "connections": []
              }
            },
            "position": [
              1869.2767251795262,
              -20.967146494612802
            ],
            "name": "Store Event"
          }
        },
        "comments": [
          {
            "text": "input",
            "position": [
              -1162.796310172447,
              -72.60005287439716
            ],
            "links": [
              244,
              242,
              241,
              232
            ],
            "type": "frame",
            "width": 302.74198664808796,
            "height": 934.8382240506992
          },
          {
            "text": "first in gets handled",
            "position": [
              -762.2434995290488,
              -65.65487551942152
            ],
            "links": [
              245
            ],
            "type": "frame",
            "width": 301,
            "height": 518
          },
          {
            "text": "Prompt template and GPT-3 completion",
            "position": [
              721.796330053565,
              -87.95492558011667
            ],
            "links": [
              261
            ],
            "type": "frame",
            "width": 300.9999999999999,
            "height": 359
          },
          {
            "text": "recall the last 6 conversation events",
            "position": [
              -32.644720754678026,
              -71.91190165739141
            ],
            "links": [
              288
            ],
            "type": "frame",
            "width": 301,
            "height": 266
          },
          {
            "text": "format the events into a conversation script",
            "position": [
              348.6576362977702,
              -92.22722244220095
            ],
            "links": [
              289,
              318
            ],
            "type": "frame",
            "width": 301,
            "height": 179
          },
          {
            "text": "Respond with the output",
            "position": [
              1097.6646843137023,
              -95.95149005277733
            ],
            "links": [
              260
            ],
            "type": "frame",
            "width": 301,
            "height": 230
          },
          {
            "text": "store the input from sender",
            "position": [
              1462.4918444086727,
              -93.14081431629018
            ],
            "links": [
              286
            ],
            "type": "frame",
            "width": 301,
            "height": 302
          },
          {
            "text": "store the response from api",
            "position": [
              1833.6116971958797,
              -89.30901586253435
            ],
            "links": [
              291,
              319
            ],
            "type": "frame",
            "width": 301,
            "height": 302
          },
          {
            "text": "Break out the event to get the inner fields",
            "position": [
              -400.4781849641916,
              -73.29084142263837
            ],
            "links": [
              317
            ],
            "type": "frame",
            "width": 301,
            "height": 518
          }
        ]
      }
    }
  ],
  "projects": []
}