type ParamType<T> = T extends (param: infer P) => any ? P : T

// const foo = {}

// foo.bar = 'abc'

const colors = {
  red: 'red',
  blue: 'blue'
};

type Colors = keyof typeof colors;

let color: Colors;

type S<T extends string> = { [K in T]: K }

let i: S<"a" | "b"> = {
  b: 'b',
  "a": "a"
}
