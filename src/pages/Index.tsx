import { useState } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Comme des Garçons',
    year: '2024',
    category: 'Fashion',
    image: 'https://cdn.poehali.dev/projects/53e96f31-2bc8-4ca4-a60d-ff4173a7be94/files/4433e438-55e4-4f28-a60a-60ece50c11c1.jpg'
  },
  {
    id: 2,
    title: 'Maison Margiela',
    year: '2024',
    category: 'Luxury',
    image: 'https://cdn.poehali.dev/projects/53e96f31-2bc8-4ca4-a60d-ff4173a7be94/files/67603b6d-0800-4e27-adde-006009510dda.jpg'
  },
  {
    id: 3,
    title: 'Aesop',
    year: '2023',
    category: 'Beauty',
    image: 'https://cdn.poehali.dev/projects/53e96f31-2bc8-4ca4-a60d-ff4173a7be94/files/7161ae0d-1884-4e98-b83f-b0c197d7dc6f.jpg'
  },
  {
    id: 4,
    title: 'Jacquemus',
    year: '2023',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'
  },
  {
    id: 5,
    title: 'The Row',
    year: '2023',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea1f5aab'
  },
  {
    id: 6,
    title: 'Byredo',
    year: '2023',
    category: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601'
  },
  {
    id: 7,
    title: 'Lemaire',
    year: '2022',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b'
  },
  {
    id: 8,
    title: 'Diptyque',
    year: '2022',
    category: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de'
  },
  {
    id: 9,
    title: 'Totême',
    year: '2022',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
  }
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const filters = ['All', 'Fashion', 'Luxury', 'Beauty', 'Fragrance'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="px-6 md:px-16 lg:px-24 py-6">
          <div className="flex items-center justify-between">
            <div className="text-base md:text-lg tracking-wider">HKI</div>
            <div className="hidden md:flex items-center gap-12 text-sm tracking-wide">
              <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
              <a href="#studio" className="hover:opacity-50 transition-opacity">Studio</a>
              <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
            </div>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden hover:opacity-50 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden pt-20">
          <div className="px-6 py-8 space-y-6 text-2xl">
            <a href="#work" onClick={() => setMenuOpen(false)} className="block hover:opacity-50">Work</a>
            <a href="#studio" onClick={() => setMenuOpen(false)} className="block hover:opacity-50">Studio</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:opacity-50">Contact</a>
          </div>
        </div>
      )}

      <main className="pt-28 md:pt-32">
        <section className="px-6 md:px-16 lg:px-24 pb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] mb-20 md:mb-24 tracking-tight">
            Work
          </h1>

          <div className="flex gap-3 mb-16 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-xs tracking-wider uppercase whitespace-nowrap transition-all border ${
                  activeFilter === filter
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-foreground border-border hover:border-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                style={{ 
                  opacity: 0,
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden bg-muted mb-5">
                  <div className="aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-light mb-1 tracking-wide">{project.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground tracking-wide">{project.category}</p>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground tracking-wide">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="px-6 md:px-16 lg:px-24 py-24 md:py-40 border-t border-border">
          <div className="max-w-5xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 md:mb-16 leading-tight tracking-tight">
              Design studio<br />based in Paris
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide max-w-3xl">
              <p>
                We are a multidisciplinary design studio creating visual identities, 
                digital experiences and art direction for luxury and lifestyle brands.
              </p>
              <p>
                Our approach combines strategic thinking with aesthetic sensibility 
                to deliver timeless and impactful design solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 md:py-40 border-t border-border">
          <div className="max-w-5xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-16 md:mb-20 leading-tight tracking-tight">
              Let's work<br />together
            </h2>
            <div className="space-y-10 text-base md:text-lg">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Email</p>
                <a href="mailto:hello@hki.paris" className="hover:opacity-50 transition-opacity tracking-wide">
                  hello@hki.paris
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Phone</p>
                <a href="tel:+33123456789" className="hover:opacity-50 transition-opacity tracking-wide">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Address</p>
                <p className="tracking-wide">Paris, France</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs tracking-wider">
          <div className="text-muted-foreground">
            © 2024 HKI Studio
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
