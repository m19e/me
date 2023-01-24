/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { Link as Scroll } from "react-scroll"

import type { WorkContent } from "types/cms"
import { Icon } from "components/atoms/Icon"
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
                    <Icon type="x" />
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
                  <Icon type="github" />
                </a>
                <a href="" className="w-6 h-6">
                  <Icon type="link" />
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
        <a
          className="w-6 h-6"
          href="https://github.com/m19e"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="github" />
        </a>
      </div>
    </footer>
  )
}
