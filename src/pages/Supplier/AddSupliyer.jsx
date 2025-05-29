import { useState } from "react";
import toast from "react-hot-toast";
import { useCustomerStore } from "../../Store/useCustomerStore";
import { useNavigate } from "react-router-dom";

function AddSupliyer() {
  const { createSupplier } = useCustomerStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    supplierName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.supplierName || !formData.phone) {
      return toast.error("Name and phone are required!");
    }
    await createSupplier(formData);
    setFormData({
      supplierName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      description: "",
    });
    navigate("/supplierlist");
  };

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Supplier Management</h4>
              <h6>Add/Update Customer</h6>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Supplier Name</label>
                    <input
                      type="text"
                      name="supplierName"
                      value={formData.supplierName}
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
                    <label>City</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      >
                        Choose City
                      </option>
                      <option value="">Choose City</option>
                      <option value="Noida">Noida</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-3">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="sm:col-span-2 lg:col-span-4">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      class="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div class="sm:col-span-2 lg:col-span-4">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-submit mr-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() =>
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        country: "",
                        city: "",
                        address: "",
                        description: "",
                      })
                    }
                    className="btn btn-cancel"
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

export default AddSupliyer;
