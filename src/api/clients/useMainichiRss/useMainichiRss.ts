import Parser from "rss-parser"
import { hosts } from "api/hosts.ts"
import { MainichiRssFeed, MainichiRssItem } from "api/hooks/useGetMainichiFlash/types.ts"

const useMainichiRss = () => {
  return new Parser<MainichiRssFeed, MainichiRssItem>({
    customFields: {
      item: ['dc:subject'],
      feed: ['dc:publisher', 'dc:language', 'dc:rights']
    },
    requestOptions: {
      host: hosts[import.meta.env.MODE].mainichiRss,
    }
  })
}

export default useMainichiRss