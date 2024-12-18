import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/PIwfyBaqvJMz71isKzBbXPCI0yZN5JjMresBGWtogn1hv684',
  'https://utfs.io/f/PIwfyBaqvJMzGKAswhYHRipT1FeS2WwGgncUBYILM7mak9oO',
  'https://utfs.io/f/PIwfyBaqvJMz09fdBJbVmqv8ToKJ691wfYAuZ0xjHXan7dRh',
  'https://utfs.io/f/PIwfyBaqvJMz3CUEYBXgxFSRzeUMB7fHNZTdbL9P6i5o84Yp',
  'https://utfs.io/f/PIwfyBaqvJMzmcyXHZEiShnTOzVJEa9WB1jcpo8ZM2tGgwkm',
  'https://utfs.io/f/PIwfyBaqvJMzPIY39BaqvJMznKjCsZxc9O3FwlSbVYDfa7QN',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log('posts', posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
