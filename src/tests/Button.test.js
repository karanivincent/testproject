import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Button from "../lib/Button.svelte";

test("renders a button", async () => {
    render(Button);

    expect(screen.getByRole("button")).toHaveTextContent("Click me");
});

test("triggers an event when clicked", () => {
    const { component } = render(Button);
    const callback = jest.fn();
    component.$on("click", callback);

    userEvent.click(screen.getByRole("button"));

    expect(callback).toHaveBeenCalled();
});