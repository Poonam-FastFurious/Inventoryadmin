import React, { useEffect } from "react";
import { useCustomerStore } from "../../Store/useCustomerStore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function SupplierList() {
  const { fetchSuppliers, suppliers, deleteSupplier } = useCustomerStore();
  useEffect(() => {
    fetchSuppliers();
  }, [fetchSuppliers]);
  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Supplier List</h4>
              <h6>Manage your Supplier</h6>
            </div>
            <div class="page-btn">
              <Link to="/addsupplier" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                />
                Add Supplier
              </Link>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div class="wordset">
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
                  </ul>
                </div>
              </div>

              <div class="card" id="filter_inputs">
                <div class="card-body !pb-0">
                  <div class="row">
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" placeholder="Enter Supplier Code" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" placeholder="Enter Supplier" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" placeholder="Enter Phone" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" placeholder="Enter Email" />
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
                <table class="table datanew">
                  <thead>
                    <tr>
                      <th>
                        <label class="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span class="checkmarks"></span>
                        </label>
                      </th>
                      <th>Supplier Name</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>email</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((suply) => (
                      <tr>
                        <td key={suply._id}>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>{suply.supplierName}</td>
                        <td>{suply.address}</td>

                        <td>{suply.phone} </td>
                        <td>
                          <a
                            href="/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                          >
                            {suply.email}
                          </a>
                        </td>
                        <td>{suply.country}</td>
                        <td>
                          <button>
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                              alt="img"
                            />
                          </button>
                          <button
                            className="mr-3"
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won’t be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "Yes, delete it!",
                                cancelButtonText: "Cancel",
                                buttonsStyling: false, // ✅ VERY IMPORTANT

                                customClass: {
                                  confirmButton:
                                    "bg-[#ff9f43] text-white hover:bg-red-700 px-4 py-2 rounded",
                                  cancelButton:
                                    "bg-gray-300 text-black hover:bg-gray-400 px-4 py-2 rounded",
                                },
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  deleteSupplier(suply._id);
                                  Swal.fire(
                                    "Deleted!",
                                    "Supplier has been deleted.",
                                    "success"
                                  );
                                }
                              });
                            }}
                          >
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="delete icon"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default SupplierList;
