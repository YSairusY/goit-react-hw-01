import st from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={st.table}>
      <thead className={st.th}>
        <tr className={st.table_top}>
          <th className={st.name}>Type</th>
          <th className={st.name}>Amount</th>
          <th className={st.name}>Currency</th>
        </tr>
      </thead>

      <tbody className={st.table_lines}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={st.tr_lines}>
            <td className={st.line}>{type}</td>
            <td className={st.line}>{amount}</td>
            <td className={st.line}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
