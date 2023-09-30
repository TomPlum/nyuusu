export interface AsahiRssFeed {
    title: string
    link: string
    description: string
    'dc:language': string
    'dc:rights': string
    'dc:creator': string
    'dc:date': string
    'dc:publisher': string
    'syn:updatePeriod': string
    'syn:updateFrequency': string
    'syn:updateBase': string
}

export interface AsahiRssItem {
    title: string
    link: string
    description: string
    'dc:date': string
    'dc:subject': string
}