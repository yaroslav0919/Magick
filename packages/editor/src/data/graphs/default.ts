const graph = {
  id: 'demo@0.1.0',
  nodes: {
    '232': {
      id: 232,
      data: {
        playtestToggle: { receivePlaytest: false, outputs: [] },
        socketKey: '9d61118c-3c5a-4379-9dae-41965e56207f',
        text: {
          spellName: 'Starter',
          id: '2eb64348-adee-4118-bcca-19697ca3a16a',
          projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
          inputs: {
            'Input - Default': {
              content: 'testing',
              sender: 'playtestSender',
              observer: 'playtestObserver',
              agentId: 'preview',
              client: 'playtest',
              channel: 'playtest',
              projectId: 'bb1b3d24-84e0-424e-b4f1-57603f307a89',
              channelType: 'playtest',
              type: 'playtest',
              entities: ['playtestSender', 'playtestObserver'],
            },
          },
          publicVariables: '[]',
          secrets: {},
        },
        dataControls: {
          name: { expanded: true },
          playtestToggle: { expanded: true },
        },
        name: 'Input - Default',
        outputs: [],
        isInput: true,
        useDefault: false,
        defaultValue: 'Hello world',
        success: false,
      },
      inputs: {},
      outputs: {
        trigger: {
          connections: [
            { node: 494, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 494, input: 'event', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-619.70703125, -3.83203125],
      name: 'Input',
    },
    '233': {
      id: 233,
      data: {
        name: 'Output',
        sendToPlaytest: true,
        sendToAvatar: false,
        socketKey: '0f17a35e-1380-428b-bc87-4a38d207fefc',
        dataControls: {
          name: { expanded: true },
          sendToPlaytest: { expanded: true },
          sendToAvatar: { expanded: true },
        },
        success: false,
      },
      inputs: {
        trigger: {
          connections: [
            { node: 493, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        input: {
          connections: [
            { node: 493, output: 'output', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: { trigger: { connections: [] }, output: { connections: [] } },
      position: [200, 0],
      name: 'Output',
    },
    '493': {
      id: 493,
      data: { success: false },
      inputs: {
        trigger: {
          connections: [
            { node: 494, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        string: {
          connections: [
            { node: 494, output: 'content', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 233, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        output: {
          connections: [
            { node: 233, input: 'input', data: { hello: 'hello' } },
          ],
        },
      },
      position: [-67.12109375, 1.0078125],
      name: 'Echo',
    },
    '494': {
      id: 494,
      data: {
        socketKey: 'bbd9c07c-7bcc-454a-b5fe-cc6fd63f6a94',
        success: false,
      },
      inputs: {
        trigger: {
          connections: [
            { node: 232, output: 'trigger', data: { hello: 'hello' } },
          ],
        },
        event: {
          connections: [
            { node: 232, output: 'output', data: { hello: 'hello' } },
          ],
        },
      },
      outputs: {
        trigger: {
          connections: [
            { node: 493, input: 'trigger', data: { hello: 'hello' } },
          ],
        },
        agentId: { connections: [] },
        content: {
          connections: [
            { node: 493, input: 'string', data: { hello: 'hello' } },
          ],
        },
        client: { connections: [] },
        channel: { connections: [] },
        channelType: { connections: [] },
        entities: { connections: [] },
        projectId: { connections: [] },
        observer: { connections: [] },
        sender: { connections: [] },
      },
      position: [-338.375, -0.98828125],
      name: 'Event Destructure',
    },
  },
  comments: [],
}

export default graph
