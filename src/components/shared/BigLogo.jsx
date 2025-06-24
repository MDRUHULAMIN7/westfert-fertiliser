import { Link } from "react-router-dom"


const BigLogo = () => {
  return (
    <Link to={'/'} className="flex items-center gap-1  ">
        <div  className="flex flex-col">
            <h1 className="text-9xl font-bold text-[#58553A]">Westfert</h1>
            <h6 className="text-[42px] font-medium text-center text-[#75864D]">FERTILISERS</h6>
        </div>

        <div className="w-36 h-36 ml-4 bg-primary"></div>
    </Link>
  )
}

export default BigLogo