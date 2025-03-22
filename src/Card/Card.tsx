type CardProps = {
  cardName: string;
  cardNumb: string;
  cardMes: string;
  cardYear: string;
  cardCVC: string;
};

function Card({ cardName, cardNumb, cardMes, cardYear, cardCVC }: CardProps) {
  const formattedCardNumb = cardNumb
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();

  return (
    <div className="bg-[url(/images/bg-main-mobile.png)] md:bg-[url(/images/bg-main-desktop.png)] p-5 bg-no-repeat h-60">
      <div className="bg-[url(/images/bg-card-back.png)] bg-no-repeat bg-center bg-cover rounded-lg w-72 ml-10 mt-3 h-40">
        <p className="text-xs text-white absolute top-26 right-15">
          {cardCVC || "000"}
        </p>
      </div>

      <div className="bg-[url(/images/bg-card-front.png)] bg-no-repeat w-70 h-40 mt-[-4.2rem] absolute rounded-lg p-5 flex flex-col gap-3 justify-end">
        <p className="text-lg text-White ">
          {formattedCardNumb || "0000 0000 0000 0000"}
        </p>
        <div className="flex justify-between">
          <p className="font-bold uppercase text-xs text-White">
            {cardName || "e.g. Jane Appleseed"}
          </p>
          <p className="text-xs text-White">
            {cardMes && cardYear ? `${cardMes}/${cardYear.slice(-2)}` : "00/00"}
          </p>
        </div>
      </div>
      <img
        src="/images/card-logo.svg"
        alt="icono logo"
        className="absolute top-35 left-10 w-14"
      />
    </div>
  );
}

export default Card;
