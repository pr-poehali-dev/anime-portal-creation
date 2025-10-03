import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData, genres } from '@/data/animeData';

const Catalog = () => {
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [sortBy, setSortBy] = useState<'rating' | 'year' | 'title'>('rating');

  const filteredAnime = animeData
    .filter(anime => selectedGenre === 'Все' || anime.genres.includes(selectedGenre))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Library" size={40} className="text-primary" />
          Каталог Аниме
        </h1>

        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground font-semibold">Сортировка:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('rating')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  sortBy === 'rating'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Рейтинг
              </button>
              <button
                onClick={() => setSortBy('year')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  sortBy === 'year'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Год
              </button>
              <button
                onClick={() => setSortBy('title')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  sortBy === 'title'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Название
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full transition-all border ${
                  selectedGenre === genre
                    ? 'bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/30'
                    : 'bg-card text-muted-foreground border-border hover:border-secondary/50'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredAnime.map((anime) => (
            <div 
              key={anime.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden relative">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{anime.rating}</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1 line-clamp-1">{anime.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{anime.titleJp}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Calendar" size={12} />
                  <span>{anime.year}</span>
                  <span>•</span>
                  <span>{anime.episodes} эп.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Ничего не найдено</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
