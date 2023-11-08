function IconTag({ img, alt, titre, description }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3>{titre}</h3>
      <p>{description}</p>
    </div>
  );
}

export default IconTag;
