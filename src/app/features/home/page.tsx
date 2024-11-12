import AboutSection from "@/components/aboutsection/AboutSection";
import BlogList from "@/components/bloglist/BlogList";

import FooterSection from "@/components/footer/footer";
import HeroSection from "@/components/Jumbotron/page";

import PaginationSection from "@/components/pagination/PaginationSection";
import TestiSection from "@/components/testimoni/testimoni";

import { getEntries } from "@/lib/contentful";

interface HomeProps {
  searchParams: { [key: string]: string };
}

export default async function HomeMain({ searchParams }: HomeProps) {
  const blogs = await getEntries(Number(searchParams.page) || 1);

  if (!blogs) {
    return;
  }

  return (
    <div>
      <div className="flex items-center justify-center mx-auto">
        <HeroSection />
      </div>
      <div className="flex items-center justify-center mx-auto">
        <AboutSection />
      </div>
      <div>
        <BlogList blogs={blogs.data} />
      </div>
      <div>
        <PaginationSection limit={blogs.meta.limit} total={blogs.meta.total} />
      </div>
      <div>
        <TestiSection />
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
}
