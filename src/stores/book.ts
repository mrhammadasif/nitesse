import { acceptHMRUpdate, defineStore } from 'pinia'
import { IBook } from '../types'

export const useBookStore = defineStore('book', () => {
  const books = ref(new Set<IBook>())

  const bookCount = computed(() => books.value.size)

  function addNewBook(book: IBook) {
    books.value.add(book)
  }

  return {
    books, bookCount, addNewBook,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot))
