/* interface Action<T> {
  payload?: T
  type: string
}

type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>
type syncMethod<T, U> = (action: Action<T>) => Action<U>

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: 'delay'
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}

type unPdelay = (input: number) => Action<number>
type unPSetMessage = (action: Date) => Action<Date>

type FuncName<T> = { [P in keyof T]: T[P] extends Function ? P : never}[keyof T]
type Connect = (module: EffectModule) => { 
  [T in FuncName<EffectModule>]: extends EffectModule["delay"] ? unPdelay : unPSetMessage
};

const connect: Connect = m => ({
  delay: (input: number) => ({
    type: 'delay',
    payload: `hello 2`
  }),
  setMessage: (input: Date) => ({
    type: "set-message",
    payload: input.getMilliseconds()
  })
});

type Connected = {
  delay(input: number): Action<string>;
  setMessage(action: Date): Action<number>;
};

export const connected: Connected = connect(new EffectModule());
 */