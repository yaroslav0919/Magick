// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import {
  Type,
  getDataValidator,
  getValidator,
  querySyntax,
} from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../config/validators'
import { documentSchema } from '@magickml/engine'

export const documentResolver = resolve<Document, HookContext>({})

export const documentExternalResolver = resolve<Document, HookContext>({})

// Schema for creating new entries
export const documentDataSchema = Type.Pick(
  documentSchema,
  [
    'type',
    'owner',
    'projectId',
    'content',
    'date',
    'embedding',
  ],
  {
    $id: 'DocumentData',
  }
)
export type DocumentData = Static<typeof documentDataSchema>
export const documentDataValidator = getDataValidator(
  documentDataSchema,
  dataValidator
)
export const documentDataResolver = resolve<Document, HookContext>({})

// Schema for updating existing entries
export const documentPatchSchema = Type.Partial(documentDataSchema, {
  $id: 'DocumentPatch',
})
export type DocumentPatch = Static<typeof documentPatchSchema>
export const documentPatchValidator = getDataValidator(
  documentPatchSchema,
  dataValidator
)
export const documentPatchResolver = resolve<Document, HookContext>({})

// Schema for allowed query properties
export const documentQueryProperties = Type.Pick(documentSchema, [
  'id',
  'type',
  'owner',
  'projectId',
  'content',
  'date',
  'embedding',
])
export const documentQuerySchema = Type.Intersect(
  [
    querySyntax(documentQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false }
)
export type DocumentQuery = Static<typeof documentQuerySchema>
export const documentQueryValidator = getValidator(
  documentQuerySchema,
  queryValidator
)
export const documentQueryResolver = resolve<DocumentQuery, HookContext>({})
