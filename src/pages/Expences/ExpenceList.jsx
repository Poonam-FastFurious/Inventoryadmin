import React from "react";

function ExpenceList() {
  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Expenses LIST </h4>
              <h6>Manage your purchases</h6>
            </div>
            <div class="page-btn">
              <a href="createexpense.html" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  class="mr-2"
                  alt="img"
                />
                Add New Expense
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
                  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                    <div>
                      <div class="form-group">
                        <div class="datepicker input-groupicon">
                          <input
                            type="text"
                            class="datetimepicker cal-icon form-icon-trailing"
                            placeholder="Choose Date"
                          />

                          <button
                            id="datepicker-toggle-369175"
                            type="button"
                            class="datepicker-toggle-button"
                            data-mdb-toggle="datepicker"
                          >
                            <i class="far fa-calendar datepicker-toggle-icon"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <input type="text" placeholder="Enter Reference" />
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
                          <option data-select2-id="3">Choose Category</option>
                          <option>Computers</option>
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
                              aria-labelledby="select2-rur7-container"
                            >
                              <span
                                class="select2-selection__rendered"
                                id="select2-rur7-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Choose Category"
                              >
                                Choose Category
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
                          <option>Complete</option>
                          <option>Inprogress</option>
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
                              aria-labelledby="select2-qnf4-container"
                            >
                              <span
                                class="select2-selection__rendered"
                                id="select2-qnf4-container"
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
                          style={{ width: "60.2625px" }}
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
                          aria-label="Category name: activate to sort column ascending"
                          style={{ width: "213.45px" }}
                        >
                          Category name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Reference: activate to sort column ascending"
                          style={{ width: "98.5375px" }}
                        >
                          Reference
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activate to sort column ascending"
                          style={{ width: "97.7875px" }}
                        >
                          Date
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: "93.6875px" }}
                        >
                          Status
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Amount: activate to sort column ascending"
                          style={{ width: "82.3125px" }}
                        >
                          Amount
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Description: activate to sort column ascending"
                          style={{ width: "136.337px" }}
                        >
                          Description
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "77.225px" }}
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
                        <td>Employee Benefits</td>
                        <td>PT001</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>120</td>
                        <td>Employee Vehicle</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Foods &amp; Snacks</td>
                        <td>PT002</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>250</td>
                        <td>Employee Foods</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Entertainment</td>
                        <td>PT003</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightred">In Active</span>
                        </td>
                        <td>120</td>
                        <td>Office Vehicle</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Office Expenses &amp; Postage </td>
                        <td>PT004</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>320</td>
                        <td>Employee Foods</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Employee Benefits</td>
                        <td>PT005</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>250</td>
                        <td>Employee Vehicle</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Foods &amp; Snacks</td>
                        <td>PT006</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>250</td>
                        <td>Employee Foods</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Entertainment</td>
                        <td>PT007</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightred">In Active</span>
                        </td>
                        <td>120</td>
                        <td>Office Vehicle</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Office Expenses &amp; Postage </td>
                        <td>PT008</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>320</td>
                        <td>Employee Foods</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Employee Benefits</td>
                        <td>PT009</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>120</td>
                        <td>Employee Vehicle</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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
                        <td>Foods &amp; Snacks</td>
                        <td>PT010</td>
                        <td>19 Nov 2022</td>
                        <td>
                          <span class="badges bg-lightgreen">Active</span>
                        </td>
                        <td>250</td>
                        <td>Employee Foods</td>
                        <td>
                          <a class="mr-3" href="editexpense.html">
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

export default ExpenceList;
