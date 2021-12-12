import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("app.pages.Home.Search", () => {
  it("should render", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText("Filter devices")).toBeInTheDocument();
  });
});
