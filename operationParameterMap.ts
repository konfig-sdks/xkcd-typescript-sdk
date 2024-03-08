type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/{comicId}/info.0.json-GET': {
        parameters: [
            {
                name: 'comicId'
            },
        ]
    },
    '/info.0.json-GET': {
        parameters: [
        ]
    },
}