import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProductStore from "../../Store/useProductStore";

function SaleDetails() {
  const { id } = useParams(); // get sale id from URL
  const { saleDetail, getSaleById, loading } = useProductStore();

  useEffect(() => {
    if (id) {
      getSaleById(id);
    }
  }, [id, getSaleById]);

  if (loading) return <p>Loading...</p>;
  if (!saleDetail) return <p>No sale details found</p>;
  const infoStyle = "text-[14px] text-black font-normal";
  const headingStyle =
    "text-[14px] text-[#7367F0] font-semibold leading-[35px]";
  const tdStyle = "p-[5px] pb-[20px] align-top text-left";
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Sale Details</h4>
              <h6>View sale details</h6>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="#">
                    <img
                      src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/printer.svg"
                      alt="img"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-sales-split">
                <h2>Sale Detail : SL0101</h2>
              </div>
              <div className="max-w-[1600px] w-full overflow-auto my-[15px] mx-auto p-0 text-[14px] leading-[24px] text-[#555] invoice-box table-height">
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  className="w-full leading-inherit text-left"
                >
                  <tbody>
                    <tr className="top">
                      <td colSpan="6" className="p-[5px] align-top">
                        <table className="w-full leading-inherit text-left">
                          <tbody>
                            <tr>
                              <td className={tdStyle}>
                                <div className="">
                                  <span className={headingStyle}>
                                    Customer Info
                                  </span>
                                </div>
                                <div className={infoStyle}>
                                  {saleDetail.customer.customerName}
                                </div>
                                <div className={infoStyle}>
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="740315181f591d1a59170107001b19110634110c15190418115a171b19"
                                  >
                                    {saleDetail.customer.email}
                                  </a>
                                </div>
                                <div className={infoStyle}>
                                  
                                  {saleDetail.customer.phone}
                                </div>
                                <div className={infoStyle}>
                              
                                  {saleDetail.customer.street}
                                </div>
                              </td>

                              <td className={tdStyle}>
                                <div className="">
                                  <span className={headingStyle}>
                                    Company Info
                                  </span>
                                </div>
                                <div className={infoStyle}>Sanyukti Foods</div>
                                <div className={infoStyle}>
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="1170757c787f517469707c617d743f727e7c"
                                  >
                                    sanyuktifoods@gmail.com
                                  </a>
                                </div>
                                <div className={infoStyle}>98765643210</div>
                                <div className={infoStyle}>Noida sector 62</div>
                              </td>

                              <td className={tdStyle}>
                                <div className="">
                                  <span className={headingStyle}>
                                    Invoice Info
                                  </span>
                                </div>
                                <div className={infoStyle}>Reference</div>
                                <div className={infoStyle}>Payment Status</div>
                                <div className={infoStyle}>Status</div>
                              </td>

                              <td className="p-[5px]  align-top text-right">
                                <div className="mb-[25px]  invisible">
                                  <span className={headingStyle}>dasdsasd</span>
                                </div>
                                <div className={infoStyle}>SL0101</div>
                                <div className={infoStyle}>Paid</div>
                                <div className="text-[14px] font-normal">
                                  <span
                                    className={`badges ${
                                      saleDetail.status === "Complete"
                                        ? "bg-lightgreen"
                                        : "bg-lightred"
                                    }`}
                                  >
                                    {saleDetail.status}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr className="heading bg-[#F3F2F7]">
                      {[
                        "Product Name",
                        "QTY",
                        "Price",
                        "Discount",
                        "TAX",
                        "Subtotal",
                      ].map((heading, index) => (
                        <td
                          key={index}
                          className="py-[10px] align-middle font-semibold text-[#5E5873] text-[14px]"
                        >
                          {heading}
                        </td>
                      ))}
                    </tr>

                    {saleDetail.items?.map((item, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #E9ECEF" }}>
                        <td
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "10px",
                          }}
                        >
                          {item.product?.formulaName}
                        </td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                        <td>{item.discount || 0}</td>
                        <td>{item.tax || 0}</td>
                        <td>{item.subtotal.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="sm:grid sm:grid-cols-6 lg:grid-cols-4 gap-x-6">
                <div>
                  <div className="form-group">
                    <label>Order Tax</label>
                    <input
                      type="text"
                      className=" readOnly "
                      value={saleDetail.orderTax}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Discount</label>
                    <input
                      type="text"
                      className=" readOnly"
                      value={saleDetail.discount}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <label>Shipping</label>
                    <input
                      type="text"
                      value={saleDetail.shipping}
                      className=" readnly"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 gap-x-6">
                <div>
                  <div className="total-order w-full max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Order Tax</h4>
                        <h5>₹ {saleDetail.orderTax}</h5>
                      </li>
                      <li>
                        <h4>Discount </h4>
                        <h5>₹{saleDetail.discount} </h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="total-order w-full max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Shipping</h4>
                        <h5>₹ {saleDetail.shipping}</h5>
                      </li>
                      <li className="total">
                        <h4>Grand Total</h4>
                        <h5>₹ {saleDetail.grandTotal}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleDetails;
