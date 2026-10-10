import type { Breed } from '../types/breed'

const commonsImage = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`

export const breeds: Breed[] = [
  {
    id: 'maine-coon', name: 'Maine Coon', origin: 'Estados Unidos', kind: 'O gigante gentil',
    tagline: 'Grande no tamanho, gentil no jeito.',
    description: 'Uma das maiores raças domésticas, o Maine Coon chama atenção pela pelagem volumosa, cauda cheia e presença tranquila. Costuma amadurecer devagar e participar da vida da casa com curiosidade.',
    personality: 'Sociável, brincalhão e curioso.', features: 'Porte grande, pelagem semilonga e cauda abundante.', care: 'Escovação frequente e atividades que estimulem o corpo e a mente.',
    size: 'Grande', coat: 'Semilonga', shortPersonality: 'Sociável e curioso', shortCare: 'Escovação frequente',
    image: commonsImage('Maine Coon Cat Atticus.jpg'), imageAlt: 'Maine Coon de pelagem longa em ambiente externo', imageWidth: 2856, imageHeight: 2142,
  },
  {
    id: 'siames', name: 'Siamês', origin: 'Tailândia', kind: 'O conversador',
    tagline: 'Uma voz própria e muito afeto.',
    description: 'Elegante e expressivo, o Siamês é conhecido por buscar interação e acompanhar de perto as pessoas da casa. Seu padrão colorpoint destaca olhos azuis e extremidades mais escuras.',
    personality: 'Comunicativo, próximo e ativo.', features: 'Corpo esguio, pelo curto e olhos azuis marcantes.', care: 'Pelagem simples de manter; companhia, brincadeiras e enriquecimento fazem parte da rotina.',
    size: 'Médio', coat: 'Curta', shortPersonality: 'Comunicativo e ativo', shortCare: 'Interação e brincadeiras',
    image: commonsImage('Siamese cat, female.jpg'), imageAlt: 'Gata Siamês chocolate point de olhos azuis', imageWidth: 3534, imageHeight: 2500,
  },
  {
    id: 'persa', name: 'Persa', origin: 'Pérsia histórica', kind: 'O contemplativo',
    tagline: 'Calma em forma de companhia.',
    description: 'O Persa é reconhecido pelo rosto arredondado e pela pelagem longa e densa. Em geral, prefere ambientes tranquilos e momentos de descanso perto de quem conhece.',
    personality: 'Sereno, afetuoso e de ritmo calmo.', features: 'Porte médio, focinho curto e pelo longo.', care: 'Escovação diária ajuda a evitar nós; olhos e face podem precisar de higiene regular.',
    size: 'Médio', coat: 'Longa', shortPersonality: 'Sereno e afetuoso', shortCare: 'Escovação diária',
    image: commonsImage('Persian Cat by Pouria Afkhami pixoos.jpg'), imageAlt: 'Gato Persa branco de pelo longo', imageWidth: 5616, imageHeight: 3744,
  },
  {
    id: 'ragdoll', name: 'Ragdoll', origin: 'Estados Unidos', kind: 'O companheiro gentil',
    tagline: 'Olhos azuis, presença tranquila.',
    description: 'Com porte expressivo, olhos azuis e pelagem semilonga, o Ragdoll costuma ser descrito como sociável e tranquilo. Gosta de acompanhar a rotina familiar e de interações gentis.',
    personality: 'Dócil, sociável e carinhoso.', features: 'Porte grande, olhos azuis e pelo semilongo.', care: 'Escovação regular e brincadeiras leves ajudam a manter uma rotina equilibrada.',
    size: 'Grande', coat: 'Semilonga', shortPersonality: 'Dócil e sociável', shortCare: 'Escovação regular',
    image: commonsImage('Blue point and white Ragdoll cat.jpg'), imageAlt: 'Ragdoll blue point e branco deitado', imageWidth: 4608, imageHeight: 3456,
  },
  {
    id: 'bengal', name: 'Bengal', origin: 'Estados Unidos', kind: 'O explorador',
    tagline: 'Espírito curioso em padrão selvagem.',
    description: 'A pelagem manchada lembra a de felinos selvagens, mas o Bengal é uma raça doméstica. É conhecido pela energia e curiosidade, e costuma gostar de desafios e brincadeiras.',
    personality: 'Ativo, inteligente e explorador.', features: 'Porte médio, corpo atlético e pelagem curta manchada.', care: 'Brincadeiras, espaço vertical e atividades variadas ajudam a canalizar sua energia.',
    size: 'Médio', coat: 'Curta', shortPersonality: 'Ativo e explorador', shortCare: 'Atividade e estímulos',
    image: commonsImage('Bengal Cat.jpg'), imageAlt: 'Gato Bengal com pelagem manchada', imageWidth: 1272, imageHeight: 1065,
  },
  {
    id: 'british-shorthair', name: 'British Shorthair', origin: 'Reino Unido', kind: 'O observador',
    tagline: 'Um clássico de olhar tranquilo.',
    description: 'De corpo robusto, bochechas arredondadas e pelo curto e denso, o British Shorthair tem uma presença serena. Pode ser afetuoso sem estar sempre pedindo colo, apreciando companhia no próprio ritmo.',
    personality: 'Equilibrado, independente e gentil.', features: 'Porte médio a grande, pelo curto e denso.', care: 'Escovação regular, brincadeiras e atenção à condição corporal.',
    size: 'Médio a grande', coat: 'Curta e densa', shortPersonality: 'Calmo e independente', shortCare: 'Escovação regular',
    image: commonsImage('British Shorthair cat.jpg'), imageAlt: 'Gato British Shorthair de pelo azul acinzentado', imageWidth: 5977, imageHeight: 3984,
  },
]

export const heroBreed: Breed = {
  ...breeds[1],
  image: commonsImage('Siamese Cat ACAS-SI-1.jpg'),
  imageAlt: 'Gato Siamês chocolate point fotografado ao ar livre',
  imageWidth: 3872,
  imageHeight: 2592,
}
