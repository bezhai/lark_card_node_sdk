import type { Letter, Digit } from "../common/style";
import type { CardElement } from "../components/basic/element";

type ValidIdentifier = string & {
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
export interface ElementId {
  element_id: ValidIdentifier;
}

/**
 * @typedef {CardElement & ElementId} CardElementV2
 * @description 扩展的卡片元素类型，包含唯一标识符
 */
export type CardElementV2 = CardElement & ElementId;

/**
 * @function withElementId
 * @summary 为卡片元素添加唯一标识符
 * @description 创建一个新的卡片元素实例，继承原有属性并添加唯一标识符
 *
 * @param {CardElement} element - 原始卡片元素
 * @param {string} element_id - 要添加的唯一标识符
 * @returns {CardElementV2} 包含唯一标识符的新卡片元素
 *
 * @example
 * ```typescript
 * const originalElement = createCardElement();
 * const elementWithId = withElementId(originalElement, "button1");
 * ```
 */
export function withElementId(
  element: CardElement,
  element_id: string
): CardElementV2 {
  return Object.assign(Object.create(Object.getPrototypeOf(element)), element, {
    element_id,
  });
}
