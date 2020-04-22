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

export type Filters = { query?: string; minAge?: number | null; maxAge?: number | null }

export type CoreModuleState = {
  userList: User[]
  filters: Filters
  isLoading: boolean
}
