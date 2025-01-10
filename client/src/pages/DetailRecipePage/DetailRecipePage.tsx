import "./detail-recipe-page.css";
import { GoClock } from "react-icons/go";
import {
  IoIosAdd,
  IoIosRemove,
  IoIosStar,
  IoIosStarOutline,
  IoMdHeartEmpty,
  IoMdShare,
} from "react-icons/io";

function DetailRecipePage() {
  return (
    <>
      <header className="header-detail-recipe">
        <h1 className="title-detail-recipe">
          Grillée de mogettes Ventre à choux
        </h1>
        <section className="info-detail-recipe">
          <p>
            <IoIosStar />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </p>
          <p>
            <GoClock />
            45mn
          </p>
        </section>
        <img src="" alt="" className="img-detail-recipe" />
        <section className="share-and-like-detail-recipe">
          <IoMdHeartEmpty />
          <IoMdShare />
        </section>
      </header>

      <section className="ingredients-detail-recipe-container">
        <h2>Ingredients</h2>
        <section className="button-parts-detail-recipe">
          <button type="button">
            <IoIosRemove />
          </button>
          <p>4 personnes</p>
          <button type="button">
            <IoIosAdd />
          </button>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              reprehenderit ipsam enim atque, quos, reiciendis beatae alias modi
              nam perferendis accusamus quae. Dolorum omnis cupiditate et optio
              voluptate tempora libero!
            </p>
          </li>
          <li>
            <h3>Etape 2</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              reprehenderit ipsam enim atque, quos, reiciendis beatae alias modi
              nam perferendis accusamus quae. Dolorum omnis cupiditate et optio
              voluptate tempora libero!
            </p>
          </li>
          <li>
            <h3>Etape 3</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              reprehenderit ipsam enim atque, quos, reiciendis beatae alias modi
              nam perferendis accusamus quae. Dolorum omnis cupiditate et optio
              voluptate tempora libero!
            </p>
          </li>
          <li>
            <h3>Etape 4</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              reprehenderit ipsam enim atque, quos, reiciendis beatae alias modi
              nam perferendis accusamus quae. Dolorum omnis cupiditate et optio
              voluptate tempora libero!
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default DetailRecipePage;