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
          <div className="flex flex-col text-xl italic font-thin">
            <span>PORTFOLIO OF m19e</span>
            <span>FRONTEND DEVELOPER</span>
          </div>
        </h1>
      </div>
    </div>
  )
}

const Work = ({ content, last }: { content: WorkContent; last: boolean }) => {
  const { title, sections } = content
  const controls = useAnimationControls()

  const openDetail = () => {
    controls.start({
      height: "100%",
    })
  }
  const closeDetail = () => {
    controls.start({
      height: "4px",
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
          <Scroll to={`detail-${title}`} duration={last ? 1000 : 500} smooth>
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
        className="overflow-hidden pt-1 w-full"
        initial={{ height: "4px" }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center px-8 pb-8 mb-8 w-full bg-zinc-50 md:px-auto">
          <div className="space-y-8 w-full md:w-[900px]">
            <div className="">
              <div className="flex justify-end">
                <Scroll to={summaryID} duration={1000} smooth>
                  <button onClick={closeDetail}>
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
            {/* <p>{description}</p> */}
            <Sections contents={sections} />
          </div>
        </div>
      </motion.div>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="flex items-center p-4 w-full md:max-w-xl footer bg-neutral text-neutral-content md:rounded-t-box">
      <div className="flex flex-1 items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>©2023 m19e</p>
      </div>
      <div className="flex gap-2">
        <a
          href="https://twitter.com/Versas_me"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/m19e/artifact-scorer"
          target="_blank"
          rel="noreferrer"
        >
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
