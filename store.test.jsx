import { useEffect } from "react";
import { useStore } from "./src/store";
import { vi } from "vitest";
import { render } from "@testing-library/react";

// eslint-disable-next-line react/prop-types
function TestComponent({ selector, effect }) {
  const items = useStore(selector);

  useEffect(() => effect(items), [items]);

  return null;
}

test("should return value at the start", () => {
  const selector = (store) => store.tasks;
  const effect = vi.fn();
  render(<TestComponent selector={selector} effect={effect} />);
});
