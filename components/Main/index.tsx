import { Omen } from "../../interfaces/omen"

interface Props {
  omens: Omen[]
}

export const Main = ({ omens }: Props) => {
  return (
    <nav className="bg-red-300 flex-grow ">
      <div className="flex max-w-2xl flex-wrap">
        {[...omens, ...omens].map((omen, i) => (
          <div key={`img-${i}`} >
            <img src={omen.src} alt="" className="max-h-32" />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Main
