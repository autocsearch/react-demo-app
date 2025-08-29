/* eslint-env vitest */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OurWork from "./OurWork";
import "@testing-library/jest-dom";

// Mock useNavigate from react-router-dom
const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

// Mock allProjects
vi.mock("../../lib/main", () => ({
  allProjects: [
    { slug: "project1", images: "event1.png", description: "Description for Project 1" },
    { slug: "project2", images: "event2.jpg", description: "Description for Project 2" },
  ],
}));

describe("OurWork component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders heading", () => {
    render(<OurWork />);
    expect(screen.getByRole("heading", { name: /our work/i })).toBeInTheDocument();
  });

  it("renders project cards", () => {
    render(<OurWork />);
    expect(screen.getByText(/PROJECT1/i)).toBeInTheDocument();
    expect(screen.getByText(/PROJECT2/i)).toBeInTheDocument();
  });

  it("navigates when clicking on a project card", async () => {
    render(<OurWork />);
    const card = screen.getByText(/PROJECT1/i).closest("div");
    await userEvent.click(card);
    expect(mockNavigate).toHaveBeenCalledWith("/ourwork/project1");
  });

  it("navigates when clicking on 'View Details' button", async () => {
    render(<OurWork />);
    const button = screen.getAllByText(/View Details/i)[0];
    await userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/ourwork/project1");
  });
});
