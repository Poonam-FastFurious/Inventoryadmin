import React, { useEffect, useState } from "react";
import { useCustomerStore } from "../../Store/useCustomerStore";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomer() {
  const { id } = useParams(); // get customer ID from URL
  const navigate = useNavigate();

  const { customers, updateCustomer } = useCustomerStore();
  const existingCustomer = customers.find((c) => c._id === id);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    street: "",
    notes: "",
  });

  useEffect(() => {
    if (existingCustomer) {
      setFormData({
        customerName: existingCustomer.customerName || "",
        email: existingCustomer.email || "",
        phone: existingCustomer.phone || "",
        country: existingCustomer.country || "",
        city: existingCustomer.city || "",
        street: existingCustomer.street || "",
        postalCode: existingCustomer.postalCode || "",
        state: existingCustomer.state || "",
        notes: existingCustomer.notes || "",
        gstNumber: existingCustomer.gstNumber || "",
      });
    }
  }, [existingCustomer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    await updateCustomer(id, formData);
    navigate("/customerlist"); // optional redirect
  };

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Edit Customer Management</h4>
              <h6>Edit/Update Customer</h6>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Customer Name</label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Choose Country</label>
                     <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    <option value="">Choose Country</option>
                    <option value="India">India</option>
                  </select>
                   
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>City</label>{" "}
                    <input
                      type="text"
                      class="select"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      class="select"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Postal code</label>
                    <input
                      type="text"
                      class="select"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="select"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div> <div>
                  <div class="form-group">
                    <label>GST </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-4">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-4">
                  <button
                    className="btn btn-submit mr-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-cancel"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCustomer;
