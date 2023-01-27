import type { NextPage, InferGetStaticPropsType } from "next"

import { Client } from "utils"
import type { WorkContent } from "types/cms"
import { Works } from "components/molecules/Works"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = (props) => {
  return <Works {...props} />
}

export const getStaticProps = async () => {
  const { contents } = await Client.getList<WorkContent>({ endpoint: "works" })

  return {
    props: {
      contents,
    },
  }
}

export default Page
