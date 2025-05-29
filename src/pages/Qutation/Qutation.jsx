import React from "react";

function Qutation() {
  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Quotation List</h4>
              <h6>Manage your Quotations</h6>
            </div>
            <div class="page-btn">
              <a href="addquotation.html" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  class="mr-2"
                />{" "}
                Add Quotation
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
                        {" "}
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
                  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                    <div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="datetimepicker cal-icon"
                          placeholder="Choose Date"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <input type="text" placeholder="Enter Reference " />
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <select
                          class="select select2-hidden-accessible"
                          data-select2-id="1"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="3">Choose Customer</option>
                          <option>Customer1</option>
                        </select>
                        <span
                          class="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="2"
                          style={{ width: "100%" }}
                        >
                          <span class="selection">
                            <span
                              class="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-4axi-container"
                            >
                              <span
                                class="select2-selection__rendered"
                                id="select2-4axi-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Choose Customer"
                              >
                                Choose Customer
                              </span>
                              <span
                                class="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            class="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <select
                          class="select select2-hidden-accessible"
                          data-select2-id="4"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="6">Choose Status</option>
                          <option>Inprogress</option>
                          <option>Complete</option>
                        </select>
                        <span
                          class="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="5"
                          style={{ width: "100%" }}
                        >
                          <span class="selection">
                            <span
                              class="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-t3oj-container"
                            >
                              <span
                                class="select2-selection__rendered"
                                id="select2-t3oj-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Choose Status"
                              >
                                Choose Status
                              </span>
                              <span
                                class="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            class="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div class="mr-auto">
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
                          style={{ width: "70.325px" }}
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
                          aria-label="Product Name: activate to sort column ascending"
                          style={{ width: "200.812px" }}
                        >
                          Product Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Reference: activate to sort column ascending"
                          style={{ width: "112.438px" }}
                        >
                          Reference
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Custmer Name: activate to sort column ascending"
                          style={{ width: "158.887px" }}
                        >
                          Custmer Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: "107.1px" }}
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
                          style={{ width: "161.05px" }}
                        >
                          Grand Total (₹)
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "88.9875px" }}
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
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product1.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Macbook pro</a>
                        </td>
                        <td>PT001</td>
                        <td>walk-in-customer</td>
                        <td>
                          <span class="badges bg-lightgreen">Sent</span>
                        </td>
                        <td>550</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product2.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Orange</a>
                        </td>
                        <td>PT002</td>
                        <td>walk-in-customer</td>
                        <td>
                          <span class="badges bg-lightyellow">Ordered</span>
                        </td>
                        <td>410</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                      <tr class="odd">
                        <td class="sorting_1">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product4.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Stawberry</a>
                        </td>
                        <td>PT003</td>
                        <td>walk-in-customer</td>
                        <td>
                          <span class="badges bg-lightred">Pending</span>
                        </td>
                        <td>210</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product5.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Avocat</a>
                        </td>
                        <td>PT004</td>
                        <td>John Smith</td>
                        <td>
                          <span class="badges bg-lightgreen">Sent</span>
                        </td>
                        <td>500</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                      <tr class="odd">
                        <td class="sorting_1">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product6.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Macbook Pro</a>
                        </td>
                        <td>PT005</td>
                        <td>Beverly</td>
                        <td>
                          <span class="badges bg-lightred">Pending</span>
                        </td>
                        <td>1050</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product7.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Apple Earpods</a>
                        </td>
                        <td>PT006</td>
                        <td>B. Huber</td>
                        <td>
                          <span class="badges bg-lightgreen">Sent</span>
                        </td>
                        <td>2530</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                      <tr class="odd">
                        <td class="sorting_1">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product8.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">iPhone 11 </a>
                        </td>
                        <td>PT007</td>
                        <td>Thomas</td>
                        <td>
                          <span class="badges bg-lightgreen">Sent</span>
                        </td>
                        <td>550</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product9.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">samsung </a>
                        </td>
                        <td>PT008</td>
                        <td>Benjamin</td>
                        <td>
                          <span class="badges bg-lightgreen">Ordered</span>
                        </td>
                        <td>550</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                      <tr class="odd">
                        <td class="sorting_1">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product10.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Unpaired gray</a>
                        </td>
                        <td>PT0010</td>
                        <td>James</td>
                        <td>
                          <span class="badges bg-lightred">Pending</span>
                        </td>
                        <td>210</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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
                        <td class="productimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product7.jpg"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">Apple Earpods</a>
                        </td>
                        <td>PT006</td>
                        <td>B. Huber</td>
                        <td>
                          <span class="badges bg-lightgreen">Sent</span>
                        </td>
                        <td>2530</td>
                        <td>
                          <a class="mr-3" href="editquotation.html">
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

export default Qutation;
