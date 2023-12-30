import api from '../../index'
import request from "supertest"
import {newsCatcherResponse} from "./news.responses";

describe('News API', () => {
    it('should return the correct response', async () => {
        const response = await request(api).get('/news')

        expect(response.status).toBe(200)

        expect(response.body).toStrictEqual(newsCatcherResponse)

        expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
        expect(response.headers['cache-control']).toBe('s-maxage=3600, stale-while-revalidate')
        expect(response.headers['access-control-allow-origin']).toBe('https://nyuusu.org')
    })
})