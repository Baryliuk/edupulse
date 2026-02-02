import { useCourses } from "../hooks/useCourses";
import { CourseCard } from "./CourseCard";
export const Dashboard = () => {
    const { data, isLoading, isError } = useCourses();

    if (isLoading) {
        return <div>Loading courses...</div>;
    }
    if (isError) {
        return <div>Error loading courses.</div>;
    }
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center">Course Dashboard</h1>
            <div className="mx-auto max-w-7xl">
                <ul className="space-y-4 grid grid-cols-3 gap-4">
                    {data?.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </ul>
            </div>

        </div>
    );

}