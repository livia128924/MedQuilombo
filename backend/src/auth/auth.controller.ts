import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PublicRoute } from 'src/common/public-route.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @PublicRoute()
  @ApiOperation({ summary: 'Login' })
  async auth(@Body() auth: LoginDto) {
    return this.authService.login(auth);
  }
}
