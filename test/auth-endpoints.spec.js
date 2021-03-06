const knex = require("knex");
const jwt = require("jsonwebtoken");
const app = require("../src/app");
const helpers = require("./test-helpers");
const supertest = require("supertest");

describe("Users Endpoints", function () {
	let db;

	const { testUsers } = helpers.makeContactsFixtures();
	const testUser = testUsers[0];

	before("make knex instance", () => {
		db = knex({
			client: "pg",
			connection: process.env.DATABASE_URL_TEST,
		});
		app.set("db", db);
	});

	after("disconnect from db", () => db.destroy());

	before("cleanup", () => helpers.cleanTables(db));

	afterEach("cleanup", () => helpers.cleanTables(db));

	describe(`POST /api/login`, () => {
		context(`User Validation`, () => {
			beforeEach("insert users", () => {
				helpers.seedUsers(db, testUsers);
			});

			it(`response 200 and JWT auth token using secret when valid credentials`, () => {
				const userValidCreds = {
					username: testUser.username,
					password: testUser.pass_word,
				};

				const expectedToken = jwt.sign(
					{ id: testUser.id },
					process.env.JWT_SECRET,
					{
						subject: testUser.username,
						algorithm: "HS256",
					}
				);
				return supertest(app)
					.post("/api/login")
					.send(userValidCreds)
					.expect(200, {
						authToken: expectedToken,
					});
			});
		});
	});
});
