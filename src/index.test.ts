import { doesNotThrow, throws } from 'assert';
import { $ } from '.';

// infer:
{
  type Equal<T, U> = T extends U ? (U extends T ? true : false) : false;
  const assert = <_ extends true>() => void 0;
  const stringSchema = $.string();
  assert<Equal<$.infer<typeof stringSchema>, string>>();
}

// cuid:
{
  doesNotThrow(() => $.cuid().parse('cjld2cjxh0000qzrmn831i7rn'));
  throws(() => $.cuid().parse('jld2cjxh0000qzrmn831i7rn'));
}

// email:
{
  doesNotThrow(() => $.email().parse('foo@example.com'));
  throws(() => $.email().parse('fooexample.com'));
}

// int:
{
  doesNotThrow(() => $.int().parse(42));
  throws(() => $.int().parse(42.1));
}

// nestring:
{
  doesNotThrow(() => $.nestring().parse('a'));
  throws(() => $.nestring().parse(''));
}

// obj:
{
  doesNotThrow(() => $.obj({ foo: $.string() }).parse({ foo: '' }));
  throws(() => $.obj({}).parse({ foo: '' }));
}

// port:
{
  doesNotThrow(() => $.port().parse('0'));
  doesNotThrow(() => $.port().parse('9'));
  doesNotThrow(() => $.port().parse('10'));
  doesNotThrow(() => $.port().parse('99'));
  doesNotThrow(() => $.port().parse('100'));
  doesNotThrow(() => $.port().parse('999'));
  doesNotThrow(() => $.port().parse('1000'));
  doesNotThrow(() => $.port().parse('9999'));
  doesNotThrow(() => $.port().parse('10000'));
  doesNotThrow(() => $.port().parse('59999'));
  doesNotThrow(() => $.port().parse('60000'));
  doesNotThrow(() => $.port().parse('64999'));
  doesNotThrow(() => $.port().parse('65000'));
  doesNotThrow(() => $.port().parse('65499'));
  doesNotThrow(() => $.port().parse('65500'));
  doesNotThrow(() => $.port().parse('65529'));
  doesNotThrow(() => $.port().parse('65530'));
  doesNotThrow(() => $.port().parse('65535'));
  throws(() => $.port().parse('00'));
  throws(() => $.port().parse('65536'));
  throws(() => $.port().parse('99999'));
  throws(() => $.port().parse('100000'));
}

// regex:
{
  doesNotThrow(() => $.regex(/^foo/).parse('foobar'));
  throws(() => $.regex(/^foo/).parse('barfoo'));
}

// uint:
{
  doesNotThrow(() => $.uint().parse(0));
  throws(() => $.uint().parse(-1));
}

// url:
{
  doesNotThrow(() => $.url().parse('http://www.example.com'));
  throws(() => $.url().parse('http//www.example.com'));
}

// uuid:
{
  doesNotThrow(() => $.uuid().parse('123e4567-e89b-12d3-a456-426614174000'));
  throws(() => $.uuid().parse('123e4567e89b-12d3-a456-426614174000'));
}
