import type { SectionContent } from "types/cms"

interface Props {
  contents: SectionContent[]
}

export const Sections = ({ contents }: Props) => {
  const sections = contents.map(({ title, text }) => (
    <div key={title[0]} className="space-y-2">
      <h3 className="text-sm md:text-base">{title[0]}</h3>
      <p className="text-xs whitespace-pre-wrap md:text-sm">{text}</p>
    </div>
  ))

  return <div className="space-y-4 font-rounded">{sections}</div>
}
