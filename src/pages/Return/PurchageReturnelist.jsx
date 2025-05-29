import React from "react";

function PurchageReturnelist() {
  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Purchase Return List</h4>
              <h6>Manage your Returns</h6>
            </div>
            <div class="page-btn">
              <a href="createpurchasereturn.html" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  class="mr-2"
                />
                Add Purchase Return
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div class="search-set">
                  
                  <div class="search-input">
                    <a class="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="img"
                      />
                    </a>
                    <div
                      id="DataTables_Table_0_filter"
                      class="dataTables_filter"
                    >
                      <label>
                        
                        <input
                          type="search"
                          class=""
                          placeholder="Search..."
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                
              </div>

              <div class="card" id="filter_inputs">
                <div class="card-body !pb-0">
                  <div class="row">
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="datetimepicker cal-icon"
                          placeholder="Choose Date"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" placeholder="Enter Reference" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <select
                          class="select select2-hidden-accessible"
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="3">Choose Supplier</option>
                          <option>Supplier</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <select
                          class="select select2-hidden-accessible"
                          data-select2-id="4"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="6">Choose Status</option>
                          <option>Inprogress</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-1 col-sm-6 col-12 ml-auto">
                      <div class="form-group">
                        <a class="btn btn-filters ml-auto">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-whites.svg"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <div
                  id="DataTables_Table_0_wrapper"
                  class="dataTables_wrapper no-footer"
                >
                  <table
                    class="table datanew dataTable no-footer"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="
													
														
														
													
												: activate to sort column descending"
                          style={{ width: "35px" }}
                        >
                          <label class="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span class="checkmarks"></span>
                          </label>
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Image: activate to sort column ascending"
                          style={{ width: "39.2375px" }}
                        >
                          Image
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activate to sort column ascending"
                          style={{ width: "46.925px" }}
                        >
                          Date
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Supplier: activate to sort column ascending"
                          style={{ width: "139.775px" }}
                        >
                          Supplier
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Reference: activate to sort column ascending"
                          style={{ width: "63.625px" }}
                        >
                          Reference
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: "60px" }}
                        >
                          Status
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Grand Total (₹): activate to sort column ascending"
                          style={{ width: "96.675px" }}
                        >
                          Grand Total (₹)
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Paid (₹): activate to sort column ascending"
                          style={{ width: "49.35px" }}
                        >
                          Paid (₹)
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Due (₹): activate to sort column ascending"
                          style={{ width: "47.5125px" }}
                        >
                          Due (₹)
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Payment Status: activate to sort column ascending"
                          style={{ width: "101.05px" }}
                        >
                          Payment Status
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "41.4px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td class="sorting_1">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <a class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product1.jpg"
                              alt="product"
                            />
                          </a>
                        </td>
                        <td>2/27/2022</td>
                        <td>Apex Computers </td>
                        <td>PT001</td>
                        <td>
                          <span class="badges bg-lightgreen">Received</span>
                        </td>
                        <td>550</td>
                        <td>120</td>
                        <td>550</td>
                        <td>
                          <span class="badges bg-lightgreen">Paid</span>
                        </td>
                        <td>
                          <a class="mr-3" href="editpurchasereturn.html">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                              alt="img"
                            />
                          </a>
                          <a
                            class="mr-3 confirm-text"
                            href="javascript:void(0);"
                          >
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="img"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <a class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product2.jpg"
                              alt="product"
                            />
                          </a>
                        </td>
                        <td>1/15/2022</td>
                        <td>Modern Automobile</td>
                        <td>PT002</td>
                        <td>
                          <span class="badges bg-lightyellow">Ordered</span>
                        </td>
                        <td>550</td>
                        <td>120</td>
                        <td>550</td>
                        <td>
                          <span class="badges bg-lightyellow">Partial</span>
                        </td>
                        <td>
                          <a class="mr-3" href="editpurchasereturn.html">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                              alt="img"
                            />
                          </a>
                          <a
                            class="mr-3 confirm-text"
                            href="javascript:void(0);"
                          >
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="img"
                            />
                          </a>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchageReturnelist;
