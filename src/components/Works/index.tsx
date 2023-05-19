import Head from "next/head"
import { motion, useAnimationControls } from "framer-motion"

import type { WorkContent } from "types/cms"
import type { DynamicImage } from "types/image"

import { Detail } from "./Detail"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Summary } from "./Summary"

interface Props {
  contents: WorkContent[]
  images: DynamicImage[][]
}

export const Works = ({ contents, images }: Props) => {
  const works = contents.map((c, i) => (
    <Work
      key={c.id}
      content={c}
      images={images[i]}
      last={contents.length === i + 1}
    />
  ))

  return (
    <>
      <Head>
        <title>m19e/me</title>
      </Head>
      <div className="flex flex-col gap-4 items-center min-h-screen">
        <Hero />
        {works}
        <Footer />
      </div>
    </>
  )
}

type WorkProps = {
  content: WorkContent
  images: DynamicImage[]
  last: boolean
}

const Work = ({ content, images, last }: WorkProps) => {
  const { id, title } = content
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

  const [summaryImage, ...detailImages] = images
  const detailID = `detail-${id}`

  return (
    <>
      <Summary
        id={id}
        title={title}
        image={summaryImage}
        onOpen={openDetail}
        last={last}
      />

      <motion.div
        id={detailID}
        className="overflow-hidden w-full h-0"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <Detail work={content} images={detailImages} onClose={closeDetail} />
      </motion.div>
    </>
  )
}
