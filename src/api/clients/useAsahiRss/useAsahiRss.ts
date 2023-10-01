import Parser from "rss-parser"
import { hosts } from "api/hosts.ts"
import { AsahiRssFeed, AsahiRssItem } from "api/clients/useAsahiRss/types.ts"

const useAsahiRss = () => {
  return new Parser<AsahiRssFeed, AsahiRssItem>({
    customFields: {
      item: ['dc:subject'],
      feed: ['dc:publisher', 'dc:language', 'dc:rights']
    },
    requestOptions: {
      host: hosts[import.meta.env.MODE].asahi,
    }
  })
}

export default useAsahiRss