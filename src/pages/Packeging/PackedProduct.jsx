import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";

function PackagedProductList() {
  const { packedProduct, getAllPackedProducts, loading } = useProductStore();

  useEffect(() => {
    getAllPackedProducts();
  }, [getAllPackedProducts]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Packaged Product List</h4>
              <h6>Manage all your packaged product batches</h6>
            </div>
            <div className="page-btn">
              <Link to="/createpackaging" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="add"
                  className="mr-1"
                />
                Create Packaging Batch
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
                    <button className="btn btn-filter" id="filter_search">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/filter.svg"
                        alt="filter"
                      />
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/closes.svg"
                          alt="close"
                        />
                      </span>
                    </button>
                  </div>
                  <div className="search-input">
                    <button className="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="search"
                      />
                    </button>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a title="PDF">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/pdf.svg"
                          alt="pdf"
                        />
                      </a>
                    </li>
                    <li>
                      <a title="Excel">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/excel.svg"
                          alt="excel"
                        />
                      </a>
                    </li>
                    <li>
                      <a title="Print">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/printer.svg"
                          alt="print"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="table-responsive">
                {loading && packedProduct.length === 0 ? (
                  <p>Loading packaged products...</p>
                ) : (
                  <table className="table datanew">
                    <thead>
                      <tr>
                        <th>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th>Blend Name</th>
                        <th>Batch Code</th>
                        <th>Pack Size</th>
                        <th>Price/Pack</th>
                        <th>Total Packs</th>
                        <th>Packaging Date</th>
                        <th>Expiry Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packedProduct.length === 0 ? (
                        <tr>
                          <td colSpan="9" style={{ textAlign: "center" }}>
                            No packaged products found.
                          </td>
                        </tr>
                      ) : (
                        packedProduct.map((item) => (
                          <tr key={item._id || item.id}>
                            <td>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>{item.formulaName}</td>
                            <td>{item.batchCode}</td>
                            <td>{item.packageSizeInGrams}gm</td>
                            <td>₹{item.pricePerPack}</td>

                            <td>{item.numberOfPackages}</td>
                            <td>
                              {new Date(
                                item.packagingDate
                              ).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(item.expiryDate).toLocaleDateString()}
                            </td>
                            <td>
                              <Link
                                className="mr-3"
                                to={`/editpackagedproduct/${item._id}`}
                              >
                                <img
                                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                                  alt="Edit"
                                />
                              </Link>
                              <a
                                className="confirm-text"
                                href="javascript:void(0);"
                              >
                                <img
                                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                                  alt="Delete"
                                />
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackagedProductList;
