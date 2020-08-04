// type FuncName<T> = { [P in keyof T]: T[P] extends Function ? P : never }[keyof T]

type ParamName<T> = T extends (param: infer P) => any ? P : T

interface User {
  name: string
  age: number
}
type Func = (user: User) => void

type Param = ParamName<Func>