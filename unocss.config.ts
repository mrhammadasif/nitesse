import { Rule, UserShortcuts } from 'unocss'

export const shortcuts: UserShortcuts<{}> = [
  [/^btn-(.*)$/, ([, c]) => `btn bg-${c}-400 text-${c}-100  disabled:bg-${c}-600`],
  ['btn', 'transition-400 rounded-lg py-2 px-4 border-0 disabled:cursor-default cursor-pointer disabled:opacity-50'],
  [/^icon-btn-(.*)$/, ([, c]) => `icon-btn bg-${c}-400 hover:bg-${c}-600 text-${c}-100  disabled:bg-${c}-600`],
  ['icon-btn', 'transition-400 text-4 flex-inline items-center justify-center rounded-lg p-2 select-none border-0 cursor-pointer disabled:cursor-default disabled:opacity-50'],
  ['input', 'shadow-md px-2 py-2 rounded-full border border-1 border-gray-400 focus:border-blue-500 outline-none ring-blue-500'],
]

export const rules: Rule<{}>[] = [
  ['custom-rule', { color: 'red' }],
]
