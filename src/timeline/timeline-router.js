const express = require("express");
const uuid = require("uuid");
const logger = require("../logger")
const TimelineService = require("./timeline-service")
const { requireAuth } = require("../middleware/jwt-auth")

const timelineRouter = express.Router();
const bodyParser = express.json();

timelineRouter


    .route("/")
    .get(requireAuth, (req, res, next) => {
        // console.log(req.user.users_id)
        TimelineService.getFullTimeline(req.app.get("db"), req.user.users_id)
        .then((timeline) => {
            res.status(200).json(timeline)
        })
        .catch(next);
    })

timelineRouter
    .route("/:cardType")
    .post(requireAuth, bodyParser, (req, res, next) => {
        const { cardType } = req.params;
        console.log(cardType);

        if (!cardType) {
            logger.error(`Invalid attempt due to missing cardType parameter`)
            return res.status(400).send(`Invalid attempt due to missing cardType parameter`)
        }

        const timelinePost = {
            timeline_id: uuid.v4(),
            timeline_type: cardType,
            date_created: new Date()
        }

        timelinePost.users_id = req.user.users_id
        timelinePost.contact_id = req.body.contact_id
        
        TimelineService.insertNewPost(req.app.get("db"), timelinePost)
            .then(() => {
                logger.info(`New timeline post with id ${timelinePost.timeline_id} created`);
                // res.status(201).location(`api/timeline/${newPost.timeline_id}`.json(newPost))
                res.status(201).send("success")
            })
            .catch(next);
    })




module.exports = timelineRouter;