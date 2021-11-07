import { z } from 'zod';

const PORT_REGEXP =
  /^([0-9]|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;

export * from 'zod';

export const and = z.intersection;

export const cuid = () => {
  return z.string().cuid();
};

export const email = () => {
  return z.string().email();
};

export const int = () => {
  return z.number().int();
};

export const nestring = () => {
  return z.string().nonempty();
};

export const obj = <T extends z.ZodRawShape>(schema: T) => {
  return z.object(schema).strict();
};

export const or = z.union;

export const port = () => {
  return z.string().regex(PORT_REGEXP);
};

export const regex = (regExp: RegExp) => {
  return z.string().regex(regExp);
};

export const uint = () => {
  return z.number().int().nonnegative();
};

export const url = () => {
  return z.string().url();
};

export const uuid = () => {
  return z.string().uuid();
};
