import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Form />);
      fireEvent.click(screen.getByTestId("submit-test-id"));
      setTimeout(async () => {
        await screen.findByText("Message envoyé !");
      }, 1000);
    });
  });
});
