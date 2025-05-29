import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";
import Swal from "sweetalert2";

function ListRawmaterial() {
  const { rawMaterials, getAllRawMaterials, deleteRawMaterial } =
    useProductStore();
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllRawMaterials();
  }, [getAllRawMaterials]);

  const filteredData = rawMaterials.filter((item) =>
    item.material?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRawMaterial(id);
      }
    });
  };

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
                      </th>{" "}
                      <th>Purchase Date</th>
                      <th>Raw Material Name</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th> Price/Unit + Freight</th>
                      <th>Supplier</th>
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
                          </td>{" "}
                          <td>
                            {new Date(item.purchaseDate).toLocaleDateString()}
                          </td>
                          <td>{item.material?.name}</td>
                          <td>{item.category}</td>
                          <td>
                            {item.quantity} 
                            {item.unit}
                          </td>
                          <td>
                            ₹{(item.purchasePrice || 0) +
                              (item.transportCharge || 0)}
                            
                          </td>
                          <td>{item.supplier}</td>
                          <td>
                            <Link className="mr-3" to="/editrawmaterial/1">
                              <img
                                src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                                alt="Edit"
                              />
                            </Link>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="confirm-text"
                            >
                              <img
                                src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                                alt="Delete"
                              />
                            </button>
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
              <div className="flex flex-wrap items-center  mt-4 text-sm">
                <div className="flex items-center justify-end gap-2">
                  <span>Show per page:</span>
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

export default ListRawmaterial;
