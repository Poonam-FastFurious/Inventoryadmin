import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";
import { useEffect } from "react";

function ProductionHistory() {
  const { productionBatches, getAllProductionBatches } = useProductStore();

  // Fetch production batches when the component mounts
  useEffect(() => {
    getAllProductionBatches();
  }, [getAllProductionBatches]);
 

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Production History</h4>
              <h6>Track what was produced and when</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
                    <a className="btn btn-filter" id="filter_search">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/filter.svg"
                        alt="Filter"
                      />
                    </a>
                  </div>
                  <div className="search-input">
                    <a className="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="Search"
                      />
                    </a>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a title="PDF">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/pdf.svg"
                          alt="PDF"
                        />
                      </a>
                    </li>
                    <li>
                      <a title="Excel">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/excel.svg"
                          alt="Excel"
                        />
                      </a>
                    </li>
                    <li>
                      <a title="Print">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/printer.svg"
                          alt="Print"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table datanew">
                  <thead>
                    <tr>
                      <th>Batch Code</th> {/* ✅ New column */}
                      <th>Name</th>
                      <th>Quantity (kg)</th>
                      <th>Batch Coast/Kg</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionBatches.map((item) => (
                      <tr key={item._id}>
                        <td>{item?.batchCode}</td>
                        <td>{item.formula?.formulaName}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.costPerKg?.toFixed(2)}</td>
                        <td>
                          {new Date(item?.createdAt).toLocaleDateString()}
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              item.status === "pending"
                                ? "bg-warning text-dark"
                                : item.status === "cancel"
                                ? "bg-danger"
                                : "bg-success"
                            }`}
                          >
                            {item?.status}
                          </span>
                        </td>
                        <td>
                          {" "}
                          <button className="px-3 py-1 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded transition">
                            Print Batch
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

export default ProductionHistory;
