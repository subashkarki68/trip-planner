const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create User Roles first
  const touristRole = await prisma.userRole.create({
    data: {
      name: "Tourist",
    },
  });

  const tourGuideRole = await prisma.userRole.create({
    data: {
      name: "TourGuide",
    },
  });

  const advertiserRole = await prisma.userRole.create({
    data: {
      name: "Advertiser",
    },
  });

  const sellerRole = await prisma.userRole.create({
    data: {
      name: "Seller",
    },
  });

  const adminRole = await prisma.userRole.create({
    data: {
      name: "Admin",
    },
  });

  // Now create Users and connect to UserRoles
  await prisma.user.create({
    data: {
      username: "testuser",
      email: "test@example.com",
      password: "123", // Make sure to hash passwords
      mobileNumber: "1234567890",
      nationality: "Nepali",
      dob: new Date("2000-01-01"),
      job: "Tourist",
      role: { connect: { id: touristRole.id } }, // Connect to the created role
    },
  });

  // Add more users as needed
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
