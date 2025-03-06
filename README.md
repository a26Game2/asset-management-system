# Asset Management System

Asset Management System is built using Domain Driven Design principles with Node.js, Knex, PostgreSQL, and ESLint. The system synchronizes asset data from an external API into a PostgreSQL database, using migrations and seeds for database management, and a daily cron job for asset synchronization.

## Prerequisites

- Node.js v14+  
- npm  
- PostgreSQL  
- Git (optional)

## Setup

Follow these steps to set up and run the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/asset-management-system.git
   cd asset-management-system
   ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the project root and update it with your PostgreSQL credentials:

    ```dotenv
    DB_CLIENT=pg
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_pg_username
    DB_PASSWORD=your_pg_password
    DB_DATABASE=asset_management
    ```

4. **Migrate the database:**

    ```bash
    npm run migrate
    ```

5. **Seed the database (optional but recommended):**

    ```bash
    npm run seed
    ```

6. **Start the application:**

    ```bash
    npm start
    ```

7. **Lint the code (optional):**

    ```bash
    npm run lint
    ```

## Scripts

- **Start the application:** `npm start`  
- **Run migrations:** `npm run migrate`  
- **Seed the database:** `npm run seed`  
- **Lint the code:** `npm run lint`

## Notes

- **Cron Job:**  
  The cron job is set to run daily at midnight. You can adjust the schedule in `src/infrastructure/cron/scheduler.js` for testing purposes.

- **Database Setup:**  
  Migrate the database and run the seed files to populate initial data before starting the application.