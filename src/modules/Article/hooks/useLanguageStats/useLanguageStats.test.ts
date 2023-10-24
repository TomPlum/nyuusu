import { renderHook } from "@testing-library/react"
import useLanguageStats from "modules/Article/hooks/useLanguageStats/useLanguageStats.ts"
import { expect } from "vitest"
import { describe, it } from 'vitest'
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"

describe('Language Stats Hook', () => {
  it('should return the number of kanji characters', () => {
    const { result } = renderHook(() => useLanguageStats({ input: '黒髪交じり痩せた姿' }))
    expect(result.current.kanji).toBe(56)
  })

  it('should calculate the difficult rating', () => {
    const { result } = renderHook(() => useLanguageStats({ input: '黒髪交じり痩せた姿' }))
    expect(result.current.difficulty).toBe(DifficultyRating.INTERMEDIATE)
  })

  it('should calculate the grades of the kanji characters', () => {
    const { result } = renderHook(() => useLanguageStats({ input: '黒髪交じり痩せた姿' }))
    expect(result.current.grades).toStrictEqual({
      2: 2,
      6: 1,
      8: 2
    })
  })
})