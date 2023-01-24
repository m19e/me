import type { NextPage, InferGetStaticPropsType } from "next"

import { Client } from "utils"
import type { WorkContent } from "types/cms"
import { Works } from "components/molecules/Works"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ contents }) => {
  return <Works contents={contents} />
}

export const getStaticProps = async () => {
  const works = await Client.getList<WorkContent>({ endpoint: "works" })

  return {
    props: {
      contents: works.contents,
    },
  }
}

export default Page
