import { useEffect, useRef, useState } from "react"
import { Omen } from "../../interfaces/omen"

const useDoubleClickHandler = (handlers: {
  single?: React.MouseEventHandler,
  double?: React.MouseEventHandler
}) => {
  const [flag, setFlag] = useState<boolean>(false)

  const result: React.MouseEventHandler = (e) => {
    if (flag) {
      handlers.double?.(e)
      setFlag(false)
    } else {
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
        bg-yellow-100 hover:bg-white focus:bg-white
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
    <div className="absolute flex w-screen h-screen top-0 left-0">
      <div className="flex w-full h-full ml-3/10 mr-2/10 items-center">
        <div className="flex w-full justify-between z-10">
          <div className="w-6/10 bg-white">
            <img src={omen.src} alt="" className="w-full" />
          </div>
          <div className="flex flex-col justify-between flex-grow bg-yellow-100">
            <div>
              <span className="ml-2 text-3xl">{omen.name}</span><br />

              {omen.tag.map((tag, i) => (<>
                <span className="ml-2 text-xl" key={i}>#{tag}</span><br />
              </>))}
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
    </div>
  )
}

interface Props {
  omens: Omen[]
  searchWord: string
  isOverlay: boolean
  setIsOverlay: (value: boolean) => void
  selectOmenIndex: number
  setSelectOmenIndex: (value: number) => void
}

export const Main = ({
  omens, searchWord,
  isOverlay, setIsOverlay,
  selectOmenIndex, setSelectOmenIndex
}: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOverlay) {
      setIsModal(false)
    }
  }, [isOverlay])

  return (
    <div className="relative pl-3/10 pr-2/10 bg-yellow-100 min-h-screen">
      <div className="flex max-w-2xl flex-wrap" ref={ref}>
        {omens.filter(
          omen => searchWord ? omen.name.includes(searchWord) : true
        ).map((omen, i) => (
          <OmenCard src={omen.src} key={i}
            onClick={() => {
              setIsModal(true)
              setIsOverlay(true)
            }}
            onFocus={() => {
              setSelectOmenIndex(i)
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
    </div>
  )
}

export default Main
