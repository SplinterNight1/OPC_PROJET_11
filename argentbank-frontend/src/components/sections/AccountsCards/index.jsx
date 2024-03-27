import userAccounts from "../../../assets/json/user-accounts.json";

export default function AccountsCards() {
  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      {userAccounts.map((account, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">
              {account.amountDescription}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </main>
  );
}
