import { Omen } from "../../interfaces/omen"

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

export const Omens: Omen[] = range(5)
  .map(i => `omen${i + 1}`)
  .map(name => ({
    name,
    src: `/images/${name}.png`,
    tag: [`tag-${name}`]
  }))