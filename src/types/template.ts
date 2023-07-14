import { UUID } from 'crypto'

export interface Btn {
  color: string
  bg_color: string
}

export interface Button {
  type: number
  color: string
  bg_color: string
  at: string
}

export interface Template {
  title: string
  description: string
  color: string
  bg_color: string
  btn: Button
}

export interface TemplateRow {
  id: string
  name: string
  parent: UUID
  body: Template
}

export interface EmailRow {
  created_at: string | null
  email: string
  id: number
  parent: string
  template_id: string
}
