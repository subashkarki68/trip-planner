const ProductSchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  availableQuantity: z.number().int().nonnegative(),
  sellerId: z.string().min(1),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional(),
});
