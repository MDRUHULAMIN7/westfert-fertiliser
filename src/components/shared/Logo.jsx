import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <Link to={''} className="flex items-center gap-1 mx-6 ">
        <div  className="flex flex-col">
            <h1 className="text-5xl font-bold text-[#58553A]">Westfert</h1>
            <h6 className="text-[12px] font-medium text-center text-[#75864D]">FERTILISERS</h6>
        </div>

        <div className="w-12 h-12 bg-primary"></div>
    </Link>
  )
}

export default Logo