import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData, genres } from '@/data/animeData';

const Genres = () => {
  const genreStats = genres.slice(1).map(genre => ({
    name: genre,
    count: animeData.filter(anime => anime.genres.includes(genre)).length,
    anime: animeData.filter(anime => anime.genres.includes(genre)).slice(0, 3)
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Tag" size={40} className="text-primary" />
          Жанры
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genreStats.map(({ name, count, anime }) => (
            <div 
              key={name}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                {anime[0] && (
                  <img 
                    src={anime[0].image} 
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {name}
                  </h2>
                  <div className="px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30 text-sm font-semibold">
                    {count}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {anime.map((item) => (
                    <div key={item.id} className="aspect-[2/3] rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <Link 
                  to="/catalog"
                  className="mt-4 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Смотреть все</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
