import Footer from '../component/common/footer/Footer.';
import Header from '../component/common/header/Header';
import HomepageMain from '../component/common/main/HomepageMain';

export default function Home() {
  return (
    <div>
      <header className="header">
        <Header></Header>
      </header>

      <main className="content">
        <HomepageMain></HomepageMain>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
