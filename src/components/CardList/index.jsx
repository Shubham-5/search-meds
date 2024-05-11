import Card from "./Card";

function CardList({ searchResults }) {
  return (
    <div>
      {searchResults?.map((card) => (
        <Card key={card.id} />
      ))}
    </div>
  );
}

export default CardList;
