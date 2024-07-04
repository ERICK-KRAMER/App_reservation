import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

interface Image {
  id?: string;
  url: string;
  accommodationId: string;
}

interface Accommodation {
  id?: string;
  name: string;
  email: string;
  images: Omit<Image, 'accommodationId'>[];
  address: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const accommodations: Accommodation[] = [
  {
    name: "Chalé Três Marias",
    address: "Aiuruoca, Brasil",
    email: "test",
    description: "A acomodação possui uma cozinha com utensílios básicos para preparar comidas simples, um quarto/sala com uma cama de casal e uma de solteiro, banheiro com chuveiro aquecido a gás e uma deliciosa varanda. O espaço externo da acesso uma cachoeira de água pura vinda da serra.",
    price: 250,
    createdAt: new Date(),
    updatedAt: new Date(),
    images: [
      { url: "https://a0.muscache.com/im/pictures/miso/Hosting-714342246655374834/original/23c3d585-df86-419d-8e36-2c9b1bc3d7aa.jpeg?im_w=1200" },
      { url: "https://a0.muscache.com/im/pictures/miso/Hosting-714342246655374834/original/f515cef9-bd5b-4ca3-b33e-306f4f0fc47e.jpeg?im_w=720" },
      { url: "https://a0.muscache.com/im/pictures/miso/Hosting-714342246655374834/original/95ea5a3e-a31a-4eab-a8fa-55624bd55b87.jpeg?im_w=720" },
    ],
  },
  {
    name: "Chalé da Paz - Barra de Guaratiba",
    address: "Barra Guaratiba, Brasil",
    email: "test",
    description: "O Chalé da Paz é um loft rústico em eucalipto, novo( inaugurado dia 23/02/2022), construído Em meio a natureza. A varanda com Jacuzzi oferece uma linda vista para a floresta, o mar no horizonte e um por do sol inesquecível Ar condicionado, TV 55 e ampla vista em todos os ambientes. Suíte muito bem decorada com cama King, roupas de cama e toalhas brancas novinhas. A cozinha é toda equipada.Tem fogão, geladeira, microondas, todos os talheres, panelas e louças",
    price: 632,
    createdAt: new Date(),
    updatedAt: new Date(),
    images: [
      { url: "https://a0.muscache.com/im/pictures/miso/Hosting-567312805305357318/original/34750863-c14f-47c5-a1bf-53cf5b788672.jpeg?im_w=1200" },
      { url: "https://a0.muscache.com/im/pictures/miso/Hosting-567312805305357318/original/84fb691f-02c7-4090-af2c-0275eed231d4.jpeg?im_w=720" },
      { url: "https://a0.muscache.com/im/pictures/miso/Hosting-567312805305357318/original/87beba3c-c006-4cf9-956e-92685112011e.jpeg?im_w=720" },
    ],
  },

];

const createAccommodations = async () => {

  await prismaClient.$transaction(async (prisma) => {
    for (const accommodation of accommodations) {

      const createdAccommodation = await prisma.accommodation.create({
        data: {
          name: accommodation.name,
          address: accommodation.address,
          email: accommodation.email,
          description: accommodation.description,
          price: accommodation.price,
          created_at: accommodation.createdAt,
          updated_at: accommodation.updatedAt,
        },
      });

      for (const image of accommodation.images) {
        await prisma.image.create({
          data: {
            url: image.url,
            accommodationId: createdAccommodation.id,
          },
        });
      }
    }
  });

  console.log(`Acomodações e imagens criadas com sucesso!`);
};

createAccommodations()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
