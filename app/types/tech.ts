// types/tech.ts
export type TechStatus = 'expert' | 'intermediate' | 'learning'

export interface TechItem {
  name: string
  icon: string
  bgColor: string
  status: TechStatus
}

export interface PageItem {
  title: string
  description: string
  href: string
  highlight?: boolean
}