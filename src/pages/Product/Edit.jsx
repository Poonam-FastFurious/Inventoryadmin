import React from "react";

function Edit() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Product Edit</h4>
              <h6>Update your product</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                <div>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" value="Macbook pro" />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>Computers</option>
                      <option>Mac</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Sub Category</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>None</option>
                      <option>option1</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Brand</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>None</option>
                      <option>option1</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Unit</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>Piece</option>
                      <option>Kg</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>SKU</label>
                    <input type="text" value="PT0002" />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Minimum Qty</label>
                    <input type="text" value="5" />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input type="text" value="50" />
                  </div>
                </div>
                <div className="sm:col-span-2 lg:col-span-4">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s,Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s,
                    </textarea>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Tax</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>Choose Tax</option>
                      <option>2%</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Discount Type</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>Percentage</option>
                      <option>10%</option>
                      <option>20%</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Price</label>
                    <input type="text" value="1500.00" />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label> Status</label>
                    <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                      <option>Active</option>
                      <option>Open</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2 lg:col-span-4">
                  <div className="form-group">
                    <label> Product Image</label>
                    <div className="image-upload">
                      <input type="file" />
                      <div className="image-uploads">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/upload.svg"
                          alt="img"
                        />
                        <h4>Drag and drop a file to upload</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="product-list">
                    <ul>
                      <li className="!px-0">
                        <div className="productviews">
                          <div className="productviewsimg">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/macbook.svg"
                              alt="img"
                            />
                          </div>
                          <div className="productviewscontent">
                            <div className="productviewsname">
                              <h2>macbookpro.jpg</h2>
                              <h3>581kb</h3>
                            </div>
                            <a href="javascript:void(0);" className="hideset">
                              x
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-2">
                  <a href="javascript:void(0);" className="btn btn-submit mr-2">
                    Update
                  </a>
                  <a href="productlist.html" className="btn btn-cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
