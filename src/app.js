require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const usersRouter = require("./users/user-router");
const authrouter = require("./auth/auth-router");
const timelineRouter = require("./timeline/timeline-router");
const contactRouter = require("./contacts/contact-router");

const errorHandler = require("./error-handler");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.use("/api/users", usersRouter);
app.use("/api/login", authrouter);
app.use("/api/contacts", contactRouter);
app.use("/api/timeline", timelineRouter);

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.use(errorHandler);

module.exports = app;
