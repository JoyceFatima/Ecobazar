import Logo from '../Logo'

interface HeaderProps {
  companyName: string
}

export default function Header({ companyName }: HeaderProps) {
  return (
    <div>
      <header className="flex items-center justify-between p-2 bg-green-50 text-white">
        <div className="mx-56 flex text-center items-center">
          <svg
            className="w-6 h-6 text-green-800 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="text-center text-sm text-green-800">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>
        <div className="flex space-x-4 mx-56 text-center items-center">
          <a href="#" className="text-green-800">
            Eng
          </a>
          <a href="#" className="text-green-800">
            USD
          </a>
        </div>
      </header>
      <header className="mx-56 flex items-center justify-between p-4 bg-white text-white">
        <div className="space-x-4">
          <a href="#" className="text-gray-900">
            Link 1
          </a>
          <a href="#" className="text-gray-900">
            Link 2
          </a>
          <a href="#" className="text-gray-900">
            Link 3
          </a>
          <a href="#" className="text-gray-900">
            Link 4
          </a>
          <a href="#" className="text-gray-900">
            Link 5
          </a>
        </div>
        <div className="mx-auto">
          <Logo />
        </div>
        <div className="flex items-center space-x-4">
          <span className="mr-4 text-gray-900">{companyName}</span>
          <div className="w-8 h-8 flex items-center justify-center"></div>
          <div className="w-8 h-8 flex items-center justify-center"></div>
          <div className="w-8 h-8 flex items-center justify-center"></div>
          <div className="w-8 h-8 flex items-center justify-center"></div>
        </div>
      </header>
    </div>
  )
}
