import "./AscendingSquares.css";

export default function AscendingSquares() {
  const squares = Array.from({ length: 10 }, (_, index) => <div key={index} aria-hidden="true"></div>);

  return (
    <div className="ascending-squares" aria-hidden="true">
      {squares}
    </div>
  );
}
