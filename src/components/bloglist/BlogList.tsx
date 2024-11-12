import { Blog } from "@/types/blog";
import BlogCard from "../blogcard/BlogCard";
import { FC } from "react";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <section className="flex flex-col items-center gap-10 w-full px-6 lg:px-20 py-14  text-gray-200">
      {/* Services Badge */}
      <div className="flex items-center justify-center">
        <div className="mt-6 max-w-fit flex items-center justify-center gap-2 rounded-full border-2 border-cyan-400 px-5 py-2 transition-all hover:bg-cyan-400 hover:text-gray-900">
          <span className="text-cyan-400 font-mono text-lg md:text-[20px] font-semibold leading-normal tracking-wide">
            Product
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-center w-full text-center">
        <h2 className="text-cyan-400 font-mono text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-normal max-w-2xl tracking-wide">
          Supercharge Your Success with Our Innovative Products!
        </h2>
      </div>

      {/* Blog Cards Grid - Limited to 3 cards */}
      <div className="flex justify-center w-full mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 max-w-[1280px]">
          {blogs.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="transform transition-all hover:scale-105 flex justify-center hover:bg-opacity-80 shadow-xl rounded-lg"
            >
              <BlogCard
                blog={blog}
                className="w-full h-full max-w-[400px] border border-cyan-400 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
