const ComplaintSchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  title: z.string().min(1),
  body: z.string().min(1),
  status: z.string().min(1), // Should be "pending", "resolved", etc.
  response: z.string().optional(),
  resolvedAt: z.date().optional(),
  createdAt: z.date().default(() => new Date()),
  userId: z.string().min(1),
});
