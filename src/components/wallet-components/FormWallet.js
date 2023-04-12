import React from "react";

function FormWallet() {
  return (
    <div className="col-12 col-lg-5">
      
      <form className="form-wallet">
      <p className="text-uppercase fw-bold text-white edit-account">edit account</p>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Username:*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Add nick"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Secret:*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Change code"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email:*
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Add email"
              />
            </div>
          </div>
        </div>
        <div className="row">
            <p className="edit-account">Link Referer</p>
            <div className="container-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" ><path d="M3 5v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3z"></path></svg>
                <p>Link/ref??????????</p>
            </div>
        </div>
        <div className="row mt-5">
            <button className="wallet-button w-25 ">Save</button>
        </div>
      </form>
    </div>
  );
}

export default FormWallet;
