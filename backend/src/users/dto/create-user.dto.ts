import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'The birth date of the user',
    example: '2021-01-01',
  })
  birthDate: Date;

  @ApiProperty({
    description: 'The gender of the user',
    example: 1,
    required: false,
  })
  gender?: number;

  @ApiProperty({
    description: 'The CPF of the user',
    example: '12345678901',
  })
  cpf: string;

  @ApiProperty({
    description: 'The phone of the user',
    example: '12345678901',
  })
  phone: string;

  @ApiProperty({
    description: 'The address of the user',
    example: '12345678901',
  })
  address: string;

  @ApiProperty({
    description: 'The medical history of the user',
    example: 'Patient has hypertension',
    required: false,
  })
  medicalHistory?: string;

  @ApiProperty({
    description: 'The last appointment of the user',
    example: '2024-03-20',
    required: false,
  })
  lastAppointment?: Date;

  @ApiProperty({
    description: 'The current diagnosis of the user',
    example: 'Hypertension',
    required: false,
  })
  currentDiagnosis?: string;

  @ApiProperty({
    description: 'The current medications of the user',
    example: 'Losartan 50mg',
    required: false,
  })
  currentMedications?: string;

  @ApiProperty({
    description: 'The medical notes of the user',
    example: 'Patient needs to monitor blood pressure daily',
    required: false,
  })
  medicalNotes?: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  email: string;
}
