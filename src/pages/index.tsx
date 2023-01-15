import type { NextPage, InferGetStaticPropsType } from "next"
import { Client } from "libs/client"

type WorkContent = {
  title: string
  description: string
  sections: {
    title: string[]
    text: string
  }[]
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ contents }) => {
  return <p className="whitespace-pre">{JSON.stringify(contents, null, 4)}</p>
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
