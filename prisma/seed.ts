import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.person.deleteMany({});
  await prisma.deparments.deleteMany({});
  await prisma.menuSubcategory.deleteMany({});
  await prisma.menuCategory.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      email: "testuser@znpu.com",
    },
  });

  await prisma.deparments.create({
    data: {
      title: "Drohobycki Oddiał ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Adam Chłopek",
            email: "adam-ch@mail.lviv.ua",
          },
          {
            name: "Maria Maćkowicz",
            email: "maria.dydynska@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Tarnopolski Oddiał ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Irena Nestajko",
            email: "nestajko_iryna@ukr.net",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Iwanofrankowski Oddział ZNPnUnU",
      persons: {
        create: [
          {
            name: "Prezes Oksana Bigun",
            email: "oksa.bigun67@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Zakarpacki Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Tetiana Pułyk",
            email: "pulykt@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Chmielnicki Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Julia Sierkowa",
            email: "yulsier@yahoo.pl",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Winnicki Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Julia Griaznowa",
            email: "griaznova.julia@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Żytomierski oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Mirosława Starowierowa",
            email: "mira5447@mail.ru",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Czerniowiecki Oddizał ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Władysław Strutyński",
            email: "strukvl@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Rówieński Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Irena Androszczuk",
            email: "irenandro@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Odeski Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Swietłana Zajcewa-Wełykodna",
            email: "svetlana.zaytseva@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Kijowski Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Natalia Doroszkiewicz",
            email: "",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Wołyński Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Swietłana Zinczuk",
            email: "svitlana.zinczuk@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Charkowski Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Olga Heraszczenko",
            email: "olgeras@gmail.com",
          },
          {
            name: "Margarita Kondratenko",
            email: "kondratenko.margarita@gmail.com",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Czerkaski Oddział ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Irena Piątkowska",
            email: "yisp@ukr.net",
          },
        ],
      },
    },
  });
  await prisma.deparments.create({
    data: {
      title: "Dnieprowski OddziaL ZNPnU",
      persons: {
        create: [
          {
            name: "Prezes Larysa Kolisnyk",
            email: "klarisaa@ukr.net",
          },
        ],
      },
    },
  });

  await prisma.menuCategory.create({
    data: {
      title: "O NAS",
      subcategories: {
        create: [
          {
            title: "O NAS",
          },
          {
            title: "ODDZIAŁY ZNPWU",
          },
          {
            title: "STATUT",
          },
          {
            title: "NATALIA TULASIEWICZ",
          },
          {
            title: "AKTUALNOŚCI",
          },
          {
            title: "ADAPTACJA BUDYNKU",
          },
          {
            title: "HISTORIA ZAŁOŻENIA",
          },
          {
            title: "PRAWO UKRAIŃSKIE",
          },
        ],
      },
    },
  });
  await prisma.menuCategory.create({
    data: { title: "STUDIA PODYPLOMOWE" },
  });
  await prisma.menuCategory.create({
    data: {
      title: "DZIEDZICTWO KULTUROWE",
      subcategories: {
        create: [
          {
            title: "MUZEUM ALEKSANDRA FREDRY",
          },
          { title: "WYSTAWA OBRAZÓW" },
          {
            title: "MUZEUM 'IZBA PAMIĘCI BRUNO SCHULZA'",
          },
          {
            title: "SŁOWNIK LITERATÓW POLSKICH",
          },
          {
            title: "CMENTARZ",
          },
        ],
      },
    },
  });
  await prisma.menuCategory.create({
    data: {
      title: "WYDARZENIA",
      subcategories: {
        create: [
          {
            title: "KURSY",
          },
          { title: "KONFERENCJE" },
          {
            title: "SEMINARIA",
          },
          {
            title: "OLIMPIADY",
          },
          {
            title: "DYKTANDO",
          },
        ],
      },
    },
  });
  await prisma.menuCategory.create({
    data: {
      title: "PROGRAMY",
      subcategories: {
        create: [
          {
            title: "ШКОЛИ З КЛАСАМИ ПОЛЬСЬКОЮ МОВОЮ НАВЧАННЯ",
          },
          {
            title:
              "ПОЛЬСЬКА МОВА ЯК РІДНА У ШКОЛІ З УКРАЇНСЬКОЮ МОВОЮ НАВЧАННЯ",
          },
          {
            title: "ПОЛЬСЬКА МОВА ЯК ДРУГА ІНОЗЕМНА",
          },
          {
            title: "ФАКУЛЬТАТИВНІ ЗАНЯТТЯ З ПОЛЬСЬКОЇ МОВИ",
          },
        ],
      },
    },
  });

  await prisma.menuCategory.create({
    data: {
      title: "MATERIAŁY DYDAKTYCZNE",
      subcategories: {
        create: [
          { title: "KONSPEKTY LEKCJI DLA SZKÓŁ ŚREDNICH" },
          { title: "ZADANIA DO OLIMPIADY" },
          {
            title: "PODRĘCZNIKI",
          },
          {
            title: "PREZENTACJE",
          },
          {
            title: "SCENARIUSZY UROCZYSTOŚCI",
          },
          {
            title: "КАЛЕНДАРНО-ТЕМАТИЧНЕ ПЛАНУВАННЯ",
          },
          {
            title: "ЗБІРНИК ДИКТАНТІВ/ПЕРЕКАЗІВ",
          },
        ],
      },
    },
  });

  await prisma.menuCategory.create({
    data: {
      title: "SZKOŁY SOBOTNIE",
      subcategories: {
        create: [
          {
            title: "ПОЛОЖЕННЯ ПРО КУЛЬТУРНО- ОСВІТНІЙ ЗАКЛАД",
          },
          {
            title: "ЯК ЗАРЕЄСТРУВАТИ",
          },
          {
            title: "KONSPEKTY LEKCJI DLA SZKÓŁ SOBOTNICH",
          },
          {
            title: "ПРОГРАМИ",
          },
        ],
      },
    },
  });
  await prisma.menuCategory.create({
    data: { title: "PLACÓWKI OŚWIATKOWE" },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
