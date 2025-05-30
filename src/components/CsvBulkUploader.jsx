import React from "react";
import { Download } from "lucide-react";

const csvSample = `name,code,description
Turmeric Powder,RM001,Fine ground turmeric powder used for color and flavor
Coriander Seeds,RM002,Dried coriander seeds for spice blends
Cumin Seeds,RM003,Whole cumin seeds with earthy aroma
Black Pepper,RM004,Whole black peppercorns for grinding
Cardamom Pods,RM005,Green cardamom pods for sweet and spicy flavor
Cloves,RM006,Dried cloves used for strong aroma and taste
Cinnamon Sticks,RM007,Whole cinnamon sticks for flavoring
Mustard Seeds,RM008,Yellow mustard seeds used in spice mixes
Fennel Seeds,RM009,Sweet fennel seeds for flavoring dishes
Red Chili Powder,RM010,Hot red chili powder for heat and color`;

export default function DownloadCsvSampleButton() {
  const downloadCsvSample = () => {
    const blob = new Blob([csvSample], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "master_material_sample.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={downloadCsvSample}
      className="btn btn-outline flex items-center"
    >
      <Download className="w-5 h-5 mr-2" />
      Download CSV Sample
    </button>
  );
}
