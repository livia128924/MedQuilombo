import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';

export enum VerifyCredentials {
  verifyIdentifier = 'identifier',
  verifyPassword = 'password',
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({
      loginField: VerifyCredentials.verifyIdentifier,
      passwordField: VerifyCredentials.verifyPassword,
    });
  }
  c;

  async validate(login: LoginDto) {
    const user = await this.authService.login(login);

    if (!user) {
      throw new UnauthorizedException(
        'Não foi possível validar o usuário, verifique se os dados estão corretos',
      );
    }

    return user;
  }
}
