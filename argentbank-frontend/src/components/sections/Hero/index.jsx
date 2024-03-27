import "./style.css";
import PropTypes from "prop-types";

export default function Hero({ title, subtitles, text }) {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p className="subtitle" key={index}>
            {subtitle}
          </p>
        ))}
        <p className="text">{text}</p>
      </section>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};
