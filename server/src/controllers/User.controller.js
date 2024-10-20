const prisma = require("../../prisma/prisma");
const sendResponse = require("../utils/sendResponse");

exports.registerUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    sendResponse(res, 201, "success", user);
  } catch (error) {
    next(error);
  }
};
