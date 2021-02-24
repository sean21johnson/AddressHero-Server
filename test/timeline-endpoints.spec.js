const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe.only("Timeline Endpoints", function () {
	let db;

	const {
		testUsers,
		testContacts,
		testAddresses,
		testTimeline,
	} = helpers.makeContactsFixtures();

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

	describe("GET /api/timeline", () => {
		context(`User Validation`, () => {
			beforeEach("insert users and contacts", () => {
				return helpers.seedAllTables(
					db,
					testUsers,
					testContacts,
					testAddresses,
					testTimeline
				);
			});
			it(`response with 200 which indicates that getTimeline is working correctly`, () => {
				return supertest(app)
					.get("/api/timeline")
					.set("Authorization", helpers.makeAuthHeader(testUsers[0]))
					.expect(200);
			});
		});
	});
});
