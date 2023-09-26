# Elixir Website Backend Microservice Readme

This README provides information on the Backend microservice developed for the Elixir website's Careers page. The microservice allows users to retrieve career information for different companies using GET requests and permits administrators to add new company career pages through POST requests. MongoDB Atlas is used as the cloud database for storing this information.

## Key Features

1. **Backend Implementation**: The microservice is built using Node.js and Express, providing a robust and efficient backend for managing career information.

2. **Validation System**: The microservice includes a validation system that restricts POST requests to only administrators, ensuring data integrity and security.

3. **CORS Support**: Cross-Origin Resource Sharing (CORS) is enabled to allow for secure communication between the frontend and backend, even when they are hosted on different domains.

## Installation

To run this microservice locally, follow these steps:

1. ### Clone the Repository:

   ```bash
   git clone <repository-url>
   cd elixir-careers-backend
2. ### Install Dependencies:

```bash
npm install
```
3. ### Environment Variables:
Create a .env file in the root directory and configure the following variables:
```bash
PORT=3000            # Port for the server
MONGODB_URI=YOUR_MONGODB_URI   # MongoDB Atlas connection URI
ADMIN_API_KEY=YOUR_ADMIN_API_KEY # Secret key for admin access
```
4. ### Run the Application:

```bash
npm start
```
The server will start and be accessible at http://localhost:3000.

# Usage

## GET Request

To retrieve career information for different companies, make a GET request to:

```http
GET http://localhost:3000/careers
```
# POST Request

To add a new company's career page, make a POST request with the following JSON payload:
#### POST http://localhost:3000/api/v1/henlo
```json
{
  "companyName": "New Company",
  "careersPageURL": "https://newcompany.com/careers",
  "imageLink" : "https://yourImage.link"
}
```
Note that only users with admin privileges (specified by the ADMIN_API_KEY) can perform POST requests.

# Deployed Project

The microservice may also be deployed on a production server. You can find the deployed project at the following link: [Elixir Careers Backend]([https://your-deployed-backend-url.com](https://elixir-careers.onrender.com/api/v1/henlo)).

# Contribution

Contributions to this project are welcome! If you would like to report issues or make improvements, please submit a pull request or open an issue on the project's GitHub repository.

# License

This project is licensed under the MIT License. See the LICENSE file for details.
