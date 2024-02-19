[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Unit Test workflow](https://github.com/marco-rosner/bookingparadises/actions/workflows/tests.yml/badge.svg)](https://github.com/marco-rosner/bookingparadises/actions/workflows/tests.yml) [![E2E Test workflow](https://github.com/marco-rosner/bookingparadises/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/marco-rosner/bookingparadises/actions/workflows/e2e-tests.yml)

# Booking Paradises

Booking Paradises is a mobile-friendly application that manages bookings for amazing places where you can live perfect moments with your loved ones.

![Booking Paradises](./src/assets/bookingParadises.png?raw=true "Booking Paradises")

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

Served at http://localhost:5173 

## Docker

To run this project using Docker run these commands:

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

To prevent regression defects, two GitHub Actions was created [Unit Test](https://github.com/marco-rosner/bookingparadises/actions/workflows/tests.yml) and [E2E Test](https://github.com/marco-rosner/bookingparadises/actions/workflows/e2e-tests.yml).

## Future work

- HighlightTrack and TinyTrack with slides
- Add i18n internacionalization
- Create a NodeJS/ExpressJS server to remove the mocks
- ...