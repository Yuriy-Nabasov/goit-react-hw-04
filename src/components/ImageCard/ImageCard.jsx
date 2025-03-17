import css from "./ImageCard.module.css";

export default function ImageCard({ infoImage }) {
  return (
    <div>
      <img
        className={css.img}
        src={infoImage.urls.small}
        alt={infoImage.alt_description}
      />
      {/* <p>{infoImage.alt_description}</p> */}
      <a href={infoImage.urls.full}>{infoImage.alt_description}</a>
    </div>
  );
}
