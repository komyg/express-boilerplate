// Inversion of control using FP approach, @see https://dev.to/mindplay/a-successful-ioc-pattern-with-functions-in-typescript-2nac.

export function once<T>(f: () => T): () => T {
  let instance: T;

  return () => {
    if (instance === undefined) {
      instance = f(); // first call
    }

    return instance;
  };
}
