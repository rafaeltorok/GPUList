import SeriesList from "./SeriesList";

export default function ManufacturerList({ manufacturers }) {
  if (!Array.isArray(manufacturers)) {
    return (
      <h2>Loading manufacturers</h2>
    )
  }

  return (
    <>
      <h1>GPUs</h1>
      <div className="gpu-tables">
        {manufacturers.map(manufacturer => (
          <div
            key={manufacturer.id}
            className={manufacturer.id}
          >
            <ul>
              <h2>{manufacturer.name}</h2>
            </ul>
            {manufacturer.series.map(s => (
              <SeriesList key={s.id} series={s} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}