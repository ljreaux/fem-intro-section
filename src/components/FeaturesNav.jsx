export default function FeaturesNav({features}) {
  return (
    <ul className="features-nav">
      {features.map((feature) => {
        return (
          <li className="feature-links">
            <img src={feature.link} alt={feature.name} />
            <a href="">{feature.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
