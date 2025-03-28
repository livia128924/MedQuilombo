import * as bcrypt from 'bcryptjs';

export async function hash(value: string): Promise<string> {
  const saltOrRounds = 10;
  return bcrypt.hash(value, saltOrRounds);
}

export async function isMatchHash(
  value: string,
  hash_s: string,
): Promise<boolean> {
  return bcrypt.compare(value, hash_s);
}
