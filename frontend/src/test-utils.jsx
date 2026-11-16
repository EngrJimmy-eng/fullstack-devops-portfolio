import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "./app/store";

export function renderWithStore(ui, { preloadedState, store = makeStore(preloadedState) } = {}) {
  return render(<Provider store={store}>{ui}</Provider>);
}
