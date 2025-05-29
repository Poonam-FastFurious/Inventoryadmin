import { Link, useParams } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";
import { useEffect, useState } from "react";

function Batch() {
  const { id, name } = useParams(); // ✅ Get masterId from URL
  const { getRawMaterialHistory } = useProductStore();
  const [batchdata, setBatchdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBatches = async () => {
      if (!id) return;
      setLoading(true);
      const history = await getRawMaterialHistory(id, "IN"); // Only fetch stock-ins (batches)
      setBatchdata(history || []);
      setLoading(false);
    };

    fetchBatches();
  }, [id, getRawMaterialHistory]);

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4 className="text-xl font-semibold">Batches Of {name}</h4>
              <h6>Manage your Stock</h6>
            </div>
            <div class="page-btn">
              <Link to="/addrawmaterial" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  class="mr-1"
                />
                Raw Material Add
              </Link>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div class="search-set">
                  <div class="search-path">
                    <a class="btn btn-filter" id="filter_search">
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
                  <div class="search-input">
                    <a class="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="img"
                      />
                    </a>
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
                <table className="table datanew">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Batch Code</th>
                      <th className="p-2 border">Category</th>
                      <th className="p-2 border">Qty</th>
                      <th className="p-2 border">Unit</th>
                      <th className="p-2 border">Supplier</th>
                      <th className="p-2 border">Purchase Date</th>
                      <th className="p-2 border">Expiry Date</th>
                      <th className="p-2 border">Price/unit</th>
                      <th className="p-2 border">Freight/unit</th>
                      <th className="p-2 border">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="10" className="text-center p-4">
                          Loading...
                        </td>
                      </tr>
                    ) : batchdata.length > 0 ? (
                      batchdata.map((batch) => (
                        <tr key={batch._id}>
                          <td className="p-2 border">{batch.batchCode}</td>
                          <td className="p-2 border">
                            {batch.relatedBatch?.category}
                          </td>
                          <td className="p-2 border">
                            {batch.quantity} {batch.relatedBatch?.unit}
                          </td>
                          <td className="p-2 border">
                            {" "}
                            {batch.relatedBatch?.unit}
                          </td>
                          <td className="p-2 border">
                            {batch.relatedBatch?.supplier}
                          </td>
                          <td className="p-2 border">
                            {new Date(
                              batch.relatedBatch?.purchaseDate
                            ).toLocaleDateString()}
                          </td>
                          <td className="p-2 border">
                            {new Date(
                              batch.relatedBatch?.expiryDate
                            ).toLocaleDateString()}
                          </td>
                          <td className="p-2 border">
                            ₹{batch.relatedBatch?.purchasePrice} 
                          </td>
                          <td className="p-2 border">
                            ₹{batch.relatedBatch?.transportCharge} 
                          </td>
                          <td className="p-2 border">
                            {batch.relatedBatch?.description}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center p-4">
                          No batches found.
                        </td>
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

export default Batch;
