import { container, containerFill } from '@/assets'

interface SelectCardProps {
  text: string
  title: string
  image: string
  selected?: boolean
}

const SelectCard = ({
  text,
  title,
  image,
  selected = false,
}: SelectCardProps) => {
  return (
    <div className="flex flex-col items-center w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
      <div
        className="w-16 h-16 rounded-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${
            selected ? containerFill.src : container.src
          })`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <img src={image} alt="Imagem" className="mx-auto" />
      </div>
      <h3 className="text-center mt-4 text-lg font-semibold">{title}</h3>
      <span className="block text-center text-gray-400 mt-2">{text}</span>
    </div>
  )
}

export default SelectCard
