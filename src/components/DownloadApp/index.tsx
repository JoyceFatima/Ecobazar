interface DownloadAppProps {
  icon: string
  text: string
}

const DownloadApp = ({ icon, text }: DownloadAppProps) => {
  return (
    <div className="cursor-pointer min-w-[154px] bg-neutral-800 rounded-md p-2 flex gap-3">
      <img src={icon} alt="" />
      <div>
        <span className="text-zinc-300 text-sm">Download on the</span>
        <br />
        <span className="text-white">{text}</span>
      </div>
    </div>
  )
}

export default DownloadApp
