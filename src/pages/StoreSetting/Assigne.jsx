import React, { useEffect, useState } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";

function Assigne() {
  const {
    stores,
    fetchStores,
    fetchMasterMaterials,
    masterMaterials,
    assignMaterialsToStore,
  } = useMasterMaterialStore();
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  useEffect(() => {
    if (stores.length === 0) {
      fetchStores();
    }
  }, [fetchStores]);

  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);

  const handleMaterialToggle = (materialId) => {
    setSelectedMaterials((prev) =>
      prev.includes(materialId)
        ? prev.filter((id) => id !== materialId)
        : [...prev, materialId]
    );
  };

  const handleAssign = async () => {
    if (!selectedStore) {
      alert("Please select a store.");
      return;
    }

    if (selectedMaterials.length === 0) {
      alert("Please select at least one material.");
      return;
    }

    const success = await assignMaterialsToStore(
      selectedStore,
      selectedMaterials
    );
    if (success) {
      setSelectedMaterials([]);
      setSelectedStore("");
      fetchStores(); // Refresh to update assigned materials list
    }
  };

  const handleReset = () => {
    setSelectedStore("");
    setSelectedMaterials([]);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Store Management</h4>
            <h6>Add/Update Store</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT: Assign Form */}
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">
                  Assign Raw Material to Store
                </h2>

                <div className="mb-4">
                  <label className="block font-semibold mb-1">
                    Select Store
                  </label>
                  <select
                    className="w-full border rounded p-2"
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                  >
                    <option value="">Select Store</option>
                    {stores.map((stor, index) => (
                      <option value={stor._id} key={index}>
                        {stor.storeName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block font-semibold mb-2">
                    Assign Materials
                  </label>
                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto p-2">
                    {masterMaterials.map((item) => (
                      <label
                        key={item._id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          value={item._id}
                          checked={selectedMaterials.includes(item._id)}
                          onChange={() => handleMaterialToggle(item._id)}
                        />
                        <span>{item.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleAssign}
                  >
                    Assign
                  </button>
                  <button
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* RIGHT: Assigned List */}
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-4">
                  Assigned Materials
                </h3>
                <table className="w-full border text-left">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border">Store Name</th>
                      <th className="p-2 border">Raw Materials</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stores.map((stor, index) => (
                      <tr key={index}>
                        <td className="p-2 border">{stor.storeName}</td>
                        <td className="p-2 border">
                          {stor.assignedMasterMaterials?.length > 0
                            ? stor.assignedMasterMaterials.map((item, i) => (
                                <span key={i}>{item?.name}, </span>
                              ))
                            : "No materials assigned"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* End of grid */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assigne;
