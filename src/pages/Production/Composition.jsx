import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";
import useMasterMaterialStore from "../../Store/useSettingStore";

function Composition() {
  const { updateProductionBatchStatus } = useProductStore();
  const { id } = useParams();
  const getProductionBatchDetails = useProductStore(
    (state) => state.getProductionBatchDetails
  );

  const {
    masterMaterials,
    fetchMasterMaterials,
    loading: rawLoading,
  } = useMasterMaterialStore();

  const [batch, setBatch] = useState(null);
  const [compositionWithStock, setCompositionWithStock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch production batch detail
        const batchData = await getProductionBatchDetails(id);
        setBatch(batchData);

        // 2. Fetch raw materials if not already loaded
        if (!masterMaterials || masterMaterials.length === 0) {
          await fetchMasterMaterials(1, 1000); // Fetch all, override pagination
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, [id, getProductionBatchDetails, fetchMasterMaterials, masterMaterials]);

  useEffect(() => {
    if (!batch || masterMaterials.length === 0) return;

    const enriched = batch.compositionDetails.map((item) => {
      const material = masterMaterials.find(
        (r) => r._id === item.rawMaterialId
      );
      const stockInKg = material?.currentStock || 0;
      const requiredInKg = item.quantityRequiredInGrams / 1000;
      const isStockSufficient = stockInKg >= requiredInKg;

      return {
        ...item,
        requiredInKg,
        stockInKg,
        status: isStockSufficient ? "OK" : "Low Stock",
      };
    });

    setCompositionWithStock(enriched);
  }, [batch, masterMaterials]);

  if (!batch || compositionWithStock.length === 0 || rawLoading) {
    return <div>Loading composition...</div>;
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Blend Composition</h4>
            <h6>Material required for {batch.quantityInKg} kg blend</h6>
          </div>
          <div className="page-btn">
            <button
              className="px-3 py-1 text-sm font-medium bg-green-700 hover:bg-green-600 text-white rounded transition"
              onClick={() => updateProductionBatchStatus(id, "complete")}
              disabled={batch.status === "complete"}
            >
             Mark as Complete
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table datanew">
                <thead>
                  <tr>
                    <th>Raw Material</th>
                    <th>Percentage Used</th>
                    <th>Required (kg)</th>
                    <th>Available (kg)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {compositionWithStock.map((item, index) => (
                    <tr key={index}>
                      <td>{item.rawMaterialName}</td>
                      <td>{item.percentageUsed}%</td>
                      <td>{item.requiredInKg.toFixed(2)} kg</td>
                      <td>{item.stockInKg.toFixed(2)} kg</td>
                      <td>
                        <span
                          className={`badge ${
                            item.status === "OK" ? "bg-success" : "bg-danger"
                          }`}
                        >
                          {item.status}
                        </span>
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
  );
}

export default Composition;
