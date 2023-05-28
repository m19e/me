import type { NextPage, InferGetStaticPropsType } from "next"
import { getPlaiceholder } from "plaiceholder"

import { Client } from "utils"
import type { WorkContent } from "types/cms"
import type { DynamicImage } from "types/image"
import { Works } from "components/Works"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = (props) => {
  return <Works {...props} />
}

const getPlaiceholderAll = async (work: WorkContent) =>
  Promise.all(
    work.images.map(async ({ image, alt }) => {
      const { base64, img } = await getPlaiceholder(image.url)

      return {
        imageProps: { ...img, blurDataURL: base64 },
        alt,
      } as DynamicImage
    })
  )

export const getStaticProps = async () => {
  const { contents } = await Client.getList<WorkContent>({
    endpoint: "works",
    queries: { limit: 50 },
  })

  const images: DynamicImage[][] = await Promise.all(
    contents.map(getPlaiceholderAll)
  )

  return {
    props: {
      contents,
      images,
    },
  }
}

export default Page
