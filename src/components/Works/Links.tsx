import type { LinkContent } from "types/cms"
import { Icon } from "components/atoms/Icon"

type Props = {
  links: LinkContent[]
}

export const Links = ({ links }: Props) => {
  const icons = links.map(({ icon, href }) => (
    <a
      key={href}
      href={href}
      className="w-6 h-6 hover:text-zinc-500 transition-colors"
    >
      <Icon type={icon[0]} />
    </a>
  ))

  return <div className="flex gap-2 justify-end px-2">{icons}</div>
}
