import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from './src/redux/store'

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: AllTheProviders,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { waitFor } from "@testing-library/jest-dom"
// override render export
export { customRender as render };
