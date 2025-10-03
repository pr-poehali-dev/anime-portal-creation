import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/catalog', label: 'Каталог', icon: 'Library' },
    { path: '/genres', label: 'Жанры', icon: 'Tag' },
    { path: '/top', label: 'Топ', icon: 'TrendingUp' },
    { path: '/new', label: 'Новинки', icon: 'Sparkles' },
    { path: '/search', label: 'Поиск', icon: 'Search' },
    { path: '/favorites', label: 'Избранное', icon: 'Heart' },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ANIME
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link to="/search" className="p-2">
              <Icon name="Search" size={20} />
            </Link>
            <button className="p-2">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
