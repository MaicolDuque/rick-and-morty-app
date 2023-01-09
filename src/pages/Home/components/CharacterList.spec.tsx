import { describe, expect, it } from "vitest"
import { render, screen } from "../../../../test-utils";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { CharacterList } from "./CharacterList";
import { Home } from "../Home";
import { vi } from 'vitest'

const Mock = function(){
  return {
    observe: vi.fn(),
    disconnect: vi.fn()
  }
}

const results = [
  { gender: '', id: '', image: '' }
]
const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/?page=1&name=&status=&gender=&species=&', (req, res, ctx) => {
    return res(ctx.json({ info: 'hello there', results }))
  }),
)

beforeAll(() => {
  server.listen()
  vi.stubGlobal('IntersectionObserver', Mock)
})
afterEach(() => server.resetHandlers())
afterAll(() => {
  server.close()
  vi.unstubAllGlobals()
})

describe('CharacterList tests', () => {
  it('Should render characters', () => {
    render(<Home />)
    render(<CharacterList />)

    screen.debug()
  })
})
