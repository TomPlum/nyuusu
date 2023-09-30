export interface MainichiRssFeed {
    title: string
    link: string
    description: string
    'dc:language': string
    'dc:rights': string
    'dc:date': string
    'dc:publisher': string
    'dc:creator': string
}

export interface MainichiRssItem {
    title: string
    link: string
    'dc:subject': string
    'dc:date': string
    date: string
    isoDate: string
    'rdf:about': string
}