import * as bcrypt from 'bcryptjs';

export const hashData = async (data: string, salt: string | number) =>
  await bcrypt.hash(data, salt);

export const compareHashedData = async (data1: string, data2: string) =>
  await bcrypt.compare(data1, data2);
