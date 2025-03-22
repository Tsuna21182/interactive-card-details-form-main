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
    </>
  );
}

export default App;
