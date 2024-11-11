# PINK - Coding Challenge

This is my submission for the PINK coding challenge.

## General structure

The idea behind the implementation was to keep it as simple as possible while making it as complex as needed.

- Therefore, some basic react components (located in `src/Components`) were implemented to handle the UI
- On purpose a `router` was not used as the screens used to display not that much data, therefore all components share the `index page` that manages the data transmission between the components as well as the user interaction
- A custom hook (located in `src/Services`) was implemented to handle the data fetching and the network errors.
- the configuration for the mock server as well as the number of pages that will be fetched is stored in a separate `config.json` located in `src/config`

## Remarks

- The current implementation relies on a hardcoded number of pages that will be fetched from the mock `FHIR` server, thus the pagination is not dynamic and one will not be able to fetch all users provided by the mock server. This was done for simplicity of the implementation and for demonstration purposes, as the server does return a lot of partial data, duplicates, as well as incorrect patient files. In a proper environment this must be changed!
- It was expected that the responses from [`http://hapi.fhir.org/baseR4`](http://hapi.fhir.org/baseR4) would follow a `JSON` format (even if a `flat` bundle was requested), however the response had a different structure as expected. Therefore, helpers to extract Patient data were implemented, which can be found in `util/PatientUtils.ts`
- Unfortunately **no tests** were added, due to time constraints

## Dependencies

- As stated in the assignment a dedicated `FHIR` client ([Website](https://docs.smarthealthit.org/client-js/)/[GitHub](https://github.com/smart-on-fhir/client-js)) was used to handle the communication to the `FHIR` mock server.
- To ensure correct `FHIR typescript` types, the implementation relies on `FHIR.ts` ([GitHub](https://github.com/smilecdr/FHIR.ts)).
- For basic styling and generic UI components `react bootstrap` ([docs](https://react-bootstrap.netlify.app/)) in combination with some basic `css` was used.

## How to run

> The following section is copied from the auto-generated `README` created by [`create-react-app.dev`](https://create-react-app.dev/). No changes were applied for the sake of simplicity, thus all commands below will work as expected. *Please make sure to run `npm install` before running the application to install all needed dependencies*

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
