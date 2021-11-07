import { z } from 'zod';

const PORT_REGEXP =
  /^([0-9]|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;

export type { infer as $infer } from 'zod';
export { z };

export const $ = {
  ...z,
  cuid() {
    return z.string().cuid();
  },
  email() {
    return z.string().email();
  },
  int() {
    return z.number().int();
  },
  nestring() {
    return z.string().nonempty();
  },
  object<T extends z.ZodRawShape>(schema: T) {
    return z.object(schema).strict();
  },
  port() {
    return z.string().regex(PORT_REGEXP);
  },
  regex(regex: RegExp) {
    return z.string().regex(regex);
  },
  uint() {
    return z.number().int().nonnegative();
  },
  url() {
    return z.string().url();
  },
  uuid() {
    return z.string().uuid();
  },
};
