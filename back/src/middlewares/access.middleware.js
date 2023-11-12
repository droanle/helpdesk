const User = require("../models/user.model");
const JWT = require("../utils/jwt");

exports.auth = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  try {
    var token = JWT.verifyJwt(accessToken);

    if (token == null) {
      res.status(401).render("error401");
    } else {
      session = {};

      session.user = await User.findOne({ email: token.email })
        .select({
          _id: 1,
          name: 1,
          nivel: 1,
          email: 1,
        })
        .exec();

      session.accessToken = token;

      req.session = session;

      next();
    }
  } catch (error) {
    res.status(500);
  }
};
