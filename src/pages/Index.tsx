import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const portfolioProjects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://cdn.poehali.dev/projects/53e96f31-2bc8-4ca4-a60d-ff4173a7be94/files/4433e438-55e4-4f28-a60a-60ece50c11c1.jpg',
    description: 'Создание уникального визуального стиля'
  },
  {
    id: 2,
    title: 'Digital Studio',
    category: 'Web Design',
    image: 'https://cdn.poehali.dev/projects/53e96f31-2bc8-4ca4-a60d-ff4173a7be94/files/67603b6d-0800-4e27-adde-006009510dda.jpg',
    description: 'Современное пространство для креатива'
  },
  {
    id: 3,
    title: 'Creative Team',
    category: 'Photography',
    image: 'https://cdn.poehali.dev/projects/53e96f31-2bc8-4ca4-a60d-ff4173a7be94/files/7161ae0d-1884-4e98-b83f-b0c197d7dc6f.jpg',
    description: 'Люди, создающие выдающиеся проекты'
  }
];

const services = [
  { icon: 'Palette', title: 'Брендинг', description: 'Разработка фирменного стиля и айдентики' },
  { icon: 'Layout', title: 'Веб-дизайн', description: 'Проектирование интерфейсов и сайтов' },
  { icon: 'Smartphone', title: 'UX/UI', description: 'Дизайн мобильных приложений' },
  { icon: 'Package', title: 'Упаковка', description: 'Дизайн продуктовой упаковки' }
];

const team = [
  { name: 'Анна Смирнова', role: 'Арт-директор', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  { name: 'Дмитрий Козлов', role: 'Ведущий дизайнер', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { name: 'Елена Волкова', role: 'UX-исследователь', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }
];

const blogPosts = [
  { title: 'Тренды дизайна 2024', date: '15 Окт 2024', category: 'Тренды' },
  { title: 'Психология цвета', date: '10 Окт 2024', category: 'Теория' },
  { title: 'Минимализм в брендинге', date: '05 Окт 2024', category: 'Кейсы' }
];

const processSteps = [
  { number: '01', title: 'Исследование', description: 'Анализ рынка и конкурентов' },
  { number: '02', title: 'Стратегия', description: 'Разработка концепции проекта' },
  { number: '03', title: 'Дизайн', description: 'Создание визуальных решений' },
  { number: '04', title: 'Реализация', description: 'Внедрение и тестирование' }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('works');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">STUDIO</h1>
            <div className="hidden md:flex items-center gap-8">
              {['works', 'services', 'about', 'team', 'process', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                >
                  {section === 'works' && 'Работы'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'team' && 'Команда'}
                  {section === 'process' && 'Процесс'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Написать нам
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Дизайн,<br />который работает
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Мы создаём визуальные решения, которые помогают брендам выделяться и достигать бизнес-целей
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Избранные проекты</span>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">Наши работы</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <p className="text-sm uppercase tracking-wider mb-2">{project.category}</p>
                      <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <Icon name="ArrowUpRight" className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Что мы делаем</span>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">Услуги</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <Icon name={service.icon as any} size={40} className="mb-6 text-accent" />
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">О студии</span>
              <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Мы создаём<br />смыслы</h3>
              <p className="text-lg text-muted-foreground mb-6">
                STUDIO — дизайн-студия полного цикла, специализирующаяся на создании уникальных визуальных решений для брендов по всему миру.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                С 2018 года мы реализовали более 200 проектов, помогая компаниям выстраивать сильную визуальную идентичность и эффективную коммуникацию с аудиторией.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Наград</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Studio workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Люди</span>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">Команда</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Как мы работаем</span>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">Процесс</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Insights</span>
              <h3 className="text-4xl md:text-5xl font-bold mt-2">Блог</h3>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Все статьи
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <span className="text-xs uppercase tracking-wider text-accent">{post.category}</span>
                <h4 className="text-xl font-semibold my-4 group-hover:text-accent transition-colors">{post.title}</h4>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-5xl md:text-7xl font-bold mb-8">Давайте создадим<br />что-то великое</h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Расскажите о вашем проекте, и мы найдём лучшее решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Mail" className="mr-2" size={20} />
              hello@studio.com
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-4">STUDIO</h5>
              <p className="text-sm text-muted-foreground">Дизайн-студия полного цикла</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Брендинг</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Веб-дизайн</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">UX/UI</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Компания</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Москва, Россия</li>
                <li>+7 (495) 123-45-67</li>
                <li>hello@studio.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 STUDIO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
