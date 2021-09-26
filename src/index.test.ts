import { deepStrictEqual } from 'assert';
import { $string } from '.';

deepStrictEqual($string.safeParse('hello'), {
  data: 'hello',
  success: true,
});
