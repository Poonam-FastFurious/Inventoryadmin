import React, { useEffect, useState } from "react";
import useProductStore from "../../Store/useProductStore";
import { useNavigate } from "react-router-dom";
import useMasterMaterialStore from "../../Store/useSettingStore";

function AddRawmaterial() {
  const { addRawMaterial } = useProductStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { masterMaterials, fetchMasterMaterials } = useMasterMaterialStore();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);
  const getCurrentBatchCode = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "short" }); // e.g., May
    const day = String(date.getDate()).padStart(2, "0"); // e.g., 01
    const year = date.getFullYear(); // 2025
    return `${month}-${day}-${year}`;
  };
  const [form, setForm] = useState({
    masterId: "",
    category: "",
    unit: "",
    batchCode: getCurrentBatchCode(),
    quantity: "",
    purchasePrice: "",
    transportCharge: "",
    supplier: "",
    purchaseDate: "",
    expiryDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // prevent multiple submissions

    if (!form.masterId || !form.category || !form.unit || !form.quantity) {
      alert("Please fill required fields.");
      return;
    }

    setIsSubmitting(true); // disable button

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    const result = await addRawMaterial(formData);
    setIsSubmitting(false); // re-enable button after response

    if (result) navigate("/rawmateriallist");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Raw Material Add</h4>
              <h6>Add new Raw Material Batch</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                <div>
                  <div className="form-group">
                    <label>Product Name</label>
                    <select
                      name="masterId"
                      onChange={handleChange}
                      className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Choose Product</option>
                      {masterMaterials.map((material) => (
                        <option key={material._id} value={material._id}>
                          {material.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Category */}
                <div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      name="category"
                      onChange={handleChange}
                      className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Choose Category</option>

                      <option>Hole</option>
                      <option>Ground Spices </option>
                    </select>
                  </div>
                </div>

                {/* Unit */}
                <div>
                  <div className="form-group">
                    <label>Unit</label>
                    <select
                      name="unit"
                      onChange={handleChange}
                      className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Choose Unit</option>
                      <option>Kg</option>
                    </select>
                  </div>
                </div>

                {/* Batch Code */}
                <div>
                  <div className="form-group">
                    <label>Batch Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="batchCode"
                      value={form.batchCode}
                      readOnly
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>

                {/* Purchase Price */}
                <div>
                  <div className="form-group">
                    <label>Purchase Price (per unit)</label>{" "}
                    <div className="flex items-center border rounded px-2">
                      <span className="text-gray-600">₹</span>
                      <input
                        type="number"
                        name="purchasePrice"
                        className="form-control border-0 focus:ring-0 focus:outline-none w-full pl-2"
                        onChange={handleChange}
                        placeholder="Enter price"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="block mb-1">
                    Transport Charge (per unit)
                  </label>
                  <div className="flex items-center border rounded px-2">
                    <span className="text-gray-600">₹</span>
                    <input
                      type="number"
                      name="transportCharge"
                      className="form-control border-0 focus:ring-0 focus:outline-none w-full pl-2"
                      onChange={handleChange}
                      placeholder="Enter price"
                    />
                  </div>
                </div>

                {/* Supplier */}
                <div>
                  <div className="form-group">
                    <label>Supplier</label>
                    <select
                      name="supplier"
                      onChange={handleChange}
                      className="form-select form-control block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Choose Supplier</option>
                      <option>ABC Traders</option>
                      <option>XYZ Exports</option>
                    </select>
                  </div>
                </div>

                {/* Purchase Date */}
                <div>
                  <div className="form-group">
                    <label>Purchase Date</label>
                    <input
                      type="date"
                      name="purchaseDate"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Expiry Date */}
                <div>
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      name="expiryDate"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-2 lg:col-span-4">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Optional description..."
                    ></textarea>
                  </div>
                </div>

                {/* Image Upload */}

                {/* Submit Buttons */}
                <div className="col-span-2">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-submit mr-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
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

export default AddRawmaterial;
