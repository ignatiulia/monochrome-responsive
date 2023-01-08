import Link from 'next/link';

export default function BannerMain() {
  return (
    <div className="banner-main-inner container">
      <Link
        href="/"
        title="New in"
        className="banner-cta button button-secondary"
      >
        New in
      </Link>
    </div>
  );
}
