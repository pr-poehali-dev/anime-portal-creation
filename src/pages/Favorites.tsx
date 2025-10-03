import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData } from '@/data/animeData';

const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([1, 2, 5, 8]);

  const favoriteAnime = animeData.filter(anime => favorites.includes(anime.id));

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Heart" size={40} className="text-primary fill-primary" />
          Избранное
        </h1>

        {favoriteAnime.length > 0 ? (
          <>
            <p className="text-muted-foreground mb-8">
              У вас {favoriteAnime.length} {favoriteAnime.length === 1 ? 'аниме' : 'аниме'} в избранном
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteAnime.map((anime) => (
                <div 
                  key={anime.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all flex gap-4"
                >
                  <div className="w-32 flex-shrink-0">
                    <div className="aspect-[2/3] overflow-hidden">
                      <img 
                        src={anime.image} 
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex-1 p-4 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {anime.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{anime.titleJp}</p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(anime.id)}
                        className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Icon 
                          name="Heart" 
                          size={24} 
                          className="text-primary fill-primary hover:scale-110 transition-transform" 
                        />
                      </button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {anime.description}
                    </p>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{anime.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Calendar" size={16} />
                        <span className="text-sm">{anime.year}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="PlayCircle" size={16} />
                        <span className="text-sm">{anime.episodes} эп.</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {anime.genres.map((genre, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Icon name="Heart" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground mb-2">Пока пусто</p>
            <p className="text-muted-foreground mb-6">Добавьте аниме в избранное, чтобы они появились здесь</p>
            <a 
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <Icon name="Library" size={20} />
              Перейти в каталог
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
