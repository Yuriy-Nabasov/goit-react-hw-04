import { PulseLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PulseLoader
        color="#36d7b7" // Колір лоадера
        size={15} // Розмір лоадера
        speedMultiplier={1} // Швидкість анімації
      />
    </div>
  );
}
