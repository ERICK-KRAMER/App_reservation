import { IDocument, IAccommodation, IActivity, IDestination, IExpense, ITransport } from "../../entities/entitiesDTO";

export interface CreateItinerariesDTO {
  name: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  destinations?: IDestination[];
  activities?: IActivity[];
  accommodations?: IAccommodation[];
  transports?: ITransport[];
  expenses?: IExpense[];
  documents?: IDocument[];
  notes?: string;
}