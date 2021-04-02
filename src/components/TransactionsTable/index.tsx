import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de sistema bancário</td>
            <td className="deposit">R$56.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/04/2021</td>
          </tr>
          <tr>
            <td>Feira mensal</td>
            <td className="withdraw">- R$1.200,00</td>
            <td>Alimentação</td>
            <td>01/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000,00</td>
            <td>Moradia</td>
            <td>15/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}