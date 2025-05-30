import React, { useState, useEffect } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";
import { useNavigate, useParams } from "react-router-dom";

function Editmaster() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { getMasterMaterialById, editMasterMaterial } =
    useMasterMaterialStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMasterMaterialById(id);
      if (data) {
        setName(data.name || "");
        setCode(data.code || "");
        setDescription(data.description || "");
      }
    };
    fetchData();
  }, [id, getMasterMaterialById]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !code) {
      alert("Please fill out all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await editMasterMaterial(id, { name, code, description });
      navigate("/Rawmaterial");
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Edit Master Material</h4>
            <h6>Update master material details</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="sm:grid sm:grid-cols-2 gap-x-6">
              <div>
                <div className="form-group">
                  <label>Master Material Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Master Material Code</label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-submit mr-2"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </button>
                <a href="/Rawmaterial" className="btn btn-cancel">
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

export default Editmaster;
