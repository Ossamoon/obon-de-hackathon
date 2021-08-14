import { useEffect, useState } from "react"
import LeftDrawer from "../components/LeftDrawer"
import Main from "../components/Main"
import RightDrawer from "../components/RightDrawer"
import { Omen } from "../interfaces/omen"
import { getAllOmenData } from "../lib/getAllOmenData"

const useAllOmenData = () => {
  const [omens, setOmens] = useState<Omen[]>([])

  useEffect(() => {
    getAllOmenData()
      .then(omens => setOmens(omens))
      .catch(console.error)
  }, [])

  return omens
}
export const Page = () => {
  const omens = useAllOmenData()

  const [isOverlay, setIsOverlay] = useState<boolean>(false)
  const [selectOmenIndex, setSelectOmenIndex] = useState<number>(-1)

  return (
    <>
      <div className="w-screen h-screen relative block print:hidden">
        <main className="h-full relative">
          <Main
            omens={omens}
            isOverlay={isOverlay}
            setIsOverlay={setIsOverlay}
            selectOmenIndex={selectOmenIndex}
            setSelectOmenIndex={setSelectOmenIndex}
          />

          <LeftDrawer />

          <RightDrawer
            omens={[]}
          />
        </main>

        {isOverlay && (
          <div
            className="absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0"
            onClick={() => setIsOverlay(false)}
          />
        )}
      </div>

      {0 <= selectOmenIndex && (
        <div className="hidden print:block">
          <img src={omens[selectOmenIndex].src} alt="" className="w-full" />
        </div>
      )}
    </>
  )
}

export default Page
