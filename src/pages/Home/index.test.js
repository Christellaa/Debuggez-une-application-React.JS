import { render, screen } from "@testing-library/react";
import Home from "./index";
import EventCard from "../../components/EventCard/index";

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    render(<EventCard />);
    const events = screen.getByTestId("events-testid");
    const cards = screen.getByTestId("card-testid");
    expect(events).toBeInTheDocument();
    expect(cards).toBeInTheDocument();
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    const people = screen.getByTestId("people-testid");
    expect(people).toBeInTheDocument();
    expect(screen.getByText("Animateur"));
  });
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer-testid");
    expect(footer).toBeInTheDocument();
    expect(screen.getByText("Notre derniére prestation"));
    expect(screen.getByText("Contactez-nous"));
  });
  it("an event card, with the last event, is displayed", () => {
    render(
      <>
        <Home />
        <EventCard />
      </>
    );
    const lastCard = screen.getByTestId("card-testid");
    const lastImg = screen.getAllByTestId("card-image-testid");
    expect(lastCard).toBeInTheDocument();
    expect(lastCard.getAttribute("class").includes("Eventcard--small"));
    expect(lastImg).not.toBeNaN();
    expect(lastImg).toBeDefined();
  });
});
