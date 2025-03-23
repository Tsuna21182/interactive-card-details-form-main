import Card from "./Card/Card";
import FormularioCard from "./Card/FormularioCard";
import useCardData from "./Hooks/useCardData";
import { CardProps } from "./Types/Types";

function App() {
  const {
    cardName,
    setCardName,
    cardNumb,
    setCardNumb,
    cardMes,
    setCardMes,
    cardYear,
    setCardYear,
    cardCVC,
    setCardCVC,
  }: CardProps = useCardData();

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 xxl:gap-0 ">
        <Card
          cardName={cardName}
          cardNumb={cardNumb}
          cardMes={cardMes}
          cardYear={cardYear}
          cardCVC={cardCVC}
        />
        <FormularioCard
          setCardName={setCardName}
          setCardNumb={setCardNumb}
          setCardMes={setCardMes}
          setCardYear={setCardYear}
          setCardCVC={setCardCVC}
        />
      </div>
    </>
  );
}

export default App;
