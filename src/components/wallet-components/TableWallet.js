import React from "react";

function TableWallet() {
  return (
    <div data-aos="fade-down">

      <div className="title-layout">
        <p>
          4.45 Respect
        </p>
        <p>
         0 ePHEEBO
        </p>
      </div>

      <div className="tables__TableWallet">
        <table className="table__Wallet">
          <thead>
            <tr>
              <td>NFD</td>
              <td>Owned</td>
              <td>Type</td>
              <td>Qty</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nepal Palm</td>
              <td>0.00298</td>
              <td>
                <select className="fondoSelect form-select">
                  <option value="">Have at least 1 MD</option>
                </select>
              </td>
              <td>
                <input type="number" className="wallet-input" />
              </td>
              <td>
                  <button className="wallet-btn">Clain</button>
              </td>
            </tr>
            <tr>
              <td>Nepal Palm</td>
              <td>0.00298</td>
              <td>
                <select className="fondoSelect form-select">
                  <option value="">Have at least 1 MD</option>
                </select>
              </td>
              <td>
                <input type="number" className="wallet-input"/>
              </td>
              <td>
                  <button className="wallet-btn">Clain</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

<p className="text-white text-center wallet-transactions">
  Transactions:
</p>
      <div className="tables__TableWallet">
        <table className="table__Wallet">
          <thead>
            <tr>
              <td>NF</td>
              <td>Descripcion</td>
              <td>Activate date</td>
              <td># claimed</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem, ipsum.</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>08/11/22 18:20</td>
              <td>111222</td>
            </tr>
         
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default TableWallet;
