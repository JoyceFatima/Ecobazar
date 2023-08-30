interface TitleWithLinkProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

export default function TitleWithLink ({ title, linkText, linkUrl }: TitleWithLinkProps) {
  return (
    <div className="flex items-center justify-between mx-56 mt-16 mb-10">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <a href={linkUrl} className="text-green-400 hover:text-green-500">
        {linkText}
      </a>
    </div>
  );
};
