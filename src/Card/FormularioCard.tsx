import Btn from "../components/Btn";

function FormularioCard() {
  return (
    <form className="flex flex-col p-5 gap-2">
      <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest">
        Cardholder name
      </label>
      <input
        type="text"
        placeholder="e.g Jane Appleseed"
        className="p-2 border-1 border-LightGrayishViolet rounded-lg"
      />
      <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest">
        Card number
      </label>
      <input
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
        className="p-2 border-1 border-LightGrayishViolet rounded-lg"
      />
      <section className="grid grid-cols-4 gap-2">
        <div className="flex flex-col gap-2">
          <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest">
            exp. date
          </label>
          <input
            type="number"
            placeholder="MM"
            className="p-2 border-1 border-LightGrayishViolet rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest">
            (mm/yy)
          </label>
          <input
            type="number"
            placeholder="YY"
            className="p-2 border-1 border-LightGrayishViolet rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <label className="uppercase text-VeryDarkViolet text-xs font-semibold tracking-widest">
            cvc
          </label>
          <input
            type="number"
            placeholder="e.g. 123"
            className="p-2 border-1 border-LightGrayishViolet rounded-lg"
          />
        </div>
      </section>
      <Btn />
    </form>
  );
}

export default FormularioCard;
