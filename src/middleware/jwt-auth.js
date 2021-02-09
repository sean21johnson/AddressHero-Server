const AuthService = require("../auth/auth-service");

function requireAuth(req, res, next) {
	const authToken = req.get("authorization") || "";

	let bearerToken;
	if (!authToken.toLowerCase().startsWith("addresshero-client-auth-token ")) {
		return res.status(401).json({ error: "Missing token" });
	} else {
		bearerToken = authToken.slice(25, authToken.length);
	}

	try {
		const payload = AuthService.verifyJwt(bearerToken);

		AuthService.getUserWithUserName(req.app.get("db"), payload.sub)

			.then((user) => {
				if (!user)
					return res.status(401).json({ error: "Unauthorized request" });

				req.user = user;
				next();
			})
			.catch((err) => {
				console.error(err);
				next(err);
			});
	} catch (error) {
		res.status(401).json({ error: "Unauthorized request" });
	}
}

module.exports = {
	requireAuth,