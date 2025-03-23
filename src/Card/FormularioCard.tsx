import Btn from "../components/Btn";
import Added from "../components/Added";
import { useEffect, useState } from "react";

type FormularioCardProps = {
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  setCardNumb: React.Dispatch<React.SetStateAction<string>>;
  setCardMes: React.Dispatch<React.SetStateAction<string>>;
  setCardYear: React.Dispatch<React.SetStateAction<string>>;
  setCardCVC: React.Dispatch<React.SetStateAction<string>>;
};

function FormularioCard({
  setCardName,
  setCardNumb,
  setCardMes,
  setCardYear,
  setCardCVC,
}: FormularioCardProps) {
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    if (isOk) {
      const timer = setTimeout(() => {
        setIsOk(false);
        setCardName("");
        setCardNumb("");
        setCardMes("");
        setCardYear("");
        setCardCVC("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOk, setCardName, setCardNumb, setCardMes, setCardYear, setCardCVC]);

  return (
    <section className="flex flex-col p-5 gap-2 mt-20 md:mt-40 lg:p-10 xxl:pr-40 3xl:pr-96">
      {isOk ? (
        <Added />
      ) : (
        <form className="flex flex-col p-5 gap-2 lg:gap-5">
          <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest md:text-2xl lg:text-xl">
            Cardholder name
          </label>
          <input
            type="text"
            placeholder="e.g Jane Appleseed"
            className="p-2 border-1 border-LightGrayishViolet rounded-lg md:text-xl md:p-5"
            onChange={(e) => setCardName(e.target.value)}
          />
          <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest md:text-2xl lg:text-xl">
            Card number
          </label>
          <input
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="p-2 border-1 border-LightGrayishViolet rounded-lg md:text-xl md:p-5"
            onChange={(e) => setCardNumb(e.target.value)}
          />
          <section className="grid grid-cols-4 gap-2">
            <div className="flex flex-col gap-2">
              <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest md:text-2xl lg:text-sm">
                exp. date
              </label>
              <input
                type="number"
                placeholder="MM"
                className="p-2 border-1 border-LightGrayishViolet rounded-lg md:text-xl md:p-5"
                onChange={(e) => setCardMes(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest md:text-2xl lg:text-sm">
                (mm/yy)
              </label>
              <input
                type="number"
                placeholder="YY"
                className="p-2 border-1 border-LightGrayishViolet rounded-lg md:text-xl md:p-5"
                onChange={(e) => setCardYear(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest md:text-2xl lg:text-sm">
                cvc
              </label>
              <input
                type="number"
                placeholder="e.g. 123"
                className="p-2 border-1 border-LightGrayishViolet rounded-lg md:text-xl md:p-5"
                onChange={(e) => setCardCVC(e.target.value)}
              />
            </div>
          </section>
        </form>
      )}
      <Btn setIsOk={setIsOk} />
    </section>
  );
}

export default FormularioCard;
