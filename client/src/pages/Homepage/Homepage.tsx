import { useEffect, useState } from "react";
import InspirationCard from "../../components/InspirationCard/InspirationCard";
import "./Homepage.css";
import type { RecipeByTag } from "../../types/detail-recipe";

function Homepage() {
  const [tags, setTags] = useState<null | RecipeByTag[]>();

  useEffect(() => {
    fetch("http://localhost:3310/api/tags/2")
      .then((response) => response.json()) // On convertit la réponse en JSON
      .then((tags) => setTags(tags)); // Le changement de data devient character(appelé de base) et .results qui est le tableau dans l'API
  }, []);
  console.warn(tags);

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
        <section className="inspirationcards">
          {tags?.map((el) => (
            <InspirationCard
              key={el.id}
              picture={el.picture}
              title={el.title}
            />
          ))}
        </section>
      </main>
    </>
  );
}
export default Homepage;
