[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Unit Test workflow](https://github.com/marco-rosner/bookings/actions/workflows/tests.yml/badge.svg)](https://github.com/marco-rosner/bookings/actions/workflows/tests.yml) [![E2E Test workflow](https://github.com/marco-rosner/bookings/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/marco-rosner/bookings/actions/workflows/e2e-tests.yml)

# Booking Paradise

Booking Paradise is a mobile-friendly application focused in manage bookings for amazing places where you can live perfect moments with your beloved ones.

![Booking Paradise](./src/assets/bookingParadises.png?raw=true "Booking Paradise")

The project was built using Typescript, ReactJS, Material UI, Vite, React Router, Hooks, Context API, React Redux, Jest (Unit Tests) and Cypress (E2E Tests).

## Run the project

Install the dependencies:

```sh
yarn
```

Run in the dev mode:

```sh
yarn dev
```

## Docker

To run this project using Docker run these command:

```sh
docker build . -t marcorosner/bookingsparadises

docker run -p 5173:5173 -d marcorosner/bookingsparadises
```

## Scripts

There are many scripts in `package.json` like:

- start - run the Vite server exposing the host
- dev - run the Vite server in dev mode
- test - run the unit tests using jest
- test:watch - run the unit tests with watch mode
- test:coverage - create the coverage report (actual with 90.58%)
- test:e2e - run the server and the E2E tests
- build - build the project for production using Vite
- lint - check lint rules using ESlint

## GitHub Actions

To avoid failures, two GitHub Actions was created:

- Unit Test - To run the Unit Tests
- E2E Test - To run the E2E Tests 

## Future work

- HighlightTrack and TinyTrack with slides
- Add internacionalization
- Create a server to remove the mocks