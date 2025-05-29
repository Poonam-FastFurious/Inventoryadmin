import React from "react";

function CategoryList() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Product Category list</h4>
              <h6>View/Search product Category</h6>
            </div>
            <div className="page-btn">
              <a href="addcategory.html" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  className="mr-1"
                  alt="img"
                />
                Add Category
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
                    <a className="btn btn-filter" id="filter_search">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/filter.svg"
                        alt="img"
                      />
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/closes.svg"
                          alt="img"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="search-input">
                    <a className="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/pdf.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/excel.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/printer.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card" id="filter_inputs">
                <div className="card-body !pb-0">
                  <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4">
                    <div>
                      <div className="form-group">
                        <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                          <option>Choose Category</option>
                          <option>Computers</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                          <option>Choose Sub Category</option>
                          <option>Fruits</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                          <option>Choose Sub Brand</option>
                          <option>Iphone</option>
                        </select>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="form-group">
                        <a className="btn btn-filters ml-auto">
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

              <div className="table-responsive">
                <table className="table  datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Category name</th>
                      <th>Category Code</th>
                      <th>Description</th>
                      <th>Created By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/noimage.png"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Computers</a>
                      </td>
                      <td>CT001</td>
                      <td>Computers Description</td>
                      <td>Admin</td>
                      <td>
                        <a className="mr-3" href="editcategory.html">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                            alt="img"
                          />
                        </a>
                        <a
                          className="mr-3 confirm-text"
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
    </>
  );
}

export default CategoryList;
