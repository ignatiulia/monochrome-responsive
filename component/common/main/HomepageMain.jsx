import CatalogCtas from './CatalogCtas';
import HomeCatalog from './HomeCatalog';
import HomeContent from './HomeContent';

export default function HomepageMain() {
  return (
    <>
      <div className="home-catalog-preview">
        <HomeCatalog></HomeCatalog>
      </div>

      <div className="home-content container">
        <HomeContent></HomeContent>
      </div>

      <div className="home-catalog-preview">
        <HomeCatalog></HomeCatalog>
      </div>
      <CatalogCtas></CatalogCtas>
    </>
  );
}
