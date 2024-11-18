import './SingleCard.css';

export default function SingleCard({ card, handleChoise }) {
  const handleClick = () => {
    handleChoise(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="card back" src="/img/cover.png" onClick={handleClick} alt="card back" />
      </div>
    </div>
  );
}
