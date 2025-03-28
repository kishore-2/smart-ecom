# Smart E-Commerce Recommendation System

This project is a Smart E-Commerce Recommendation System web application that provides personalized product recommendations to users. It is built using modern web technologies and hosted on Azure Static Web Apps, utilizing Azure SQL Database for data storage.

## Features

- **User Authentication**: Secure user authentication using Azure Static Web Apps' authentication providers.
- **Product Catalog Management**: Add, update, and delete products in the catalog with details such as name, description, price, category, and image URL.
- **Recommendation Engine**: Personalized product recommendations based on user behavior, preferences, and purchase history.
- **Responsive User Interface**: A clean and intuitive UI for browsing products and viewing recommendations.

## Technologies Used

- **Frontend**: React, TypeScript, CSS
- **Backend**: Azure Functions with TypeScript
- **Database**: Azure SQL Database
- **Hosting**: Azure Static Web Apps

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd smart-ecommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Azure SQL Database**:
   - Create an Azure SQL Database and configure the connection settings in `src/api/db/config.ts`.

4. **Run the application**:
   - For local development, use:
   ```bash
   npm start
   ```

5. **Deploy to Azure Static Web Apps**:
   - Follow the Azure documentation for deploying a React app to Azure Static Web Apps.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.