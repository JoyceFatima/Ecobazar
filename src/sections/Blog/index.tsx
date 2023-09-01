import { blogs } from '@/app/homepage/data'
import { backgroundBlog } from '@/assets'
import BlogCard from '@/components/BlogCard'

const Blog = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundBlog.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-56 my-10 justify-center align-center text-center">
          <div className="my-16">
            <span className="text-green-500">BLOG</span>
            <h2 className="font-extrabold text-4xl">Latest News</h2>
          </div>
          <div className="flex gap-6">
            {blogs.map(
              ({ comments, day, image, month, role, text, theme }, index) => (
                <BlogCard
                  key={index}
                  comments={comments}
                  day={day}
                  image={image}
                  month={month}
                  role={role}
                  text={text}
                  theme={theme}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
