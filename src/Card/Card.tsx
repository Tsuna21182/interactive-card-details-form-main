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
    <div className="bg-[url(/images/bg-main-mobile.png)] md:bg-[url(/images/bg-main-desktop.png)] p-5 bg-no-repeat bg-center bg-cover h-60 ">
      <div className="bg-[url(/images/bg-card-back.png)] bg-no-repeat bg-center bg-cover rounded-lg w-72 ml-15 mt-3 h-40 md:ml-82 md:w-96 md:mt-10 md:h-60">
        <p className="text-xs text-white absolute top-26 sxs:right-10 xs:right-15 xxs:right-23 md:text-2xl md:top-24">
          {cardCVC || "000"}
        </p>
      </div>

      <div className="bg-[url(/images/bg-card-front.png)] bg-no-repeat w-70 h-40 mt-[-4.2rem] absolute rounded-lg p-5 flex flex-col gap-3 justify-end md:w-96 md:h-60 md:mt-[-10.5rem] md:left-70 ">
        <p className="text-lg text-White md:text-2xl">
          {formattedCardNumb || "0000 0000 0000 0000"}
        </p>
        <div className="flex justify-between">
          <p className="font-bold uppercase text-xs text-White md:text-xl">
            {cardName || "e.g. Jane Appleseed"}
          </p>
          <p className="text-xs text-White md:text-2xl">
            {cardMes && cardYear ? `${cardMes}/${cardYear.slice(-2)}` : "00/00"}
          </p>
        </div>
      </div>
      <img
        src="/images/card-logo.svg"
        alt="icono logo"
        className="absolute top-35 left-10 w-14 md:left-76 md:top-40 md:w-20"
      />
    </div>
  );
}

export default Card;
