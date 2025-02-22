import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Paths } from "@/lib/pageroutes"

export type search = {
  title: string
  href: string
  snippet?: string
  description?: string
  relevance?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      const cachedResult = cache.get(key)
      if (cachedResult !== undefined) {
        return cachedResult
      }
    }

    const result = fn(...args)

    if (result !== "" && result != null) {
      cache.set(key, result)
    }

    return result
  }) as T
}

const memoizedSearchMatch = memoize(searchMatch)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function isRoute(
  node: Paths
): node is Extract<Paths, { href: string; title: string }> {
  return "href" in node && "title" in node
}

export function helperSearch(
  query: string,
  node: Paths,
  prefix: string,
  currentLevel: number,
  maxLevel?: number
) {
  const res: Paths[] = []
  let parentHas = false
  const lowerQuery = query.toLowerCase()

  if (isRoute(node)) {
    const nextLink = `${prefix}${node.href}`

    const titleMatch = node.title.toLowerCase().includes(lowerQuery)
    const titleDistance = memoizedSearchMatch(
      lowerQuery,
      node.title.toLowerCase()
    )

    if (titleMatch || titleDistance <= 2) {
      res.push({ ...node, items: undefined, href: nextLink })
      parentHas = true
    }

    const goNext = maxLevel ? currentLevel < maxLevel : true

    if (goNext && node.items) {
      node.items.forEach((item) => {
        const innerRes = helperSearch(
          query,
          item,
          nextLink,
          currentLevel + 1,
          maxLevel
        )
        if (innerRes.length && !parentHas && !node.noLink) {
          res.push({ ...node, items: undefined, href: nextLink })
          parentHas = true
        }
        res.push(...innerRes)
      })
    }
  }

  return res
}

function searchMatch(a: string, b: string): number {
  if (typeof a !== "string" || typeof b !== "string") return 0

  const aLen = a.length
  const bLen = b.length

  if (aLen === 0) return bLen
  if (bLen === 0) return aLen

  if (aLen > bLen) [a, b] = [b, a]

  const maxDistance = Math.min(Math.max(Math.floor(aLen / 2), 2), 5)

  let prevRow = Array(aLen + 1).fill(0)
  let currRow = Array(aLen + 1).fill(0)

  for (let i = 0; i <= aLen; i++) prevRow[i] = i

  for (let j = 1; j <= bLen; j++) {
    currRow[0] = j
    for (let i = 1; i <= aLen; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      currRow[i] = Math.min(
        prevRow[i] + 1,
        currRow[i - 1] + 1,
        prevRow[i - 1] + cost
      )

      if (currRow[i] > maxDistance) {
        return maxDistance
      }
    }
    ;[prevRow, currRow] = [currRow, prevRow]
  }

  return Math.min(prevRow[aLen], maxDistance)
}

function formatDateHelper(
  dateStr: string,
  options: Intl.DateTimeFormatOptions
): string {
  const [day, month, year] = dateStr.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString("en-US", options)
}

export function formatDate(dateStr: string): string {
  return formatDateHelper(dateStr, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatDate2(dateStr: string): string {
  return formatDateHelper(dateStr, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function stringToDate(date: string) {
  const [day, month, year] = date.split("-").map(Number)
  return new Date(year, month - 1, day)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  let rafId: number | null = null
  let lastCallTime: number | null = null

  const later = (time: number) => {
    const remaining = wait - (time - (lastCallTime || 0))
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      func(...(lastArgs as Parameters<T>))
      lastArgs = null
      lastCallTime = null
    } else {
      rafId = requestAnimationFrame(later)
    }
  }

  return (...args: Parameters<T>) => {
    lastArgs = args
    lastCallTime = performance.now()
    const callNow = immediate && !timeout
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      rafId = requestAnimationFrame(later)
    }, wait)
    if (callNow) func(...args)
  }
}

export function highlight(snippet: string, searchTerms: string): string {
  if (!snippet || !searchTerms) return snippet

  const terms = searchTerms
    .split(/\s+/)
    .filter((term) => term.trim().length > 0)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  if (terms.length === 0) return snippet

  const regex = new RegExp(`(${terms.join("|")})(?![^<>]*>)`, "gi")

  return snippet.replace(
    /(<[^>]+>)|([^<]+)/g,
    (match, htmlTag, textContent) => {
      if (htmlTag) return htmlTag
      return textContent.replace(regex, "<span class='highlight'>$1</span>")
    }
  )
}
