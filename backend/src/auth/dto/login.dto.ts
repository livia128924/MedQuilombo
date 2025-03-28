import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, ValidateIf } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email',
    example: '30520148037',
  })
  @IsNotEmpty({
    message: 'Campos obrigatórios em branco',
  })
  @ValidateIf((o) => o.email && o.email.trim().length > 0)
  readonly identifier: string;

  @ApiProperty({
    description: 'Password',
    example: 'password123@',
  })
  @IsNotEmpty({
    message: 'Campos obrigatórios em branco',
  })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/, {
    message:
      'A senha deve ter entre 8 e 12 caracteres, conter letras, números e ao menos um caractere especial.',
  })
  readonly password: string;
}
