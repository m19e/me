export type SectionContent = {
  title: [string]
  text: string
}

export type WorkContent = {
  id: string
  title: string
  description: string
  sections: SectionContent[]
}
