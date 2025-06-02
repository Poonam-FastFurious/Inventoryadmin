import "./App.css";
import "./assets/css/animate.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/jquery.dataTables.min.css";
import "./assets/css/flowbite.min.css";
import "./assets/css/index.min.css";
import "./assets/css/animate.css";
import "./assets/css/tailwind-dist.css";
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import Dashboard from "./pages/home/Dashboard";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./pages/home/Header";
import Aside from "./pages/home/Aside";
import Addcategory from "./pages/Category/Addcategory";
import CategoryList from "./pages/Category/CategoryList";
import Stockmanagment from "./pages/RawMaterial/Stockmanagment";
import AddBlend from "./pages/Blend/AddBlend";
import BlendList from "./pages/Blend/BlendList";
import CreateProductionBatch from "./pages/Production/CreateProductionBatch";
import ProductionOrder from "./pages/Production/ProductionOrder";
import ProductionHistory from "./pages/Production/ProductionHistory";
import ReadyStock from "./pages/Production/ReadyStock";
import PackagedProductList from "./pages/Packeging/PackedProduct";
import Login from "./pages/authentication/Login";
import AddRawmaterial from "./pages/RawMaterial/AddRawmaterial";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import { useEffect, useState } from "react";
import Loader from "./utils/Loader";
import { Toaster } from "react-hot-toast";
import ListRawmaterial from "./pages/RawMaterial/ListRawmaterial";
import AddCustomer from "./pages/Customer/AddCustomer";
import AddMasterMaterial from "./pages/StoreSetting/AddMasterMaterial";
import MasterRawList from "./pages/StoreSetting/MasterRawList";
import Batch from "./pages/RawMaterial/Batch";
import Composition from "./pages/Production/Composition";
import CreatPackging from "./pages/Packeging/CreatPackging";
import Salelist from "./pages/Sales/Salelist";
import Pos from "./pages/Sales/Pos";
import AddSales from "./pages/Sales/AddSales";
import SaleDetails from "./pages/Sales/SaleDetails";
import Customer from "./pages/Customer/Customer";
import EditCustomer from "./pages/Customer/EditCustomer";
import SupplierList from "./pages/Supplier/SupplierList";
import AddSupliyer from "./pages/Supplier/addSupliyer";
import ProtectedRoute from "./pages/authentication/ProtectedRoute";
import Salereports from "./pages/Reports/Salereports";
import ExpenceList from "./pages/Expences/ExpenceList";
import AddExpence from "./pages/Expences/AddExpence";
import Qutation from "./pages/Qutation/Qutation";
import AddQutation from "./pages/Qutation/AddQutation";
import Salereturn from "./pages/Return/Salereturn";
import Addsalesreturn from "./pages/Return/Addsalesreturn";
import PurchageReturnelist from "./pages/Return/PurchageReturnelist";
import Addpurchagereturn from "./pages/Return/Addpurchagereturn";
import Editmaster from "./pages/StoreSetting/Editmaster";
import AddStore from "./pages/StoreSetting/AddStore";
import Storelist from "./pages/StoreSetting/Storelist";
import EditStore from "./pages/StoreSetting/EditStore";
import AssignMaterialsToStore from "./pages/StoreSetting/Assignematerial";
import Assigne from "./pages/StoreSetting/Assigne";
function AppWrapper() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <Header />
              <Aside />
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/categorylist" element={<CategoryList />} />
          <Route path="/addrawmaterial" element={<AddRawmaterial />} />
          <Route path="/rawmateriallist" element={<ListRawmaterial />} />
          <Route path="/rawmaterialstock" element={<Stockmanagment />} />
          <Route path="/Batch/:name/:id" element={<Batch />} />
          <Route path="/addblend" element={<AddBlend />} />
          <Route path="/blendlist" element={<BlendList />} />
          <Route path="/createproduction" element={<CreateProductionBatch />} />
          <Route path="/productionorders" element={<ProductionOrder />} />
          <Route path="/productionhistory" element={<ProductionHistory />} />
          <Route path="/readystock" element={<ReadyStock />} />
          <Route path="/production-batch/:id" element={<Composition />} />
          <Route path="/createpackagingbatch" element={<CreatPackging />} />
          <Route path="/packagedproducts" element={<PackagedProductList />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customerlist" element={<Customer />} />
          <Route path="/editcustomer/:id" element={<EditCustomer />} />
          <Route path="/supplierlist" element={<SupplierList />} />
          <Route path="/addsupplier" element={<AddSupliyer />} />
          <Route path="/Rawmaterial" element={<MasterRawList />} />
          <Route path="/addmasterraw" element={<AddMasterMaterial />} />
          <Route path="/saleslist" element={<Salelist />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/add-sales" element={<AddSales />} />
          <Route path="/sales-details/:id" element={<SaleDetails />} />
          <Route path="/salesreport" element={<Salereports />} />
          <Route path="/expenselist" element={<ExpenceList />} />
          <Route path="/createexpense" element={<AddExpence />} />
          <Route path="/quotationList" element={<Qutation />} />
          <Route path="/addquotation" element={<AddQutation />} />
          <Route path="/salesreturnlist" element={<Salereturn />} />
          <Route path="/createsalesreturn" element={<Addsalesreturn />} />
          <Route path="/purchasereturnlist" element={<PurchageReturnelist />} />
          <Route path="/createpurchasereturn" element={<Addpurchagereturn />} />
          <Route path="/editmaster/:id" element={<Editmaster />} />
          <Route path="/AddStore" element={<AddStore />} />
          <Route path="/storelist" element={<Storelist />} />
          <Route path="/editstore/:id" element={<EditStore />} />
          <Route path="/asigne" element={<Assigne />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
