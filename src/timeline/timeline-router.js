const express = require("express");
const TimelineService = require("./timeline-service");
const { requireAuth } = require("../middleware/jwt-auth");

const timelineRouter = express.Router();

timelineRouter.route("/").get(requireAuth, (req, res, next) => {
	user_id = req.user.id;

	TimelineService.getFullTimeline(req.app.get("db"), user_id)
		.then((timeline) => {
			res.status(200).json(timeline);
		})
		.catch(next);
});

module.exports = timelineRouter;
