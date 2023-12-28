import api from '../../index'
import request from "supertest"
import {newsCatcherResponse} from "./news.responses";
import {server} from "../../mocks/node";

describe('News API', () => {
    it('should return the correct response', async () => {
        const response = await request(api).get('/news')

        console.log('response', response)
        console.log('test api key', process.env.NEWSCATCHER_API_KEY)
        server.listHandlers()
        expect(response.status).toBe(200)

        expect(response.body).toStrictEqual(newsCatcherResponse)

        expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
        expect(response.headers['cache-control']).toBe('s-maxage=3600, stale-while-revalidate')
        expect(response.headers['access-control-allow-origin']).toBe('https://nyuusu.org')
    })
})