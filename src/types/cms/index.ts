export type SectionContent = {
  title: [string]
  text: string
}

export type IconType = "github" | "link" | "download"

export type LinkContent = {
  icon: [IconType]
  href: string
}

export type WorkContent = {
  id: string
  title: string
  description: string
  sections: SectionContent[]
  links: LinkContent[]
}
