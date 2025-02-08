export class BaseClass {
  toJSON() {
    return Object.fromEntries(
      Reflect.ownKeys(this).map((key) => [key, (this as any)[key]])
    );
  }
}
