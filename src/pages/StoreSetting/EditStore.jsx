import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import uploadIcon from "../../assets/img/icons/upload.svg"; // adjust the path
import useMasterMaterialStore from "../../Store/useSettingStore";
import toast from "react-hot-toast";

function EditStore() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getStoreById, updateStore, selectedStore } = useMasterMaterialStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    storeName: "",
    userName: "",
    password: "",
    phone: "",
    email: "",
    image: null,
    imagePreview: "",
  });

  useEffect(() => {
    if (id) {
      getStoreById(id);
    }
  }, [id]);

  useEffect(() => {
    if (selectedStore) {
      setFormData((prev) => ({
        ...prev,
        storeName: selectedStore.storeName || "",
        userName: selectedStore.userName || "",
        phone: selectedStore.phone || "",
        email: selectedStore.email || "",
        imagePreview: selectedStore.storeImage || "",
      }));
    }
  }, [selectedStore]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // 🛑 Prevent double-click

    setIsSubmitting(true); // 🔒 Disable button

    const data = new FormData();
    data.append("storeName", formData.storeName);
    data.append("userName", formData.userName);
    data.append("password", formData.password);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    if (formData.image) data.append("image", formData.image);
    try {
      await updateStore(id, data);
      navigate("/storelist"); // ✅ Navigate after success
    } catch (error) {
      toast.error("Failed to update store.", error.message || "Unknown error");
    } finally {
      setIsSubmitting(false); // 🔓 Re-enable button
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Store Management</h4>
            <h6>Edit/Update Store</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
              {/* Store Name */}
              <div className="form-group">
                <label>Store Name</label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                />
              </div>

              {/* User Name */}
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Password</label>
                <div className="pass-group">
                  <input
                    type="password"
                    name="password"
                    className="pass-input"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <span className="fas toggle-password fa-eye-slash"></span>
                </div>
              </div>

              {/* Phone */}
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Upload Image */}
              <div className="sm:col-span-2 lg:col-span-4">
                <div className="form-group">
                  <label>Store Image</label>
                  <div className="image-upload">
                    <input type="file" onChange={handleImageChange} />
                    <div className="image-uploads">
                      <img src={uploadIcon} alt="upload" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Image */}
              {formData.imagePreview && (
                <div className="sm:col-span-2 lg:col-span-4">
                  <div className="product-list">
                    <ul className="!ml-[-15px]">
                      <li className="!pl-0">
                        <div className="productviews">
                          <div className="productviewsimg">
                            <img src={formData.imagePreview} alt="preview" />
                          </div>
                          <div className="productviewscontent">
                            <div className="productviewsname">
                              <h2>{formData.image?.name || "Store Image"}</h2>
                              <h3>
                                {formData.image
                                  ? `${(formData.image.size / 1024).toFixed(
                                      1
                                    )} KB`
                                  : ""}
                              </h3>
                            </div>
                            <button
                              className="hideset"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  image: null,
                                  imagePreview: "",
                                }))
                              }
                            >
                              x
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Submit/Cancel */}
              <div className="sm:col-span-2 lg:col-span-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="btn btn-submit mr-2"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <button
                  onClick={() => navigate("/storelist")}
                  className="btn btn-cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStore;
