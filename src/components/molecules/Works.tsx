/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from "next/image"

import type { WorkContent } from "types"
import { Sections } from "components/molecules/Sections"

interface Props {
  contents: WorkContent[]
}

export const Works = ({ contents }: Props) => {
  const works = contents.map((c) => <Work key={c.title} content={c} />)

  return (
    <div className="flex flex-col gap-8 items-center min-h-screen">{works}</div>
  )
}

const Work = ({ content }: { content: WorkContent }) => {
  const { title, sections } = content

  return (
    <>
      <div className="flex justify-center px-8 w-full md:px-auto">
        <div className="aspect-[15/7] relative w-full md:w-[900px]">
          <Image
            layout="fill"
            src="https://placehold.jp/900x420.png"
            alt="mock"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center px-10 h-full">
              <p className="font-sans font-thin text-white">{title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-8 pb-12 w-full bg-zinc-50 md:px-auto">
        <div className="space-y-8 w-full md:w-[900px]">
          <div className="">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.2}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-3xl italic font-thin">{title}</h2>
          </div>
          <div className="relative w-full">
            <Image
              src="https://placehold.jp/900x420.png"
              alt="mock"
              width={900}
              height={420}
            />
          </div>
          {/* <p>{description}</p> */}
          <Sections contents={sections} />
        </div>
      </div>
    </>
  )
}