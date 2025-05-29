import React, { useEffect, useState } from "react";
import useProductStore from "../../Store/useProductStore";

function CreatPackging() {
  const {
    blendFormulas,
    getAllBlendFormulas,
    productionBatches,
    getAllProductionBatches,
    createPackagingEntry,
  } = useProductStore();
  const [selectedFormulaId, setSelectedFormulaId] = useState("");
  const [selectedBatchId, setSelectedBatchId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [packSize, setPackSize] = useState("");
  const [packUnit, setPackUnit] = useState("");
  const [totalPacks, setTotalPacks] = useState(0);
  const [packagingType, setPackagingType] = useState("");
  const [packagingDate, setPackagingDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [notes, setNotes] = useState("");
  useEffect(() => {
    getAllProductionBatches("complete");
  }, [getAllProductionBatches]);
  useEffect(() => {
    getAllBlendFormulas();
  }, [getAllBlendFormulas]);

  const handleBatchChange = (e) => {
    setSelectedBatchId(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    calculatePacks(value, packSize, packUnit);
  };

  const handlePackSizeChange = (e) => {
    const [size, unit] = e.target.value.split("-");
    setPackSize(Number(size));
    setPackUnit(unit);
    calculatePacks(quantity, Number(size), unit);
  };

  const calculatePacks = (qty, size, unit) => {
    if (!qty || !size || !unit) {
      setTotalPacks(0);
      return;
    }

    const qtyInGramsOrML = parseFloat(qty) * 1000; // quantity in kg/L → g/ml
    const sizeInGramsOrML = unit === "kg" || unit === "l" ? size * 1000 : size;

    const packs = Math.floor(qtyInGramsOrML / sizeInGramsOrML);
    setTotalPacks(packs);
  };
  const handleSubmit = async () => {
    if (
      !selectedBatchId ||
      !packSize ||
      !totalPacks ||
      !packagingDate ||
      !expiryDate ||
      !packagingType
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const sizeInGrams =
      packUnit === "kg" || packUnit === "l" ? packSize * 1000 : packSize;

    const payload = {
      productionBatchId: selectedBatchId,
      packageSizeInGrams: sizeInGrams,
      numberOfPackages: totalPacks,
      notes,
      packagingDate,
      expiryDate,
      packagingType,
    };

    await createPackagingEntry(payload);
  };

  const filteredBatches = productionBatches.filter(
    (batch) => batch.formula?._id === selectedFormulaId
  );

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Create Packaging Batch</h4>
            <h6>Create a new Packaging Batch for Ready Blends</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
              {/* Blend Name */}
              <div>
                <div className="form-group">
                  <label>Blend Name</label>
                  <select
                    value={selectedFormulaId}
                    onChange={(e) => setSelectedFormulaId(e.target.value)}
                    className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    <option>Choose Blend</option>

                    {blendFormulas.map((blend) => (
                      <option key={blend._id} value={blend._id}>
                        {blend.formulaName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Batch </label>
                  <select
                    value={selectedBatchId}
                    onChange={handleBatchChange}
                    disabled={!selectedFormulaId}
                    className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    <option>Choose Packaging Type</option>
                    {filteredBatches.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.batchCode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Packaging Type */}
              <div>
                <div className="form-group">
                  <label>Packaging Type</label>
                  <select
                    value={packagingType}
                    onChange={(e) => setPackagingType(e.target.value)}
                    className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    <option>Choose Packaging Type</option>
                    <option>Bags</option>
                    <option>Boxes</option>
                    <option>Jars</option>
                  </select>
                </div>
              </div>

              {/* Packaging Size */}
              <div>
                <div className="form-group">
                  <label>Packaging Size</label>
                  <select
                    className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    onChange={handlePackSizeChange}
                    defaultValue=""
                  >
                    <option value="">Select Packaging</option>
                    <option value="50-g">50g</option>
                    <option value="100-g">100g</option>
                    <option value="500-g">500g</option>
                    <option value="1-kg">1kg</option>
                    <option value="5-kg">5kg</option>
                  </select>
                </div>
              </div>

              {/* Total Quantity */}
              <div>
                <div className="form-group">
                  <label>Total Quantity to Package (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter quantity in kg"
                    onChange={handleQuantityChange}
                    value={quantity}
                  />
                </div>
              </div>

              {/* Number of Packs */}
              <div>
                <div className="form-group">
                  <label>Number of Packs</label>
                  <input
                    type="number"
                    className="form-control"
                    value={totalPacks}
                    readOnly
                  />
                </div>
              </div>

              {/* Packaging Date */}
              <div>
                <div className="form-group">
                  <label>Packaging Date</label>
                  <input
                    value={packagingDate}
                    onChange={(e) => setPackagingDate(e.target.value)}
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Expiry Date */}
              <div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-2 lg:col-span-4">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-control"
                    placeholder="Optional description..."
                  ></textarea>
                </div>
              </div>

              {/* Buttons */}
              <div className="col-span-2">
                <button onClick={handleSubmit} className="btn btn-submit mr-2">
                  Submit
                </button>
                <a href="/packaginghistory" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatPackging;
