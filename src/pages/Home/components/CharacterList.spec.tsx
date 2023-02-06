import { describe, expect, it } from "vitest"
import { findAllByTestId, getByText, render, screen } from "../../../../test-utils";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { CharacterList } from "./CharacterList";
import { Home } from "../Home";
import { vi } from 'vitest'
import { fetch } from 'cross-fetch';

// Add `fetch` polyfill: NodeJs does not support fetch() yet
global.fetch = fetch;


const Mock = function(){
  return {
    observe: vi.fn(),
    disconnect: vi.fn()
  }
}

const results = [
  { gender: '', id: '', image: '', name: 'Prueba Name', species: 'Human', status: "Alive" }
]
const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/*', (req, res, ctx) => {
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
  it('Should render characters', async () => {
    const { findAllByTestId } = render(<Home />)
    const characters = await findAllByTestId('character-name')
    const characterName = getByText(characters[0], 'Prueba Name')
    expect(characters[0]).toBeInTheDocument()
    expect(characterName).toBeInTheDocument()
  })
})
