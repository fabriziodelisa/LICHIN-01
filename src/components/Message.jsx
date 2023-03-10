import "./Message.css";

export default function Message({ pressed }) {
  const mensaje = [
    "No te hagas el zota y hacete cargo",
    "No son los otros sos vos",
    "Hay que empezar por casa",
    "Capaz para el año que viene",
    "Si maulla y trepa muros es un gato",
    "Evitemos dar Cringe",
    "Fuera vanidosx, fuera de mi vida",
    "Tomate un tinto y olvidate",
    "Siempre se puede seguir mañana",
    "Despues de todo ¿Por qué no? YOLO",
    "OjO con lo que buscas en el espejo",
    "Trabajo y comida no es poca cosa",
    "Lloradita y a seguir",
    "Quien esté libre que tire el primer pecado"
  ];

  function randomIntFromRange() {
    const min = 0;
    const max = mensaje.length;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const FraseRandom = () => {
    const numeroRandom = randomIntFromRange();
    return mensaje[numeroRandom];
  };

  return (
    <div>
      {!pressed ? (
        <div>
          <p></p>
        </div>
      ) : (
        <p>{FraseRandom()}</p>
      )}
    </div>
  );
}
