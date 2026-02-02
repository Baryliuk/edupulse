import { z } from 'zod';

export const courseSchema = z.object({
  title: z.string().min(3, 'Назва має бути не менше 3 символів'),
  description: z.string().min(10, 'Опис має бути довшим'),
  instructor: z.string().min(2, 'Вкажіть ім\'я викладача'),
  price: z.number().positive('Ціна має бути більшою за 0'),
  rating: z.number().min(0).max(100),
  image: z.string().url('Введіть коректне посилання на картинку')
});


export type CourseFormData = z.infer<typeof courseSchema>;