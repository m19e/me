import type { NextPage, InferGetStaticPropsType } from "next"
import { Client } from "libs/client"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ blogs }) => {
  return <p className="whitespace-pre">{JSON.stringify(blogs, null, 4)}</p>
}

export const getStaticProps = async () => {
  const blogs = await Client.getList({ endpoint: "blogs" })

  return {
    props: {
      blogs,
    },
  }
}

export default Page
