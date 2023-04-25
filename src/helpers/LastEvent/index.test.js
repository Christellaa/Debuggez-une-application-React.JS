import GetLastEvent from "."

describe("When GetLastEvent is called", () => {
    it("should return undefined if there is no event", () => {
        expect(GetLastEvent()).toBeUndefined()
    });

    it("should return the last event element", () => {
        const events = [
            {
                "id": 1,
                "type": "conférence",
                "date": "2022-04-29T20:28:45.744Z",
                "title": "User&product MixUsers",     
            },
            {
                "id": 2,
                "type": "expérience digitale",
                "date": "2022-01-29T20:28:45.744Z",
                "title": "#DigitonPARIS",
            },
            {
                "id": 3,
                "type": "conférence",
                "date": "2022-03-29T20:28:45.744Z",
                "title": "Conférence &co-responsable",
            }
        ]
        const lastEvent = GetLastEvent(events);
        expect(lastEvent.id).toBe(1);
    });
})