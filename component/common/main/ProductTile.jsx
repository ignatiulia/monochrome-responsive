import Link from 'next/link';

export default function ProductTile() {
  return (
    <>
      <ul className="product-tiles">
        <li>
          <article className="product-tile">
            <header>
              <div className="product-tile-image">
                <Link href="/" title="Monochrome Watch">
                  <picture>
                    <img
                      src="images/product/Recently Viewed Thumbnail 2-2.png"
                      alt="Monochrome Watch"
                    />
                  </picture>
                </Link>

                <Link href="/" title="Wishlist" className="wishlist">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>

              <h1 className="product-tile-title">
                <Link href="/" title="Monochrome Watch">
                  Monochrome
                </Link>
              </h1>
            </header>

            <section className="product-tile-pricing">
              <span className="product-tile-price">$425</span>
            </section>
          </article>
        </li>

        <li>
          <article className="product-tile">
            <header>
              <div className="product-tile-image">
                <Link href="/" title="Monochrome Watch">
                  <picture>
                    <img
                      src="images/product/Recently Viewed Thumbnail 2-1.png"
                      alt="Monochrome Watch"
                    />
                  </picture>
                </Link>

                <Link href="/" title="Wishlist" className="wishlist">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>

              <h1 className="product-tile-title">
                <Link href="/" title="Monochrome Watch">
                  Monochrome
                </Link>
              </h1>
            </header>

            <section className="product-tile-pricing">
              <span className="product-tile-price">$500</span>
            </section>
          </article>
        </li>

        <li>
          <article className="product-tile">
            <header>
              <div className="product-tile-image">
                <Link href="/" title="Monochrome Watch">
                  <picture>
                    <img
                      src="images/product/Recently Viewed Thumbnail 2-3.png"
                      alt="Monochrome Watch"
                    />
                  </picture>
                </Link>

                <Link href="/" title="Wishlist" className="wishlist">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>

              <h1 className="product-tile-title">
                <Link href="/" title="Monochrome Watch">
                  Monochrome
                </Link>
              </h1>
            </header>

            <section className="product-tile-pricing">
              <span className="product-tile-price">$400</span>
            </section>
          </article>
        </li>

        <li>
          <article className="product-tile">
            <header>
              <div className="product-tile-image">
                <Link href="/" title="Monochrome Watch">
                  <picture>
                    <img
                      src="images/product/Recently Viewed Thumbnail 2-5.png"
                      alt="Monochrome Watch"
                    />
                  </picture>
                </Link>

                <Link href="/" title="Wishlist" className="wishlist">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>

              <h1 className="product-tile-title">
                <Link href="/" title="Monochrome Watch">
                  Monochrome
                </Link>
              </h1>
            </header>

            <section className="product-tile-pricing">
              <span className="product-tile-price">$375</span>
            </section>
          </article>
        </li>
      </ul>
    </>
  );
}
