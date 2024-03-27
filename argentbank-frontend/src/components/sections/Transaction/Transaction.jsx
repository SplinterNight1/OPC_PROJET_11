import "./transaction.css";
import { useState } from "react";

const Transaction = (dateTable) => {
  const [isContentAccountVisible, setContentAccountVisible] = useState(false);

  const toggleContentAccount = () => {
    setContentAccountVisible(!isContentAccountVisible);
  };

  const contentContainerClass = `content ${
    isContentAccountVisible ? "lineDown" : ""
  }`;
  const arrowIconClass = `fa-chevron-up ${
    isContentAccountVisible ? "chevron-open" : ""
  }`;

  return (
    <>
      <table className="deal-table">
        <thead className="deal-thread">
          <tr>
            <th className="dateTable">{dateTable}</th>
            <th className="descTable">Description</th>
            <th className="amountTable">Amount</th>
            <th className="balanceTable">Balance</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="deal-line">
            <td>27/02/2020</td>
            <td>Golden Sun Bakery</td>
            <td>$8.00</td>
            <td>$2,082.79</td>
            <td onClick={toggleContentAccount}>
              <i className={`fa-solid fa-chevron-up ${arrowIconClass}`}></i>
            </td>
          </tr>
        </tbody>

        {isContentAccountVisible && (
          <tbody id="contentContainer" className={contentContainerClass}>
            <tr className="deal-line">
              <td>Transaction Type</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="deal-line">
              <td>Category</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="deal-line">
              <td>Note</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

export default Transaction;
