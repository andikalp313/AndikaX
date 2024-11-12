"use client";
import AboutSection from "@/components/aboutsection/page";
import BlogList from "@/components/bloglist/BlogList";

import FooterSection from "@/components/footer/footer";

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
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
