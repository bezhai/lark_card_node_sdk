export class BaseClass {
  toJSON() {
    return Object.fromEntries(
      Object.getOwnPropertyNames(this)
        .map((key) => [key, (this as any)[key]])
    );
  }
}