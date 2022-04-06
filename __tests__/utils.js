// utils.js
import { render } from "@testing-library/react";
import checkPropTypes from "check-prop-types";
// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return children;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

export const findByTestAttr = (component, attr) => {
  const wraper = component.find(`[data-test]='${attr}'`);
  return wraper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps);
  return propsErr;
};

export const testStore = (initialStore = {}) => {
  return true;
}

// override render method
export { customRender as render };
