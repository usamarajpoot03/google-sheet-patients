# Google-Sheets-View
#### Instructions to start app

##### UI
`1- npm i`<br>
`2- npm start`<br>

##### API
`1- create access credentials`<br>

#### We need a client ID and secret to access the drive storage.

#### Follow the steps below to obtain the client secret and ID:

1- Visit the console.cloud.google.com.<br>
2-Create a new project if you do not have an existing project.<br>
3-Select the project and select APIs and services.<br>
4-Click on ENABLE APIS AND SERVICES.<br>
5-In the search box, search for google sheets API then enable it for the project created.<br>
6-Once you have enabled the API, select CREATE CREDENTIALS to access the API. In the drop-down menu, select Service Account.<br>
7-In the next screen, provide the details required then click CREATE.<br>
8-The next two steps are optional, just click CONTINUE and then DONE.<br>
9-Copy the email address and save it on the clipboard. Click on the email address to go to the next screen. Under keys, select Create new key.<br>
10-Select JSON as the keyType then Create. This process downloads a JSON file of the Key.<br>
11-Move the downloaded JSON file into the same folder as the project and, since the name is too long, we can rename it as keys.json.<br>

#### IMPORTANT: place keys.json in <root>/api/keys.json<br>

`2- npm i`<br>
`3- npm run dev`<br>

tested on node `v14.19.1` <br>

## Project Structure / Details (the main focus is the project structure, so it can be extended to a complete application)

### UI
* structure
    * seperate folders for components, containers, routes, constants, herlpers, utils, and services  
    * seperate route components
    * using `React.lazy` to render a dynamic import as a regular component
* `axios` is used for services
    * extended its usability by using `interceptors`
    * using custom hooks for api calls
* using `material ui` v4 components
* proper error handling, processing/loaders for each request
* using `react-router-dom`
* a few test cases with jest and enzyme

### API
* structure
    * seperate folders for controllers, middlewares, services, database, configs,and constants  
    * seperate setup for migrations, models,and seeders
    * seperate error handling, and logger middlewares
* `bunyan` is used for logging
