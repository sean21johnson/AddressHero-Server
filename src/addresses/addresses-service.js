
const AddressService = {
	getAllAddresses(knex, users_id) {
		return knex
			.select("*")
			.from("addresses")
			.where("users_id", "ILIKE", `${users_id}`);
	},
	getSpecificAddress(knex, address_id) {
		return knex
			.select("*")
			.from("addresses")
			.where("address_id", "ILIKE", `%${address_id}`)
			.first();
	},
	getSpecificCategory(knex, category, users_id) {
		return knex
			.select("*")
			.from("addresses")
			.where("address_id", "ILIKE", `${users_id}`)
			.where("address_category", "ILIKE", `%${category}%`);
	},
	getSearchResults(knex, search, users_id) {
		return knex
			.select("*")
			.from("addresses")
			.where("address_name", "ILIKE", `%${search}%`)
			.where("users_id", "ILIKE", `${users_id}`);
	},
	deleteSpecificAddress(knex, address_id) {
		return knex.from("addresses").where({ address_id }).delete();
	},
	updateSpecificAddress(knex, address_id, newAddressFields) {
		return knex.from("addresses").where({ address_id }).update(newAddressFields);
	},
	insertNewAddress(knex, newAddress) {
		return knex
			.insert(newAddress)
			.into("addresses")
			.returning("*")
			.then((rows) => {
				return rows[0];
			});
	},
};

module.exports = AddressService;