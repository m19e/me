/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { Link as Scroll } from "react-scroll";

import type { DynamicImage } from "types/image"

import { BlurImage } from "./BlurImage";

type Props = {
  id: string
  title: string
  image: DynamicImage
  onOpen: () => void
  last: boolean
}

export const Summary = ({ id, title, image, onOpen, last }: Props) => {
  const summaryID = `summary-${id}`
  const detailID = `detail-${id}`

  return (
    <div className="flex justify-center px-8 w-full md:px-auto">
      <div className="relative w-full md:w-[900px]">
        <BlurImage {...image} />
        <Scroll to={detailID} duration={last ? 1000 : 500} smooth>
          <div
            id={summaryID}
            className="absolute inset-0 mb-1.5 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={onOpen}
          >
            <div className="flex items-center px-10 h-full">
              <p className="font-rounded text-white">{title}</p>
            </div>
          </div>
        </Scroll>
      </div>
    </div>
  )
}
