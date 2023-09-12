import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// This dataset is AI-generated; all of these products are fictional.

async function main() {
  const cafeCelestial = await prisma.coffee.upsert({
    where: { name: 'Café Celestial' },
    update: {},
    create: {
      name: 'Café Celestial',
      variety: 'Bourbon',
      species: 'Arábica',
      producer: 'Fazenda Santa Clara',
      region: 'Antigua, Guatemala',
      altitude: '1.500 metros',
      grade: '92',
      roast: 'Média',
      tasteNotes: 'Notas de chocolate, caramelo e frutas vermelhas',
      acidity: 'Alta',
      sweetness: 'Média',
      body: 'Encorpado',
      aftertaste: 'Prolongado',
    },
  });
  const espressoElegante = await prisma.coffee.upsert({
    where: { name: 'Espresso Elegante' },
    update: {},
    create: {
      name: 'Espresso Elegante',
      variety: 'Typica',
      species: 'Arábica',
      producer: 'Fazenda São Jorge',
      region: 'Tarrazú, Costa Rica',
      altitude: '1.800 metros',
      grade: '94',
      roast: 'Média',
      tasteNotes: 'Notas de cítricos, mel e amêndoas',
      acidity: 'Média',
      sweetness: 'Alta',
      body: 'Encorpado',
      aftertaste: 'Persistente',
    },
  });
  const misturaMontanhosa = await prisma.coffee.upsert({
    where: { name: 'Mistura Montanhosa' },
    update: {},
    create: {
      name: 'Mistura Montanhosa',
      variety: 'Geisha',
      species: 'Arábica',
      producer: 'Fazenda Nossa Terra',
      region: 'Bocas del Toro, Panamá',
      altitude: '1.700 metros',
      grade: '96',
      roast: 'Clara',
      tasteNotes: 'Notas florais, chá de jasmim e frutas tropicais',
      acidity: 'Alta',
      sweetness: 'Alta',
      body: 'Suave',
      aftertaste: 'Duradouro',
    },
  });
  const aromaDoAmanhecer = await prisma.coffee.upsert({
    where: { name: 'Aroma do Amanhecer' },
    update: {},
    create: {
      name: 'Aroma do Amanhecer',
      variety: 'SL28',
      species: 'Arábica',
      producer: 'Fazenda Vista Verde',
      region: 'Nyeri, Quênia',
      altitude: '1.600 metros',
      grade: '90',
      roast: 'Média',
      tasteNotes: 'Notas de groselha, chá preto e caramelo',
      acidity: 'Alta',
      sweetness: 'Média',
      body: 'Encorpado',
      aftertaste: 'Prolongado',
    },
  });
  const deliciaDeDesperte = await prisma.coffee.upsert({
    where: { name: 'Delícia de Desperte' },
    update: {},
    create: {
      name: 'Delícia de Desperte',
      variety: 'Catuai',
      species: 'Arábica',
      producer: 'Fazenda Céu Azul',
      region: 'Minas Gerais, Brasil',
      altitude: '1.100 metros',
      grade: '88',
      roast: 'Escura',
      tasteNotes: 'Notas de chocolate amargo e nozes',
      acidity: 'Média',
      sweetness: 'Média',
      body: 'Encorpado',
      aftertaste: 'Persistente',
    },
  });
  const cafeSaborDoSol = await prisma.coffee.upsert({
    where: { name: 'Café Sabor do Sol' },
    update: {},
    create: {
      name: 'Café Sabor do Sol',
      variety: 'Pacamara',
      species: 'Arábica',
      producer: 'Fazenda Aurora',
      region: 'Apaneca-Ilamatepec, El Salvador',
      altitude: '1.300 metros',
      grade: '93',
      roast: 'Média',
      tasteNotes: 'Notas de maracujá, cana-de-açúcar e cacau',
      acidity: 'Média',
      sweetness: 'Alta',
      body: 'Suave',
      aftertaste: 'Duradouro',
    },
  });
  const paixaoCafeinada = await prisma.coffee.upsert({
    where: { name: 'Paixão Cafeinada' },
    update: {},
    create: {
      name: 'Paixão Cafeinada',
      variety: 'SL34',
      species: 'Arábica',
      producer: 'Fazenda Monte Cristo',
      region: 'Kiambu, Quênia',
      altitude: '1.800 metros',
      grade: '91',
      roast: 'Média',
      tasteNotes: 'Notas de limão siciliano, chá verde e caramelo',
      acidity: 'Alta',
      sweetness: 'Média',
      body: 'Encorpado',
      aftertaste: 'Prolongado',
    },
  });
  const aromasTropicais = await prisma.coffee.upsert({
    where: { name: 'Aromas Tropicais' },
    update: {},
    create: {
      name: 'Aromas Tropicais',
      variety: 'Bourbon Amarelo',
      species: 'Arábica',
      producer: 'Fazenda Encanto do Café',
      region: 'Huila, Colômbia',
      altitude: '1.600 metros',
      grade: '89',
      roast: 'Escura',
      tasteNotes: 'Notas de chocolate ao leite e avelã',
      acidity: 'Média',
      sweetness: 'Alta',
      body: 'Encorpado',
      aftertaste: 'Persistente',
    },
  });
  const cafeCrepusculo = await prisma.coffee.upsert({
    where: { name: 'Café Crepúsculo' },
    update: {},
    create: {
      name: 'Café Crepúsculo',
      variety: 'Bourbon Vermelho',
      species: 'Arábica',
      producer: 'Fazenda Vale das Palmeiras',
      region: 'Huehuetenango, Guatemala',
      altitude: '1.700 metros',
      grade: '95',
      roast: 'Média',
      tasteNotes: 'Notas de maçã verde, caramelo e amêndoas',
      acidity: 'Alta',
      sweetness: 'Média',
      body: 'Suave',
      aftertaste: 'Duradouro',
    },
  });
  const tesourodoCafe = await prisma.coffee.upsert({
    where: { name: 'Tesouro do Café' },
    update: {},
    create: {
      name: 'Tesouro do Café',
      variety: 'Mocha',
      species: 'Arábica',
      producer: 'Fazenda Primavera',
      region: 'Yirgacheffe, Etiópia',
      altitude: '1.900 metros',
      grade: '97',
      roast: 'Clara',
      tasteNotes: 'Notas de flor de laranjeira, bergamota e chá de ervas',
      acidity: 'Alta',
      sweetness: 'Alta',
      body: 'Suave',
      aftertaste: 'Prolongado',
    },
  });

  console.log({
    cafeCelestial,
    espressoElegante,
    misturaMontanhosa,
    aromaDoAmanhecer,
    deliciaDeDesperte,
    cafeSaborDoSol,
    paixaoCafeinada,
    aromasTropicais,
    cafeCrepusculo,
    tesourodoCafe,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
