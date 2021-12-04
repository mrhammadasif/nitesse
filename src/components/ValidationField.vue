<script setup lang="ts">
import { useField } from 'vee-validate'
import * as yup from 'yup'

const props = defineProps<{
  label: string
  name: string
  rules: yup.BaseSchema
  class: string
}>()
const { errorMessage, value } = useField(props.name, props.rules as any)

</script>

<template>
  <div flex-col flex items-start max-w-300px mx-2>
    <label class="text-3" :for="props.name">{{ props.label }}</label>
    <input
      :id="props.name"
      ref="inputRef"
      v-model="value"
      :placeholder="props.label"
      :class="class"
      class="input"
      type="text"
      w-full
      v-bind="$attrs"
    >
    <span
      v-if="errorMessage"
      text-red
      text-3
      mt-1
      w-full
      text-wrap
      text-left
    >{{ errorMessage }}</span>
  </div>
</template>
