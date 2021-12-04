<script setup lang="ts">
import * as yup from 'yup'
import { useBookStore } from '../stores/book'
const { t } = useI18n()
const name = ref('')
const isbn = ref('')
const author = ref('')
const storedVal = useStorage('stored-val', 'default-value')
const bookStore = useBookStore()

const addBook = () => {
  if (name.value && isbn.value && author.value) {
    bookStore.addNewBook({
      name: name.value,
      isbn: isbn.value,
      author: author.value,
    })
    name.value = ''
    isbn.value = ''
    author.value = ''
  }
  else {
    alert('Please fill all the fields')
  }
}
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse + Customized
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />
    <!-- <input v-model="storedVal" type="text" class="input" placeholder="enter book name..."> -->
    <ValidationForm class="flex items-center justify-center flex-col space-y-4">
      <ValidationField
        label="Book Name"
        name="name"
        :rules="yup.string().required().min(8)"
        class="ring ring-teal rounded-1"
      />
      <ValidationField
        label="Book Name"
        name="name"
        :rules="yup.string().required().min(8)"
      />
    </ValidationForm>
    <!-- <ValidationForm :validation-schema="schema" @submit="addBook">
      <div class="flex align-center justify-center flex-col mx-a mb-10" max-w="200px" space="y-2" all="transition-200" />

      <button class="btn-red" type="submit">
        {{ t('book.add') }}
      </button>
    </ValidationForm> -->
  </div>
</template>

<style>
[ValidationError] {
  color: red;
}
</style>
