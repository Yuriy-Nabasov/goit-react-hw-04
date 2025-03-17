import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li key={item.id} className={css.card}>
          {/* <div>
            <img src={item.urls.small} alt={item.alt_description} />
            <p>{item.alt_description}</p>
          </div> */}
          <ImageCard infoImage={item} />
        </li>
      ))}
    </ul>
  );
}
