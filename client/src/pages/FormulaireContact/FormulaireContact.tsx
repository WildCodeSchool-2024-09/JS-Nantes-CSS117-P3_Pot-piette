import "./FormulaireContact.css";

function FormulaireContact() {
  return (
    <section className="contact-form-container">
      <h2>Nous contacter :</h2>
      <form className="contact-form">
        <section className="contactform-group">
          <input type="text" placeholder="Sujet ?" name="subject" />
        </section>
        <section className="contact-group">
          <input type="text" placeholder="Nom / Prénom" name="name" />
          <input type="email" placeholder="E-mail" name="email" />
        </section>
        <section className="contact-group">
          <textarea placeholder="Remarque / Commentaire :" name="comment" />
          <div className="character-count">/2000</div>
        </section>
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormulaireContact;
