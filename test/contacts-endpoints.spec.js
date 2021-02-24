const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe("Timeline Endpoints", function() {
    let db;

    const { testUsers, testContacts } = helpers.makeContactsFixtures();

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

    describe('GET /api/contacts', () => {
        context(`User Validation`, () => {
            beforeEach("insert users and contacts", () => {
                return helpers.seedContactsTable(db, testUsers, testContacts);
            });
            it(`response with 200 which indicates that getAllContacts is working correctly`, () => {
                return supertest(app)
                    .get("/api/contacts")
                    .set("Authorization", helpers.makeAuthHeader(testUsers[0]))
                    .expect(200)
            })
        })
    })
})