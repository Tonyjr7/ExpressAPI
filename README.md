# Express Items API

A basic CRUD REST API built with Node.js and Express for managing items.

## Features

- Create an item (`POST /items`)
- Get all items (`GET /items`)
- Get a single item by ID (`GET /items/:id`)
- Update an item by ID (`PUT /items/:id`)
- Delete an item by ID (`DELETE /items/:id`)

## Tech Stack

- Node.js
- Express
- UUID

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-items-api.git
   cd NODEPROJECT
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   Or, if using `nodemon`:

   ```bash
   npm run dev
   ```

4. Server will run at:

   ```
   http://localhost:5000
   ```

## API Endpoints

| Method | Route        | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/`          | Welcome message   |
| GET    | `/items`     | Get all items     |
| POST   | `/items`     | Add a new item    |
| GET    | `/items/:id` | Get item by ID    |
| PUT    | `/items/:id` | Update item by ID |
| DELETE | `/items/:id` | Delete item by ID |

## Example Request (POST /items)

```json
{
  "name": "Example Item",
  "description": "This is an example."
}
```

## License

This project is licensed under the MIT License.

