import { render, screen } from "@testing-library/react";
import Lorem from "./Lorem";

test("renders lorem ipsum text", () => {
  const loremText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum sequi possimus aut, earum ipsam fuga ipsum! Dolorem eligendi commodi sed. Deserunt illum quis officiis nam velit iusto! Autem, aspernatur!";

  render(<Lorem text={loremText} />);
  const textElement = screen.getByText(/lorem ipsum/i);
  expect(textElement).toBeInTheDocument();
});

test("renders lorem ipsum with color", () => {
  const loremText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum sequi possimus aut, earum ipsam fuga ipsum! Dolorem eligendi commodi sed. Deserunt illum quis officiis nam velit iusto! Autem, aspernatur!";

  const color = "blue";

  render(<Lorem text={loremText} color={color} />);
  const textElement = screen.getByText(/lorem ipsum/i);
  expect(textElement).toHaveStyle({
    color: color,
  });
});
