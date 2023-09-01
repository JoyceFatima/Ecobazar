import { vector } from '@/assets/svg'

interface ProfileBoxProps {
  comments: string
  image: string
  user: string
  role: string
}

const ProfileBox = ({ comments, image, user, role }: ProfileBoxProps) => {
  return (
    <div className="w-424 h-254 p-6 rounded-lg bg-white">
      <div className="my-2">
        <img src={vector.src} alt="" />
      </div>
      <p className="my-4 text-gray-800">{comments}</p>
      <div className="flex gap-16">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div
              className="w-14 h-14 rounded-full bg-gray-300"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="ms-4">
              <p className=" font-bold">{user}</p>
              <p className="block">{role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBox
