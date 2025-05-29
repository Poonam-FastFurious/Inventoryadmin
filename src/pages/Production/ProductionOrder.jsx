import { Link } from "react-router-dom";
import { useEffect } from "react";
import useProductStore from "../../Store/useProductStore";

// Lucide Icons
import {
  Plus,
  Filter,
  Search,
  FileSpreadsheet,
  FileText,
  Printer,
} from "lucide-react";

function ProductionOrder() {
  const {
    productionBatches,
    getAllProductionBatches,
    updateProductionBatchStatus,
  } = useProductStore();

  useEffect(() => {
    getAllProductionBatches("pending");
  }, [getAllProductionBatches]);
  
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header flex justify-between items-center">
          <div className="page-title">
            <h4>Production Orders</h4>
            <h6>Plan what blends you want to produce</h6>
          </div>
          <div className="page-btn">
            <Link
              to="/createproduction"
              className="btn btn-added flex items-center gap-1"
            >
              <Plus size={16} />
              New Orders
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="table-top flex justify-between items-center">
              <div className="search-set flex items-center gap-2">
                <button className="btn btn-filter">
                  <Filter size={16} />
                </button>
                <button className="btn btn-searchset">
                  <Search size={16} />
                </button>
              </div>

              <div className="wordset">
                <ul className="flex items-center gap-3">
                  <li title="PDF">
                    <button>
                      <FileText size={16} />
                    </button>
                  </li>
                  <li title="Excel">
                    <button>
                      <FileSpreadsheet size={16} />
                    </button>
                  </li>
                  <li title="Print">
                    <button>
                      <Printer size={16} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table datanew">
                <thead>
                  <tr>
                    <th>BATCH ID</th>
                    <th>NAME </th>
                    <th>Quantity (kg)</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productionBatches.length > 0 ? (
                    productionBatches.map((batch) => (
                      <tr key={batch._id}>
                        <td>{batch?.batchCode}</td>
                        <td>{batch.formula?.formulaName}</td>
                        <td>{batch?.quantity}</td>
                        <td>
                          <span
                            className={`badge ${
                              batch.status === "pending"
                                ? "bg-warning text-dark"
                                : "bg-success"
                            }`}
                          >
                            {batch?.status}
                          </span>
                        </td>
                        <td>
                          {new Date(batch?.createdAt).toLocaleDateString()}
                        </td>
                        <td>
                          <div className="flex gap-2">
                            <Link
                              to={`/production-batch/${batch._id}`}
                              className="px-3 py-1 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded transition"
                            >
                              View
                            </Link>

                            <button
                              onClick={() =>
                                updateProductionBatchStatus(batch._id, "cancel")
                              }
                              disabled={batch.status === "cancel"}
                              className="px-3 py-1 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No production batches found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductionOrder;
