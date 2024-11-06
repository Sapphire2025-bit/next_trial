"use client"
import { useQuery } from '@tanstack/react-query';
import getAll from '@/app/apiCalls/getAll';



const HomePage = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: getAll,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="m-4">
            <h1>Cards names:</h1>
            <ul className="p-4 list-disc">
                {data.map((post: { id: number; firstName: string; lastName: string}) => (
                    <li key={post.id}>{post.firstName} {post.lastName}</li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;