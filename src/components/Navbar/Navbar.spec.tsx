import { describe, expect, it } from "vitest"
import { render, screen, fireEvent } from "../../../test-utils";
import { Navbar } from './Navbar'
import { CharacterList } from "../../pages/Home/components/CharacterList";

describe('Navbar tests', () => {
  it('Should render search input', () => {
    render(< Navbar />);
    const input = screen.getByPlaceholderText('Search a character')
    expect(input).toBeInTheDocument()
  })

  it('Should not found characters', async () => {
    render(< Navbar />);
    render(<CharacterList />);
    const input = screen.getByPlaceholderText('Search a character')
    fireEvent.change(input, {target: { value: '23444' }})
    await screen.findByText('No characters found')
    expect(input).toBeInTheDocument()
  })
})
