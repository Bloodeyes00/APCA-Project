import React from "react";
import './BankDonation.css';

function BankDonation() {
  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row ">
          <div className=" col pt-5  ">
            <h3 className="admin mt-4">Bank Donation</h3>
            <div className="row-donation offset-2">
            <input
              type="Number"
              className="form-controls22 pt-2 "
              placeholder="Account Here"
            ></input>
            &nbsp;
            <input
              type="password"
              className="form-controls22 mt-2 pt-2"
              placeholder="Pin Here"
            />
            </div>
            <div>
              {" "}
              <button className="btn btn-primary mt-4   " id="button">
                Submit
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankDonation;
