import LeftDrawer from "../components/LeftDrawer"
import Main from "../components/Main"
import RightDrawer from "../components/RightDrawer"

export const Page = () => {
  return (
    <div className="w-screen h-screen">
      <main className="flex h-full">
        <LeftDrawer />
        <Main />
        <RightDrawer
          omens={[]}
        />
      </main>
    </div>
  )
}

export default Page
