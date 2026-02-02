import type { Course } from "../types/course";
export const CourseCard = ({course}: {course: Course}) => {
    return (
        <div>         
                                <li className="mb-4 p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl font-semibold">{course.title}</h2>
                                    <p className="text-gray-700">{course.description}</p>
                                    <p className="text-gray-600">Instructor: {course.instructor}</p>
                                    <p data-testid="course-price" className="text-gray-600">Price: ${course.price}</p>
                                    <p className="text-gray-600">Rating: {course.rating} / 100</p>
                                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded mt-2" />
                                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">Buy</button>
                                    <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                                </li>
        </div>
    )
}