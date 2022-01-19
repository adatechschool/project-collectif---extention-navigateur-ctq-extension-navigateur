# CTQ Team Project: Correcteur de Grammaire

The initial idea of this chrome extension is to provide an alternative of grammar checker we can use when it comes to writing texts in French.

We built this app with **Create React App** framework and **Axios** framework for API calls.

In order to rebuild this app, you need to configure your machine by following the steps below:

## 1. Installation of Create React App:

- You can visit the Create React App official documentation here:
  > https://create-react-app.dev/docs/getting-started

## 2. Installation of Axios and other dependencies:

- If you use npm, you can just run
  > npm install
- If you're a yarn user, you can use this command line:
  > yarn add

## 3. Manifest.json:

- The current project is built as a pop up application. If you want to change its display area, you can visit Google Chrome official doc to have relevent info about how to set up the manifest.json.
  > https://developer.chrome.com/docs/

## 4. Build for chrome extension:

- To upload this app to the google chrome extensions marketplace, you need to run
  this command line:
  > npm run build
  > yarn run build
- You should upload the build file to the google chrome extensions marketplace **in the developer mode**.
- Everytime you make changes of your source code, make sure to **refresh** your extension to visualize the changes.
