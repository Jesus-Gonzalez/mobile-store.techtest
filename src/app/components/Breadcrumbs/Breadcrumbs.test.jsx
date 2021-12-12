import { render, screen } from "@testing-library/react";

import Breadcrumbs from "./index";

describe("app.components.Breadcrumbs", () => {
  it("should render", () => {
    render(<Breadcrumbs>Hola Mundo</Breadcrumbs>);
    expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
  });
});
