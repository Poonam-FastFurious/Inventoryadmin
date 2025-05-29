import { useState } from "react";
import { useCustomerStore } from "../../Store/useCustomerStore";

function AddCustomer() {
  const { createCustomer } = useCustomerStore();
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    gstNumber: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    notes: "",
    isActive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer(formData);

      setFormData({
        customerName: "",
        email: "",
        phone: "",
        gstNumber: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        notes: "",
        isActive: false,
      });
    } catch {
      alert("Failed to create customer");
    }
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Customer Management</h4>
            <h6>Add/Update Customer</h6>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-body">
              <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    className="form-control"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>GST Number</label>
                  <input
                    type="text"
                    name="gstNumber"
                    className="form-control"
                    value={formData.gstNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Street</label>
                  <input
                    type="text"
                    name="street"
                    className="form-control"
                    value={formData.street}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="form-control"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Country</label>
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

                <div className="sm:col-span-2 lg:col-span-4">
                  <div className="form-group">
                    <label>Notes</label>
                    <textarea
                      name="notes"
                      className="form-control"
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="form-group col-span-full flex items-center gap-2">
                  <input type="checkbox" />
                  <label
                    className=" mt-2 "
                    checked={formData.isActive}
                    onChange={handleChange}
                  >
                    Active Customer
                  </label>
                </div>

                <div className="sm:col-span-2 lg:col-span-4">
                  <button type="submit" className="btn btn-submit mr-2">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-cancel"
                    onClick={() =>
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        gstNumber: "",
                        street: "",
                        city: "",
                        state: "",
                        postalCode: "",
                        country: "",
                        notes: "",
                        isActive: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
