import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData } from '@/data/animeData';

const New = () => {
  const newAnime = [...animeData]
    .filter(anime => anime.year >= 2024)
    .sort((a, b) => b.year - a.year);

  const upcoming = newAnime.filter(a => a.status === 'upcoming');
  const ongoing = newAnime.filter(a => a.status === 'ongoing');
  const completed = newAnime.filter(a => a.status === 'completed');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Sparkles" size={40} className="text-primary" />
          Новинки
        </h1>

        {upcoming.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-accent">
              <Icon name="Clock" size={28} />
              Скоро выйдет
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {upcoming.map((anime) => (
                <div 
                  key={anime.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img 
                      src={anime.image} 
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded-lg text-xs font-semibold">
                      {anime.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-accent transition-colors">{anime.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{anime.titleJp}</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{anime.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {ongoing.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
              <Icon name="PlayCircle" size={28} />
              Сейчас идёт
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ongoing.map((anime) => (
                <div 
                  key={anime.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img 
                      src={anime.image} 
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Онгоинг
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{anime.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{anime.titleJp}</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{anime.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {completed.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-secondary">
              <Icon name="CheckCircle" size={28} />
              Завершено в {new Date().getFullYear()}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {completed.map((anime) => (
                <div 
                  key={anime.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-secondary transition-all cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img 
                      src={anime.image} 
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-lg text-xs font-semibold">
                      Завершено
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-secondary transition-colors">{anime.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{anime.titleJp}</p>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{anime.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default New;
