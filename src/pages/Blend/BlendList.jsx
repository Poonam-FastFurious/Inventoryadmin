import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";


function BlendList() {
  const { blendFormulas, getAllBlendFormulas, deleteBlendFormula, loading } =
    useProductStore();

  useEffect(() => {
    getAllBlendFormulas();
  }, [getAllBlendFormulas]);

  const handleDelete = (id) => {
    deleteBlendFormula(id); // your Zustand action
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Blend List</h4>
            <h6>Manage your blends</h6>
          </div>
          <div className="page-btn">
            <Link to="/addblend" className="btn btn-added">
              <img
                src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus.svg"
                alt="Add"
                className="mr-1"
              />
              Add New Blend
            </Link>
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
                    <th>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks"></span>
                      </label>
                    </th>
                    <th>Blend Formula Name</th>
                    <th>Blend Code</th>
                    <th>Cost</th>
                    <th>Description</th>
                    <th>Compositions</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blendFormulas?.map((blend) => (
                    <tr key={blend?._id}>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td>{blend?.formulaName}</td>
                      <td>{blend?.formulaCode}</td>
                      <td>{blend?.totalCost}</td>
                      <td>{blend?.description}</td>
                      <td>
                        <ul className="list-disc pl-4">
                          {blend?.composition?.map((comp, index) => (
                            <li key={index}>
                              {comp.percentage}% {comp?.material?.name}(
                              {comp?.grams})g
                            </li>
                          ))}
                        </ul>
                      </td>

                      <td>
                        <Link className="mr-2" to="/editblend/1">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit.svg"
                            alt="Edit"
                          />
                        </Link>
                        <button
                          className="confirm-text"
                          onClick={() => handleDelete(blend._id)}
                        >
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete.svg"
                            alt="Delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {blendFormulas.length === 0 && !loading && (
                    <tr>
                      <td colSpan="8" className="text-center py-4">
                        No blends found.
                      </td>
                    </tr>
                  )}
                  {loading && (
                    <tr>
                      <td colSpan="8" className="text-center py-4">
                        Loading...
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
  );
}

export default BlendList;
