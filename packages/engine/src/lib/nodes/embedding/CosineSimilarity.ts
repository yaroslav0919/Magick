import Rete from 'rete'
import similarity from 'compute-cosine-similarity'
import {
  NodeData,
  MagickNode,
  MagickWorkerInputs,
  MagickWorkerOutputs,
} from '../../types'
import { triggerSocket, stringSocket, numberSocket, embeddingSocket } from '../../sockets'
import { MagickComponent } from '../../magick-component'

const info = 'Event Store is used to store events for an event and user'

type InputReturn = {
  similarity: number
} | void

export class CosineSimilarity extends MagickComponent<Promise<InputReturn>> {
  constructor() {
    super('Cosine Similarity')

    this.task = {
      outputs: {
        similarity: 'output',
        trigger: 'option',
      },
    }

    this.category = 'Embedding'
    this.display = true
    this.info = info
  }

  builder(node: MagickNode) {
    const embeddingInputA = new Rete.Input('embeddingA', 'Embedding A', embeddingSocket)
    const embeddingInputB = new Rete.Input('embeddingB', 'Embedding B', embeddingSocket)
    const dataInput = new Rete.Input('trigger', 'Trigger', triggerSocket, true)
    const dataOutput = new Rete.Output('trigger', 'Trigger', triggerSocket)
    const out = new Rete.Output('similarity', 'Similarity', numberSocket)

    return node
      .addInput(dataInput)
      .addInput(embeddingInputA)
      .addInput(embeddingInputB)
      .addOutput(dataOutput)
      .addOutput(out)
  }

  async worker(
    node: NodeData,
    inputs: MagickWorkerInputs,
    _outputs: MagickWorkerOutputs,
    { projectId, module }: { projectId: string; module: any }
  ) {
    const x = inputs.embeddingA[0] as string
    const y = inputs.embeddingB[0] as string

    const s = similarity( x, y );

    return {
        similarity: s,
    }

  }
}
