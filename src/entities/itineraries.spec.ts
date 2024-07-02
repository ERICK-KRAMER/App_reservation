import { describe, it, expect } from "vitest";
import { Itineraries, ItinerariesProps } from "./itineraries";

describe('itineraries', () => {

  it('should itinerary to be instance of Itineraries', () => {

    const itinerary: ItinerariesProps = {
      id: "1",
      destinations: "Italy",
      created_at: "2022-01-01T00:00:00.000"
    };

    const itineraries = new Itineraries(itinerary);

    expect(itineraries).toBeInstanceOf(Itineraries);

  });

  it("should return the correct itinerary", () => {

    const itinerary: ItinerariesProps = {
      destinations: "Italy",
      created_at: "2022-01-01T00:00:00.000"
    };

    const itineraries = new Itineraries(itinerary);

    expect(itineraries).toBeInstanceOf(Itineraries);
  });
});


