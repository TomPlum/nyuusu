<img src="images/heading.svg" alt="Nyusu.com Heading" style="width: 100%" />

Practice reading real Japanese from news articles published in Japan.

## Anki Integration
![example anki card](images/nyusu-anki.png)


## Local Development

### Frontend

1. Clone the repository
```sh
git clone git@github.com:TomPlum/nyuusu.git
```

2. Install NPM dependencies
```sh
npm install
```

3. Run the local front-end development server. This is configured to work with a mock service worker that returns stubbed responses from APIs. See the section below to run the backend.
```sh
npm run dev
```

### Backend

1. Install Dependencies
```sh
cd backend | npm install
```

2. Compile
```sh
npm run build
```

3. Serve
```sh
npm run serve
```

## Data Sources

- The Newscatcher API is used to fetch news article information used in this application. See https://www.newscatcherapi.com/ for more info.
