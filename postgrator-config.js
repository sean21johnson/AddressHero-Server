require("dotenv").config();

module.exports = {
	migrationsDirectory: "migrations",
	driver: "pg",
	// connectionString: process.env.DATABASE_URL,
	connectionString: process.env.DATABASE_URL_TEST,
};