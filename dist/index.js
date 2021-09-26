"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$url = exports.$uuid = exports.$unknown = exports.$undefined = exports.$uint = exports.$tuple = exports.$string = exports.$set = exports.$record = exports.$or = exports.$object = exports.$promise = exports.$port = exports.$regex = exports.$null = exports.$nestring = exports.$map = exports.$int = exports.$instanceof = exports.$function = exports.$enum = exports.$email = exports.$date = exports.$cuid = exports.$boolean = exports.$bigint = exports.$array = exports.$and = void 0;
const zod_1 = require("zod");
exports.$and = zod_1.z.intersection;
exports.$array = zod_1.z.array;
exports.$bigint = zod_1.z.bigint();
exports.$boolean = zod_1.z.boolean();
exports.$cuid = zod_1.z.string().cuid();
exports.$date = zod_1.z.date();
exports.$email = zod_1.z.string().email();
exports.$enum = zod_1.z.enum;
exports.$function = zod_1.z.function();
exports.$instanceof = zod_1.z.instanceof;
exports.$int = zod_1.z.number().int();
exports.$map = zod_1.z.map;
exports.$nestring = zod_1.z.string().nonempty();
exports.$null = zod_1.z.null();
const $regex = (regex) => {
    return zod_1.z.string().regex(regex);
};
exports.$regex = $regex;
exports.$port = (0, exports.$regex)(/[1-9][0-9]{1,4}/);
exports.$promise = zod_1.z.promise;
const $object = (schema) => {
    return zod_1.z.object(schema).strict();
};
exports.$object = $object;
exports.$or = zod_1.z.union;
exports.$record = zod_1.z.record;
exports.$set = zod_1.z.set;
exports.$string = zod_1.z.string();
exports.$tuple = zod_1.z.tuple;
exports.$uint = zod_1.z.number().int().nonnegative();
exports.$undefined = zod_1.z.undefined();
exports.$unknown = zod_1.z.unknown();
exports.$uuid = zod_1.z.string().uuid();
exports.$url = zod_1.z.string().url();
//# sourceMappingURL=index.js.map