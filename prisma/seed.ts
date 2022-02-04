import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// const userData: Prisma.UserCreateInput[] = [
//   {
//     id: '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e',
//     username: 'supabot',
//     status: UserStatus.ONLINE
//   },
//   {
//     id: '70b0347a-24fb-4b0c-9e63-9de2796d57b5',
//     username: 'amiller',
//     status: UserStatus.OFFLINE,
//   },
// ];

// const rolePermissions: Prisma.RolePermissionsCreateInput[] = [
//   { role: AppRole.ADMIN, permission: AppPermission.CHANNELS_DELETE },
//   { role: AppRole.ADMIN, permission: AppPermission.MESSAGES_DELETE },
//   { role: AppRole.MODERATOR, permission: AppPermission.MESSAGES_DELETE },
// ];

// async function seedPermissions() {
//   for (const it of rolePermissions) {
//     const { role, permission } = await prisma.rolePermissions.create({
//       data: { ...it },
//     });
//     console.log(`Created global permission: (${role}, ${permission})`);
//   }
// }

// async function seedUsers() {
//   for (const u of userData) {
//     const user = await prisma.user.create({
//       data: { ...u },
//     });
//     console.log(`Created user with id: ${user.id}`);
//   }
// }

export default async function main() {
  console.log(`Start seeding ...`);
  // await seedPermissions();
  // await seedUsers();
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
