import { Link, useNavigate } from "react-router-dom";
import SidebarMenuLogic from "./SidebarMenuLogic";
import { LogOut } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: "dashboard.svg",
    link: "/",
  },
  {
    title: "Raw Materials",
    icon: "dashboard.svg",
    submenu: [
      { title: "Raw Material List", link: "/rawmateriallist" },
      { title: "Add Raw Material", link: "/addrawmaterial" },
      { title: "Stock Management", link: "/rawmaterialstock" },
    ],
  },
  {
    title: "Blends (Formula)",
    icon: "dashboard.svg",
    submenu: [
      { title: "Blend List", link: "/blendlist" },
      { title: "Add New Formula", link: "/addblend" },
    ],
  },
  {
    title: "Production",
    icon: "dashboard.svg",
    submenu: [
      { title: "Production Orders", link: "/productionorders" },
      { title: "Create Production Batch", link: "/createproduction" },
      { title: "Ready  (Bulk Stock)", link: "/readystock" }, // ← NEW
      { title: "Production History", link: "/productionhistory" },
    ],
  },
  {
    title: "Packaging",
    icon: "product.svg", // Add an icon relevant to packaging
    submenu: [
      { title: "Create Packaging Batch", link: "/createpackagingbatch" }, // Packaging process starts here
      { title: "Packaged Products", link: "/packagedproducts" }, // Finished and packaged products list
    ],
  },
  // {
  //   title: "Product",
  //   icon: "product.svg",
  //   submenu: [
  //     { title: "Product List", link: "/product" },
  //     { title: "Add Product", link: "/addproduct" },
  //     { title: "Category List", link: "/categorylist" },
  //     { title: "Add Category", link: "/addcategory" },
  //     { title: "Sub Category List", link: "/subcategorylist" },
  //     { title: "Add Sub Category", link: "/subaddcategory" },
  //     { title: "Brand List", link: "/brandlist" },
  //     { title: "Add Brand", link: "/addbrand" },
  //     { title: "Import Products", link: "/importproduct" },
  //     { title: "Print Barcode", link: "/barcode" },
  //   ],
  // },
  {
    title: "Sales",
    icon: "sales1.svg",
    submenu: [
      { title: "Sales List", link: "/saleslist" },
      { title: "POS", link: "/pos" },
      { title: "New Sales", link: "/add-sales" },
    ],
  },
  // {
  //   title: "Purchase",
  //   icon: "purchase1.svg",
  //   submenu: [
  //     { title: "Purchase List", link: "/purchaselist" },
  //     { title: "Add Purchase", link: "/addpurchase" },
  //     { title: "Import Purchase", link: "/importpurchase" },
  //   ],
  // },
  {
    title: "Expense",
    icon: "expense1.svg",
    submenu: [
      { title: "Expense List", link: "/expenselist" },
      { title: "Add Expense", link: "/createexpense" },
     
    ],
  },
  {
    title: "Quotation",
    icon: "quotation1.svg",
    submenu: [
      { title: "Quotation List", link: "/quotationList" },
      { title: "Add Quotation", link: "/addquotation" },
    ],
  },
  // {
  //   title: "Transfer",
  //   icon: "transfer1.svg",
  //   submenu: [
  //     { title: "Transfer List", link: "/transferlist" },
  //     { title: "Add Transfer", link: "/addtransfer" },
  //     { title: "Import Transfer", link: "/importtransfer" },
  //   ],
  // },
  {
    title: "Return",
    icon: "return1.svg",
    submenu: [
      { title: "Sales Return List", link: "/salesreturnlist" },
      { title: "Add Sales Return", link: "/createsalesreturn" },
      { title: "Purchase Return List", link: "/purchasereturnlist" },
      { title: "Add Purchase Return", link: "/createpurchasereturn" },
    ],
  },
  {
    title: "People",
    icon: "users1.svg",
    submenu: [
      { title: "Customer List", link: "/customerlist" },
      { title: "Add Customer", link: "/addcustomer" },
      { title: "Supplier List", link: "/supplierlist" },
      { title: "Add Supplier", link: "/addsupplier" },
    ],
  },
  {
    title: "Places",
    icon: "places.svg",
    submenu: [
      { title: "New Country", link: "/newcountry" },
      { title: "Countries List", link: "/countrieslist" },
      { title: "New State", link: "/newstate" },
      { title: "State List", link: "/statelist" },
    ],
  },
  {
    title: "Report",
    icon: "time.svg",
    submenu: [
      { title: "Purchase Order Report", link: "/purchaseorderreport" },
      { title: "Inventory Report", link: "/inventoryreport" },
      { title: "Sales Report", link: "/salesreport" },
      { title: "Invoice Report", link: "/invoicereport" },
      { title: "Purchase Report", link: "/purchasereport" },
      { title: "Supplier Report", link: "/supplierreport" },
      { title: "Customer Report", link: "/customerreport" },
    ],
  },
  {
    title: "Users",
    icon: "users1.svg",
    submenu: [
      { title: "New User", link: "/newuser" },
      { title: "Users List", link: "/userlists" },
    ],
  },
  {
    title: "Store Settings",
    icon: "settings.svg",
    submenu: [
      { title: "Raw Material", link: "/Rawmaterial" },

      { title: "Tax Rates", link: "/taxrates" },
    ],
  },
  {
    title: "Settings",
    icon: "settings.svg",
    submenu: [
      { title: "General Settings", link: "/generalsettings" },
      { title: "Email Settings", link: "/emailsettings" },
      { title: "Payment Settings", link: "/paymentsettings" },
      { title: "Group Permissions", link: "/grouppermissions" },
      { title: "Tax Rates", link: "/taxrates" },
    ],
  },
];

const Aside = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="sidebar " id="sidebar">
      <div className="sidebar-inner   overflow-y-auto">
        <div id="sidebar-menu" className="sidebar-menu">
          <SidebarMenuLogic />
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={item.submenu ? "submenu" : "active"}>
                <Link to={item.link}>
                  <img
                    src={`https://dreamspos.dreamstechnologies.com/react/template/assets/img/icons/${item.icon}`}
                    alt="icon"
                  />
                  <span> {item.title} </span>
                  {item.submenu && <span className="menu-arrow"></span>}
                </Link>
                {item.submenu && (
                  <ul>
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex}>
                        <Link to={subitem.link}>{subitem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
          >
            <LogOut className="w-5 h-5" />

            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
