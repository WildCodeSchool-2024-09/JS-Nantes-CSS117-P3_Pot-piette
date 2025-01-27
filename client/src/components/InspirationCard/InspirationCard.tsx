import "./InspirationCard.css";

type InspirationCardProps = {
  picture: string;
  title: string;
  id?: number;
};

function InspirationCard({ picture, title }: InspirationCardProps) {
  return (
    <>
      <figure className="inspiration-card">
        <img src={picture} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </>
  );
}
export default InspirationCard;
