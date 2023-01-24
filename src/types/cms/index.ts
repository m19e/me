export type SectionContent = {
  title: [string]
  text: string
}

export type WorkContent = {
  title: string
  description: string
  sections: SectionContent[]
}
