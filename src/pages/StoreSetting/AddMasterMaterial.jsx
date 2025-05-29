import React, { useState } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";

function AddMasterMaterial() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State to hold image preview

  const { addMasterMaterial } = useMasterMaterialStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Generate image preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !code || !image) {
      alert("Please fill out all fields and upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("code", code);
    formData.append("description", description);
    formData.append("image", image);

    // Call the store action to add the master material
    await addMasterMaterial(formData);

    // Reset the form
    setName("");
    setCode("");
    setDescription("");
    setImage(null);
    setImagePreview(null); // Reset image preview after submit
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Add Master Material</h4>
              <h6>Create a new master material</h6>
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

                <div className="sm:col-span-2">
                  <div className="form-group">
                    <label>Master Material Image</label>
                    <div className="image-upload">
                      <input
                        type="file"
                        onChange={handleImageChange}
                        className="form-control"
                      />
                      {imagePreview && (
                        <div className="image-preview">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          />
                        </div>
                      )}
                      <div className="image-uploads">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/upload.svg"
                          alt="upload"
                        />
                        <h4>Drag and drop a file to upload</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-submit mr-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <a href="/master-material-list" className="btn btn-cancel">
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

export default AddMasterMaterial;
