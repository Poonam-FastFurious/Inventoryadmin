import React, { useState } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";

function AddStore() {
  const addStore = useMasterMaterialStore((state) => state.addStore);

  // Local state for form fields
  const [storeName, setStoreName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [storeImage, setStoreImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // Image preview URL

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setStoreImage(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!storeImage) {
      alert("Store image is required");
      return;
    }
    const formData = new FormData();
    formData.append("storeName", storeName);
    formData.append("userName", userName);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("image", storeImage);
    await addStore(formData);
    setStoreName("");
    setUserName("");
    setPassword("");
    setPhone("");
    setEmail("");
    setStoreImage(null);
    setPreviewImage(null); // Clear preview
    e.target.reset?.();
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
            <form
              onSubmit={handleSubmit}
              className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6"
              encType="multipart/form-data"
            >
              <div>
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                    placeholder="store Name"
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="User Name"
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="pass-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="password"
                    />
                    <span className="fas toggle-password fa-eye-slash"></span>
                  </div>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="phone"
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-4">
                <div className="form-group">
                  <label>Store Image</label>
                  <div className="image-upload">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                    <div className="image-uploads">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/upload.svg"
                        alt="upload icon"
                      />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              {previewImage && (
                <div class="sm:col-span-2 lg:col-span-4">
                  <div class="product-list">
                    <ul class="">
                      <li class="!pl-0">
                        <div class="productviews">
                          <div class="productviewsimg">
                            <img src={previewImage} alt="img" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="sm:col-span-2 lg:col-span-4 flex gap-2">
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
                <a href="/storelist" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStore;
