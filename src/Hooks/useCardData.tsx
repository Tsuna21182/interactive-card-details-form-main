import { useState } from "react";
import { CardProps } from "../Types/Types";

function useCardData(): CardProps {
  const [cardName, setCardName] = useState<string>("");
  const [cardNumb, setCardNumb] = useState<string>("");
  const [cardMes, setCardMes] = useState<string>("");
  const [cardYear, setCardYear] = useState<string>("");
  const [cardCVC, setCardCVC] = useState<string>("");

  return {
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
  };
}

export default useCardData;
