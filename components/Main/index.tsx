import { Omen } from "../../interfaces/omen"

interface OmenCardProps {
  src: string
}

const OmenCard = ({ src }: OmenCardProps) => {
  return (
    <>
      <button className="
        bg-gray-100 hover:bg-gray-400 focus:bg-gray-400 
        border-4 border-opacity-0 focus:border-opacity-100
        border-blue-500  
        rounded-xl m-2 
      ">
        <span>
          <img src={src} alt="" className="  max-h-40" />
        </span>
      </button>
    </>
  )
}

interface Props {
  omens: Omen[]
}

export const Main = ({ omens }: Props) => {
  return (
    <nav className="bg-white flex-grow ">
      <div className="flex max-w-2xl flex-wrap">
        {[...omens, ...omens].map((omen, i) => (
          <OmenCard src={omen.src} key={i} />
        ))}
      </div>
    </nav>
  )
}

export default Main
