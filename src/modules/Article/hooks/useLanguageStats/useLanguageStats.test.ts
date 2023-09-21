import { renderHook } from "@testing-library/react"
import useLanguageStats from "modules/Article/hooks/useLanguageStats/useLanguageStats.ts"
import { expect } from "vitest"
import { describe, it } from 'vitest'

describe('Language Stats Hook', () => {
    it('should return the number of kanji characters', () => {
        const { result } = renderHook(() => useLanguageStats({ input: '黒髪交じり痩せた姿' }))
        expect(result.current.kanji).toBe(5)
    })
})