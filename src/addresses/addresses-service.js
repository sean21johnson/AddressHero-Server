const AddressService = {
	getAllAddresses(knex, contact_id) {
        return knex
            .select("*")
            .from("addresses")
            .where("contact_id", contact_id)
    }
};

module.exports = AddressService;

	// getAllAddresses(knex, users_id) {
	// 	return knex
	// 		.select("*")
	// 		.from("addresses")
	// 		.where("users_id", "ILIKE", `${users_id}`);
	// },
	// getSpecificAddress(knex, contact_id) {
	// 	return knex
	// 		.select("*")
	// 		.from("addresses")
	// 		.where("contact_id", "ILIKE", `%${contact_id}`)
	// 		.first();
	// },
	// getSpecificCategory(knex, category, users_id) {
	// 	return knex
	// 		.select("*")
	// 		.from("addresses")
	// 		.where("contact_id", "ILIKE", `${users_id}`)
	// 		.where("address_category", "ILIKE", `%${category}%`);
	// },
	// getSearchResults(knex, search, users_id) {
	// 	return knex
	// 		.select("*")
	// 		.from("addresses")
	// 		.where("address_name", "ILIKE", `%${search}%`)
	// 		.where("users_id", "ILIKE", `${users_id}`);
	// },
	// deleteSpecificContact(knex, contact_id) {
	// 	return knex.from("addresses").where({ contact_id }).delete();
	// },
	// updateSpecificAddress(knex, contact_id, newAddressFields) {
	// 	return knex.from("addresses").where({ contact_id }).update(newAddressFields);
	// },
	// insertNewAddress(knex, newAddress) {
	// 	return knex
	// 		.insert(newAddress)
	// 		.into("addresses")
	// 		.returning("*")
	// 		.then((rows) => {
	// 			return rows[0];
	// 		});
	// },


