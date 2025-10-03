export interface Anime {
  id: number;
  title: string;
  titleJp: string;
  image: string;
  rating: number;
  year: number;
  episodes: number;
  genres: string[];
  description: string;
  status: 'ongoing' | 'completed' | 'upcoming';
}

export const animeData: Anime[] = [
  {
    id: 1,
    title: 'Cyberpunk Chronicles',
    titleJp: 'サイバーパンク クロニクル',
    image: '/img/548c10b6-998d-4afb-b561-594187cc8e2e.jpg',
    rating: 9.2,
    year: 2024,
    episodes: 24,
    genres: ['Экшн', 'Sci-Fi', 'Киберпанк'],
    description: 'История о герое в неоновом будущем, где технологии переплетаются с древними традициями.',
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Neon Blade',
    titleJp: 'ネオンブレード',
    image: '/img/14eb0e0f-669b-4c82-9102-90d65ebeae5d.jpg',
    rating: 8.9,
    year: 2024,
    episodes: 12,
    genres: ['Экшн', 'Фэнтези', 'Приключения'],
    description: 'Воительница с мечом света сражается против тёмных сил в футуристическом мире.',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Mecha Genesis',
    titleJp: 'メカジェネシス',
    image: '/img/469a117d-921f-4fb1-bc49-c1d52c258ead.jpg',
    rating: 9.0,
    year: 2025,
    episodes: 26,
    genres: ['Меха', 'Sci-Fi', 'Драма'],
    description: 'Пилот гигантского робота должен защитить город от инопланетной угрозы.',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Digital Dreams',
    titleJp: 'デジタルドリームズ',
    image: '/img/548c10b6-998d-4afb-b561-594187cc8e2e.jpg',
    rating: 8.7,
    year: 2024,
    episodes: 13,
    genres: ['Киберпанк', 'Психологическое', 'Детектив'],
    description: 'Детектив исследует преступления в виртуальной реальности.',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Neon Samurai',
    titleJp: 'ネオンサムライ',
    image: '/img/14eb0e0f-669b-4c82-9102-90d65ebeae5d.jpg',
    rating: 9.1,
    year: 2024,
    episodes: 24,
    genres: ['Экшн', 'Самураи', 'Sci-Fi'],
    description: 'Самурай будущего сражается за справедливость в неоновом токио.',
    status: 'ongoing'
  },
  {
    id: 6,
    title: 'Quantum Hearts',
    titleJp: 'クォンタムハーツ',
    image: '/img/469a117d-921f-4fb1-bc49-c1d52c258ead.jpg',
    rating: 8.5,
    year: 2023,
    episodes: 12,
    genres: ['Романтика', 'Sci-Fi', 'Драма'],
    description: 'Любовная история между человеком и андроидом в киберпанк вселенной.',
    status: 'completed'
  },
  {
    id: 7,
    title: 'Shadow Protocol',
    titleJp: 'シャドウプロトコル',
    image: '/img/548c10b6-998d-4afb-b561-594187cc8e2e.jpg',
    rating: 8.8,
    year: 2024,
    episodes: 24,
    genres: ['Экшн', 'Триллер', 'Киберпанк'],
    description: 'Хакер раскрывает глобальный заговор в цифровом мире.',
    status: 'ongoing'
  },
  {
    id: 8,
    title: 'Chrome City',
    titleJp: 'クロームシティ',
    image: '/img/14eb0e0f-669b-4c82-9102-90d65ebeae5d.jpg',
    rating: 9.3,
    year: 2024,
    episodes: 26,
    genres: ['Экшн', 'Киберпанк', 'Приключения'],
    description: 'Банда киберпреступников борется за свободу в корпоративном городе.',
    status: 'ongoing'
  },
  {
    id: 9,
    title: 'Virtual Nexus',
    titleJp: 'バーチャルネクサス',
    image: '/img/469a117d-921f-4fb1-bc49-c1d52c258ead.jpg',
    rating: 8.6,
    year: 2023,
    episodes: 13,
    genres: ['Sci-Fi', 'Приключения', 'Игры'],
    description: 'Игроки застревают в виртуальном мире и должны найти выход.',
    status: 'completed'
  },
  {
    id: 10,
    title: 'Neon Legends',
    titleJp: 'ネオンレジェンド',
    image: '/img/548c10b6-998d-4afb-b561-594187cc8e2e.jpg',
    rating: 9.4,
    year: 2025,
    episodes: 24,
    genres: ['Экшн', 'Фэнтези', 'Киберпанк'],
    description: 'Легендарные герои прошлого возрождаются в киберпанк будущем.',
    status: 'upcoming'
  },
  {
    id: 11,
    title: 'Electric Soul',
    titleJp: 'エレクトリックソウル',
    image: '/img/14eb0e0f-669b-4c82-9102-90d65ebeae5d.jpg',
    rating: 8.9,
    year: 2024,
    episodes: 12,
    genres: ['Драма', 'Sci-Fi', 'Психологическое'],
    description: 'Исследование человечности в мире киборгов и ИИ.',
    status: 'completed'
  },
  {
    id: 12,
    title: 'Data Runners',
    titleJp: 'データランナーズ',
    image: '/img/469a117d-921f-4fb1-bc49-c1d52c258ead.jpg',
    rating: 8.7,
    year: 2024,
    episodes: 24,
    genres: ['Экшн', 'Киберпанк', 'Триллер'],
    description: 'Команда курьеров доставляет секретные данные в опасном киберпанк мегаполисе.',
    status: 'ongoing'
  }
];

export const genres = [
  'Все',
  'Экшн',
  'Sci-Fi',
  'Киберпанк',
  'Фэнтези',
  'Драма',
  'Романтика',
  'Приключения',
  'Меха',
  'Психологическое',
  'Детектив',
  'Триллер',
  'Самураи',
  'Игры'
];
