interface BlogCardProps {
  image: string
  day: string
  month: string
  theme: string
  role: string
  comments: string
  text: string
}

const BlogCard = ({
  image,
  day,
  month,
  theme,
  role,
  comments,
  text,
}: BlogCardProps) => {
  return (
    <div className="w-[424px]  bg-white shadow-lg rounded-lg overflow-hidden pb-2">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="min-h-[324px] flex items-end"
      >
        <div className="bg-white justify-center w-[65px] h-[65px] flex flex-col ms-5 mb-5 rounded">
          <span className="font-bold text-black">{day}</span>
          <span className="text-sm text-gray-400">{month}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{theme}</span>
          <span className="text-gray-600">{role}</span>
          <p className="text-gray-600">{comments}</p>
        </div>

        <div className="mt-4">
          <p className="text-left cursor-pointer hover:text-green-700 text-black font-medium">
            {text}
          </p>
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="text-green-500 hover:underline flex items-center"
          >
            Read more
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
