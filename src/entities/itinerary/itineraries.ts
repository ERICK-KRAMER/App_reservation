import { v4 as uuidv4 } from "uuid";
import { IDocument, IItineraryData, IAccommodation, IActivity, IDestination, IExpense, ITransport } from "../entitiesDTO";

class Itinerary {
  public id: string;
  public name: string;
  public userId: string;
  public startDate: Date;
  public endDate: Date;
  public destinations: IDestination[];
  public activities: IActivity[];
  public accommodations: IAccommodation[];
  public transports: ITransport[];
  public expenses: IExpense[];
  public documents: IDocument[];
  public notes: string;

  constructor(data: IItineraryData, id?: string) {
    this.id = id ? id : uuidv4();
    this.name = data.name;
    this.userId = data.userId;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.destinations = data.destinations || [];
    this.activities = data.activities || [];
    this.accommodations = data.accommodations || [];
    this.transports = data.transports || [];
    this.expenses = data.expenses || [];
    this.documents = data.documents || [];
    this.notes = data.notes || '';
  }
}

export { Itinerary };
