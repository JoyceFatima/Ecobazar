interface NumbersCardProps {
  title: string
  text: string
}

const NumbersCard = ({ title, text }: NumbersCardProps) => {
  return (
    <div className="flex justify-center items-center h-[174px] w-[312px] p-4 bg-white bg-opacity-10 rounded-lg">
      <div className="">
        <div className="text-center text-4xl text-green-500">{title}</div>
        <span className="block text-center mt-2  text-white">{text}</span>
      </div>
    </div>
  )
}

export default NumbersCard
