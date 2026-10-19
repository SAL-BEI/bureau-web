export default function Footer() {
  return (
    <footer id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/bureau-graphics-logo.png" alt="Bureau Graphics" />
          <p>Professional design, printing and branding services from Wilson Airport, Nairobi.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">UV Printing</a>
          <a href="#services">Large Format Printing</a>
          <a href="#services">Digital Printing</a>
          <a href="#services">Branding</a>
          <a href="#services">Finishing</a>
          <a href="#aviation">Aviation Printing</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+254763333311">0763 333 311</a>
          <a href="mailto:bureaugraphicslimited@gmail.com">bureaugraphicslimited@gmail.com</a>
          <p>Wilson Airport, Exit Lane<br />KAA Building No. 49<br />Nairobi, Kenya</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bureau Graphics. All rights reserved.</span>
        <span>Design. Print. Brand.</span>
      </div>
    </footer>
  );
}
