# Express Boilerplate

This is a backend application template that can be used when starting a new project.

It includes:

- A dockerfile for deployment
- A `/healthcheck` endpoint that returns 200.
- A `/api/company` endpoint with an example of DDD + functional programming approach.

## Patterns

### DDD (Domain Driven Design)

This repository adopts a domain driven design approach to separate each part of the code, into these layers:

- Presentation (controllers): is the entry point to the application. It handles REST requests and executes basic validation.
- Application: this layer is divided into use cases. Its purpose is to orchestrate (call) the domain and infrastructure layers.
- Domain: this is the core of our application. It contains all of the business rules and higher order logic.
- Infrastructure: this layer contains all the logic to interact with the database and other lower level entities.

### Functional Programming

This repository adopts a functional programming paradigm. I chose it because it promotes small, independent immutable code, that has small clean interfaces that rely on nothing other than their input to produce idempotent output without side effects.

#### Further Reading

- [Composing Software: The Book](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)
- [Railway Oriented Programming](https://blog.logrocket.com/what-is-railway-oriented-programming/)

### Inversion of Control

This repository uses an inversion of control pattern based on functional programming. More details [here](https://dev.to/mindplay/a-successful-ioc-pattern-with-functions-in-typescript-2nac).

## Tools Included

This template includes the following tools:

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Joi](https://github.com/sideway/joi)
- [FP TS](https://gcanti.github.io/fp-ts/)

## Scripts

- `build`: builds your application in the _dist_ folder.
- `start`: starts your application in the _dist_ folder.
- `clean`: deletes the _dist_ folder.
- `test:e2e`: runs end-to-ent integration tests.
- `test:spec`: runs unit tests.
- `lint`: runs prettier and eslint.
- `lint:fix`: runs prettier and eslint and tries to fix all issues.
