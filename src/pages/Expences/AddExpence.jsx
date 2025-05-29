import { IndianRupee } from "lucide-react";
import React from "react";

function AddExpence() {
  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Expense Add</h4>
              <h6>Add/Update Expenses</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Expense Category</label>
                    <select
                      className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                     
                    >
                      <option>Category</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Expense Date </label>
                    <div>
                      <input
                        type="date"
                        placeholder="Choose Date"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Amount</label>
                    <div class="input-groupicon">
                      <input type="text" />
                      <div class="addonset">
                        <IndianRupee size={12} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Reference No.</label>
                    <input type="text" />
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-4">
                  <div class="form-group">
                    <label>Expense for</label>
                    <input type="text" />
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-4">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-4">
                  <a href="javascript:void(0);" class="btn btn-submit mr-2">
                    Submit
                  </a>
                  <a href="expenselist.html" class="btn btn-cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExpence;
