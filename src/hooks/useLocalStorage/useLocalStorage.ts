import { LocalStorage, LocalStorageProps } from "hooks/useLocalStorage/types.ts"
import { useEffect, useMemo } from "react"

const useLocalStorage = <Value>({ key, value, defaultValue }: LocalStorageProps<Value>): LocalStorage<Value> => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const localStorageValue: Value = useMemo(() => {
    const storedValue = localStorage.getItem(key)

    if (!storedValue) {
      return defaultValue
    }

    return JSON.parse(storedValue) as Value
  }, [defaultValue, key])

  return {
    value: localStorageValue
  }
}

export default useLocalStorage