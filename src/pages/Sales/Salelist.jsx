import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";

function Salelist() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [selectedSale, setSelectedSale] = useState(null);

  const handleActionClick = (event, sale) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickedSame = selectedSale?.id === sale.id;

    if (dropdownOpen && clickedSame) {
      // Close if clicking same dot again
      setDropdownOpen(false);
      setSelectedSale(null);
    } else {
      // Open for new or reposition
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX - 150, // Adjust if needed
      });
      setSelectedSale(sale);
      setDropdownOpen(true);
    }
  };
  const { sales, getAllSales } = useProductStore();

  useEffect(() => {
    getAllSales();
  }, [getAllSales]);

  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Sales List</h4>
              <h6>Manage your sales</h6>
            </div>
            <div className="page-btn">
              <Link to="/add-sales" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  className="mr-1"
                />
                Add Sales
              </Link>
            </div>
          </div>

          {/* Sales Table */}
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Date</th>
                      <th>Customer Name</th>

                      <th>Status</th>

                      <th>Total</th>
                      <th>Supplier</th>

                      <th>Biller</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((sale) => (
                      <tr key={sale.id}>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          {new Date(sale.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>

                        <td>{sale.customer?.customerName}</td>

                        <td>
                          <span
                            className={`badges  ${
                              sale.status === "Completed"
                                ? "bg-lightgreen"
                                : "bg-lightred"
                            }`}
                          >
                            {sale.status}
                          </span>
                        </td>

                        <td>₹{sale.grandTotal}</td>
                        <td>{sale.supplier?.supplierName}</td>

                        <td>Admin</td>
                        <td className="text-center relative">
                          <a
                            className="action-set"
                            href="javascript:void(0);"
                            onClick={(e) => handleActionClick(e, sale)}
                          >
                            <i
                              className="fa fa-ellipsis-v"
                              aria-hidden="true"
                            ></i>
                          </a>
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

      {/* Dropdown Menu */}
      {dropdownOpen && selectedSale && (
        <div
          className="w-52 bg-white border border-gray-300 rounded-md shadow-lg p-2"
          style={{
            position: "absolute",
            top: dropdownPos.top + 4,
            left: dropdownPos.left - 5,
            zIndex: 999,
          }}
        >
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to={`/sales-details/${selectedSale._id}`}
                className="dropdown-item flex gap-2 items-center px-4 py-2"
              >
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/eye1.svg"
                  alt="Sale Detail"
                  className="w-4"
                />
                Sale Detail
              </Link>
            </li>
            <li>
              <a
                href="edit-sales.html"
                className="dropdown-item flex gap-2 items-center px-4 py-2"
              >
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                  alt="Edit"
                  className="w-4"
                />
                Edit Sale
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item flex gap-2 items-center px-4 py-2"
              >
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/dollar-square.svg"
                  alt="Show"
                  className="w-4"
                />
                Show Payments
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item flex gap-2 items-center px-4 py-2"
              >
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus-circle.svg"
                  alt="Create"
                  className="w-4"
                />
                Create Payment
              </a>
            </li>

            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item flex gap-2 items-center px-4 py-2 text-red-600"
              >
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete1.svg"
                  alt="Delete"
                  className="w-4"
                />
                Delete Sale
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Salelist;
