import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronDown, 
  Clock, 
  Home, 
  Star,
  Menu,
  X
} from 'lucide-react';

const BRANDS = [
  "Kérastase", "L'Oréal Professionnel", "Wella Professionals", "Redken", "Oribe",
  "Kérastase", "L'Oréal Professionnel", "Wella Professionals", "Redken", "Oribe"
];

const SERVICES = [
  {
    title: "Corte Design",
    category: "Visagismo",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Coloração Premium",
    category: "L'Oréal & Wella",
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Tratamentos",
    category: "Ritual Kérastase",
    image: "https://images.unsplash.com/photo-1527799822367-a288a9ec448c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Finalização",
    category: "Escova & Styling",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const revealVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-display font-bold tracking-tighter uppercase">
            SIMONE SANTOS<span className="text-gold">.</span>
          </div>
          
          <nav className="hidden md:flex gap-10 text-[10px] font-medium uppercase tracking-[0.2em] opacity-70">
            {['Serviços', 'Diferenciais', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-gold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/message/INXNY2BHGTC2E1" 
              className="hidden sm:block bg-gold text-dark px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-500"
            >
              Agendar Agora
            </a>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 text-xl font-display italic">
              {['Serviços', 'Diferenciais', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/message/INXNY2BHGTC2E1" 
                className="bg-gold text-dark text-center py-4 text-sm font-bold uppercase tracking-widest"
              >
                Agendar Agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroBgY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-linear-to-b from-dark/40 via-dark/60 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-110" 
            alt="Luxury Salon"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block text-gold font-medium tracking-[0.4em] uppercase text-[10px] mb-6"
          >
            Exclusividade em cada detalhe
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-8xl font-display font-medium leading-[1.1] mb-8 tracking-tight"
          >
            Sua essência, elevada à <br /> 
            <span className="italic text-gradient font-normal text-gold">máxima sofisticação.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Um refúgio de luxo onde a arte do visagismo encontra a excelência técnica para revelar sua melhor versão.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <a 
              href="#servicos" 
              className="animate-pulse-gold bg-white text-dark px-10 py-5 rounded-full font-bold uppercase tracking-tighter hover:bg-gold hover:text-white transition-all duration-500 inline-block text-sm"
            >
              Explore a Experiência
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <section className="py-12 bg-dark-lighter border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap opacity-30">
          {BRANDS.map((brand, i) => (
            <span key={i} className="text-2xl font-display italic mx-10">{brand}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {BRANDS.map((brand, i) => (
            <span key={`dup-${i}`} className="text-2xl font-display italic mx-10">{brand}</span>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS (BENTO GRID) */}
      <section id="diferenciais" className="py-32 px-6 md:px-12 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              Por que escolher <span className="italic text-gold">L'Élégance</span>?
            </h2>
            <div className="h-1 w-20 bg-gold" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="bento-card md:col-span-2 md:row-span-2 rounded-[2rem] p-10 flex flex-col justify-end overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" 
                alt="Experience"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <h3 className="text-3xl font-display mb-4">Qualidade Inquestionável</h3>
                <p className="text-white/50 max-w-md leading-relaxed">
                  Combinamos técnicas avançadas e os melhores produtos do mercado mundial para garantir resultados que superam expectativas em cada fio.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="bento-card rounded-[2rem] p-10 flex flex-col justify-center"
            >
              <div className="text-gold mb-6">
                <Clock size={40} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-display mb-2">Terça a Sábado</h3>
              <p className="text-white/40 text-sm">Horários flexíveis pensados na rotina da mulher moderna que não abre mão do autocuidado.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="bento-card rounded-[2rem] p-10 flex flex-col justify-center"
            >
              <div className="text-gold mb-6">
                <Home size={40} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-display mb-2">Ambiente Acolhedor</h3>
              <p className="text-white/40 text-sm">Um espaço projetado para o seu conforto, onde cada detalhe evoca tranquilidade e luxo.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="bento-card md:col-span-3 rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10"
            >
              <div className="text-5xl font-display italic text-gold">2026</div>
              <p className="text-white/60 text-lg">Definindo o novo padrão de beleza e bem-estar para o público mais exigente da região.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-32 bg-dark-lighter px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-24"
          >
            <span className="text-gold tracking-[0.3em] uppercase text-[10px]">O que fazemos</span>
            <h2 className="text-5xl font-display mt-4 italic text-gradient">Menu de Transformações</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-[3/4] rounded-2xl"
              >
                <img 
                  src={service.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-xl font-display mb-1">{service.title}</h4>
                  <p className="text-gold text-[10px] tracking-widest uppercase">{service.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-dark overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center gap-1 text-gold mb-10">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-2xl md:text-4xl font-display italic leading-snug mb-12">
            "Um atendimento impecável. Do momento em que entro até a saída, me sinto uma rainha. A cor do meu cabelo nunca esteve tão vibrante e saudável."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">MA</div>
            <div className="text-left">
              <p className="font-bold text-sm tracking-widest uppercase">Marcella Albuquerque</p>
              <p className="text-white/40 text-[10px]">Cliente VIP há 3 anos</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-dark-lighter py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="text-3xl font-display font-bold tracking-tighter uppercase mb-6">
              SIMONE SANTOS<span className="text-gold">.</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Elevando a autoestima feminina através de técnicas exclusivas e atendimento de alto luxo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="https://wa.me/message/INXNY2BHGTC2E1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h5 className="text-gold uppercase text-[10px] tracking-widest font-bold mb-6">Horários</h5>
              <ul className="text-sm text-white/50 space-y-3">
                <li>Terça — 09:00 às 19:00</li>
                <li>Quarta — 09:00 às 19:00</li>
                <li>Quinta — 09:00 às 19:00</li>
                <li>Sexta — 09:00 às 20:00</li>
                <li>Sábado — 08:00 às 18:00</li>
                <li className="text-gold/40">Dom & Seg — Fechado</li>
              </ul>
            </div>
            <div>
              <h5 className="text-gold uppercase text-[10px] tracking-widest font-bold mb-6">Localização</h5>
              <p className="text-sm text-white/50 leading-relaxed">
                Av. da Sofisticação, 1000<br />
                Bairro Exclusive - Suíte 402<br />
                São Paulo, SP
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>&copy; 2026 SIMONE SANTOS SALÃO DE BELEZA. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="hover:text-gold cursor-pointer transition-colors">POLÍTICA DE PRIVACIDADE</p>
        </div>
      </footer>
    </div>
  );
}
