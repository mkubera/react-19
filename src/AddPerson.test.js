import { render, screen } from "@testing-library/react";
import AddPerson from "./AddPerson";

test("renders lorem ipsum text", () => {
  render(<AddPerson nextId={[].length + 1} addPerson={() => {}} />);
  const textElement = screen.getByText(/Add Person/i);
  expect(textElement).toBeInTheDocument();
});
