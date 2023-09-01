interface TitleWithLinkProps {
  title: string
  linkText: string
  linkUrl: string
}

export default function TitleWithLink({
  title,
  linkText,
  linkUrl,
}: TitleWithLinkProps) {
  return (
    <div className="flex items-center justify-between mx-56 mt-16 mb-10">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <a
        href={linkUrl}
        className="flex items-center gap-2 text-green-400 hover:text-green-500"
      >
        <span>{linkText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </a>
    </div>
  )
}
