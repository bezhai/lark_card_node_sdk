// 类注册表，用于存储所有继承自 BaseClass 的类
const classRegistry = new Map<string, new () => any>();

export abstract class BaseClass {
  constructor() {
    // 注册类
    const className = this.constructor.name;
    if (!classRegistry.has(className)) {
      classRegistry.set(className, this.constructor as new () => any);
    }
  }

  toJSON() {
    const seen = new Set<object>();
    function toJSONHelper(obj: any): any {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }
      if (seen.has(obj)) {
        return '[Circular]';
      }
      seen.add(obj);

      if (Array.isArray(obj)) {
        return obj.map(item => toJSONHelper(item));
      }

      return Object.fromEntries(
        Object.getOwnPropertyNames(obj).map((key) => [key, toJSONHelper((obj as any)[key])]),
      );
    }
    return toJSONHelper(this);
  }

  serialize() {
    const seen = new Map<object, number>();
    let id = 0;

    function serializeValue(value: any): any {
      // 处理基础类型
      if (value === null || typeof value !== 'object') {
        return value;
      }

      // 处理循环引用
      if (seen.has(value)) {
        return { $ref: seen.get(value) };
      }

      // 处理数组
      if (Array.isArray(value)) {
        const objId = id++;
        seen.set(value, objId);
        return {
          $id: objId,
          $type: 'array',
          $value: value.map(serializeValue)
        };
      }

      // 处理对象
      const objId = id++;
      seen.set(value, objId);

      // 如果是 BaseClass 的实例
      if (value instanceof BaseClass) {
        const data = {};
        for (const key of Object.getOwnPropertyNames(value)) {
          (data as any)[key] = serializeValue((value as any)[key]);
        }
        return {
          $id: objId,
          $type: 'class',
          $class: value.constructor.name,
          $value: data
        };
      }

      // 普通对象
      const data = {};
      for (const key of Object.getOwnPropertyNames(value)) {
        (data as any)[key] = serializeValue((value as any)[key]);
      }
      return {
        $id: objId,
        $type: 'object',
        $value: data
      };
    }

    return JSON.stringify(serializeValue(this));
  }

  static deserialize(serialized: string): any {
    const data = JSON.parse(serialized);
    const created = new Map<number, any>();

    function deserializeValue(value: any): any {
      // 处理基础类型
      if (value === null || typeof value !== 'object') {
        return value;
      }

      // 处理循环引用
      if ('$ref' in value) {
        const ref = created.get(value.$ref);
        if (!ref) {
          throw new Error(`Invalid reference: ${value.$ref}`);
        }
        return ref;
      }

      // 处理数组
      if (value.$type === 'array') {
        const arr = value.$value.map(deserializeValue);
        created.set(value.$id, arr);
        return arr;
      }

      // 处理类实例
      if (value.$type === 'class') {
        const Cls = classRegistry.get(value.$class);
        if (!Cls) {
          throw new Error(`Unknown class: ${value.$class}`);
        }
        const instance = new Cls();
        created.set(value.$id, instance);
        
        // 递归处理属性
        for (const [k, v] of Object.entries(value.$value)) {
          (instance as any)[k] = deserializeValue(v);
        }
        return instance;
      }

      // 处理普通对象
      if (value.$type === 'object') {
        const obj = {};
        created.set(value.$id, obj);
        for (const [k, v] of Object.entries(value.$value)) {
          (obj as any)[k] = deserializeValue(v);
        }
        return obj;
      }

      throw new Error(`Unknown type: ${value.$type}`);
    }

    return deserializeValue(data);
  }
}
