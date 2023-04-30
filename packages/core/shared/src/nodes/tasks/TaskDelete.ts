// DOCUMENTED 
import Rete from 'rete';
import { MagickComponent } from '../../engine';
import { objectSocket, triggerSocket } from '../../sockets';
import { MagickNode, MagickWorkerInputs, WorkerData } from '../../types';

const info = 'Join an array of tasks into a conversation formatted for prompt injection.';

/**
 * A Rete component representing an task deletion node in the visual programming editor.
 */
export class Task extends MagickComponent<Promise<void>> {
  constructor() {
    super('Delete Task', {
      outputs: {
        conversation: 'output',
        trigger: 'option',
      },
    }, 'Task', info);
  }

  /**
   * Assembles the node component in the visual programming editor.
   * @param node - The node to add inputs and outputs to.
   * @returns The assembled node with inputs and outputs.
   */
  builder(node: MagickNode) {
    const dataInput = new Rete.Input('trigger', 'Trigger', triggerSocket, true);
    const dataOutput = new Rete.Output('trigger', 'Trigger', triggerSocket);
    const inputList = new Rete.Input('task', 'Task', objectSocket);

    return node.addInput(inputList).addInput(dataInput).addOutput(dataOutput);
  }

  /**
   * Executes the task deletion logic.
   *
   * @param node - Node data from the visual programming editor.
   * @param inputs - Node input values from connected inputs in the editor.
   */
  async worker(node: WorkerData, inputs: MagickWorkerInputs, outputs: any, context: any) {
    try {
      const task = inputs.task[0] as { id: number }

      const { app } = context.module;
      if(!app) throw new Error('App is not defined, cannot delete task');
      app.service('tasks').remove(task.id);
    } catch (e) {
      throw new Error(`Error deleting task: ${e}`);
    }
  }
}