export type User = {
  id: string
  name: string
  surname: string
  email: string
  age: string | number
}

export type UserData = {
  name: string
  surname: string
  email: string
  age: string | number
}

export type Filters = { query?: string | undefined; minAge?: number | null; maxAge?: number | null }

export type Age = {
  min: number
  max: number
}

export type sortParams = { direction: 'asc' | 'desc' | undefined; field: 'name' | 'surname' | 'age' | undefined }

export type CoreModuleState = {
  userList: User[]
  filters: Filters
  sortParams: sortParams
  isLoading: boolean
  requiredAge: Age
}
