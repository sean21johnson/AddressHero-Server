const express = require("express");
const uuid = require("uuid");
const logger = require("../logger");
const AddressService = require('./addresses-service');
const { requireAuth } = require('../middleware/jwt-auth');

const addressRouter = express.Router();
const bodyParser = express.json();


// addressRouter
// 	.route("/:id/addresses")
// 	.get(requireAuth, bodyParser, (req, res, next) => {
// 		const db_connection = req.app.get("db");
// 		const {id} = req.params

// 		console.log('id is ', id)
		
// 		AddressService.getAllAddresses(db_connection, id)
// 		.then((addresses) => {
// 			res.status(200).json(addresses)
// 		})
// 		.catch(next);
// })



module.exports = addressRouter;



// addressRouter
// 	.route("/")
// 	.get(requireAuth, (req, res, next) => {
// 		const { filter, search = "", user } = req.query;
// 		if ((filter === "" || !filter) && (search === "" || !search)) {
// 			AddressService.getAllAddresses(req.app.get("db"), req.user.users_id)
// 				.then((addresses) => {
// 					res.status(200).json(addresses);
// 				})
// 				.catch(next);
// 		} else if (!filter && typeof (search === "string")) {
// 			AddressService.getSearchResults(
// 				req.app.get("db"),
// 				search,
// 				user.users_id
// 			)
// 				.then((addresses) => {
// 					res.status(200).json(addresses);
// 				})
// 				.catch(next);
// 		} else if (!search && typeof (filter === "string")) {
// 			AddressService.getSpecificCategory(
// 				req.app.get("db"),
// 				filter,
// 				user.users_id
// 			)
// 				.then((addresses) => {
// 					res.status(200).json(addresses);
// 				})
// 				.catch(next);
// 		}
// 	})

// 	.post(requireAuth, bodyParser, (req, res, next) => {
// 		for (let field of [
// 			"contact_name",
// 			"address_city",
// 			"address_state",
// 			"address_street",
// 			"address_zip",
// 			"address_phone"
// 		]) {
// 			if (!req.body[field]) {
// 				logger.error(`${field} is required`);
// 				return res.status(400).send(`${field} is required`);
// 			}
// 		}
// 		const { contact_name, address_city, address_state, address_street, address_zip, address_phone } = req.body;
// 		const newAddress = {
// 			contact_id: uuid.v4(),
// 			contact_name,
// 			address_city,
// 			address_state,
// 			address_street,
// 			address_zip,
// 			address_phone
// 		};

// 		newAddress.users_id = req.user.users_id;

// 		AddressService.insertNewAddress(req.app.get("db"), newAddress)
// 			.then(() => {
// 				logger.info(`Contact with id ${newAddress.contact_id} created`);
// 				// res.status(201).location(`/api/languages/${newAddress.contact_id}`).json(address);
// 				res.status(201).send("success");
// 			})
// 			.catch(next);
// 	});

// addressRouter
// 	.route("/:id")
// 	.get((req, res, next) => {
// 		const { id } = req.params;

// 		AddressService.getSpecificAddress(req.app.get("db"), id)
// 			.then((address) => {
// 				if (!address) {
// 					logger.error(`Address with id ${id} not found`);
// 					return res.status(404).json({
// 						error: { message: `Address not found` },
// 					});
// 				}
// 				return res.json(address);
// 			})
// 			.catch(next);
// 	})

// 	.delete((req, res, next) => {
// 		const {id} = req.params;

// 		AddressService.deleteSpecificContact(req.app.get("db"), id)
// 			.then((address) => {
// 				if (!address) {
// 					logger.error(`Contact with id ${id} not found`);
// 					return res.status(404).json({
// 						error: { message: `Contact not found` },
// 					});
// 				}
// 				logger.info(`Contact with id ${id} deleted from address collection`);
// 				return res.status(204).end();
// 			})
// 			.catch(next);
// 	})

// 	.patch(bodyParser, (req, res, next) => {
// 		const {
// 			contact_id,
// 			contact_name,
// 			address_city,
// 			address_state,
// 			address_street,
// 			address_zip,
// 			address_category
// 		} = req.body;
// 		const AddressToUpdate = {
// 			contact_id,
// 			contact_name,
// 			address_city,
// 			address_state,
// 			address_street,
// 			address_zip,
// 			address_category
// 		};
// 		const numberOfValues = Object.values(AddressToUpdate).filter(Boolean).length;

// 		if (numberOfValues === 0) {
// 			logger.error(`Invalid update without required fields`);
// 			return res.status(400).json({
// 				error: {
// 					message: `Request body must contain either 'address_name', 'address_city', 'address_state', 'address_street', 'address_zip', or 'address_category'`,
// 				},
// 			});
// 		}
// 		AddressService.updateSpecificAddress(
// 			req.app.get("db"),
// 			req.params.id,
// 			addressToUpdate
// 		)
// 			.then((address) => {
// 				return res.status(200).json(address).end();
// 			})
// 			.catch(next);
// 	});

