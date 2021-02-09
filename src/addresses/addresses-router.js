const express = require("express");
const uuid = require("uuid");
const logger = require("../logger");
const AddressService = require('./addresses-service');
const { requireAuth } = require('../middleware/jwt-auth');

const addressRouter = express.Router();
const bodyParser = express.json();

addressRouter
	.route("/")
	.get(requireAuth, (req, res, next) => {
		const { filter, search = "", user } = req.query;
		if ((filter === "" || !filter) && (search === "" || !search)) {
			AddressService.getAllAddresses(req.app.get("db"), req.user.users_id)
				.then((addresses) => {
					res.status(200).json(addresses);
				})
				.catch(next);
		} else if (!filter && typeof (search === "string")) {
			AddressService.getSearchResults(
				req.app.get("db"),
				search,
				user.users_id
			)
				.then((addresses) => {
					res.status(200).json(addresses);
				})
				.catch(next);
		} else if (!search && typeof (filter === "string")) {
			AddressService.getSpecificCategory(
				req.app.get("db"),
				filter,
				user.users_id
			)
				.then((addresses) => {
					res.status(200).json(addresses);
				})
				.catch(next);
		}
	})

	.post(requireAuth, bodyParser, (req, res, next) => {
		for (let field of [
			"address_name",
			"address_city",
			"address_state",
			"address_street",
			"address_zip",
			"address_category"
		]) {
			if (!req.body[field]) {
				logger.error(`${field} is required`);
				return res.status(400).send(`${field} is required`);
			}
		}
		const { address_name, address_city, address_state, address_street, address_zip, address_category } = req.body;
		const newAddress = {
			address_id: uuid.v4(),
			address_name,
			address_city,
			address_state,
			address_street,
			address_zip,
			address_category
		};

		newAddress.users_id = req.user.users_id;

		AddressService.insertNewAddress(req.app.get("db"), newAddress)
			.then((address) => {
				logger.info(`Address with id ${newAddress.address_id} created`);
				res.status(201).location(`/api/languages/${newAddress.address_id}`).json(address);
			})
			.catch(next);
	});

addressRouter
	.route("/:id")
	.get((req, res, next) => {
		const { id } = req.params;

		AddressService.getSpecificAddress(req.app.get("db"), id)
			.then((address) => {
				if (!address) {
					logger.error(`Address with id ${id} not found`);
					return res.status(404).json({
						error: { message: `Address not found` },
					});
				}
				return res.json(address);
			})
			.catch(next);
	})

	.delete((req, res, next) => {
		const { id } = req.params;

		AddressService.deleteSpecificAddress(req.app.get("db"), id)
			.then((address) => {
				if (!address) {
					logger.error(`Address with id ${id} not found`);
					return res.status(404).json({
						error: { message: `Address not found` },
					});
				}
				logger.info(`Address with id ${id} deleted from address collection`);
				return res.status(204).end();
			})
			.catch(next);
	})

	.patch(bodyParser, (req, res, next) => {
		const {
			address_id,
			address_name,
			address_city,
			address_state,
			address_street,
			address_zip,
			address_category
		} = req.body;
		const AddressToUpdate = {
			address_id,
			address_name,
			address_city,
			address_state,
			address_street,
			address_zip,
			address_category
		};
		const numberOfValues = Object.values(AddressToUpdate).filter(Boolean).length;

		if (numberOfValues === 0) {
			logger.error(`Invalid update without required fields`);
			return res.status(400).json({
				error: {
					message: `Request body must contain either 'address_name', 'address_city', 'address_state', 'address_street', 'address_zip', or 'address_category'`,
				},
			});
		}
		AddressService.updateSpecificAddress(
			req.app.get("db"),
			req.params.id,
			addressToUpdate
		)
			.then((address) => {
				return res.status(200).json(address).end();
			})
			.catch(next);
	});

module.exports = addressRouter;