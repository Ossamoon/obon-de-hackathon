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

  const [searchWord, setSearchWord] = useState<string>("")

  return (
    <>
      <div className="w-full relative block print:hidden">
        <main className="h-full relative">
          <Main
            omens={omens}
            searchWord={searchWord}
            isOverlay={isOverlay}
            setIsOverlay={setIsOverlay}
            selectOmenIndex={selectOmenIndex}
            setSelectOmenIndex={setSelectOmenIndex}
          />

          <LeftDrawer
            onSubmit={setSearchWord}
          />

          <RightDrawer
            omen={omens[selectOmenIndex]}
          />
        </main>

        {isOverlay && (
          <div
            className="absolute w-screen h-screen bg-gray-900 opacity-50 top-0 left-0"
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
