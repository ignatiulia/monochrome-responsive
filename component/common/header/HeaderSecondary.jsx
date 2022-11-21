import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <div className="container">
        <div className="header-logo mt-2">
          <a href="/">
            <h1>Monochrome</h1>
          </a>
        </div>

        <div className="header-controls mt-2">
          <ul>
            <li>
              <Link href="/" title="My Account">
                <i className="fa-regular fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Cart">
                <i className="fa-brands fa-opencart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-secondary-inner">
        <section className="container">
          <div className="header-connect mt-3">
            <ul>
              <li>
                <a
                  href="https://www.youtube.com"
                  title="Monochrome Youtube Channel"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com"
                  title="Monochrome on Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com" title="Monochrome on Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com"
                  title="Monochrome on Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44 (0)10 2345 6789" title="Call Us">
                  Call Us +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <ul className="header-controls mt-3">
            <li>
              <form>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                />
                <button type="submit">
                  <i className="fa-solid fa-search"></i>
                </button>
              </form>
            </li>

            <li>
              <Link href="/" title="My Account">
                <i className="fa-regular fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Cart">
                <i className="fa-brands fa-opencart"></i>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
