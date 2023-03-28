import { persistentAtom } from '@nanostores/persistent'

export const darkmode = persistentAtom<boolean>('darkmode', window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, {
  encode: bool => '' + +bool,
  decode: str => !!+str
})

// Actions

export function setDarkMode(is_dark : boolean) {
  darkmode.set(is_dark)
}
