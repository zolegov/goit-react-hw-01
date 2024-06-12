export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-table">
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
