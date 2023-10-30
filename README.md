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
  - [HTTP Code Responses List](#http-code-responses-list)
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
const error = new responseClient.errors.NotFound();
```

#### Adding a custom message

If you want add a custom message to the error you can pass the message as a parameter to the class.

```ts
import responseClient from "http-response-client";
const error = new responseClient.errors.NotFound({msg:"Custom message"});
```

### Create a custom error

If you want create a custom error you can use the function `createError` and pass the status code, name and the message as parameters.

```ts
import responseClient from "http-response-client";
const error = responseClient.createError(404, {name: "CustomName", msg: "Custom message" });
```

### Verify if an error is an http error

If you want verify if an error is an http error you can use the function `isHttpError` and pass the error as a parameter.

```ts
import responseClient from "http-response-client";
const error = new responseClient.errors.NotFound();
const isHttpError = responseClient.isHttpError(error);
```

## Docs

[**HTTP code responses**](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## HTTP Code Responses List

| Code | Name | Description |
|------|------|-------------|
| 300 | MultipleChoice | Indica múltiples opciones para el recurso que el cliente puede seguir. |
| 301 | MovedPermanently | Este y todos los futuros pedidos deben dirigirse a la URI dada. |
| 302 | Found | El recurso se encuentra temporalmente en una URI diferente. |
| 303 | SeeOther | La respuesta a la solicitud se puede encontrar bajo otra URI utilizando el método GET. |
| 304 | NotModified | El recurso no se ha modificado desde la última petición. |
| 305 | UseProxy | Debe accederse al recurso solicitado a través del proxy proporcionado por la ubicación del campo de encabezado. |
| 307 | TemporaryRedirect | El recurso se encuentra temporalmente en una URI diferente, pero futuras solicitudes aún deben usar la URI original. |
| 308 | PermanentRedirect | Este y todos los futuros pedidos deben dirigirse a la URI dada, que es idéntica a la de Moved Permanently (301), pero con garantía de que el método y el cuerpo no cambiarán durante la redirección. |
| 400 | BadRequest | La solicitud no pudo ser entendida por el servidor debido a una sintaxis malformada. |
| 401 | Unauthorized | La solicitud requiere autenticación del usuario. |
| 402 | PaymentRequired | Reservado para uso futuro. |
| 403 | Forbidden | El servidor entendió la solicitud, pero se niega a cumplirla. |
| 404 | NotFound | El servidor no encontró nada que coincida con la URI de la solicitud. |
| 405 | MethodNotAllowed | El método especificado en la solicitud no está permitido para el recurso identificado por la URI de la solicitud. |
| 406 | NotAcceptable | El recurso identificado por la solicitud sólo es capaz de generar respuestas con características de contenido no aceptables según los encabezados de aceptación enviados en la solicitud. |
| 407 | ProxyAuthenticationRequired | La solicitud requiere autenticación del usuario a través de un proxy. |
| 408 | RequestTimeout | El cliente no produjo una solicitud dentro del tiempo que el servidor estaba preparado para esperar. |
| 409 | Conflict | La solicitud no pudo completarse debido a un conflicto con el estado actual del recurso. |
| 410 | Gone | El recurso solicitado ya no está disponible en el servidor y no hay ninguna dirección de reenvío conocida. |
| 411 | LengthRequired | El servidor se niega a aceptar la solicitud sin un encabezado de longitud de contenido definido. |
| 412 | PreconditionFailed | El servidor no cumple con una de las precondiciones que el solicitante puso en los campos de encabezado de la solicitud. |
| 413 | PayloadTooLarge | La entidad de solicitud es más grande de lo que el servidor está dispuesto o puede procesar. |
| 414 | UriTooLong | La URI proporcionada era demasiado larga para que el servidor la procesara. |
| 415 | UnsupportedMediaType | La entidad tiene un tipo de medio que el servidor o recurso no soporta. |
| 416 | RequestedRangeNotSatisfiable | Ninguna parte del rango especificado en el encabezado Range está disponible para el recurso solicitado. |
| 417 | ExpectationFailed | El servidor no puede cumplir con las expectativas indicadas en el encabezado Expect de la solicitud. |
| 418 | ImATeapot| Este código fue definido en 1998 como una broma del Día de los Inocentes, en RFC2324, Hyper Text Coffee Pot Control Protocol, y no se espera que sea implementado por servidores HTTP reales.
| 421 | MisdirectedRequest | La solicitud fue dirigida a un servidor que no es capaz de producir una respuesta. |
| 422 | UnprocessableEntity | La entidad de solicitud está bien formada pero fue imposible seguir las instrucciones contenidas en ella. |
| 423 | Locked | El recurso al que se está teniendo acceso está bloqueado. |
| 424 | FailedDependency | La solicitud falló debido a un fallo en una solicitud previa. |
| 426 | UpgradeRequired | El cliente debe cambiar a un protocolo diferente. |
| 428 | PreconditionRequired | El servidor requiere que la petición del cliente sea condicional. |
| 429 | TooManyRequests | El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado. |
| 431 | RequestHeaderFieldsTooLarge | El servidor no está dispuesto a procesar la solicitud porque uno o más campos de encabezado son demasiado grandes. |
| 451 | UnavailableForLegalReasons | El servidor no puede o no procesará la solicitud debido a un conflicto legal con el acceso al recurso. |
| 500 | InternalServerError | Un error genérico, dado cuando se produjo una condición inesperada y no hay una especificación más precisa. |
| 501 | NotImplemented | El servidor no reconoce el método de solicitud, o le falta la capacidad para cumplir la solicitud. |
| 502 | BadGateway | Mientras actuaba como gateway o proxy, el servidor recibió una respuesta inválida del servidor aguas arriba al intentar cumplir la solicitud. |
| 503 | ServiceUnavailable | El servidor no puede manejar la solicitud (porque está sobrecargado o en mantenimiento). Generalmente, este es un estado temporal. |
| 504 | GatewayTimeout | Mientras actuaba como gateway o proxy, el servidor no recibió una respuesta a tiempo del servidor aguas arriba al intentar cumplir la solicitud. |
| 505 | HttpVersionNotSupported | El servidor no soporta la versión del protocolo HTTP utilizada en la solicitud. |
| 506 | VariantAlsoNegotiates | La negociación de contenido para la representación del recurso resulta en una referencia circular. |
| 507 | InsufficientStorage | El servidor es incapaz de almacenar la representación necesaria para completar la solicitud. |
| 508 | LoopDetected | El servidor detectó un bucle infinito mientras procesaba una solicitud con "Depth: infinity". Esto se proporciona para compatibilidad con antiguos clientes WebDAV que no soportan el encabezado Depth en "If" para "copy" y "move" o para clientes que crean ciclos de referencias infinitas.
| 510 | NotExtended | Se requiere más extensión para cumplir con la solicitud. |
| 511 | NetworkAuthenticationRequired | El cliente necesita autenticarse para obtener acceso a la red. |

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