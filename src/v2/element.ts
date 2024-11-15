import { CardElement } from "../element";

export interface ElementId {
  element_id: string;
}

export type CardElementV2 = CardElement & ElementId;

export function withElementId(
  element: CardElement,
  element_id: string
): CardElementV2 {
  return Object.assign(Object.create(Object.getPrototypeOf(element)), element, {
    element_id,
  });
}
