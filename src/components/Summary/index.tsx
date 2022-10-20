import { Container } from "../Summary/styles";
import incomesImg from "../../../public/assets/income.svg";
import outcomeImg from "../../../public/assets/expense.svg";
import totalImg from "../../../public/assets/total.svg";
import { TransactionsTable } from "../TransactionsTable";

export function Summary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomesImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            <p>Entradas</p>
            <img src={outcomeImg} alt="Sa'das" />
          </header>
          <strong>R$1000.000,00</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Entradas</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$1000.000,00</strong>
        </div>
      </Container>
      <TransactionsTable />
    </>
  );
}
