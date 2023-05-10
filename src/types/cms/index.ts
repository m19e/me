export type ImageContent = {
  image: {
    url: string
    width: number
    height: number
  }
  alt: string
}

export type SectionContent = {
  title: [string]
  text: string
}

export type IconType = "github" | "link" | "download" | "twitter"

export type LinkContent = {
  icon: [IconType]
  href: string
}

export type WorkContent = {
  id: string
  title: string
  description: string
  images: ImageContent[]
  links: LinkContent[]
  sections: SectionContent[]
}
