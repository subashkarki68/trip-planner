import { z } from "zod";

const ActivitySchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  name: z.string().min(1),
  description: z.string().min(1),
  date: z.date(),
  time: z.string().min(1), // Time can be in string format (e.g. "14:00")
  location: z.string().min(1),
  price: z.number().nonnegative(),
  category: z.string().min(1),
  tags: z.array(z.string()).nonempty(),
  discounts: z.number().nonnegative().optional(),
  isBookingOpen: z.boolean(),
  advertiserId: z.string().min(1),
  isFlagged: z.boolean().default(false).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional(),
});

export default ActivitySchema;
