export interface AccommodationDTO {
  id: string;
  name: string;
  address: string;
  description: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  images: Image[];
}

interface Image {
  id: string;
  url: string
}