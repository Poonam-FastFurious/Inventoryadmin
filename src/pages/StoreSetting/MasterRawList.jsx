import React, { useEffect } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MasterRawList() {
  const { fetchMasterMaterials, masterMaterials, deleteMasterMaterial } =
    useMasterMaterialStore();

  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMasterMaterial(id);
      }
    });
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Master Raw Material List</h4>
              <h6>View/Search Master Raw Materials</h6>
            </div>
            <div className="page-btn">
              <Link to="/addmasterraw" className="btn btn-added">
                <img
                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                  className="mr-1"
                  alt="img"
                />
                Add Master Raw
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top"></div>

              <div className="table-responsive">
                <table className="table  datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Raw Material Name</th>
                      <th>Raw Material Code</th>
                      <th>Description</th>
                      <th>Created By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterMaterials.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td >
                          <div>{item?.name}</div>
                        </td>
                        <td>{item?.code}</td>
                        <td>{item.description}</td>
                        <td>Admin</td>
                        <td>
                          <Link className="mr-3" to={`/editmaster/${item._id}`}>
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                              alt="img"
                            />
                          </Link>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="mr-3 confirm-text"
                          >
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                              alt="delete"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}

                    {/* More rows can be added here */}
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

export default MasterRawList;
