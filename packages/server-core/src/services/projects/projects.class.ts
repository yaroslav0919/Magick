import { Params } from '@feathersjs/feathers'
import { app } from '../../app'

interface CreateData {
  agents
  documents
  spells
  projectId: string
}

export interface ProjectParams extends Params {
  user: any
}

// interface Data {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProjectsService {
  async find(
    params?: ProjectParams
  ): Promise<{ agents: any; spells: any; documents: any }> {
    const { query } = params
    const projectId = query.projectId

    // get all agents for this projectId
    const [agents, spells, documents] = await Promise.all([
      app.service('agents').find({
        query: {
          projectId,
        },
      }),
      app.service('spells').find({
        query: {
          projectId,
        },
      }),
      app.service('documents').find({
        query: {
          projectId,
        },
      }),
    ])

    return {
      agents: agents.data,
      spells: spells.data,
      documents: documents.data,
    }
  }

  async create(data: CreateData): Promise<void> {
    const { agents, documents, spells, projectId } = data

    await Promise.all([
      app
        .service('agents')
        .create(agents.map(agent => ({ ...agent, projectId }))),
      app
        .service('documents')
        .create(documents.map(doc => ({ ...doc, projectId }))),
      app
        .service('spells')
        .create(spells.map(spell => ({ ...spell, projectId }))),
    ])

    return
  }
}
