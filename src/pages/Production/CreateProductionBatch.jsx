import { useEffect, useState } from "react";
import useProductStore from "../../Store/useProductStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateProductionBatch() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const {
    blendFormulas: products,
    getAllBlendFormulas,
    createProductionBatch,
  } = useProductStore();
  const [selectedFormulaId, setSelectedFormulaId] = useState("");
  const [quantityKg, setQuantityKg] = useState("");
  const [selectedFormula, setSelectedFormula] = useState(null);

  useEffect(() => {
    getAllBlendFormulas();
  }, [getAllBlendFormulas]);
  useEffect(() => {
    const formula = products.find((item) => item._id === selectedFormulaId);
    setSelectedFormula(formula || null);
  }, [selectedFormulaId, products]);
  const handleCreateBatch = async () => {
    if (isSubmitting) return; // prevent double submission

    if (!selectedFormula || !quantityKg) {
      return toast.error("Please select a formula and enter quantity");
    }

    const batchData = {
      formulaId: selectedFormula._id,
      quantity: Number(quantityKg),
    };

    try {
      setIsSubmitting(true); // Disable button during submission
      await createProductionBatch(batchData);
      setSelectedFormulaId("");
      setQuantityKg("");
      navigate("/productionorders");
    } catch (error) {
      toast.error("Failed to create production batch");
      console.error(error);
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Create Production Batch</h4>
            <h6>Track and process your production</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="form-group">
                <label>Product</label>
                <select
                  value={selectedFormulaId}
                  onChange={(e) => setSelectedFormulaId(e.target.value)}
                  className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="">Select Product</option>
                  {products.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.formulaName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Quantity to Produce (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="e.g., 100"
                  value={quantityKg}
                  onChange={(e) => setQuantityKg(e.target.value)}
                />
              </div>
            </div>
            {selectedFormula && quantityKg > 0 && (
              <div className="mt-6">
                <h5 className="mb-3">Required Raw Materials</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Raw Material</th>
                      <th>Percentage</th>
                      <th>Required Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedFormula.composition.map((item) => {
                      const requiredQty = (
                        (item.percentage / 100) *
                        quantityKg
                      ).toFixed(2);
                      return (
                        <tr key={item._id}>
                          <td>{item.material.name}</td>
                          <td>{item.percentage}%</td>
                          <td>{requiredQty} kg</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <div className="mt-6">
              <button
                onClick={handleCreateBatch}
                className="btn btn-submit mr-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Starting..." : "Start Production"}
              </button>

              <a href="/production" className="btn btn-cancel">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
