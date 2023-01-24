/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { Link as Scroll } from "react-scroll"

import type { WorkContent } from "types"
import { Sections } from "components/molecules/Sections"

interface Props {
  contents: WorkContent[]
}

export const Works = ({ contents }: Props) => {
  const works = contents.map((c, i) => (
    <Work key={c.title} content={c} last={contents.length === i + 1} />
  ))

  return (
    <div className="flex flex-col gap-4 items-center min-h-screen">
      <Hero />
      {works}
      <Footer />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="flex justify-center px-8 w-full md:px-auto">
      <div className="aspect-video flex flex-col justify-center w-full md:w-[900px]">
        <h1 className="space-y-4">
          <span className="text-6xl font-thin font-latego">m19e.me</span>
          <div className="flex flex-col px-1 text-xl italic font-thin leading-6">
            <span>PORTFOLIO OF m19e</span>
            <span>FRONTEND DEVELOPER</span>
          </div>
        </h1>
      </div>
    </div>
  )
}

const Work = ({ content, last }: { content: WorkContent; last: boolean }) => {
  const { title, description, sections, links } = content
  const controls = useAnimationControls()

  const openDetail = () => {
    controls.start({
      height: "100%",
    })
  }
  const closeDetail = () => {
    controls.start({
      height: "0px",
    })
  }

  const summaryID = `summary-${title}`
  const detailID = `detail-${title}`

  return (
    <>
      <div className="flex justify-center px-8 w-full md:px-auto">
        <div className="aspect-[15/7] relative w-full md:w-[900px]">
          <Image
            layout="fill"
            src="https://placehold.jp/900x420.png"
            alt="mock"
          />
          <Scroll to={detailID} duration={last ? 1000 : 500} smooth>
            <div
              id={summaryID}
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300"
              onClick={openDetail}
            >
              <div className="flex items-center px-10 h-full">
                <p className="font-sans font-thin text-white">{title}</p>
              </div>
            </div>
          </Scroll>
        </div>
      </div>

      <motion.div
        id={detailID}
        className="overflow-hidden w-full h-0"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center px-8 pb-8 mb-8 w-full bg-zinc-50 md:px-auto">
          <div className="space-y-8 w-full md:w-[900px]">
            <div className="">
              <div className="flex justify-end">
                <Scroll to={summaryID} duration={1000} smooth>
                  <button onClick={closeDetail} className="w-20 h-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.2}
                      stroke="currentColor"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Scroll>
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
            <div className="flex flex-wrap">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-latego">
                  {description}
                </h3>
              </div>
              <div className="flex gap-2 px-2">
                <a href="" className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-current"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="" className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <Sections contents={sections} />
          </div>
        </div>
      </motion.div>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="flex items-center p-8 w-full footer text-base-content">
      <div className="flex flex-1 items-center">
        <p className="text-base font-latego">©2023 m19e</p>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/m19e" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
