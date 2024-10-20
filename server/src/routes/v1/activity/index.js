const router = require("express").Router();
const validate = require("../../../middlewares/validate");
const { ActivitySchema } = require("../../../utils/schemaValidators");
const catchAsync = require("../../../utils/catchAsync");
const prisma = require("../../../../prisma/prisma");
const sendResponse = require("../../../utils/sendResponse");

router.post(
  "/",
  validate(ActivitySchema),
  catchAsync(async (req, res, next) => {
    const newActivity = await prisma.activity.create({
      data: req.body,
    });
    sendResponse(res, 201, "success", newActivity);
  })
);
