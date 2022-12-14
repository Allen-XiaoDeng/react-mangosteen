import create from 'zustand'

interface Local {
  hasReadWelcomes: Boolean
  setHasReadWelcomes: (read: Boolean) => void
}
const init = localStorage.getItem('hasReadWelcomes')
export const useLocalStore = create<Local>(set => ({
  hasReadWelcomes: init === 'yes',
  setHasReadWelcomes: (read: Boolean) => {
    const result = read ? 'yes' : 'no'
    localStorage.setItem('hasReadWelcomes', result)
    set({ hasReadWelcomes: result === 'yes' })
  },
}))
