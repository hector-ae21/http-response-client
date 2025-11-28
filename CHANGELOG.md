# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-28

### Added
- Automated npm publishing workflow with GitHub Actions
  - Smart publishing: only publishes when version is new and source code changes are detected
  - Automatic git tag creation for new versions (e.g., v2.0.0)
  - Monitors changes in `src/`, `types/`, and `package.json`
  - Generates workflow summary after each run
- Comprehensive CHANGELOG.md file to track version history
- CONTRIBUTING.md guide for contributors

### Changed
- Updated project structure to use ES modules (ESNext)
- Improved TypeScript configuration for better type safety
- Enhanced package metadata in package.json
- Updated .npmignore to exclude development files from package

### Infrastructure
- Simplified GitHub Actions workflow focused on automated publishing
- Configured smart npm publishing with version and change detection
- Workflow runs only on pushes to master branch

## [1.x.x] - Previous Versions

### Features
- HTTP error handling for Express.js applications
- Predefined HTTP error classes for common status codes
  - Client errors (4xx): BadRequest, Unauthorized, Forbidden, NotFound, etc.
  - Server errors (5xx): InternalServerError, BadGateway, ServiceUnavailable, etc.
  - Redirect responses (3xx): MovedPermanently, Found, TemporaryRedirect, etc.
- Custom error creation with `createError` function
- Error validation with `isHttpError` function
- Express middleware for error handling (`errorResponseMiddleware`)
- TypeScript support with full type definitions
- Comprehensive error status codes support (300-511)

### Error Categories
- **Redirect Errors (3xx)**
  - MultipleChoice (300)
  - MovedPermanently (301)
  - Found (302)
  - SeeOther (303)
  - NotModified (304)
  - UseProxy (305)
  - TemporaryRedirect (307)
  - PermanentRedirect (308)

- **Client Errors (4xx)**
  - BadRequest (400)
  - Unauthorized (401)
  - PaymentRequired (402)
  - Forbidden (403)
  - NotFound (404)
  - MethodNotAllowed (405)
  - NotAcceptable (406)
  - ProxyAuthenticationRequired (407)
  - RequestTimeout (408)
  - Conflict (409)
  - Gone (410)
  - LengthRequired (411)
  - PreconditionFailed (412)
  - PayloadTooLarge (413)
  - UriTooLong (414)
  - UnsupportedMediaType (415)
  - RequestedRangeNotSatisfiable (416)
  - ExpectationFailed (417)
  - ImATeapot (418)
  - MisdirectedRequest (421)
  - UnprocessableEntity (422)
  - Locked (423)
  - FailedDependency (424)
  - UpgradeRequired (426)
  - PreconditionRequired (428)
  - TooManyRequests (429)
  - RequestHeaderFieldsTooLarge (431)
  - UnavailableForLegalReasons (451)

- **Server Errors (5xx)**
  - InternalServerError (500)
  - NotImplemented (501)
  - BadGateway (502)
  - ServiceUnavailable (503)
  - GatewayTimeout (504)
  - HttpVersionNotSupported (505)
  - VariantAlsoNegotiates (506)
  - InsufficientStorage (507)
  - LoopDetected (508)
  - NotExtended (510)
  - NetworkAuthenticationRequired (511)

## Version History

### Versioning Guidelines
This project follows Semantic Versioning (SemVer):
- **MAJOR** version: Incompatible API changes
- **MINOR** version: Backward-compatible functionality additions
- **PATCH** version: Backward-compatible bug fixes

### Upgrade Notes

#### Upgrading to 2.0.0
- No breaking changes in the API
- The package now includes automated CI/CD processes
- Developers contributing to the project should be aware of the new GitHub Actions workflows

---

For more information about this package, visit:
- **GitHub Repository**: https://github.com/hector-ae21/http-response-client
- **npm Package**: https://www.npmjs.com/package/http-response-client
- **Issues**: https://github.com/hector-ae21/http-response-client/issues

