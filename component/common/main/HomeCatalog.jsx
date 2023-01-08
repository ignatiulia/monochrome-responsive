import ProductTile from './ProductTile';

export default function HomeCatalog() {
  return (
    <>
      <div className="home-catalog-preview container">
        <section>
          <header>
            <h1>New Stuff</h1>
          </header>
          <ProductTile></ProductTile>
        </section>

        <section>
          <header>
            <h1>Most loved</h1>
          </header>
          <ProductTile></ProductTile>
        </section>
      </div>
    </>
  );
}
