import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Optional modules
import { Navigation, Pagination } from "swiper/modules";
function Pos() {
  return (
    <>
      <div class="page-wrapper ">
        <div class="content">
          <div class="sm:grid sm:grid-cols-1 lg:grid-cols-12 gap-x-6">
            <div class="sm:grid-cols-12 lg:col-span-8 tabs_wrapper">
              <div class="page-header ">
                <div class="page-title">
                  <h4>Categories</h4>
                  <h6>Manage your purchases</h6>
                </div>
              </div>
              <div className="relative">
                <div className="owl-nav mt-1 flex gap-4  my-4 justify-end">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev bg-gray-200 hover:bg-orange-400 px-3 py-1 rounded"
                    id="swiper-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next bg-gray-200  hover:bg-orange-400 px-3 py-1 rounded"
                    id="swiper-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={3}
                  navigation={{
                    prevEl: "#swiper-prev",
                    nextEl: "#swiper-next",
                  }}
                  onSwiper={(swiper) => {
                    // Fix for custom buttons not being attached at first render
                    setTimeout(() => {
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  className="mySwiper    tabs owl-carousel owl-theme owl-product  border-0 "
                >
                  <SwiperSlide>
                    <div className="product-details">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product62.png"
                        alt="Fruits"
                      />
                      <h6>Fruits</h6>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="product-details">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product63.png"
                        alt="Headphones"
                      />
                      <h6>Headphones</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-details">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product63.png"
                        alt="Headphones"
                      />
                      <h6>Headphones</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-details">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product63.png"
                        alt="Headphones"
                      />
                      <h6>Headphones</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-details">
                      <img
                        src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product64.png"
                        alt="Accessories"
                      />
                      <h6>Accessories</h6>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="tabs_container" id="myTabContent">
                <div class="tab_content active" id="fruits">
                  <div>
                    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                      <div class="flex">
                        <div class="productset flex-auto active">
                          <div class="productsetimg">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product54.jpg"
                              alt="img"
                            />
                            <h6>Qty: 5.00</h6>
                            <div class="check-product">
                              <i class="fa fa-check"></i>
                            </div>
                          </div>
                          <div class="productsetcontent">
                            <h5>Spices</h5>
                            <h4>Garam masala</h4>
                            <h6>150.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:grid-cols-12 lg:col-span-4">
              <div class="order-list">
                <div class="orderid">
                  <h4>Order List</h4>
                  <h5>Transaction id : #65565</h5>
                </div>
                <div class="actionproducts">
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="deletebg confirm-text"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete-2.svg"
                          alt="img"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        class="dropset"
                      >
                        <img
                          src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/ellipise1.svg"
                          alt="img"
                        />
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <a href="#" class="dropdown-item">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown-item">
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown-item">
                            Something Elses
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card card-order">
                <div class="card-body">
                  <div class="sm:grid sm:grid-cols-1">
                    <div>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-adds"
                        data-bs-toggle="modal"
                        data-bs-target="#create"
                      >
                        <i class="fa fa-plus mr-2"></i>Add Customer
                      </a>
                    </div>
                    <div>
                      <div class="select-split ">
                        <div class="select-group !w-full">
                          <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                            <option>Walk-in Customer</option>
                            <option>Chris Moris</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="select-split">
                        <div class="select-group !w-full">
                          <select className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                            <option>Product </option>
                            <option>Barcode</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* <div>
                      <div class="text-right">
                        <a class="btn btn-scanner-set">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/scanner1.svg"
                            alt="img"
                            class="mr-2"
                          />
                          Scan bardcode
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div class="split-card"></div>
                <div class="card-body pt-0">
                  <div class="totalitem">
                    <h4>Total items : 4</h4>
                    <a href="javascript:void(0);">Clear all</a>
                  </div>
                  <div class="product-table">
                    <ul class="product-lists">
                      <li>
                        <div class="productimg">
                          <div class="productimgs">
                            <img
                              src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/product/product30.jpg"
                              alt="img"
                            />
                          </div>
                          <div class="productcontet">
                            <h4>
                              Pineapple
                              <a
                                href="javascript:void(0);"
                                class="ml-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                              >
                                <img
                                  src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit-5.svg"
                                  alt="img"
                                />
                              </a>
                            </h4>
                            <div class="productlinkset">
                              <h5>PT001</h5>
                            </div>
                            <div class="increment-decrement">
                              <div class="input-groups">
                                <input
                                  type="button"
                                  value="-"
                                  class="button-minus dec button"
                                />
                                <input
                                  type="text"
                                  name="child"
                                  value="0"
                                  class="quantity-field"
                                />
                                <input
                                  type="button"
                                  value="+"
                                  class="button-plus inc button "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>3000.00 </li>
                      <li>
                        <a class="confirm-text" href="javascript:void(0);">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/delete-2.svg"
                            alt="img"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="split-card"></div>
                <div class="card-body pt-0 pb-2">
                  <div class="setvalue">
                    <ul>
                      <li>
                        <h5>Subtotal </h5>
                        <h6>55.00$</h6>
                      </li>
                      <li>
                        <h5>Tax </h5>
                        <h6>5.00$</h6>
                      </li>
                      <li class="total-value">
                        <h5>Total </h5>
                        <h6>60.00$</h6>
                      </li>
                    </ul>
                  </div>
                  <div class="setvaluecash">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" class="paymentmethod">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/cash.svg"
                            alt="img"
                            class="mr-2"
                          />
                          Cash
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="paymentmethod">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/debitcard.svg"
                            alt="img"
                            class="mr-2"
                          />
                          Debit
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="paymentmethod">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/scan.svg"
                            alt="img"
                            class="mr-2"
                          />
                          Scan
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-totallabel">
                    <h5>Checkout</h5>
                    <h6>60.00$</h6>
                  </div>
                  <div class="btn-pos">
                    <ul>
                      <li>
                        <a class="btn">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/pause1.svg"
                            alt="img"
                            class="mr-1"
                          />
                          Hold
                        </a>
                      </li>
                      <li>
                        <a class="btn">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/edit-6.svg"
                            alt="img"
                            class="mr-1"
                          />
                          Quotation
                        </a>
                      </li>
                      <li>
                        <a class="btn">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/trash12.svg"
                            alt="img"
                            class="mr-1"
                          />
                          Void
                        </a>
                      </li>
                      <li>
                        <a class="btn">
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/wallet1.svg"
                            alt="img"
                            class="mr-1"
                          />
                          Payment
                        </a>
                      </li>
                      <li>
                        <a
                          class="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#recents"
                        >
                          <img
                            src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/transcation.svg"
                            alt="img"
                            class="mr-1"
                          />
                          Transaction
                        </a>
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

export default Pos;
