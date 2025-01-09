function DetailRecipePage() {
  return (
    <>
      <header>
        <h1 className="title-detail-recipe">Titre de la recette</h1>
        <section>
          <p>*****</p>
          <p>45mn</p>
        </section>
        <img src="" alt="" className="img-detail-recipe" />
        <section>
          <img src="" alt="" />
          <img src="" alt="" />
        </section>

        <section className="ingredients-detail-recipe-container">
          <h2>Ingredients</h2>
          <section>
            <button type="button">-</button>
            <p>4personnes</p>
            <button type="button">+</button>
          </section>
          <ul>
            <li>
              <img src="" alt="" />
              <section>
                <p>Sel</p>
                <p>1 pincée</p>
              </section>
            </li>
            <li>
              <img src="" alt="" />
              <section>
                <p>Sel</p>
                <p>1 pincée</p>
              </section>
            </li>
            <li>
              <img src="" alt="" />
              <section>
                <p>Sel</p>
                <p>1 pincée</p>
              </section>
            </li>
            <li>
              <img src="" alt="" />
              <section>
                <p>Sel</p>
                <p>1 pincée</p>
              </section>
            </li>
          </ul>
        </section>
        <section className="preparation-detail-recipe-container">
          <h2>Préparation</h2>
          <ul>
            <li>
              <h3>Etape 1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora reprehenderit ipsam enim atque, quos, reiciendis beatae
                alias modi nam perferendis accusamus quae. Dolorum omnis
                cupiditate et optio voluptate tempora libero!
              </p>
            </li>
            <li>
              <h3>Etape 2</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora reprehenderit ipsam enim atque, quos, reiciendis beatae
                alias modi nam perferendis accusamus quae. Dolorum omnis
                cupiditate et optio voluptate tempora libero!
              </p>
            </li>
            <li>
              <h3>Etape 3</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora reprehenderit ipsam enim atque, quos, reiciendis beatae
                alias modi nam perferendis accusamus quae. Dolorum omnis
                cupiditate et optio voluptate tempora libero!
              </p>
            </li>
            <li>
              <h3>Etape 4</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora reprehenderit ipsam enim atque, quos, reiciendis beatae
                alias modi nam perferendis accusamus quae. Dolorum omnis
                cupiditate et optio voluptate tempora libero!
              </p>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
}

export default DetailRecipePage;
