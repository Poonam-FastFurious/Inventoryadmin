import React, { useEffect } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MasterRawList() {
  const { fetchMasterMaterials, masterMaterials,deleteMasterMaterial } = useMasterMaterialStore();

  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);
  const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e74c3c",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            deleteMasterMaterial(id);
        }
      });
    };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Master Raw Material List</h4>
              <h6>View/Search Master Raw Materials</h6>
            </div>
            <div className="page-btn">
              <Link to="/addmasterraw" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  className="mr-1"
                  alt="img"
                />
                Add Master Raw Material
              </Link>
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
                          <option>Choose Raw Material Category</option>
                          <option>Spices</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                          <option>Choose Sub Category</option>
                          <option>Powder</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                          <option>Choose Brand</option>
                          <option>Brand A</option>
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
                      <th>Raw Material Name</th>
                      <th>Raw Material Code</th>
                      <th>Description</th>
                      <th>Created By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterMaterials.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td className="productimgname">
                          <div href="javascript:void(0);" className="product-img">
                            <img
                              src={item.image}
                              alt="product"
                            />
                          </div>
                          <div >{item?.name}</div>
                        </td>
                        <td>{item?.code}</td>
                        <td>{item.description}</td>
                        <td>Admin</td>
                        <td>
                          <a className="mr-3" href="editrawmaterial.html">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                              alt="img"
                            />
                          </a>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="mr-3 confirm-text"
                          >
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="delete"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}

                    {/* More rows can be added here */}
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

export default MasterRawList;
