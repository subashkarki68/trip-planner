const Router = require("express").Router;
const router = Router();
const validate = require("../../../middlewares/validate");
const UserSchema = require("../../../utils/schemaValidators/UserSchema");
const catchAsync = require("../../../utils/catchAsync");
const { registerUser } = require("../../../controllers/User.controller");

const auth = require("../../../middlewares/auth");

router.get("/", auth, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Route is working",
  });
});

router.post("/register", validate(UserSchema), catchAsync(registerUser));

module.exports = router;
