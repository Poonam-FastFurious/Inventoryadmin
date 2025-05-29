import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";

function List() {
  const { rawMaterials, getAllRawMaterials } = useProductStore();
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllRawMaterials();
  }, [getAllRawMaterials]);

  const filteredData = rawMaterials.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Product List</h4>
              <h6>Manage your products</h6>
            </div>
            <div class="page-btn">
              <Link to="/addrawmaterial" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  class="mr-1"
                />
                Add Raw Material
              </Link>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <input
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      type="text"
                      placeholder="Search by name..."
                      className="border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div class="wordset">
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

              <div class="table-responsive ">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Raw Material Name</th>
                      <th>Batch Code</th>
                      <th>Category</th>
                      <th>Unit</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Supplier</th>
                      <th>Purchase Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.length > 0 ? (
                      paginatedData.map((item) => (
                        <tr key={item._id}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.batchCode}</td>
                          <td>{item.category}</td>
                          <td>{item.unit}</td>
                          <td>{item.quantity}</td>
                          <td>{item.purchasePrice}</td>
                          <td>{item.supplier}</td>
                          <td>
                            {new Date(item.purchaseDate).toLocaleDateString()}
                          </td>
                          <td>
                            <Link className="mr-3" to="/editrawmaterial/1">
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
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center">
                          No raw materials found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap items-center justify-between mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <span>Show per page:</span>
                  <select
                    className="border rounded   py-1"
                    value={itemsPerPage}
                    onChange={() => {
                      setCurrentPage(1);
                    }}
                  >
                    {[5, 10, 20, 50].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === i + 1
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
