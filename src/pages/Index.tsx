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
  const filters = ['All', 'Fashion', 'Luxury', 'Beauty', 'Fragrance'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
        <div className="px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold tracking-tight">HKI</div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
              <a href="#studio" className="hover:opacity-60 transition-opacity">Studio</a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
            </div>
            <button className="md:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="px-6 md:px-12 py-12 md:py-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-12 md:mb-16">
            Selected<br />Work
          </h1>

          <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-24">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeIn 0.8s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden bg-secondary mb-6">
                  <div className="aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="px-6 md:px-12 py-20 md:py-32 bg-secondary/30">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-light mb-8 md:mb-12">
              Design studio<br />based in Paris
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We are a multidisciplinary design studio creating visual identities, 
              digital experiences and art direction for luxury and lifestyle brands.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our approach combines strategic thinking with aesthetic sensibility 
              to deliver timeless and impactful design solutions.
            </p>
          </div>
        </section>

        <section id="contact" className="px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-light mb-12 md:mb-16">
              Let's work<br />together
            </h2>
            <div className="space-y-6 text-lg md:text-xl">
              <div>
                <p className="text-muted-foreground mb-2">Email</p>
                <a href="mailto:hello@hki.paris" className="hover:opacity-60 transition-opacity">
                  hello@hki.paris
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">Phone</p>
                <a href="tel:+33123456789" className="hover:opacity-60 transition-opacity">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">Address</p>
                <p>Paris, France</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-12 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2024 HKI Studio
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
