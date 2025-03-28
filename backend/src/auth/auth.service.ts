import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { isMatchHash } from 'src/common/hash';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(login: LoginDto) {
    const { identifier, password } = login;

    const user = await this.prisma.users.findFirst({
      where: {
        cpf: identifier,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Falha na autenticação. Verifique seus dados e tente novamente.',
      );
    }

    const { access_token } = await this.getTokens(
      Number(user?.id),
      user.name,
      ['patient'],
      true,
      [1, 2, 3, 4, 5],
    );

    if (identifier.toLowerCase() === user.cpf && password) {
      const hashPassword = await isMatchHash(password, user.password);

      if (user && hashPassword) {
        return {
          access_token: access_token,
          expires_in: process.env.JWT_EXPIRES_IN,
          sub: user.id,
          name: user.name,
          email: user.email,
        };
      } else {
        throw new UnauthorizedException(
          'Falha na autenticação. Verifique seus dados e tente novamente.',
        );
      }
    } else {
      throw new UnauthorizedException(
        'Falha na autenticação. Verifique seus dados e tente novamente.',
      );
    }
  }

  async getTokens(
    sub: number,
    name?: string,
    type?: string[],
    has_private_permission?: boolean,
    transactions?: number[],
    isTechnical?: number,
  ) {
    const [access_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: sub,
          name: name,
          type: type,
          isTechnical: isTechnical,
          transactions,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRES_IN,
          algorithm: 'HS256',
        },
      ),
    ]);
    return {
      access_token: access_token,
    };
  }
}
