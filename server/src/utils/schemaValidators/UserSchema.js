const { z } = require("zod");

const UserSchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  mobileNumber: z.string().min(10).max(15), // Add mobile validation as per your needs
  nationality: z.string().min(1),
  dob: z.date(),
  job: z.string().min(1),
  roleId: z.string().min(1),
  wallet: z.number().nonnegative().default(0),
  loyaltyPoints: z.number().int().nonnegative().default(0),
  profilePicture: z.string().url().optional(),
  termsAccepted: z.boolean().default(false).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional(),
});

module.exports = UserSchema;
