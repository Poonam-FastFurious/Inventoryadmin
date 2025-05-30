import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useMasterMaterialStore from "../../Store/useSettingStore";

function Storelist() {
  const { stores, fetchStores, loading, toggleStoreStatus, deleteStore } =
    useMasterMaterialStore();

  useEffect(() => {
    if (stores.length === 0) {
      fetchStores();
    }
  }, []);
  const handleToggle = (storeId) => {
    toggleStoreStatus(storeId);
  };

  return (
    <>
      <div className="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Store List</h4>
              <h6>Manage your Store</h6>
            </div>
            <div class="page-btn">
              <Link to="/addstore" class="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  alt="img"
                  class="mr-2"
                />
                Add Store
              </Link>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div class="search-set">
                  <div class="search-input">
                    <a class="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="img"
                      />
                    </a>
                    <div
                      id="DataTables_Table_0_filter"
                      class="dataTables_filter"
                    >
                      <label>
                        <input
                          type="search"
                          class=""
                          placeholder="Search..."
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <div
                  id="DataTables_Table_0_wrapper"
                  class="dataTables_wrapper no-footer"
                >
                  <table
                    class="table datanew dataTable no-footer"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th style={{ width: "38.4875px" }}>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </th>
                        <th style={{ width: "78.45px" }}>Store name</th>
                        <th style={{ width: "79.5125px" }}>User name</th>
                        <th style={{ width: "86.425px" }}>Phone</th>
                        <th style={{ width: "158.025px" }}>email</th>
                        <th style={{ width: "44.925px" }}>Status</th>
                        <th style={{ width: "51.775px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="7" className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : stores.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="text-center">
                            No stores found
                          </td>
                        </tr>
                      ) : (
                        stores.map((store, index) => (
                          <tr key={store._id || index}>
                            <td>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>{store.storeName}</td>
                            <td>{store.userName}</td>
                            <td>{store.phone}</td>
                            <td>{store.email}</td>
                            <td>
                              <div className="status-toggle flex justify-between items-center">
                                <input
                                  type="checkbox"
                                  id={`status-${index}`}
                                  className="check"
                                  checked={store.active}
                                  onChange={() => handleToggle(store._id)}
                                />
                                <label
                                  htmlFor={`status-${index}`}
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td>
                              <Link
                                className="mr-3"
                                to={`/editstore/${store._id}`}
                              >
                                <img
                                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                                  alt="Edit"
                                />
                              </Link>
                              <a
                                className="mr-3 confirm-text"
                                href="#"
                                onClick={() => {
                                  deleteStore(store._id);
                                }}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storelist;
