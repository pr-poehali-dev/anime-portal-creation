import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData } from '@/data/animeData';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(0);

  const filteredAnime = animeData.filter(anime => {
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         anime.titleJp.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         anime.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         anime.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRating = anime.rating >= minRating;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Search" size={40} className="text-primary" />
          Поиск
        </h1>

        <div className="max-w-3xl mb-8 space-y-4">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск по названию, жанру или описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-muted-foreground font-semibold">
              Минимальный рейтинг: {minRating.toFixed(1)}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено результатов: <span className="text-foreground font-semibold">{filteredAnime.length}</span>
            </p>
          </div>
        )}

        {filteredAnime.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredAnime.map((anime) => (
              <div 
                key={anime.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer"
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
                  <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{anime.titleJp}</p>
                  <div className="flex flex-wrap gap-1">
                    {anime.genres.slice(0, 2).map((genre, i) => (
                      <span key={i} className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Ничего не найдено</p>
            <p className="text-muted-foreground mt-2">Попробуйте изменить критерии поиска</p>
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Начните вводить для поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
