import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { CourseCard } from './CourseCard';
import type { Course } from '../types/course';

const mockCourse: Course = {
  id: '1',
  title: 'Курс для Майбутнього Профі',
  description: 'Вчимося заробляти $200 на фрілансі',
  instructor: 'Твій Ментор',
  price: 200,
  rating: 100,
  image: 'test-image.jpg'
};

test('відображає назву та ціну курсу та рейтинг', () => {
  // 1. Малюємо картку у віртуальному середовищі
  render(<CourseCard course={mockCourse} />);

  // 2. Шукаємо елементи на екрані за текстом
  const title = screen.getByText(/Курс для Майбутнього Профі/i);
  const price = screen.getByTestId('course-price');
  const rating = screen.getByText(/Rating: 100 \//i)

  // 3. Стверджуємо, що вони існують
  expect(title).toBeDefined();
  expect(price).toBeDefined();
  expect(rating).toBeDefined();
});