import { Link } from "react-router-dom";

export default function SeriesList({ series }) {
  return (
    <>
        <ul>
          <h3>{series.name}</h3>
          {series.cards.map(gpu => (
            <li key={gpu.id}>
              <Link to={`/gpu/${gpu.id}`}>{gpu.model}</Link>
            </li>
          ))}
        </ul>
    </>
  );
}