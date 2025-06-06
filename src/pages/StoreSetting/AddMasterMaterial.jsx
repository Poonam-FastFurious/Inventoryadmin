import { useState } from "react";
import useMasterMaterialStore from "../../Store/useSettingStore";
import { useNavigate } from "react-router-dom";
import { Download, Upload } from "lucide-react";
import Papa from "papaparse";
import toast from "react-hot-toast";
import DownloadCsvSampleButton from "../../components/CsvBulkUploader";
function AddMasterMaterial() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { addMasterMaterial, addMasterMaterialsBulk } =
    useMasterMaterialStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !code) {
      alert("Please fill out all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await addMasterMaterial({ name, code, description });
      setName("");
      setCode("");
      setDescription("");
      navigate("/Rawmaterial");
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        if (results.errors.length) {
          alert("Error parsing CSV file");
          console.error(results.errors);
          return;
        }

        const validRows = results.data.filter((row) => row.name && row.code);
        if (validRows.length === 0) {
          alert("CSV must have at least one valid row with 'name' and 'code'");
          return;
        }

        try {
          await addMasterMaterialsBulk(validRows);
          // Navigate after success
          navigate("/Rawmaterial");
        } catch (err) {
          // Optional: handle error here if not handled inside store
          toast.error("Bulk upload failed", err);
        }
      },
    });
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Add Master Material</h4>
            <h6>Create a new master material</h6>
          </div>
          <div className="flex gap-3">
            <DownloadCsvSampleButton />
            <label className="btn bg-blue-100 text-blue-700 flex items-center cursor-pointer">
              <Upload className="w-5 h-5 mr-2" />
              Bulk Upload
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
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

              <div className="flex gap-4 items-center sm:col-span-2">
                <button
                  type="submit"
                  className="btn btn-submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <a href="/master-material-list" className="btn btn-cancel">
                  Cancel
                </a>

                {/* Bulk Upload Button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMasterMaterial;
