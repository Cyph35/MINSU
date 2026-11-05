export interface Point { x: number; y: number }
export interface Size { w: number; h: number }

const EDGE = 8;

/** Places a floating card near the pointer, flipping and clamping so it stays fully on-screen. */
export function clampCardPosition(pointer: Point, card: Size, viewport: Size, offset = 16): Point {
  let x = pointer.x + offset;
  let y = pointer.y + offset;
  if (x + card.w > viewport.w - EDGE) x = pointer.x - offset - card.w;
  if (y + card.h > viewport.h - EDGE) y = pointer.y - offset - card.h;
  x = Math.min(Math.max(x, EDGE), Math.max(EDGE, viewport.w - card.w - EDGE));
  y = Math.min(Math.max(y, EDGE), Math.max(EDGE, viewport.h - card.h - EDGE));
  return { x, y };
}
