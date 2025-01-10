import "./Homepage.css";
import "../../global.css";

function Homepage() {
  return (
    <>
      <main className="home-page">
        <section className="home-carousel">
          <h2>Nouvelles recettes</h2>
          <figure>
            <img src="../src/assets/tests/Tarte.jpg" alt="" />
            <figcaption>Tarte au citron meringuée</figcaption>
          </figure>
        </section>
        <section className="home-search">
          <input
            type="search"
            id="site-search"
            name="search"
            placeholder="Cherchez votre recette"
          />
        </section>
        <h2>Inspirations</h2>
        <section className="home-inspirations">
          <figure>
            <img
              src="../src/assets/tests/rapide.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Rapide</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/plat.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Plat</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/healthy.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Salade</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/vege.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Végétarien</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/desserts.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Desserts</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/cocktail.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Cocktail</figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}
export default Homepage;
