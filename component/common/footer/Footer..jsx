import Link from 'next/link';

export default function Footer() {
  return (
    <section className="footer-inner container-lg">
      <div className="footer-contact d-none d-lg-block container">
        <ul>
          <li>
            <a href="tel:+44 (0)10 2345 6789" title="call us">
              call us
            </a>
          </li>

          <li>
            <a href="tel:+44 (0)10 2345 6789" title="call us">
              tel:+44 (0)10 2345 6789
            </a>
          </li>

          <li>
            <a href="mailto:contact@monochrome.com" title="mail">
              email customer care
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-nav">
        <h1>How can we help?</h1>
        <nav className="footer-nav-inner">
          <ul>
            <li>
              <Link href="/" title="about us">
                about us
              </Link>
            </li>

            <li>
              <Link href="/" title="careers">
                careers
              </Link>
            </li>

            <li>
              <Link href="/" title="affiliates">
                affiliates
              </Link>
            </li>

            <li>
              <Link href="/" title="advertising">
                advertising
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" title="style and fit">
                style and fit
              </Link>
            </li>

            <li>
              <Link href="/" title="faqs">
                faqs
              </Link>
            </li>

            <li>
              <Link href="/" title="delivery">
                delivery
              </Link>
            </li>

            <li>
              <Link href="/" title="returns">
                returns
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="terms container d-lg-none">
          <li>
            <Link href="/" title="terms & conditions">
              terms & conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="privacy & cookies">
              privacy & cookies
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-connect">
        <form className="footer-newsletter container">
          <h1>Let's connect</h1>

          <label htmlFor="email" className="d-lg-none">
            Be the first to recieve exclusives offers
          </label>

          <label htmlFor="email" className="d-lg-block d-none">
            sign up for our newsletter
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          ></input>

          <button
            type="submit"
            name="submit"
            title="submit"
            className="button-secondary"
          >
            submit
          </button>
        </form>

        <div className="privacy container">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            title="privacy"
            required
          ></input>

          <label htmlFor="privacy">
            I agree with{' '}
            <a href="/" title="Privacy Policy">
              Privacy Policy
            </a>{' '}
            and i want to receive emails from Monochrome.
          </label>
        </div>

        <div className="footer-social container">
          <h1>We are highly likeable</h1>

          <ul>
            <li>
              <a
                href="https://www.youtube.com"
                title="Monochrome Youtube Channel"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                title="Monochrome on Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.twitter.com"
                title="Monochrome on Twitter"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com"
                title="Monochrome on Instagram"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
