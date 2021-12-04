import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface IBook {
  name: string
  isbn: string
  author: string
}
