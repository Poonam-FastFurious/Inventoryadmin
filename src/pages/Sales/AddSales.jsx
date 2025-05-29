/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useProductStore from "../../Store/useProductStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCustomerStore } from "../../Store/useCustomerStore";

function AddSales() {
  const {
    customers,
    fetchCustomers,
    createCustomer,
    fetchSuppliers,
    suppliers,
  } = useCustomerStore();

  const {
    blendFormulas,
    getAllBlendFormulas,
    packedProduct,
    getAllPackedProducts,
    createSaleEntry,
  } = useProductStore();
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState("");

  const [newCustomerPhone, setNewCustomerPhone] = useState("");

  const [selectedFormulaId, setSelectedFormulaId] = useState("");
  const [selectedBatchId, setSelectedBatchId] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const [customer, setCustomer] = useState("");
  const [date, setDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [orderTax, setOrderTax] = useState(0);
  const [orderDiscount, setOrderDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [status, setStatus] = useState("");
  useEffect(() => {
    fetchCustomers();
    fetchSuppliers();
  }, [fetchCustomers, fetchSuppliers]);
  useEffect(() => {
    getAllPackedProducts();
    getAllBlendFormulas();
  }, [getAllBlendFormulas, getAllPackedProducts]);

  const filteredBatches = packedProduct.filter(
    (batch) => batch.formulaId === selectedFormulaId
  );

  const handleAddProduct = () => {
    const selectedBatch = packedProduct.find(
      (item) => item._id === selectedBatchId
    );
    if (!selectedBatch) return;

    const alreadyExists = cartItems.some(
      (item) => item._id === selectedBatch._id
    );
    if (alreadyExists) return;

    setCartItems([
      ...cartItems,
      {
        ...selectedBatch,
        qty: 1,
        discount: 0,
        tax: 0,
      },
    ]);
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const handleQtyChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: Number(value) } : item
      )
    );
  };

  const calculateSubtotal = (item) => (item.pricePerPack * item.qty).toFixed(2);
  const calculateGrandTotal = () => {
    const itemsTotal = cartItems.reduce(
      (acc, item) =>
        acc + item.pricePerPack * item.qty - item.discount + item.tax,
      0
    );
    return (
      itemsTotal +
      Number(orderTax) +
      Number(shipping) -
      Number(orderDiscount)
    ).toFixed(2);
  };
  const handleSubmit = async () => {
    if (!customer || !supplier || cartItems.length === 0 || !date || !status) {
      toast.error(
        "Please fill all required fields and add at least one product"
      );
      return;
    }

    const payload = {
      customer,
      date,
      supplier,
      items: cartItems.map((item) => ({
        product: item.formulaId, // 🟢 your blend/formula id
        batch: item._id, // 🟢 your packaging/batch id
        qty: item.qty,
        discount: item.discount || 0,
        tax: item.tax || 0,
      })),
      orderTax: Number(orderTax),
      discount: Number(orderDiscount),
      shipping: Number(shipping),
      status,
    };

    try {
      await createSaleEntry(payload); // Assuming this is your Zustand function

      // Optionally reset form
      setCustomer("");
      setSupplier("");
      setCartItems([]);
      setOrderTax(0);
      setOrderDiscount(0);
      setShipping(0);
      setStatus("");
      setDate("");
    } catch (err) {
      toast.error("Failed to submit sale");
    }
  };
  const handleAddCustomer = async () => {
    if (!newCustomerName.trim() || !newCustomerPhone.trim()) {
      toast.error("Name and phone are required");
      return;
    }

    try {
      const addedCustomer = await createCustomer({
        customerName: newCustomerName,
        phone: newCustomerPhone,
      });
      // Set newly added customer as selected
      setCustomer(addedCustomer._id);
      // Refresh customer list
      await fetchCustomers();
      // Close modal first, then clear form
      setIsCustomerModalOpen(false);
      // gives modal time to close smoothly
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Add Sale</h4>
              <h6>Add your new sale</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Customer</label>
                    <div class="sm:grid sm:grid-cols-12 lg:grid-cols-12">
                      <div class="sm:col-span-10 lg:col-span-10 sm:mr-3">
                        <select
                          value={customer}
                          onChange={(e) => setCustomer(e.target.value)}
                          className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                          <option>Choose</option>
                          {customers.map((customer) => (
                            <option value={customer._id}>
                              {customer.customerName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="sm:col-span-2 lg:col-span-2">
                        <div
                          class="add-icon"
                          onClick={() => setIsCustomerModalOpen(true)}
                        >
                          <span>
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus1.svg"
                              alt="img"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Date</label>
                    <div class="datepicker input-groupicon">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Choose Date"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Supplier</label>
                    <select
                      value={supplier}
                      onChange={(e) => setSupplier(e.target.value)}
                      className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Choose</option>
                      {suppliers.map((suply) => (
                        <option value={suply._id}>{suply.supplierName}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Product</label>
                    <select
                      value={selectedFormulaId}
                      onChange={(e) => {
                        setSelectedFormulaId(e.target.value);
                        setSelectedBatchId("");
                      }}
                      className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option>Choose</option>
                      {blendFormulas.map((blend) => (
                        <option key={blend._id} value={blend._id}>
                          {blend.formulaName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Batch</label>
                    <select
                      value={selectedBatchId}
                      onChange={(e) => setSelectedBatchId(e.target.value)}
                      disabled={!selectedFormulaId}
                      className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option>Choose</option>
                      {filteredBatches.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.batchCode} ({item.packageSizeInGrams}gm)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <div class="sm:grid sm:grid-cols-12 lg:grid-cols-12 mt-8">
                      <div class="sm:col-span-2 lg:col-span-2">
                        <div
                          className={`add-icon cursor-pointer ${
                            !selectedBatchId
                              ? "opacity-50 pointer-events-none"
                              : ""
                          }`}
                          onClick={handleAddProduct}
                          disabled={!selectedBatchId}
                        >
                          <span>
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/plus1.svg"
                              alt="img"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="table-responsive mb-3">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Tax</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {" "}
                      {cartItems.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>
                            {item.formulaName} - {item.batchCode} (
                            {item.packageSizeInGrams}gm)
                          </td>
                          <td>
                            <input
                              type="number"
                              value={Number(item.qty)}
                              onChange={(e) =>
                                handleQtyChange(item._id, e.target.value)
                              }
                              className="appearance-none w-20 border border-white rounded-md focus:outline-none focus:ring-0 focus:ring-orange-400"
                            />
                          </td>
                          <td>{item.pricePerPack}</td>
                          <td>{item.discount}</td>
                          <td>{item.tax}</td>
                          <td>{calculateSubtotal(item)}</td>
                          <td>
                            <button
                              onClick={() => handleRemove(item._id)}
                              className="text-red-600 "
                            >
                              <img
                                src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete-2.svg"
                                alt="img"
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {cartItems.length === 0 && (
                        <tr>
                          <td colSpan="8" className="text-center">
                            No products added.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-6 lg:grid-cols-4 gap-x-6">
                <div>
                  <div class="form-group">
                    <label>Order Tax</label>
                    <input
                      value={orderTax}
                      onChange={(e) => setOrderTax(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Discount</label>
                    <input
                      value={orderDiscount}
                      onChange={(e) => setOrderDiscount(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Shipping</label>
                    <input
                      value={shipping}
                      onChange={(e) => setShipping(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      <option value="">Choose</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-2 gap-x-6">
                <div>
                  <div class="total-order w-full max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Order Tax</h4>
                        <h5>₹ {orderTax}</h5>
                      </li>
                      <li>
                        <h4>Discount </h4>
                        <h5>₹ 0.00</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="total-order w-full max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Shipping</h4>
                        <h5>₹ {shipping}</h5>
                      </li>
                      <li class="total">
                        <h4>Grand Total</h4>
                        <h5>₹{calculateGrandTotal()}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="btn btn-submit  mr-2"
                  disabled={cartItems.length === 0}
                >
                  Create Sale
                </button>

                <Link to="#" class="btn btn-cancel">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCustomerModalOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-gray-700 bg-opacity-50 pointer-events-auto ">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>

            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
              placeholder="Customer Name"
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.target.value)}
            />

            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Phone Number"
              value={newCustomerPhone}
              onChange={(e) => setNewCustomerPhone(e.target.value)}
            />

            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={() => {
                  setIsCustomerModalOpen(false);
                  setNewCustomerName("");
                  setNewCustomerPhone("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleAddCustomer}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddSales;
