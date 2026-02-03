import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { courseSchema, type CourseFormData } from "../schemas/courseSchema";

export const CreateCourse = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CourseFormData>({
        resolver: zodResolver(courseSchema),
    });
    const onSubmit = (data: CourseFormData) => {
        console.log(`дані валідні: {data}`);
    };
    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Створити курс</h1>

            
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="space-y-4">
  {/* Поле: Назва */}
  <div>
    <label className="block text-sm font-medium text-gray-700">Назва курсу</label>
    <input
      {...register('title')}
      placeholder="Наприклад: React для початківців"
      className={`w-full p-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
    />
    {/* Якщо є помилка в 'title', виводимо її текст */}
    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
  </div>
  {/* Поле: Опис */}
  <div>
    <label className="block text-sm font-medium text-gray-700">Опис</label>
    <textarea
      {...register('description')}
      placeholder="Опишіть курс детально"
      className={`w-full p-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
  </div>
  {/* Поле: Ціна */}
  <div>
    <label className="block text-sm font-medium text-gray-700">Ціна ($)</label>
    <input
      type="number"
      {...register('price', { valueAsNumber: true })}
      placeholder="99.99"
      className={`w-full p-2 border rounded-md ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
  >
    Створити курс
  </button>
</div>
            </form>
        </div>
    );
}