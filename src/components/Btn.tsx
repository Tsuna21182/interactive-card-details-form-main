type BtnProps = {
  setIsOk: React.Dispatch<React.SetStateAction<boolean>>;
};

function Btn({ setIsOk }: BtnProps) {
  return (
    <button
      className="bg-VeryDarkViolet transform hover:translate-0.5 duration-300 text-White rounded-lg p-3 mt-5 cursor-pointer"
      onClick={() => setIsOk(true)}
    >
      Confirm
    </button>
  );
}

export default Btn;
