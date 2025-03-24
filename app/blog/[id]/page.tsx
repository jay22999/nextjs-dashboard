import fs from 'fs';
import path from 'path';

interface Blog {
  id: string;
  name: string;
  age: string;
}

export const revalidate = 5;
export const dynamicParams = true;

export function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'app/lib/data.json');
  const blogData: Blog[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return blogData.map((blog) => ({
    id: String(blog.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const filePath = path.join(process.cwd(), 'app/lib/data.json');
  const blogData: Blog[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const { id } = await params;
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.name}</h1>
      <p>{blog.age}</p>
    </div>
  );
}
