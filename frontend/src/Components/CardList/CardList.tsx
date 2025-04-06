import { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName={"Apple"} ticker={"AAPL"} price={110} />
      <Card companyName={"Microsoft"} ticker={"MSFT"} price={300} />
      <Card companyName={"Tesla"} ticker={"TSLA"} price={200} />
    </div>
  );
};

export default CardList;
