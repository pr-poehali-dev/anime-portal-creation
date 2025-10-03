import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData } from '@/data/animeData';

const Top = () => {
  const topAnime = [...animeData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 20);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="TrendingUp" size={40} className="text-secondary" />
          Топ Аниме
        </h1>

        <div className="space-y-4">
          {topAnime.map((anime, index) => (
            <div 
              key={anime.id}
              className="group bg-card border border-border rounded-xl p-4 hover:border-secondary transition-all cursor-pointer flex gap-4"
            >
              <div className="flex items-center justify-center w-16 flex-shrink-0">
                <div className={`text-4xl font-bold ${
                  index === 0 ? 'text-yellow-400' :
                  index === 1 ? 'text-gray-400' :
                  index === 2 ? 'text-orange-600' :
                  'text-muted-foreground'
                }`}>
                  #{index + 1}
                </div>
              </div>

              <div className="w-24 flex-shrink-0">
                <div className="aspect-[2/3] rounded-lg overflow-hidden">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold mb-1 group-hover:text-secondary transition-colors">
                  {anime.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{anime.titleJp}</p>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{anime.description}</p>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full border border-secondary/30">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end justify-between flex-shrink-0">
                <div className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-lg">
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-2xl font-bold">{anime.rating}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Год: {anime.year}</div>
                  <div className="text-sm text-muted-foreground">Эпизодов: {anime.episodes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
