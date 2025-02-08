import { BaseClass } from "../../common/json";
import { Letter, Digit } from "../../common/style";

export type ValidIdentifier = string & {
  match: `${Letter}${string extends infer T
    ? T extends `${Letter | Digit | "_"}${infer Rest}`
      ? Rest extends ""
        ? true
        : false
      : false
    : never}`;
} & {
  length: number extends infer L
    ? L extends
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
      ? L
      : never
    : never;
};

/**
 * @interface ElementId
 * @summary 组件唯一标识接口
 * @description 定义组件的唯一标识符，用于在组件相关接口中唯一识别和引用特定组件
 *
 * @property {ValidIdentifier} element_id - 组件的唯一标识符
 *
 * @remarks
 * 标识符规则：
 * - 必须以字母开头
 * - 只能包含字母、数字和下划线
 * - 长度不得超过20个字符
 * - 在同一张卡片内必须唯一
 *
 * @example
 * ```typescript
 * const elementId: ElementId = {
 *   element_id: "myButton123"
 * };
 * ```
 */
export class BaseComponent extends BaseClass {
  element_id: ValidIdentifier;

  constructor(element_id: ValidIdentifier) {
    super();
    this.element_id = element_id;
  }
}