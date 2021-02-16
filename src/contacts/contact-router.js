const express = require("express");
const uuid = require("uuid");
const logger = require("../logger");
const { requireAuth } = require('../middleware/jwt-auth');
const ContactsService = require("./contact-service");

const contactRouter = express.Router();
const bodyParser = express.json();



contactRouter
    .route("/")
    .get(requireAuth, (req, res, next) => {
        const db_connection = req.app.get("db");
        const users_id = req.user.id;

        ContactsService.getAllContacts(db_connection, users_id)
            .then((contacts) => {
                res.status(200).json(contacts)
            })
            .catch(next);
    })

    .post(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const users_id = req.user.id;

        for (let field of [
            "fullname",
            "phone_number"
        ]) {
            if (!req.body[field]) {
				logger.error(`${field} is required`);
				return res.status(400).send(`${field} is required`);
			}
        }

        const { fullname, phone_number } = req.body;
        const newContact = {
            fullname,
            phone_number,
            users_id
        }

        ContactsService.insertNewContact(db_connection, newContact)
            .then((contact) => {
                logger.info(`Contact created`);
                // res.status(201).location(`/api/languages/${newAddress.contact_id}`).json(address);
                res.status(201).send("success");
            })
            .catch(next);
    })

    
contactRouter
    .route("/:id")
    .get(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const { id } = req.params;
        const user_id = req.user.id


        ContactsService.getContact(db_connection, id, user_id)
            .then((contact) => {
                res.status(200).json(contact[0])
            })
            .catch(next);
    })
    .delete(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const { id } = req.params;
        const user_id = req.user.id;

        //todo validate that the contact_id belongs to the users_id logged in

        ContactsService.deleteContact(db_connection, id, user_id)
        .then((contact) => {
            if (!contact) {
                logger.error(`Contact with id ${id} not found`);
                return res.status(404).json({
                    error: { message: `Contact not found` },
                });
            }
            logger.info(`Contact with id ${id} deleted from address collection`);
            return res.status(204).end();
        })
        .catch(next);
    })
    .patch(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const {id} = req.params;
        const user_id = req.user.id;
        
        for (let field of [
            "fullname", "phone_number",
        ]) {
            if (!req.body[field]) {
                logger.error(`${field} is required`);
				return res.status(400).send(`${field} is required`);
			}
        }

        const { fullname, phone_number } = req.body;

        const newContact = {
            fullname,
            phone_number 
        }

        ContactsService.updateContact(db_connection, id, user_id, newContact)
            .then((contact) => {
                return res.status(200).json(contact).end();
            })
            .catch(next);
    })


//this may need to go into a new router (Address router)
contactRouter
    .route("/:id/addresses")
    .get(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const {id} = req.params

        ContactsService.getAllAddresses(db_connection, id)
            .then((addresses) => {
                res.status(200).json(addresses)
            })
            .catch(next);
    })
    .post(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const {id} = req.params

        for (let field of [
            "city",
            "us_state",
            "street",
            "zip",
            "map"
        ])
        {
        if (!req.body[field]) {
            logger.error(`${field} is required`);
            return res.status(400).send(`${field} is required`);
        }
        }

        const { city, us_state, street, zip, map} = req.body;
        const newAddress = {
            contact_id: id,
            city,
            us_state,
            zip,
            street,
            map
        }

        ContactsService.insertAddress(db_connection, newAddress)
            .then((address) => {
                logger.info("Address added");
                res.status(201).send(address)
            })
            .catch(next)
    })
    .delete(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const address_id = req.body.id;

        ContactsService.deleteAddress(db_connection, address_id)
            .then((address) => {
                if (!address) {
                    logger.error(`Address with id ${address_id} not found`);
                    return res.status(404).json({
                        error: { message: `Address not found` },
                    });
                }
                logger.info(`Address with id ${address_id} deleted from address collection`);
                return res.status(204).send("id deleted").end();
            })
            .catch(next);
    })

//this may need to go into a new router (timeline router)
contactRouter
    .route("/:id/cardType")
    .post(requireAuth, bodyParser, (req, res, next) => {
        const db_connection = req.app.get("db");
        const {id} = req.params //this is the address_id
        const user_id = req.user.id; //this is the users_id

        
        for (let field of [
            "event_type",
            "address_id"
        ])
        {
        if (!req.body[field]) {
            logger.error(`${field} is required`);
            return res.status(400).send(`${field} is required`);
        }
        }

        console.log('made it here')

        const {event_type, address_id} = req.body
        const newTimelinePost = {
            event_type: event_type,
            address_id: address_id,
            users_id: user_id,
            date_created: new Date()
        }

        console.log("user id is ", user_id)
        console.log("address id is ", id)
        console.log("newTimelinePost is ", newTimelinePost)

        ContactsService.insertTimelinePost(db_connection, newTimelinePost)
            .then((newPost) => {
                logger.info("Timeline post added");
                res.status(201).send(newPost)
            })
            .catch(next)
    })
        

module.exports = contactRouter;