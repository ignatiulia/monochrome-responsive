import Link from 'next/link';

export default function CatalogCtas() {
  return (
    <div className="catalog-ctas container">
      <Link href="/" title="view-all">
        <button className="button"> view all</button>
      </Link>
    </div>
  );
}
