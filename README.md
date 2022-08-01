# Runa Express Template

This is a backend application template that can be used when starting a new project.

It includes:

- A dockerfile for deployment
- A `/healthcheck` endpoint that returns 200.

It also uses an inversion of control pattern based on functional programming. More details [here](https://dev.to/mindplay/a-successful-ioc-pattern-with-functions-in-typescript-2nac).

## Tools Included

This template includes the following tools:

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## Scripts

- `build`: builds your application in the _dist_ folder.
- `start`: starts your application in the _dist_ folder.
- `clean`: deletes the _dist_ folder.
- `test:e2e`: runs end-to-ent integration tests.
- `test:spec`: runs unit tests.
- `lint`: runs prettier and eslint.
- `lint:fix`: runs prettier and eslint and tries to fix all issues.
