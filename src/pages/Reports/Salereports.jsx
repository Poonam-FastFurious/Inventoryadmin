import { AlertTriangle, BadgeIndianRupee, Clock, Wallet } from "lucide-react";
import useMasterMaterialStore from "../../Store/useSettingStore";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
const stats = [
  {
    label: "Total Amount",
    value: "307,144.00",
    borderColors: "!border-red-300",
  },
  {
    label: "Total Paid",
    value: "4,385.00",
    borderColors: "!border-[#155eef]",
  },
  {
    label: "Total Unpaid",
    value: "385,656.50",
    borderColors: "!border-[#e04f16]",
  },
  {
    label: "Overdue",
    value: "400.00",
    borderColors: "!border-[#ff0000]",
  },
];

const iconMap = {
  "Total Amount": <BadgeIndianRupee className="text-green-500" />,
  "Total Paid": <Wallet className="text-blue-500" />,
  "Total Unpaid": <Clock className="text-orange-500" />,
  Overdue: <AlertTriangle className="text-red-500" />,
};
function Salereports() {
  const { fetchMasterMaterials, masterMaterials } = useMasterMaterialStore();
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showPicker, setShowPicker] = useState(false);
  const refOne = useRef(null);

  // Close calendar if clicked outside
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setShowPicker(false);
    }
  };
  useEffect(() => {
    fetchMasterMaterials();
  }, [fetchMasterMaterials]);

  return (
    <>
      <div class="page-wrapper">
        <div class="content">
          <div class="page-header">
            <div class="page-title">
              <h4>Sales Report</h4>
              <h6>Manage your Sales Report</h6>
            </div>
          </div>
          <div class="grid media-min-w-md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-x-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <div
                  className={`dash-widget dash${index} ${stat.borderColors} border `}
                >
                  <div className="dash-widgetimg">
                    <span>{iconMap[stat.label] || <BadgeIndianRupee />}</span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      ₹
                      <span
                        className="counters"
                        data-count={stat.value.replace(/,/g, "")}
                      >
                        {stat.value}
                      </span>
                    </h5>
                    <h6>{stat.label}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Filter Bar Above Table or Stats */}
          <form className="bg-white p-4 rounded-md shadow mb-6">
            <div className="grid media-min-w-md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 items-end">
              {/* From Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <input
                  readOnly
                  value={`${format(
                    range[0].startDate,
                    "dd/MM/yyyy"
                  )} - ${format(range[0].endDate, "dd/MM/yyyy")}`}
                  onClick={() => setShowPicker(!showPicker)}
                  className="form-control border px-3 py-2 rounded w-full cursor-pointer"
                />

                {showPicker && (
                  <div className="absolute z-50 mt-2">
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => {
                        setRange([item.selection]);
                        setShowPicker(false); // hide picker after selection
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                    />
                  </div>
                )}
              </div>

              {/* To Date */}

              {/* Store Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Store
                </label>
                <select
                  name="store"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option>Electro Mart</option>
                  {/* More stores */}
                </select>
              </div>

              {/* Product Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Products
                </label>
                <select
                  name="product"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option>Lenovo IdeaPad 3</option>
                  {/* More products */}
                </select>
              </div>

              {/* Generate Report Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
                >
                  Generate Report
                </button>
              </div>
            </div>
          </form>

          <div class="card">
            <div class="card-body">
              <div class="table-top">
                <div class="search-set">
                  <div class="search-path">
                    <a class="btn btn-filter" id="filter_search">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/filter.svg"
                        alt="img"
                      />
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/closes.svg"
                          alt="img"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="search-input">
                    <a class="btn btn-searchset">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/search-white.svg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div class="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/pdf.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/excel.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/printer.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table datanew">
                  <thead>
                    <tr>
                      <th>
                        <label class="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span class="checkmarks"></span>
                        </label>
                      </th>
                      <th>Product Name</th>
                      <th>SKU</th>
                      <th> Category</th>
                      <th>Brand</th>
                      <th>Sold amount</th>
                      <th>Sold qty</th>
                      <th>Instock qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterMaterials.map((pro, index) => (
                      <tr key={index}>
                        <td>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td class="productimgname">
                          <a href="javascript:void(0);">{pro.name}</a>
                        </td>
                        <td>PT001</td>
                        <td>Computer</td>
                        <td>N/D</td>
                        <td>{pro.currentStock} kg</td>
                        <td>1</td>
                        <td>{pro.currentStock} kg</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Salereports;
