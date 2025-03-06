require('dotenv').config();
const db = require('./src/infrastructure/db/database'); // Initialize DB connection & run migrations
require('./src/infrastructure/cron/scheduler'); // Start the cron job

console.log('Asset Management System is running.');