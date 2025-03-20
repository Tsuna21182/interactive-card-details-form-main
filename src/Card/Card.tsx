function Card() {
  return (
    <div className="bg-[url(/src/assets/images/bg-main-mobile.png)] p-5 bg-no-repeat ">
      <img
        src="/src/assets/images/bg-card-back.png"
        alt="imagen tarjeta trasera"
        className="w-72 ml-10 mt-3"
      />
      <img
        src="/src/assets/images/bg-card-front.png"
        alt="imagen card frontal"
        className="w-70 mt-[-4.2rem]"
      />
      <img
        src="/src/assets/images/card-logo.svg"
        alt="icono logo"
        className="absolute top-35 left-10 w-14"
      />
    </div>
  );
}

export default Card;
