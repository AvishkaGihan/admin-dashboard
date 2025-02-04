# Admin Dashboard API

A comprehensive backend REST API service for an admin dashboard application built with Node.js, Express, and MongoDB.

## 🌟 Features

- **User Management**: Robust authentication and authorization system with multiple roles (admin, superadmin, user)
- **Data Operations**: Full CRUD capabilities for users, products, and transactions
- **Analytics**: Advanced statistics and performance tracking
- **Data Visualization**: Geography-based insights
- **Inventory Control**: Comprehensive product inventory management
- **Transaction Tracking**: Detailed transaction history and reporting

## 🛠 Tech Stack

- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB
  - Mongoose ODM
- **Additional Packages**:
  - `country-iso-2-to-3`
  - `dotenv`
  - `body-parser`
  - `helmet`
  - `morgan`

## 📦 Setup & Installation

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB instance

### Installation Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/admin-dashboard-api.git
   cd admin-dashboard-api
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Configure Environment**

   - Create a `.env` file in the root directory
   - Add the following variables:

     ```
     MONGO_URL=your_mongodb_connection_string
     PORT=5000
     ```

4. **Seed Database**

   ```sh
   npm run seed
   ```

5. **Start Server**

   ```sh
   # Development mode
   npm run server

   # Production mode
   npm start
   ```

## 🚦 Available Scripts

| Script           | Description                           |
| ---------------- | ------------------------------------- |
| `npm start`      | Start production server               |
| `npm run server` | Start development server with nodemon |
| `npm run seed`   | Seed database with sample data        |

## 🌐 API Endpoints

### Client Routes

- `GET /client/products`: Retrieve all products with statistics
- `GET /client/customers`: Fetch all customers
- `GET /client/transactions`: Get all transactions
- `GET /client/geography`: Retrieve geographical statistics

### Management Routes

- `GET /management/admins`: List all admin users
- `GET /management/performance/:id`: Get performance stats for a specific user

### Sales Routes

- `GET /sales/sales`: Retrieve sales statistics
- `GET /sales/daily`: Get daily sales data

## 📂 Project Structure

```
├── controllers/
│   ├── client.js
│   ├── general.js
│   ├── management.js
│   └── sales.js
├── models/
│   ├── AffiliateStat.js
│   ├── OverallStat.js
│   ├── Product.js
│   ├── ProductStat.js
│   ├── Transaction.js
│   └── User.js
├── routes/
│   ├── client.js
│   ├── general.js
│   ├── management.js
│   └── sales.js
├── data/
│   └── index.js
├── .env
├── .env.example
├── package.json
├── server.js
└── seeder.js
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the ISC License.
