interface ButtonCardProps {
  title: string
  product: string
  image: string
  selected?: boolean
}

const ButtonCard = ({
  title,
  product,
  image,
  selected = false,
}: ButtonCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between p-10 px-8 bg-white border rounded-md ${
        selected && 'border-green-500'
      }`}
    >
      <img src={image} alt="" />
      <div className="flex flex-col text-center items-center justify-center">
        <span className="font-semibold mt-4">{title}</span>
        <span>{`${product} Products`}</span>
      </div>
    </div>
  )
}

export default ButtonCard
