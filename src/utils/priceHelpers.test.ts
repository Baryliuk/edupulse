import { expect, test } from 'vitest';
import { calculateDiscount } from './priceHelpers';

test('має давати 10% знижки, якщо ціна більше 100', () => {
  expect(calculateDiscount(150)).toBe(135);
});

test('не має давати знижки, якщо ціна 100 або менше', () => {
  expect(calculateDiscount(50)).toBe(50);
});