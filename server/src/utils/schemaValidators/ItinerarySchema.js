const ItinerarySchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  title: z.string().min(1),
  description: z.string().min(1),
  activities: z.array(z.string()).nonempty(),
  locations: z.array(z.string()).nonempty(),
  timeline: z.string().min(1),
  duration: z.number().int().nonnegative(),
  tourLanguage: z.string().min(1),
  price: z.number().nonnegative(),
  availableDates: z.array(z.string()).nonempty(),
  accessibility: z.string().min(1),
  pickUpLocation: z.string().min(1),
  tourGuideId: z.string().min(1),
  isActive: z.boolean().default(true).optional(),
  isFlagged: z.boolean().default(false).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional(),
});
