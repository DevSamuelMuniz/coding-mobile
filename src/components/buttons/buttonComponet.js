import "./buttonComponent.css";

function ButtonComponent({ titulo, link }) {
  return (
    <a className="link-btn" href={link}>
      {titulo}
    </a>
  );
}

export default ButtonComponent;
