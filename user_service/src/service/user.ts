import { PrismaClient } from '@prisma/client';

export default class UserService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  createUser = async (data: any) => {
    return this.prisma.user.create({
      data: {
        sns_id: data.sns_id,
        email: data.email,
        profile: {
          create: {
            image: `${data.email[0]}`,
          },
        },
      },
    });
  };
  async getUser(id: any) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  findUserBySnsId = async (sns_id: any) => {
    return this.prisma.user.findUnique({
      where: {
        sns_id,
      },
    });
  };
  async updateUser(id: any, data: any) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
  async deleteUser(id: any) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
