import Loader from "../../utils/Loader";
import useMasterMaterialStore from "../../Store/useSettingStore";
import { useEffect, useState } from "react";
import useProductStore from "../../Store/useProductStore";
import toast from "react-hot-toast";

export default function AddBlend() {
  const { masterMaterials, fetchMasterMaterials } = useMasterMaterialStore();
  const { addBlendFormula, loading } = useProductStore(); // Access store for adding blend formula
  const [totalQuantity, setTotalQuantity] = useState(1000); // e.g., 1000g = 1kg
  const [compositions, setCompositions] = useState([
    { rawMaterial: "", percentage: "" },
  ]);
  const [blendName, setBlendName] = useState("");
  const [blendCode, setBlendCode] = useState("");

  const [description, setDescription] = useState("");
  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);

  const handleCompositionChange = (index, field, value) => {
    const updated = [...compositions];
    updated[index][field] = value;
    setCompositions(updated);
  };

  const addComposition = () => {
    setCompositions([...compositions, { rawMaterial: "", percentage: "" }]);
  };

  const removeComposition = (index) => {
    const updated = compositions.filter((_, i) => i !== index);
    setCompositions(updated);
  };

  const totalPercentage = compositions.reduce(
    (sum, comp) => sum + parseFloat(comp.percentage || 0),
    0
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple clicks while loading

    if (totalPercentage !== 100) {
      return toast.error("Total percentage should be 100%");
    }

    const blendFormulaData = {
      formulaName: blendName,
      formulaCode: blendCode,
      description,
      composition: compositions.map((comp) => ({
        material: comp.rawMaterial,
        grams: (parseFloat(comp.percentage) / 100) * totalQuantity,
        percentage: comp.percentage,
      })),
      totalWeight: totalQuantity,
      totalCost: 0,
    };

    const newBlend = await addBlendFormula(blendFormulaData);
    if (newBlend) {
      toast.success("Blend formula added successfully");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Blend Add</h4>
            <h6>Add new Blend and Formula</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
              {/* Blend Name */}
              <div>
                <div className="form-group">
                  <label> Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., Garam Masala"
                    value={blendName}
                    onChange={(e) => setBlendName(e.target.value)}
                  />
                </div>
              </div>

              {/* Blend Code */}
              <div>
                <div className="form-group">
                  <label>Blend Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., BLND001"
                    value={blendCode}
                    onChange={(e) => setBlendCode(e.target.value)}
                  />
                </div>
              </div>

              {/* Category */}
              {/* <div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    <option value="">Choose Category</option>
                    <option value="Spice mix">Spice Mix</option>
                    <option value="Herbal mix">Herbal Mix</option>
                  </select>
                </div>
              </div> */}

              {/* Total Quantity */}
              <div>
                <div className="form-group">
                  <label>Total Quantity (grams)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g., 1000 for 1kg"
                    value={totalQuantity}
                    onChange={(e) => setTotalQuantity(Number(e.target.value))}
                    min="1"
                    readOnly
                  />
                </div>
              </div>

              {/* Blend Composition */}
              <div className="sm:col-span-2 lg:col-span-4">
                <label className="block font-medium text-gray-700 mb-2">
                  Blend Composition
                </label>

                {compositions.map((comp, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 items-center mb-2"
                  >
                    <select
                      value={comp.rawMaterial}
                      onChange={(e) =>
                        handleCompositionChange(
                          index,
                          "rawMaterial",
                          e.target.value
                        )
                      }
                      className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Select Raw Material</option>
                      {masterMaterials.map((material) => (
                        <option key={material._id} value={material._id}>
                          {material.name}
                        </option>
                      ))}
                    </select>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Enter %"
                        className="form-control"
                        value={comp.percentage}
                        onChange={(e) =>
                          handleCompositionChange(
                            index,
                            "percentage",
                            e.target.value
                          )
                        }
                        min="0"
                        max="100"
                      />
                      <span className="text-sm text-gray-500">
                        {((comp.percentage / 100) * totalQuantity).toFixed(2)}g
                      </span>

                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeComposition(index)}
                          className="text-red-500 hover:underline ml-2"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addComposition}
                  className="btn btn-outline-primary mt-2"
                >
                  + Add Raw Material
                </button>

                {/* Total % validation */}
                <div
                  className={`mt-2 text-sm font-semibold ${
                    totalPercentage !== 100 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  Total: {totalPercentage}%{" "}
                  {totalPercentage !== 100 ? "(Should be 100%)" : "✓"}
                </div>
              </div>

              {/* Image Upload */}

              {/* Description */}
              <div className="sm:col-span-2 lg:col-span-4">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Optional description for the blend..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="col-span-2">
                <button
                  onClick={handleSubmit}
                  className="btn btn-submit mr-2"
                  disabled={loading}
                >
                  {loading ? "Submiting..." : "Submit"}
                </button>

                <a href="/blendlist" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
