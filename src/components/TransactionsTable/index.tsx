// import { useTransactions } from '../../hooks/TransactionsContext';
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  createdAt: number;
  type: string;
  category: string;
}

export const TransactionsTable = () => {
  //   const { transactions } = useTransactions();
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api("transactions").then((response) =>
      setTransactions(response.data.transactions)
    );
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
