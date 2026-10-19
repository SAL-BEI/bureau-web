import { ArrowDown, ArrowRight, ExternalLink, Mail, MessageCircle, Star } from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogoRow from "./components/LogoRow";
import { aviationItems, clientLogos, processSteps, services } from "./data";

function App() {
  return (
    <main>
      <Header />

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Design. Print. Brand.</div>
            <h1>Professional Printing &amp; Branding That Makes You <em>Stand Out</em></h1>
            <p>
              From digital and UV printing to specialised aviation manuals, branding and
              professional finishing, we bring your ideas to life with accuracy and dependable service.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#quote">Request a Quote <ArrowRight size={18} /></a>
              <a className="text-link" href="#services">Explore our services <ArrowDown size={17} /></a>
            </div>
            <div className="trust-row">
              <span><b>Since 1997</b><small>Printing experience</small></span>
              <span><b>One-stop shop</b><small>Design to finishing</small></span>
              <span><b>Wilson Airport</b><small>Aviation specialists</small></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-shape shape-one" />
            <div className="hero-shape shape-two" />
            <img
              src="/aviation-hero.png"
              alt="Aircraft technical manuals, QRH, checklist and branded aviation merchandise"
            />
            <div className="hero-badge">
              <span><Star size={18} fill="currentColor" /></span>
              <div><b>Aviation specialists</b><small>Technical print you can trust</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-ribbon" aria-label="Main services">
        <div className="container service-ribbon-grid">
          {services.map((service) => (
            <a href="#services" key={service.title}>
              <span className={`mini-icon ${service.color}`}>{service.icon}</span>
              <span>{service.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading split">
            <div>
              <p className="kicker">What we do</p>
              <h2>Everything you need to print, present and promote your brand.</h2>
            </div>
            <p>
              From a single urgent job to ongoing corporate production, our team helps you choose
              the right material, printing method and finish.
            </p>
          </div>

          <div className="service-accordion">
            {services.map((service) => (
              <details key={service.title}>
                <summary>
                  <span className={`card-icon ${service.color}`}>{service.icon}</span>
                  <span className="accordion-title">
                    <b>{service.title}</b>
                    <small>Click to view {service.title.toLowerCase()} services</small>
                  </span>
                  <span className="accordion-plus" aria-hidden="true">+</span>
                </summary>
                <div className="accordion-content">
                  <p>{service.text}</p>
                  {service.items.map((item) => (
                    <a href="#quote" key={item}>{item} <ArrowRight size={16} /></a>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section aviation" id="aviation">
        <div className="container aviation-grid">
          <div className="aviation-panel">
            <p className="kicker light">Aviation printing</p>
            <h2>Made for aviation. Printed with precision.</h2>
            <p>
              We understand that aviation documents and maps must be clear, durable and produced
              carefully. Bureau Graphics supports operators, training organisations, engineers and
              flight crews with specialised print and merchandise.
            </p>
            <a className="button white" href="#quote">Request an aviation quote <ArrowRight size={18} /></a>
          </div>
          <div className="aviation-list">
            {aviationItems.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div>
            <p className="kicker">Why Bureau Graphics</p>
            <h2>More than a printshop. A reliable production partner.</h2>
          </div>
          <div className="about-copy">
            <p>
              Since 1997, Bureau Graphics has helped individuals, businesses and aviation
              organisations turn ideas into professional printed products. Our Wilson Airport
              location places us close to the clients who rely on speed, accuracy and consistency.
            </p>
            <div className="values">
              <div><b>Quality first</b><span>Careful artwork checks, production and finishing.</span></div>
              <div><b>Practical advice</b><span>The right material and process for every job.</span></div>
              <div><b>Dependable service</b><span>Clear communication and realistic turnaround times.</span></div>
              <div><b>Wide capability</b><span>Design, digital and UV print, branding, signage, finishing and stationery.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-heading">
            <p className="kicker">How it works</p>
            <h2>A simple path from idea to finished product.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients" aria-labelledby="clients-heading">
        <div className="container clients-heading">
          <div>
            <p className="kicker">Trusted by organisations across Kenya</p>
            <h2 id="clients-heading">Proud to support the people who keep business moving.</h2>
          </div>
          <p>
            From aviation and education to hospitality and corporate services, our clients rely on
            us for accurate, dependable print production.
          </p>
        </div>
        <div className="client-logo-stage">
          <LogoRow logos={clientLogos.slice(0, 17)} />
          <LogoRow logos={clientLogos.slice(17)} reverse />
        </div>
      </section>

      <section className="section quote" id="quote">
        <div className="container quote-wrap">
          <div>
            <p className="kicker light">Ready to get started?</p>
            <h2>Tell us what you need. We’ll help you make it happen.</h2>
            <p>For the fastest quotation, include the product, size, quantity, finishing and when you need it.</p>
          </div>
          <div className="quote-actions">
            <a
              className="button white"
              href="https://wa.me/254763333311?text=Hello%20Bureau%20Graphics%2C%20I%20would%20like%20a%20quotation."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp us <ExternalLink size={16} />
            </a>
            <a
              className="button outline-light"
              href="mailto:bureaugraphicslimited@gmail.com?subject=Quotation%20Request"
            >
              <Mail size={18} /> Send an email <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
