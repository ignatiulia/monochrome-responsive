import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <div className="header-search">
        <ul>
          <li>
            <Link href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </li>

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
        </ul>
      </div>

      <nav className="nav-primary">
        <ul>
          <li>
            <Link href="/" name="New Arrivals">
              New Arrivals
            </Link>
          </li>

          <li>
            <Link href="/" name="Brands">
              Brands
            </Link>
          </li>

          <li>
            <Link href="/" name="Men's">
              Men's
            </Link>
          </li>

          <li>
            <Link href="/" name="Women's">
              Women's
            </Link>
          </li>

          <li>
            <Link href="/" name="Accessories">
              Accessories
            </Link>
          </li>

          <li>
            <Link href="/" name="Lookbook">
              Lookbook
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
