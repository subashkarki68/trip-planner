const NotificationSchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  userId: z.string().min(1),
  type: z.string().min(1), // Should be like "EventFlagged", "ItineraryUpdated", etc.
  message: z.string().min(1),
  createdAt: z.date().default(() => new Date()),
});
