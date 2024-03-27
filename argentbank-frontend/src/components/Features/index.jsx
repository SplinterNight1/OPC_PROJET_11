import FeatData from "../../assets/json/features.json";
import "./style.css";

export default function Features() {
  const featData = FeatData;

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featData.map((feature, index) => (
        <div className="feature-item" key={index}>
          {/* We import like this because we can't import from public folder (outside src) */}
          <img
            src={require(`../../assets/img/${feature.iconName}`)}
            alt={feature.alt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
