import type { NextPage, InferGetStaticPropsType } from "next"

import type { WorkContent } from "types"
import { Client } from "utils"
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
