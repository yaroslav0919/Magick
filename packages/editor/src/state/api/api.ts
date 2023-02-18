import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let rootApi: any = null; // TODO: type this
export function getOrCreateRootApi(options){
  console.log('options are', options)
  const apiUrl = options.apiUrl
  if (rootApi) return rootApi;
  rootApi = createApi({
    reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: ['Spell', 'Spells', 'Version'],
  endpoints: () => ({}),
})
return rootApi;
}