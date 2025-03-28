import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { hash } from 'src/common/hash';
import { createPaginator } from 'prisma-pagination';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const userExistCpf = await this.prisma.users.findFirst({
        where: {
          cpf: createUserDto.cpf,
        },
      });

      if (userExistCpf) {
        throw new BadRequestException('CPF already exists');
      }

      const userExistEmail = await this.prisma.users.findFirst({
        where: {
          email: createUserDto.email,
        },
      });

      if (userExistEmail) {
        throw new BadRequestException('Email already exists');
      }

      const user = await this.prisma.users.create({
        data: {
          ...createUserDto,
          birthDate: new Date(createUserDto.birthDate),
          lastAppointment: new Date(createUserDto.lastAppointment),
          gender: Number(createUserDto.gender),
          password: await hash('2025@Patient'),
        },
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const paginate = createPaginator({
      perPage: 10,
      page: 1,
    });

    const orderByField = 'id';
    const orderByDir = 'asc';

    try {
      const users = await paginate(this.prisma.users, {
        orderBy: {
          [orderByField]: orderByDir,
        },
      });

      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.users.findUnique({
        where: { id },
      });

      if (!user) {
        throw new BadRequestException('User not found');
      }

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userExists = await this.findOne(id);

    if (!userExists) {
      throw new BadRequestException('User not found');
    }

    const user = await this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });

    return user;
  }

  async remove(id: number) {
    const userExists = await this.findOne(id);

    if (!userExists) {
      throw new BadRequestException('User not found');
    }

    const user = await this.prisma.users.delete({
      where: { id },
    });
    return user;
  }

  async getById(id: number) {
    const user = await this.findOne(id);
    return user;
  }
}
