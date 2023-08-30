import { logo } from "@/assets";
import Logo from "../Logo";

interface HeaderProps {
  companyName: string;
}

export default function Header({ companyName }: HeaderProps) {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gray-50 text-white">

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
  );
}
