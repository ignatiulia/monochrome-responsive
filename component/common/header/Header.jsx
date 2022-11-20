import BannerMain from './BannerMain';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Header() {
  return (
    <>
      <section className="header-secondary mb-2 mb-lg-0">
        <HeaderSecondary></HeaderSecondary>
      </section>

      <section className="header-primary">
        <div className="container">
          <HeaderPrimary></HeaderPrimary>
        </div>
      </section>

      <section className="banner-main">
        <BannerMain></BannerMain>
      </section>
    </>
  );
}
