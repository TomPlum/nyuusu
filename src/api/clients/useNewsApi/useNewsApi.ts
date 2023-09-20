import useClient from "../useClient"

const useNewsApi = () => {
    return useClient({
        host: 'https://newsapi.org',
        contextRoot: '/v2'
    })
}

export default useNewsApi