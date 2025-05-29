import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCustomerStore } from "../../Store/useCustomerStore";
import Swal from "sweetalert2";

function Customer() {
  const { customers, fetchCustomers, deleteCustomer } = useCustomerStore();

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Customer List</h4>
              <h6>Manage your Customers</h6>
            </div>
            <div class="page-btn">
              <Link to="/addcustomer" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                />
                Add Customer
              </Link>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div class="search-set">
                  <div class="search-path">
                    <a class="btn btn-filter" id="filter_search">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/filter.svg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
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

              <div class="table-responsive">
                <table class="table  datanew">
                  <thead>
                    <tr>
                      <th>
                        <label class="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span class="checkmarks"></span>
                        </label>
                      </th>
                      <th>Customer Name</th>
                      <th>Gst Number</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>email</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((cus, index) => (
                      <tr key={index}>
                        <td>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>{cus.customerName}</td>
                        <td>{cus.gstNumber}</td>
                        <td>
                          {cus.street} {""}
                          {cus.city} {""}
                          {cus.state} {""}
                          {cus.postalCode}
                        </td>
                        <td>{cus.phone} </td>
                        <td>
                          <Link to="#" class="__cf_email__">
                            {cus.email}
                          </Link>
                        </td>
                        <td>{cus.country}</td>
                        <td>
                          <Link class="mr-3" to={`/editcustomer/${cus._id}`}>
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                              alt="img"
                            />
                          </Link>
                          <button
                            class="mr-3 confirm-text"
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won’t be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  deleteCustomer(cus._id);
                                }
                              });
                            }}
                          >
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="img"
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

export default Customer;
