import "./Button.css";

export default function Button({ setPressed }) {
  const buttonHandler = () => {
    setPressed(true);
    console.log("me apretaron :(");
  };
  return (
    <div>
      <button className="button" onClick={buttonHandler}></button>
    </div>
  );
}
