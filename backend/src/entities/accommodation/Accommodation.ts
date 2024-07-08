interface Image {
  id: string;
  url: string;
}
class Accommodation {
  id: string;
  name: string;
  address: string;
  email: string;
  description: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  images: Image[];

  constructor(data: Accommodation) {
    this.id = data.address;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
    this.description = data.description;
    this.price = data.price;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.images = data.images;
  }
} export { Accommodation };
