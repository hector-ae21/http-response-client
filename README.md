# http-response-client

Package to format service request in Moodle web service format

## Table of Contents

<!-- DON'T EDIT THIS SECTION -->

- [http-response-client](#http-response-client)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Examples](#examples)
    - [Create an http error](#create-an-http-error)
      - [Existent http error](#existent-http-error)
      - [Adding a custom message](#adding-a-custom-message)
    - [Create a custom error](#create-a-custom-error)
    - [Verify if an error is an http error](#verify-if-an-error-is-an-http-error)
  - [Docs](#docs)
  - [Issues](#issues)
    - [🐛 Bugs](#-bugs)
    - [💡 Feature Requests](#-feature-requests)
  - [Contributors](#contributors)
  - [LICENSE](#license)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [ `npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[ `npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install http-response-client
```
## Examples

### Create an http error

#### Existent http error

If you want use any http error that exists in the [HTTP code responses](https://developer.mozilla.org/es/docs/Web/HTTP/Status) you can use the method `httpErrors.${error}`.


```ts
import responseClient from "http-response-client";
const error = new responseClient.httpErrors.NotFound();
```

#### Adding a custom message

If you want add a custom message to the error you can pass the message as a parameter to the class.

```ts
import responseClient from "http-response-client";
const error = new responseClient.httpErrors.NotFound("Custom message");
```

### Create a custom error

If you want create a custom error you can use the function `createError` and pass the status code, name and the message as parameters.

```ts
import responseClient from "http-response-client";
const error = responseClient.createError(404, {name: "CustomName", message: "Custom message" });
```

### Verify if an error is an http error

If you want verify if an error is an http error you can use the function `isHttpError` and pass the error as a parameter.

```ts
import responseClient from "http-response-client";
const error = new responseClient.httpErrors.NotFound();
const isHttpError = responseClient.isHttpError(error);
```

## Docs

[**HTTP code responses**](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## Issues

Looking to contribute? Look for the label.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/hector-ae21/http-response-client/issues)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**](https://github.com/hector-ae21/http-response-client/issues)

## Contributors

<!-- Do not remove or modify this section -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hector-ae21"><img src="https://avatars.githubusercontent.com/u/87265357?v=4" width="100px;" alt="Hector L. Arrechea"/><br /><sub><b>Hector L. Arrechea</b></sub></a><br /><a title="Code">💻</a> <a title="Documentation">📖</a> <a title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

[MIT](LICENSE)