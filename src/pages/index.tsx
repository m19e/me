/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import type { NextPage, InferGetStaticPropsType } from "next"
import { Client } from "libs/client"

type SectionContent = {
  title: string[]
  text: string
}

type WorkContent = {
  title: string
  description: string
  sections: SectionContent[]
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ contents }) => {
  const works = contents.map(({ title, description, sections }) => (
    <div key={title} className="px-8 w-full md:w-[900px] bg-gray-20 md:px-auto">
      <div
        className="relative"
        style={{
          aspectRatio: "15 / 7",
        }}
      >
        <img
          className="w-full h-full"
          src="https://placehold.jp/900x420.png"
          alt="mock"
        />
        <div className="flex absolute inset-0 items-center px-10 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
          <p className="font-sans text-white">{title}</p>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>{description}</p>
      <Sections contents={sections} />
    </div>
  ))

  return (
    <div className="flex flex-col gap-8 items-center min-h-screen">{works}</div>
  )
}

interface SectionsProps {
  contents: SectionContent[]
}

const Sections = ({ contents }: SectionsProps) => {
  const sections = contents.map(({ title, text }) => (
    <div key={title[0]} className="space-y-2">
      <h3 className="text-base tracking-wide md:text-lg">{title[0]}</h3>
      <p className="text-sm whitespace-pre-wrap md:text-base">{text}</p>
    </div>
  ))

  return <div className="space-y-4">{sections}</div>
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
