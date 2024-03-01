import Button from "../components/Button";
import { cleanup, screen, render } from "@testing-library/react";

describe("Button", () => {
  afterEach(() => cleanup());

  it("Renders in DOM", () => {
    render(<Button data-testid="button" tabItems={[]} />);
    const button = screen.getByTestId("button");

    expect(() => button.not.toBeNull());
  });
});
