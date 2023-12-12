import { server as mockServer } from './mocks/node'
import { server } from './index'

beforeAll(() => {
    mockServer.listen()
})

afterEach(() => {
    mockServer.resetHandlers()
})

afterAll(() => {
    mockServer.close()
    server.close()
})