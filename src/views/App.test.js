import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import App from './App.svelte'

test('shows Application', () => {
    const { container, getByText } = render(App)
  
    expect(getByText('Svelte')).toBeInTheDocument()
    expect(getByText('BigBangTheory')).toBeInTheDocument()
    expect(getByText('MyFinancial')).toBeInTheDocument()
    expect(getByText('StarWars')).toBeInTheDocument()
    
    expect(container.querySelector("img").src).toBe('http://localhost/img/svelte.png')
})
