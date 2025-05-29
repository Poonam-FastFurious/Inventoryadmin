import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useMasterMaterialStore from "../../Store/useSettingStore";

function Stockmanagment() {
  const {
    fetchMasterMaterials,
    masterMaterials,
    
  } = useMasterMaterialStore();

  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Raw Material Stock</h4>
              <h6>Manage your Stock</h6>
            </div>
            <div className="page-btn">
              <a href="addproduct.html" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  className="mr-1"
                />
                Raw Material Add
              </a>
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
                        alt="img"
                      />
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/closes.svg"
                          alt="img"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="search-input">
                    <a className="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/pdf.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/excel.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/printer.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Raw Material</th>
                      <th>Total Stock</th>
                      <th>Unit</th>
                      <th>Average Price</th>
                      <th>Batches</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterMaterials.length > 0 ? (
                      masterMaterials.map((item) => (
                        <tr key={item._id}>
                          <td>{item?.name}</td>
                          <td>{item.currentStock} kg</td>
                          <td>kg</td>
                          <td>₹{item.averagePrice.toFixed(2)}</td>
                          <td>
                            <Link
                              to={`/Batch/${item?.name}/${item._id}`}
                              className="btn btn-info btn-sm ml-2"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No stock data available</td>
                      </tr>
                    )}
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

export default Stockmanagment;
