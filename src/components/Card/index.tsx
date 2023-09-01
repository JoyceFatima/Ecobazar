import { container } from '@/assets'

interface CardProps {
  title: string
  children: React.ReactNode
  icon: string
}

const Card = ({ title, children, icon }: CardProps) => {
  return (
    <div className="w-full border border-green-200 rounded-lg p-6">
      <div
        className="w-14 h-14 rounded-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${container.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <img src={icon} alt="" />
      </div>
      <div className="mt-4">
        <h3 className="mb-2 font-medium">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default Card
