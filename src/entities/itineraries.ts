import { v4 as uuidv4 } from "uuid";

export interface ItinerariesProps {
  id?: string;
  destinations: string;
  created_at: string;
}

class Itineraries {
  id?: string;
  destinations: string;
  created_at: string;

  constructor(props: ItinerariesProps) {
    this.id = props.id ? props.id : uuidv4();
    this.destinations = props.destinations;
    this.created_at = props.created_at;
  }
}

export { Itineraries };
