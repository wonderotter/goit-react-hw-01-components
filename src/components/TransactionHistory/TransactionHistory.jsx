import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export const TransactionHistory =
  ({ items }) => (
    <table className={css["transaction-history"]}>
      <thead>
        <tr className={css.header}>
          <th className={css["header-item"]} > Type </th>
          <th className={css["header-item"]} > Amount </th>
          <th className={css["header-item"]} > Currency </th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css["body-list"]}>
            <td className={css["body-item"]} > {type} </td>
            <td className={css["body-item"]} > {amount} </td>
            <td className={css["body-item"]} > {currency} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};