import type { SectionContent } from "types"

interface Props {
  contents: SectionContent[]
}

export const Sections = ({ contents }: Props) => {
  const sections = contents.map(({ title, text }) => (
    <div key={title[0]} className="space-y-2">
      <h3 className="text-base tracking-wide md:text-lg">{title[0]}</h3>
      <p className="text-sm whitespace-pre-wrap md:text-base">{text}</p>
    </div>
  ))

  return <div className="space-y-4">{sections}</div>
}
