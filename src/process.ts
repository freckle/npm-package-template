export type MyType = {data: string}

export const process = (input: MyType): string =>
  input.data.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
