import { Link as Scroll } from "react-scroll"

import type { WorkContent } from "types/cms"
import type { DynamicImage } from "types/image"

import { Sections } from "components/molecules/Sections"
import { Icon } from "components/atoms/Icon"

import { BlurImage } from "./BlurImage"
import { Links } from "./Links"

type Props = {
  work: WorkContent
  images: DynamicImage[]
  onClose: () => void
}

export const Detail = ({ work, images, onClose }: Props) => {
  const { id, title, description, links, sections } = work
  const summaryID = `summary-${id}`

  const detailImages = images.map((image) => (
    <BlurImage key={image.alt} {...image} />
  ))

  return (
    <div className="flex justify-center px-8 pb-8 mb-8 w-full bg-zinc-50 md:px-auto">
      <div className="space-y-8 w-full md:w-[900px]">
        <div className="">
          <div className="flex justify-end">
            <Scroll className="w-20 h-20" to={summaryID} duration={1000} smooth>
              <button onClick={onClose}>
                <Icon type="x" />
              </button>
            </Scroll>
          </div>
          <h2 className="font-rounded text-3xl italic font-light">{title}</h2>
        </div>
        <div>{detailImages}</div>
        <div className="flex flex-col sm:flex-row">
          <h3 className="flex-1 font-rounded text-base whitespace-nowrap md:text-lg">
            {description}
          </h3>
          <Links links={links} />
        </div>
        <Sections contents={sections} />
      </div>
    </div>
  )
}
