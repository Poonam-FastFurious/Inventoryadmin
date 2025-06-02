import React, { useState } from "react";

const sampleMaterials = [
  { _id: "m1", name: "Coriander" },
  { _id: "m2", name: "Cumin" },
  { _id: "m3", name: "Turmeric" },
  { _id: "m4", name: "Red Chili" },
];

const sampleStores = [
  { _id: "s1", storeName: "Main Store", email: "main@store.com" },
  { _id: "s2", storeName: "Branch Store", email: "branch@store.com" },
];

function AssignMaterialsToStore() {
  const [selectedStoreId, setSelectedStoreId] = useState("");
  const [assignedMaterials, setAssignedMaterials] = useState({});
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const handleStoreChange = (e) => {
    const storeId = e.target.value;
    setSelectedStoreId(storeId);
    setSelectedMaterials(assignedMaterials[storeId] || []);
  };

  const handleMaterialToggle = (materialId) => {
    setSelectedMaterials((prev) =>
      prev.includes(materialId)
        ? prev.filter((id) => id !== materialId)
        : [...prev, materialId]
    );
  };

  const handleAssign = () => {
    if (!selectedStoreId) return;
    setAssignedMaterials((prev) => ({
      ...prev,
      [selectedStoreId]: selectedMaterials,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Assign Raw Material to Store</h2>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Select Store</label>
          <select
            className="w-full border rounded p-2"
            value={selectedStoreId}
            onChange={handleStoreChange}
          >
            <option value="">-- Select Store --</option>
            {sampleStores.map((store) => (
              <option key={store._id} value={store._id}>
                {store.storeName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Assign Materials</label>
          <div className="grid grid-cols-2 gap-2">
            {sampleMaterials.map((material) => (
              <label key={material._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material._id)}
                  onChange={() => handleMaterialToggle(material._id)}
                />
                <span>{material.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleAssign}
            disabled={!selectedStoreId}
          >
            Assign
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => {
              setSelectedStoreId("");
              setSelectedMaterials([]);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Assigned Table */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Assigned Materials</h3>
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Store Name</th>
              <th className="p-2 border">Raw Materials</th>
            </tr>
          </thead>
          <tbody>
            {sampleStores.map((store) => (
              <tr key={store._id}>
                <td className="p-2 border">{store.storeName}</td>
                <td className="p-2 border">
                  {(assignedMaterials[store._id] || [])
                    .map(
                      (id) =>
                        sampleMaterials.find((mat) => mat._id === id)?.name
                    )
                    .join(", ") || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignMaterialsToStore;
