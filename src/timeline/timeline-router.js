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

        user_id = req.user.id

        // console.log(req.user.users_id)
        TimelineService.getFullTimeline(req.app.get("db"), user_id)
        .then((timeline) => {
            console.log('timeline is ', timeline)
            res.status(200).json(timeline)
        })
        .catch(next);
    })




module.exports = timelineRouter;