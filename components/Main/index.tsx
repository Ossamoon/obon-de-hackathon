import { useEffect, useRef, useState } from "react"
import { Omen } from "../../interfaces/omen"

const useDoubleClickHandler = (handlers: {
  single?: React.MouseEventHandler,
  double?: React.MouseEventHandler
}) => {
  const [flag, setFlag] = useState<boolean>(false)

  const result: React.MouseEventHandler = (e) => {
    if (flag) {
      console.log("double click", flag)
      handlers.double?.(e)
      setFlag(false)
    } else {
      console.log("single click", flag)

      handlers.single?.(e)
      setFlag(true)
      setTimeout(() => {
        setFlag(false)
      }, 500)
    }
  }

  return result
}

interface OmenCardProps {
  src: string
  onClick: React.MouseEventHandler
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
}

const OmenCard = ({ src, onClick, onFocus, onBlur }: OmenCardProps) => {
  return (
    <>
      <button className="
        bg-gray-100 hover:bg-gray-400 focus:bg-gray-400 
        border-4 border-opacity-0 focus:border-opacity-100
        border-blue-500  
        rounded-xl m-2
      " onClick={useDoubleClickHandler({ double: onClick })}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <span>
          <img src={src} alt="" className="max-h-40" />
        </span>
      </button>
    </>
  )
}

interface OmenModalProps {
  omen: Omen
  onClose: () => void
  onPrint: () => void
}

const OmenModal = ({ omen, onPrint, onClose }: OmenModalProps) => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 w-full bg-white z-10">
      <div className="flex w-full justify-between">
        <div className="w-6/10 bg-white">
          <img src={omen.src} alt="" className="w-full" />
        </div>
        <div className="flex flex-col justify-between flex-grow bg-gray-200">
          <div>
            <span className="ml-2 text-3xl">Test-Title</span><br />

            <span className="ml-2 text-xl">#Tag1</span><br />
            <span className="ml-2 text-xl">#Tag2</span><br />
            <span className="ml-2 text-xl">#Tag3</span><br />
          </div>

          <div className="flex justify-center">
            <div>
              <button
                className="bg-green-200 hover:bg-green-300 m-2 px-12 py-1 text-lg rounded"
                onClick={onPrint}
              >
                Print
              </button>
            </div>

            <div>
              <button
                className="bg-red-200 hover:bg-red-300 m-2 px-4 py-1 text-lg rounded"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  omens: Omen[]
  isOverlay: boolean
  setIsOverlay: (value: boolean) => void
  selectOmenIndex: number
  setSelectOmenIndex: (value: number) => void
}

export const Main = ({ omens, isOverlay, setIsOverlay, selectOmenIndex, setSelectOmenIndex  }: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOverlay) {
      setIsModal(false)
    }
  }, [isOverlay])

  return (
    <nav className="relative pl-2/10 pr-3/10 bg-white">
      <div className="flex max-w-2xl flex-wrap" ref={ref}>
        {[...omens, ...omens].map((omen, i) => (
          <OmenCard src={omen.src} key={i}
            onClick={() => {
              setIsModal(true)
              setIsOverlay(true)
            }}
            onFocus={() => {
              setSelectOmenIndex(i % 5)
            }}
            onBlur={e => {
              if (isModal) {
                ref.current?.querySelectorAll("button")[selectOmenIndex]?.focus()
              } else {
                setSelectOmenIndex(-1)
              }
            }}
          />
        ))}
      </div>

      {0 <= selectOmenIndex && isModal && (
        <OmenModal
          omen={omens[selectOmenIndex]}
          onPrint={() => {
            window.print()
          }}
          onClose={() => {
            setIsOverlay(false)
          }}
        />
      )}
    </nav>
  )
}

export default Main
