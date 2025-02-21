import "./NotFound.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function NotFound() {
  return (
    <>
      <Header />
      <main className="page-not-found">
        <h1>404</h1>
        <h2>La page que vous cherchez n'est pas encore cuite</h2>
        <img src="./Marmitte.png" alt="" />
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
