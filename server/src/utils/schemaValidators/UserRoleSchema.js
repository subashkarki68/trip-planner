const UserRoleSchema = z.object({
  id: z.string().optional(), // Prisma will auto-generate this
  name: z.string().min(1),
});
