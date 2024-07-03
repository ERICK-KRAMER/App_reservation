import { describe, it, expect } from "vitest";
import { Itinerary } from "./itineraries";
import { IItineraryData } from "../entitiesDTO";

describe('itineraries', () => {

  it('should itinerary to be instance of Itineraries', () => {

    const testData: IItineraryData = {
      name: "Summer Vacation",
      userId: "user123",
      startDate: new Date("2024-07-10"),
      endDate: new Date("2024-07-20"),
      destinations: [
        {
          name: "Paris",
          address: "123 Eiffel Tower Rd",
          arrivalDate: new Date("2024-07-10"),
          departureDate: new Date("2024-07-15"),
        },
      ],
      activities: [
        {
          name: "Eiffel Tower Visit",
          date: new Date("2024-07-11"),
          time: "10:00 AM",
          location: "Eiffel Tower",
          notes: "Bring a camera",
        },
      ],
      accommodations: [
        {
          id: "aas45a356d36fdsg62675fgh4fh",
          name: "Hotel Paris",
          address: "123 Eiffel Tower Rd",
          checkInDate: new Date("2024-07-10"),
          checkOutDate: new Date("2024-07-15"),
          reservationDetails: "Reservation #12345",
        }
      ],
      transports: [
        {
          type: "Flight",
          departureDate: new Date("2024-07-10"),
          departureTime: "8:00 AM",
          arrivalDate: new Date("2024-07-10"),
          arrivalTime: "10:00 AM",
          details: "Flight #1234",
        },
        {
          type: "Train",
          departureDate: new Date("2024-07-15"),
          departureTime: "9:00 AM",
          arrivalDate: new Date("2024-07-15"),
          arrivalTime: "11:00 AM",
          details: "Train #5678",
        },
      ],
      expenses: [
        {
          category: "Transport",
          amount: 200,
          currency: "USD",
          date: new Date("2024-07-10"),
          notes: "Flight to Paris",
        },
        {
          category: "Accommodation",
          amount: 500,
          currency: "USD",
          date: new Date("2024-07-10"),
          notes: "Hotel in Paris",
        },
      ],
      documents: [
        {
          type: "Passport",
          filePath: "/path/to/passport.pdf",
          notes: "Valid until 2026",
        },
        {
          type: "Reservation",
          filePath: "/path/to/reservation.pdf",
          notes: "Hotel reservation in Paris",
        },
      ],
      notes: "Remember to pack sunscreen",
    };

    const itineraries = new Itinerary(testData);

    expect(itineraries).toBeInstanceOf(Itinerary);

  });
});


