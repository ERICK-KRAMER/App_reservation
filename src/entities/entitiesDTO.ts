
export interface IDestination {
  name: string;
  address: string;
  arrivalDate: Date;
  departureDate: Date;
}

export interface IActivity {
  name: string;
  date: Date;
  time: string;
  location: string;
  notes?: string;
}

export interface IAccommodation {
  id: string;
  name: string;
  address: string;
  checkInDate: Date;
  checkOutDate: Date;
  reservationDetails?: string;
}

export interface ITransport {
  type: string;
  departureDate: Date;
  departureTime: string;
  arrivalDate: Date;
  arrivalTime: string;
  details?: string;
}

export interface IExpense {
  category: string;
  amount: number;
  currency: string;
  date: Date;
  notes?: string;
}

export interface IDocument {
  type: string;
  filePath: string;
  notes?: string;
}

export interface IItineraryData {
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
