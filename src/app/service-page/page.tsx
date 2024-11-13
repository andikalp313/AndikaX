"use client";
import BlogList from "@/features/service-page/components/BlogList";
import { getEntries } from "@/lib/contentful";
export default async function Home() {
  const blogs = await getEntries(Number() || 1);
  if (!blogs) {
    return;
  }
  return (
    <div>
      <div>
        <BlogList blogs={blogs.data} />
      </div>
    </div>
  );
}
