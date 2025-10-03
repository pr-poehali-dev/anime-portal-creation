import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { animeData } from '@/data/animeData';

const Index = () => {
  const featuredAnime = animeData.slice(0, 3);
  const topAnime = animeData.filter(a => a.rating >= 9.0).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/548c10b6-998d-4afb-b561-594187cc8e2e.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
            ANIME UNIVERSE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Погрузитесь в мир киберпанк аниме
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2"
            >
              <Icon name="Library" size={20} />
              Каталог
            </Link>
            <Link 
              to="/search" 
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all flex items-center gap-2"
            >
              <Icon name="Search" size={20} />
              Поиск
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Sparkles" size={32} className="text-primary" />
          Избранное
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAnime.map((anime) => (
            <div 
              key={anime.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-all cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 text-foreground">{anime.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{anime.titleJp}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{anime.rating}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{anime.year}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.slice(0, 2).map((genre, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Icon name="TrendingUp" size={32} className="text-secondary" />
            Топ Аниме
          </h2>
          <Link to="/top" className="text-primary hover:text-primary/80 flex items-center gap-2">
            Все
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topAnime.map((anime) => (
            <div 
              key={anime.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-secondary transition-all cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1 line-clamp-1">{anime.title}</h3>
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{anime.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
