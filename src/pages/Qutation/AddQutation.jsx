function AddQutation() {
  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Quotation Add</h4>
              <h6>Add/Update Quotation</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Customer Name</label>
                    <div class="sm:grid sm:grid-cols-12 lg:grid-cols-12">
                      <div class="sm:col-span-10 lg:col-span-10 sm:mr-3">
                        <select
                          className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="3">Select Customer</option>
                          <option>Customer</option>
                        </select>
                      </div>
                      <div class="sm:col-span-2 lg:col-span-2 !pl-0">
                        <div class="add-icon">
                          <a href="javascript:void(0);">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus1.svg"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Quotation Date </label>
                    <div >
                      <input
                        type="date"
                        placeholder="DD-MM-YYYY"
                        className="form-control"
                      />

                      
                    </div>
                  </div>
                </div>

                <div>
                  <div class="form-group">
                    <label>Reference No.</label>
                    <input type="text" />
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-3">
                  <div class="form-group">
                    <label>Product Name</label>
                    <div class="input-groupicon">
                      <input
                        type="text"
                        placeholder="Scan/Search Product by code and select..."
                      />
                      <div class="addonset">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/scanners.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Net Unit Price(₹) </th>
                        <th>Stock</th>
                        <th>Qty</th>
                        <th>Discount(₹) </th>
                        <th>Tax % </th>
                        <th class="text-right">Subtotal (₹)</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="productimgname">
                          <a class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product7.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Apple Earpods</a>
                        </td>
                        <td>150</td>
                        <td>500</td>
                        <td>500</td>
                        <td>100</td>
                        <td>250</td>
                        <td class="text-right">500</td>
                        <td>
                          <a href="javascript:void(0);" class="delete-set">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="svg"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="productimgname">
                          <a class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product6.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Macbook Pro</a>
                        </td>
                        <td>15.00</td>
                        <td>6000.00</td>
                        <td>100.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td class="text-right">1000.00</td>
                        <td>
                          <a href="javascript:void(0);" class="delete-set">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="svg"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-6 lg:grid-cols-2 gap-x-6">
                <div class="lg:col-span-2 md:float-right">
                  <div class="total-order">
                    <ul>
                      <li>
                        <h4>Order Tax</h4>
                        <h5>₹ 0.00 (0.00%)</h5>
                      </li>
                      <li>
                        <h4>Discount </h4>
                        <h5>₹ 0.00</h5>
                      </li>
                      <li>
                        <h4>Shipping</h4>
                        <h5>₹ 0.00</h5>
                      </li>
                      <li class="total">
                        <h4>Grand Total</h4>
                        <h5>₹ 0.00</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-6 lg:grid-cols-4 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Order Tax</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Discount</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Shipping</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Status</label>
                    <select className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option value="">Choose Status</option>
                      <option>Completed</option>
                      <option>Inprogress</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-6 lg:col-span-4">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
                <div class="sm:col-span-6 lg:col-span-4">
                  <a href="javascript:void(0);" class="btn btn-submit mr-2">
                    Submit
                  </a>
                  <a href="quotationList.html" class="btn btn-cancel">
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

export default AddQutation;
