import { useEffect, useLayoutEffect, useState, type CSSProperties } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Globe2, Menu, X } from 'lucide-react';

const MUJ = 'https://jaipur.manipal.edu';
const officialPage = `${MUJ}/student-international-cell.php`;
const linkedin = 'https://www.linkedin.com/company/international-student-cell-doic-muj/?viewAsMember=true';
const contactEmail = 'isc.muj@gmail.com';

function SafeImage({ src, alt, className = '', loading = 'lazy' }: { src: string; alt: string; className?: string; loading?: 'eager' | 'lazy' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`image-fallback ${className}`} role="img" aria-label={alt}><Globe2 size={28} strokeWidth={1.2} /><span>{alt}</span></div>;
  return <img className={className} src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />;
}

const motionDelay = (index: number) => ({ '--motion-delay': `${Math.min(index * 70, 420)}ms` }) as CSSProperties;

const experiences = [
  { number: '01', title: 'Semester exchanges', note: 'Study across borders. Bring a new perspective home.', href: `${MUJ}/img/pdf/Student-Exchange-Policy.pdf` },
  { number: '02', title: 'Global internships', note: 'Take your learning into international workplaces.', href: `${MUJ}/international-internship.php` },
  { number: '03', title: 'Collaborative research', note: 'Work across disciplines, campuses and cultures.', href: `${MUJ}/research-opportunities.php` },
  { number: '04', title: 'International winter schools', note: 'Short, immersive learning in an international setting.', href: `${MUJ}/international-winter-school.php` },
  { number: '05', title: 'International summer schools', note: 'Meet new perspectives through a shared academic experience.', href: `${MUJ}/international-summer-school.php` },
  { number: '06', title: 'International projects', note: 'Make ideas travel through shared work.', href: `${MUJ}/erasmus-projects.php` },
  { number: '07', title: 'Explore India', note: 'Experience the many stories and cultures of India.', href: `${MUJ}/explore-india-program.php` },
  { number: '08', title: 'Cultural exchange', note: 'Meet, share, and learn from one another.', href: `${MUJ}/events-visits.php` },
  { number: '09', title: 'Educational tours', note: 'Take learning beyond campus through international visits.', href: `${MUJ}/study-tours.php` },
  { number: '10', title: 'School Connect abroad', note: 'Build connections in countries with significant Indian diaspora populations.', href: `${MUJ}/about-international-collaborations.php` },
];

const gallery = [
  { caption: 'Delegation Visit', place: 'Iowa State University, USA', src: `${MUJ}/img/Picture1-event.jpg`, alt: 'MUJ delegation visit to Iowa State University in the United States' },
  { caption: 'Campus France', place: 'Team', src: `${MUJ}/img/Picture4-delegation%202.jpg`, alt: 'Campus France team visit at Manipal University Jaipur' },
  { caption: 'Delegation Visit', place: 'University of Melbourne, Australia', src: `${MUJ}/img/Picture6-campus%202.jpg`, alt: 'Delegation visit from the University of Melbourne, Australia' },
  { caption: 'MoU Signing Ceremony', place: 'University of Galway, Ireland', src: `${MUJ}/img/Picture8-%20delegation%204.jpg`, alt: 'MoU signing ceremony with the University of Galway, Ireland' },
  { caption: 'MoU Signing Ceremony', place: 'Auckland University of Technology, New Zealand', src: `${MUJ}/img/Picture9-mou.jpg`, alt: 'MoU signing ceremony with Auckland University of Technology, New Zealand' },
  { caption: 'Delegation Visit', place: 'DAAD Germany', src: `${MUJ}/img/daad.jpg`, alt: 'Delegation visit from DAAD Germany to Manipal University Jaipur' },
];

