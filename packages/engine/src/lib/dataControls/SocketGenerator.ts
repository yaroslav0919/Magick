import { DataControl } from '../plugins/inspectorPlugin'
import { SocketType } from '../sockets'
import { TaskType } from '../types'

export class SocketGeneratorControl extends DataControl {
  connectionType: string
  constructor({
    socketType = 'anySocket',
    taskType = 'output',
    ignored = [],
    icon = 'properties',
    connectionType,
    name: nameInput,
  }: {
    socketType?: SocketType
    taskType?: TaskType
    ignored?: string[]
    icon?: string
    connectionType: 'input' | 'output'
    name: string
  }) {
    if (
      !connectionType ||
      (connectionType !== 'input' && connectionType !== 'output')
    )
      throw new Error(
        "connectionType of your generator must be defined and of the value 'input' or 'output'."
      )

    const name = nameInput || `Socket ${connectionType}s`

    const options = {
      dataKey: connectionType + 's',
      name,
      component: 'socketGenerator',
      icon,
      data: {
        ignored,
        socketType,
        taskType,
        connectionType,
      },
    }

    super(options as any)

    this.connectionType = connectionType
  }
}
