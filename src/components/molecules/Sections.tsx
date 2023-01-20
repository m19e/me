import type { SectionContent } from "types"

interface Props {
  contents: SectionContent[]
}

export const Sections = ({ contents }: Props) => {
  const sections = contents.map(({ title, text }) => (
    <div key={title[0]} className="space-y-2 font-latego">
      <h3 className="text-sm md:text-base tracking-wid">{title[0]}</h3>
      <p className="text-xs whitespace-pre-wrap md:text-sm">{text}</p>
    </div>
  ))

  return <div className="space-y-4">{sections}</div>
}
