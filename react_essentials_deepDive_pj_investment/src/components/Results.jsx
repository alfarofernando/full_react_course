import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ userInput }) {
  console.log("comp-Results-Incoming-userInput: ");
  console.log(userInput);

  const resultData = calculateInvestmentResults(userInput);

  console.log("comp-Results-resultData : ");
  console.log(resultData);

  return (
    <section id="result">
      <p>results go here</p>
    </section>
  );
}
