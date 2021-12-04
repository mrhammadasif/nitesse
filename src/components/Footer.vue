<script setup lang="ts">
import { useBookStore } from '../stores/book'
import { isDark, toggleDark } from '~/composables'
const { t, availableLocales, locale } = useI18n()

const bookStore = useBookStore()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

</script>

<template>
  <p>Total Count of Books is {{ bookStore.bookCount }}</p>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn-red mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <button class="icon-btn-pink mx-2" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a class="icon-btn-blue mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <router-link class="icon-btn-teal mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn-purple mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template>
