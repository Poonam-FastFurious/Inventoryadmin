import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";
import { useEffect } from "react";

function ReadyStock() {
  const { productionBatches, getAllProductionBatches } = useProductStore();

  useEffect(() => {
    getAllProductionBatches("complete");
  }, [getAllProductionBatches]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Ready Blends</h4>
              <h6>Blends that are ready for packaging or further processing</h6>
            </div>
            <div className="page-btn">
              <Link to="/createproduction" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="Add"
                  className="mr-1"
                />
                New Orders
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table datanew">
                  <thead>
                    <tr>
                      <th>Batch</th>
                      <th>Name</th>
                      <th>Total Quantity (kg)</th>
                      <th> Status </th>
                      <th> Date </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionBatches.map((item, index) => (
                      <tr key={index}>
                        <td>{item?.batchCode}</td>
                        <td>{item.formula?.formulaName}</td>

                        <td>{item?.quantity}</td>
                        <td>
                          <span
                            className={`badge ${
                              item.status === "pending"
                                ? "bg-warning text-dark"
                                : "bg-success"
                            }`}
                          >
                            {item?.status}
                          </span>
                        </td>
                        <td>
                          {" "}
                          {new Date(item?.createdAt).toLocaleDateString()}
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

export default ReadyStock;
