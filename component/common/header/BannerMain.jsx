import Link from 'next/link';

export default function BannerMain() {
  return (
    <section className="banner-main">
      <div className="container">
        <Link
          href="/"
          title="New in"
          className="banner-cta button button-secondary"
        >
          New in
        </Link>
      </div>
    </section>
  );
}
