import { useState } from "react"
import { Omens } from "../assets/omens"
import LeftDrawer from "../components/LeftDrawer"
import Main from "../components/Main"
import RightDrawer from "../components/RightDrawer"

export const Page = () => {
  const [isOverlay, setIsOverlay] = useState<boolean>(false)

  return (
    <div className="w-screen h-screen relative">
      <main className="flex h-full">
        <LeftDrawer />

        <Main
          omens={Omens}
          setIsOverlay={setIsOverlay}
        />

        <RightDrawer
          omens={[]}
        />
      </main>

      {isOverlay && (
        <div className="absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0"/>
      )}
    </div>
  )
}

export default Page