const advisors = [
  { name: 'Dr. Ravi Kumar Sharma', role: 'Director, DoIC', src: `${MUJ}/img/ravi-kumar.jpg` },
  { name: 'Mr. Punit Balichwal', role: 'Deputy Manager, DoIC', src: `${MUJ}/img/punit.jpg` },
];
const executive = [
  { name: 'Ojas Kumar', role: 'President', src: `${MUJ}/img/ojas.jpg` },
  { name: 'Pihu Malhotra', role: 'Vice President', src: `${MUJ}/img/pihu.jpg` },
  { name: 'Asmi Dhadiwal', role: 'General Secretary', src: `${MUJ}/img/asmi.jpg` },
  { name: 'Arsh Agrawal', role: 'Treasurer', src: `${MUJ}/img/Arsh-Agrawal-treasurer.jpg` },
  { name: 'Vedika Amol Deshpande', role: 'Creative Director', src: `${MUJ}/img/vedika.jpg` },
];
const core = [
  ['Manya Aggarwal', 'manya.jpg'], ['Soumyadeepa Pal', 'soumya.jpg'], ['Nandan R P', 'nandana.jpg'],
  ['Pragya Mridu', 'pragya.jpg'], ['Gagneet Singh', 'gagneet.jpg'], ['Ansh Verma', 'ansh.jpg'],
  ['Aarnav Srivastava', 'aarnav.jpg'], ['Snigdha Chaudhary', 'snigdha.jpg'], ['Akshat Bhardwaj', 'akshath.jpg'],
  ['Kanishka Nayak', 'kanishka.jpg'], ['Aarushi Khanna', 'aarushi.jpg'], ['Yagyansh', 'yag.jpg'],
  ['Manaswini Meka', 'manaswini.jpg'],
].map(([name, file]) => ({ name, role: 'Core Committee', src: `${MUJ}/img/${file}` }));
const memberContacts = [
  { name: 'Aditya Kulkarni', role: 'Student Committee', email: 'Aditya.23FE10ECE00065@muj.manipal.edu' },
  { name: 'Ishani Lohar', role: 'Student Committee', email: 'ISHANI.23FE10CSE00832@muj.manipal.edu' },
  { name: 'Kanishk Srivastava', role: 'Student Committee', email: 'kanishk.23fs10bca00192@muj.manipal.edu' },
  { name: 'Aaryan Gupta', role: 'Head of Incoming Delegation', email: 'aaryan.229310070@muj.manipal.edu' },
  { name: 'Krati Goyal', role: 'Student Committee', email: 'KRATI.23FA10BEH00002@muj.manipal.edu' },
  { name: 'Kriissh Marwaha', role: 'Student Committee', email: 'Kriissh.23FE10CII00076@muj.manipal.edu' },
  { name: 'Abhay Singh', role: 'Head of Events', email: 'abhay.229311201@muj.manipal.edu' },
  { name: 'Abhijeet Anand Jha', role: 'Head of Sponsorships', email: 'abhijeet.229301027@muj.manipal.edu' },
  { name: 'Tisha Saraf', role: 'Student Committee', email: 'tisha.220903063@muj.manipal.edu' },
  { name: 'Heer Sharma', role: 'Student Committee', email: 'heer.23fa10jmc00018@muj.manipal.edu' },
  { name: 'Agrima Singh', role: 'Student Committee', email: 'agrima.23fe10cse00315@gmail.com' },
  { name: 'Suryanshi Singh', role: 'Student Committee', email: 'suryanshi.23fe10cds00125@muj.manipal.edu' },
  { name: 'Tanvi Patel', role: 'Student Committee', email: 'TANVI.23FA20MCP00046@muj.manipal.edu' },
  { name: 'Tulip Ghosh', role: 'Student Committee', email: 'tulip.221006013@muj.manipal.edu' },
  { name: 'Devdutt Patel', role: 'Head Finance', email: 'devdutt.229403012@muj.manipal.edu' },
  { name: 'Ananya Jain', role: 'Student Committee', email: 'ANANYA.23FE10CSE00086@muj.manipal.edu' },
  { name: 'Yuvraj Puri', role: 'Head of Design', email: 'yuvraj.211015070@muj.manipal.edu' },
  { name: 'Saumay Khutatia', role: 'Student Committee', email: 'SAUMAY.23FL10IBL00013@muj.manipal.edu' },
  { name: 'Chahat Patni', role: 'Student Committee', email: 'chahat.23fa10jmc00008@muj.manipal.edu' },
  { name: 'Urvi Thakare', role: 'Head of Social Media', email: 'urvi.221007004@muj.manipal.edu' },
  { name: 'Pihu Malhotra', role: 'Student Committee', email: 'Pihu.23fe10cii00056@muj.manipal.edu' },
  { name: 'Anushka Sinha', role: 'Student Committee', email: 'ANUSHKA.23FA10BSP00065@muj.manipal.edu' },
  { name: 'Asmi Dhadiwal', role: 'Student Committee', email: 'asmi.23fe10bte00013@muj.manipal.edu' },
  { name: 'Siddham Gupta', role: 'Student Committee', email: 'SIDDHAM.23FE10CDS00090@muj.manipal.edu' },
  { name: 'Disha Jain', role: 'Student Committee', email: 'DISHA.23FA20MAE0008@muj.manipal.edu' },
  { name: 'Amber Kewlani', role: 'Student Committee', email: 'AMBER.23FA10BSP00029@muj.manipal.edu' },
  { name: 'Lakshya Goel', role: 'Head of Events', email: 'lakshya.219301625@muj.manipal.edu' },
  { name: 'Ansh Jain', role: 'Student Committee', email: 'ansh.229301127@muj.manipal.edu' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const root = document.documentElement;
    root.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-motion]').forEach((element) => observer.observe(element));

    const parallaxImages = window.innerWidth > 1025
      ? Array.from(document.querySelectorAll<HTMLElement>('.hero-image img, .manifesto-img img'))
      : [];
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const height = window.innerHeight || 1;
      parallaxImages.forEach((image) => {
        const bounds = image.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > height) return;
        const distanceFromCenter = bounds.top + bounds.height / 2 - height / 2;
        const offset = Math.max(-20, Math.min(20, distanceFromCenter * -0.025));
        image.style.setProperty('--scroll-parallax', `${offset.toFixed(1)}px`);
      });
    };
    const queueParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    window.addEventListener('scroll', queueParallax, { passive: true });
    window.addEventListener('resize', queueParallax);
    queueParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', queueParallax);
      window.removeEventListener('resize', queueParallax);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove('motion-ready');
    };
  }, []);
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    target.scrollIntoView({ block: 'start' });
    window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
  }, []);
  const nav = [
    ['The cell', '#about'], ['Opportunities', '#opportunities'], ['On campus', '#moments'], ['Our people', '#people'],
  ];
  return (
    <div className="grain">
      <a className="skip-link" href="#main-content" data-testid="link-skip-main">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="MUJ International Student Cell home" onClick={closeMenu} data-testid="link-home">
          <SafeImage src={`${MUJ}/img/manipal-university-jaipur-logo-01.svg`} alt="Manipal University Jaipur" loading="eager" />
          <span className="brand-divider" />
          <span className="brand-title">INTERNATIONAL<br />STUDENT CELL</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} className="nav-link" onClick={closeMenu} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Get in touch <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" data-testid="button-toggle-navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      {menuOpen && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
        {nav.map(([label, href], i) => <a key={href} href={href} onClick={closeMenu} data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}><span>0{i + 1}</span>{label}<ArrowUpRight size={17} /></a>)}
        <a href="#contact" onClick={closeMenu} data-testid="link-mobile-contact"><span>05</span>Get in touch<ArrowUpRight size={17} /></a>
      </nav>}

      <main id="main-content">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image image-wash">
          <SafeImage src={`${MUJ}/img/banner/about-muj.jpg`} alt="Students at Manipal University Jaipur, a diverse campus community" loading="eager" />
        </div>
        <div className="hero-shade" />
        <div className="hero-topline"><span className="eyebrow">Manipal University Jaipur · Student-led</span><span className="eyebrow hero-location">Jaipur, India&nbsp; / &nbsp;26°50′N</span></div>
        <div className="hero-content">
          <p className="eyebrow hero-kicker reveal">Your world, a little wider.</p>
          <h1 id="hero-title" className="display hero-title">
            <span className="hero-title-line"><span>UNLOCKING</span></span>
            <span className="hero-title-line"><span><em>GLOBAL</em></span></span>
            <span className="hero-title-line"><span>HORIZONS<span className="hero-period">.</span></span></span>
          </h1>
          <div className="hero-bottom reveal reveal-hero-bottom">
            <p>Shaping future leaders through exchange, discovery and a campus that looks beyond borders.</p>
            <a href="#about" className="hero-scroll" aria-label="Scroll to learn about the International Student Cell" data-testid="link-scroll-about"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></a>
          </div>
        </div>
        <span className="hero-index eyebrow">ISC / MUJ</span>
      </section>

      <section className="intro section-pad" id="about">
        <div className="wrap intro-grid">
          <div className="intro-mark" data-motion="reveal"><SafeImage src={`${MUJ}/img/isc-cell.jpg`} alt="International Student Cell mark" /></div>
          <div className="intro-copy">
            <p className="eyebrow section-label" data-motion="reveal"><span>01</span> &nbsp; A campus without borders</p>
            <h2 className="display reveal">The next horizon<br />is <em>closer</em> than you think.</h2>
            <div className="intro-text" data-motion="reveal">
              <p data-testid="text-isc-overview">At MUJ, the world is part of the curriculum. The International Student Cell broadens global horizons by connecting students with international exchange, internships, collaborative research and cultural immersion.</p>
              <p>We build global awareness and partnerships for MUJ students and incoming international students—making a globally curious campus feel like home. Through these experiences, students learn to navigate diverse cultures, collaborate across borders and grow into thoughtful global citizens.</p>
              <a href={officialPage} target="_blank" rel="noopener noreferrer" className="text-link" data-testid="link-official-intro">Discover ISC at MUJ <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-band" aria-label="Explore beyond the familiar">
        <div className="marquee-track" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <span key={i}>EXCHANGE <b>·</b> DISCOVER <b>·</b> CONNECT <b>·</b> GO FURTHER <b>·</b>&nbsp;</span>)}</div>
      </div>

      <section className="opportunities section-pad" id="opportunities">
        <div className="wrap">
          <div className="opportunity-head">
            <div><p className="eyebrow section-label" data-motion="reveal"><span>02</span> &nbsp; Ways to go further</p><h2 className="display" data-motion="heading">A world of<br /><em>possibility.</em></h2></div>
            <p className="opportunity-aside" data-motion="reveal">Different paths. A shared impulse to see what’s beyond the familiar.</p>
          </div>
          <div className="opportunity-list">
            {experiences.map((item, index) => <a className="opportunity-row" key={item.number} href={item.href} target="_blank" rel="noopener noreferrer" data-motion="reveal" style={motionDelay(index)} data-testid={`link-opportunity-${item.number}`}>
              <span className="opportunity-num eyebrow">{item.number}</span><span className="opportunity-title">{item.title}</span><span className="opportunity-note">{item.note}</span><ArrowUpRight className="row-arrow" size={19} />
            </a>)}
          </div>
          <div className="conference-note" data-motion="reveal"><span className="conference-symbol">↗</span><p><b>A global conversation, hosted here.</b><br />ISC’s key objectives include an annual international conference on internationalizing education in India, creating networking opportunities for faculty and students.</p></div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-img image-wash"><SafeImage src={`${MUJ}/img/Picture6-campus%202.jpg`} alt="International university delegates meeting with the MUJ community" /></div>
        <div className="manifesto-overlay" />
        <div className="manifesto-copy" data-motion="reveal">
          <p className="eyebrow">More than a destination</p>
          <h2 className="display">The world<br />doesn’t just<br /><em>happen</em> out there.</h2>
          <p className="manifesto-caption">It begins in the conversations we make room for, right here on campus.</p>
        </div>
        <span className="manifesto-caption-side eyebrow">GLOBAL AWARENESS · SHARED CULTURE</span>
      </section>

      <section className="moments section-pad" id="moments">
        <div className="wrap">
          <div className="moments-head"><div><p className="eyebrow section-label" data-motion="reveal"><span>03</span> &nbsp; On campus, in the world</p><h2 className="display" data-motion="heading">A campus in<br /><em>conversation.</em></h2></div><p data-motion="reveal">Partnerships take shape person by person. A glimpse of international exchange at MUJ.</p></div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <figure className={`photo-card photo-${index + 1}`} key={item.src} data-motion="image" style={motionDelay(index)} data-testid={`card-event-${index + 1}`}>
              <div className="photo-frame"><SafeImage src={item.src} alt={item.alt} /></div>
              <figcaption><span><b>{item.caption}</b><small>{item.place}</small></span><span className="photo-number eyebrow">0{index + 1}</span></figcaption>
            </figure>)}
          </div>
          <a href={officialPage} target="_blank" rel="noopener noreferrer" className="text-link gallery-link" data-motion="reveal" data-testid="link-gallery-more">More about MUJ International Student Cell <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <section className="team-section section-pad" id="people">
        <div className="wrap">
          <div className="team-heading"><div><p className="eyebrow section-label" data-motion="reveal"><span>04</span> &nbsp; People make the world smaller</p><h2 className="display" data-motion="heading">Meet the<br /><em>connectors.</em></h2></div><p data-motion="reveal">Guided by faculty. Carried forward by students. A community making international connection part of campus life.</p></div>
          <div className="team-subhead" data-motion="reveal"><span className="eyebrow">FACULTY ADVISORS</span><span className="team-rule" /></div>
          <div className="advisor-grid">{advisors.map((person, index) => <Person key={person.name} person={person} type="advisor" motionIndex={index} />)}</div>
          <div className="team-subhead executive-subhead" data-motion="reveal"><span className="eyebrow">EXECUTIVE COMMITTEE</span><span className="team-rule" /></div>
          <div className="executive-grid">{executive.map((person, index) => <Person key={person.name} person={person} type="executive" motionIndex={index} />)}</div>
          <div className="team-subhead core-subhead" data-motion="reveal"><span className="eyebrow">CORE COMMITTEE</span><span className="team-rule" /></div>
          <div className="core-grid">{core.map((person, index) => <Person key={person.name} person={person} type="core" motionIndex={index} />)}</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top wrap">
          <p className="eyebrow" data-motion="reveal">Have a question? An idea? A world in mind?</p>
          <h2 className="display" data-motion="heading">Let’s make<br /><em>it global.</em></h2>
          <a href={`mailto:${contactEmail}`} className="contact-cta" data-motion="reveal" data-testid="link-cta-contact">Write to the cell <ArrowUpRight size={19} /></a>
        </div>
        <div className="contact-bottom wrap">
          <div className="contact-info" data-motion="reveal"><span className="eyebrow">EMAIL</span><a href={`mailto:${contactEmail}`} data-testid="link-email-contact">{contactEmail}</a></div>
          <div className="contact-info" data-motion="reveal" style={motionDelay(1)}><span className="eyebrow">FIND US</span><p>Room No. 213, DoIC Office<br />Second Floor, Dome Building, MUJ</p></div>
          <a className="linkedin-link" data-motion="reveal" style={motionDelay(2)} href={linkedin} target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">Follow ISC on LinkedIn <ArrowUpRight size={15} /></a>
        </div>
        <details className="member-contacts wrap" data-motion="reveal">
          <summary><span className="eyebrow">MEMBER EMAILS · {memberContacts.length} CONTACTS</span><span className="member-contacts-toggle">View all <ArrowDown size={14} /></span></summary>
          <ul className="member-contacts-grid">
            {memberContacts.map((member) => (
              <li className="member-contact" key={member.email}>
                <span className="member-contact-name">{member.name}</span>
                <span className="member-contact-role">{member.role}</span>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </li>
            ))}
          </ul>
          <a className="member-contacts-source" href={officialPage} target="_blank" rel="noopener noreferrer">Contact details from the official MUJ page <ArrowUpRight size={13} /></a>
        </details>
      </section>
      </main>
      <footer className="footer">
        <a href="#top" className="footer-brand" data-testid="link-footer-home">MUJ <span>/</span> ISC</a>
        <p>International Student Cell<br />Manipal University Jaipur</p>
        <a href={officialPage} target="_blank" rel="noopener noreferrer" className="footer-official" data-testid="link-footer-official">Official MUJ page <ArrowUpRight size={13} /></a>
        <a className="back-top" href="#top" aria-label="Back to top" data-testid="link-back-to-top"><ArrowDownRight size={18} /></a>
      </footer>
    </div>
  );
}

function Person({ person, type, motionIndex }: { person: { name: string; role: string; src: string }; type: 'advisor' | 'executive' | 'core'; motionIndex: number }) {
  const personId = person.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return <article className={`person-card person-${type}`} data-motion="reveal" style={motionDelay(motionIndex)} data-testid={`card-person-${type}-${personId}`}>
    <div className="person-photo"><SafeImage src={person.src} alt={`Portrait of ${person.name}, ${person.role}`} /></div>
    <div className="person-meta"><h3 data-testid={`text-person-name-${personId}`}>{person.name}</h3><p>{person.role}</p></div>
  </article>;
}

export default App;
