# Birdie Developer Test - Aurélien Pasteau's submission

## Project architecture : 

### front-end

*Technologies :*

  * React
  * Redux
  * Redux Sagas
  * Styled Components
  * Typescript
  * Axios

*Files Structure :*

```bash
.
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └── images
│   │       └── logo-birdie.svg
│   ├── components
│   │   ├── DatesSelector
│   │   │   ├── DatesSelector.test.tsx
│   │   │   └── DatesSelector.tsx
│   │   ├── EventTypesSelector
│   │   │   ├── EventTypesSelector.test.tsx
│   │   │   └── EventTypesSelector.tsx
│   │   ├── Logo.tsx
│   │   ├── ParametersSelection
│   │   │   ├── ParametersSelection.test.tsx
│   │   │   └── ParametersSelection.tsx
│   │   ├── PatientSelector
│   │   │   ├── PatientSelector.test.tsx
│   │   │   └── PatientSelector.tsx
│   │   ├── SubTitle.tsx
│   │   ├── Timeline
│   │   │   ├── Timeline.test.tsx
│   │   │   └── Timeline.tsx
│   │   ├── Title.tsx
│   │   └── app
│   │       ├── App.test.tsx
│   │       ├── App.tsx
│   │       └── logo.svg
│   ├── index.tsx
│   ├── models
│   │   └── Event.models.tsx
│   ├── registerServiceWorker.ts
│   ├── services # api calls
│   │   └── api
│   │       ├── events.api.services.ts
│   │       ├── filters.api.services.ts
│   │       ├── patients.api.services.ts
│   │       └── url.api.ts
│   ├── store # redux store
│   │   ├── actions
│   │   │   ├── dates.actions.test.ts
│   │   │   ├── dates.actions.ts
│   │   │   ├── events.actions.test.ts
│   │   │   ├── events.actions.ts
│   │   │   ├── filters.actions.test.ts
│   │   │   ├── filters.actions.ts
│   │   │   ├── patients.actions.test.ts
│   │   │   ├── patients.actions.ts
│   │   │   ├── utils.actions.test.ts
│   │   │   └── utils.actions.ts
│   │   ├── constants
│   │   │   └── actionTypes.constants.ts
│   │   ├── index.ts
│   │   ├── reducers
│   │   │   ├── dates.reducers.test.ts
│   │   │   ├── dates.reducers.ts
│   │   │   ├── events.reducers.test.ts
│   │   │   ├── events.reducers.ts
│   │   │   ├── filters.reducers.test.ts
│   │   │   ├── filters.reducers.ts
│   │   │   ├── index.reducers.test.ts
│   │   │   ├── index.reducers.ts
│   │   │   ├── initialState.ts
│   │   │   ├── patients.reducers.test.ts
│   │   │   ├── patients.reducers.ts
│   │   │   ├── utils.reducers.test.ts
│   │   │   └── utils.reducers.ts
│   │   └── sagas
│   │       ├── events.sagas.test.ts
│   │       ├── events.sagas.ts
│   │       ├── filters.sagas.test.ts
│   │       ├── filters.sagas.ts
│   │       ├── index.sagas.ts
│   │       ├── patients.sagas.test.ts
│   │       └── patients.sagas.ts
│   └── utils
│       ├── strings.utils.test.ts
│       └── strings.utils.ts
├── tsconfig.json
├── tsconfig.test.json
└── tslint.json

```

### back-end

*Technologies :*

  * Node
  * Express
  * Typescript
  * Knek
  * MySQL


*Files Structure :*

```bash
.
├── __tests__
│   └── event.services.spec.ts
├── node_modules
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── application.ts # redirection
│   ├── controllers
│   │   └── events.controllers.ts # events router
│   ├── index.ts # entry point
│   └── services # connexion with the database
│       ├── events.services.ts
│       ├── index.services.ts
│       └── knex.ts
├── tsconfig.json
└── tslint.json

```

## Usage for launching the application in development mode

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies
   ```
   npm install
   ```

   b. In the `node_modules/react-timeline-scribble` folder, add a file named `index.d.ts` containing `declare module 'react-timeline-scribble';`
   
   c. Create a `.env` file at the root of the project and copy the content of `.env.template` inside.
      Finally, fill in the blanks with the database credentials

   d. Run the HTTP server (will start on port `8080`)
   ```
   npm run dev
   ```
2. Start the React app  (Run the following commands within the `front-end` folder)

    a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the application (will start on port `3000`)
   ```
   npm start
   ```
