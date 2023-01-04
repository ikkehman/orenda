## Installation

Use the Node Package Manager [npm](https://www.npmjs.com/get-npm) to install.

```bash
>git clone https://github.com/ikkehman/orenda.git
>cd orenda
>add database orenda
>npm install
```
## Usage
```bash
node index
```
## Route Documentation
### Route create user
Endpoint: POST /api/register
Headers: Content-type: application/json

### Route assign tasks to user
Endpoint: POST /api/assign
Headers: Content-type: application/json

### Route remove task(s) from user
Endpoint: POST /api/unassign
Headers: Content-type: application/json

### Route list all common tasks
Endpoint: GET /api/tasks/common
Headers: Content-type: application/json