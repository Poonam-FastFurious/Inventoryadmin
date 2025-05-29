import React from 'react'

function Invoice() {
  return (
    <div>
       <div class="fixed inset-0 z-[999999]  flex items-center justify-center bg-gray-700 bg-opacity-50 pointer-events-auto ">

        <div class="bg-white w-full max-w-6xl rounded-lg shadow-lg overflow-y-auto max-h-[100vh]">
          <div class="flex items-center justify-between p-6 border-b">
            <h4 class="text-xl font-semibold">Sales Detail</h4>
            <div class="flex items-center gap-3">
              <a href="#" title="Pdf">
                <img src="https://dreamspos.dreamstechnologies.com/php/template/assets/img/icons/pdf.svg" alt="PDF" class="w-5 h-5" />
              </a>
              <a href="#" title="Print">
                <img
                  src="https://dreamspos.dreamstechnologies.com/php/template/assets/img/icons/printer.svg"
                  alt="Print"
                  class="w-5 h-5"
                />
              </a>
              <a
                href="online-orders.php"
                class="btn btn-secondary flex items-center gap-2 text-sm text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19L5 12L12 5" />
                </svg>
                Back to Sales
              </a>
            </div>
          </div>

          <form action="online-orders.php">
            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h6 class="text-gray-600 font-semibold mb-2">
                    Customer Info
                  </h6>
                  <h4 class="text-lg font-bold">Carl Evans</h4>
                  <p>3103 Trainer Avenue Peoria, IL 61602</p>
                  <p>
                    Email: <span>carlevans241@example.com</span>
                  </p>
                  <p>
                    Phone: <span>+1 987 471 6589</span>
                  </p>
                </div>
                <div>
                  <h6 class="text-gray-600 font-semibold mb-2">Company Info</h6>
                  <h4 class="text-lg font-bold">DGT</h4>
                  <p>2077 Chicago Avenue Orosi, CA 93647</p>
                  <p>
                    Email: <span>admin@example.com</span>
                  </p>
                  <p>
                    Phone: <span>+1 893 174 0385</span>
                  </p>
                </div>
                <div>
                  <h6 class="text-gray-600 font-semibold mb-2">Invoice Info</h6>
                  <p>
                    Reference:{" "}
                    <span class="text-blue-600 font-medium">#SL0101</span>
                  </p>
                  <p>
                    Date: <span class="text-gray-700">Dec 24, 2024</span>
                  </p>
                  <p>
                    Status:{" "}
                    <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </span>
                  </p>
                  <p>
                    Payment Status:
                    <span class="inline-flex items-center text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                      <svg class="w-2 h-2 mr-1" fill="currentColor">
                        <circle cx="5" cy="5" r="5" />
                      </svg>
                      Paid
                    </span>
                  </p>
                </div>
              </div>

              <h5 class="text-lg font-semibold mb-3">Order Summary</h5>
              <div class="overflow-x-auto mb-6">
                <table class="min-w-full text-sm text-left border">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="p-3 border">Product</th>
                      <th class="p-3 border">Purchase Price($)</th>
                      <th class="p-3 border">Discount($)</th>
                      <th class="p-3 border">Tax(%)</th>
                      <th class="p-3 border">Tax Amount($)</th>
                      <th class="p-3 border">Unit Cost($)</th>
                      <th class="p-3 border">Total Cost($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="p-3 flex items-center gap-2">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/php/template/assets/img/products/stock-img-02.png"
                          class="w-10 h-10 rounded"
                          alt="product"
                        />
                        Nike Jordan
                      </td>
                      <td class="p-3">2000</td>
                      <td class="p-3">500</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">1500</td>
                    </tr>
                    <tr class="border-b">
                      <td class="p-3 flex items-center gap-2">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/php/template/assets/img/products/stock-img-03.png"
                          class="w-10 h-10 rounded"
                          alt="product"
                        />
                        Apple Series 5 Watch
                      </td>
                      <td class="p-3">3000</td>
                      <td class="p-3">400</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">1700</td>
                    </tr>
                    <tr>
                      <td class="p-3 flex items-center gap-2">
                        <img
                          src="https://dreamspos.dreamstechnologies.com/php/template/assets/img/products/stock-img-05.png"
                          class="w-10 h-10 rounded"
                          alt="product"
                        />
                        Lobar Handy
                      </td>
                      <td class="p-3">2500</td>
                      <td class="p-3">500</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">0.00</td>
                      <td class="p-3">2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="flex justify-end mb-6">
                <div class="w-full max-w-md">
                  <ul class="border rounded divide-y text-sm">
                    <li class="flex justify-between px-4 py-2">
                      <span class="font-medium">Order Tax</span>
                      <span>$ 0.00</span>
                    </li>
                    <li class="flex justify-between px-4 py-2">
                      <span class="font-medium">Discount</span>
                      <span>$ 0.00</span>
                    </li>
                    <li class="flex justify-between px-4 py-2">
                      <span class="font-medium">Grand Total</span>
                      <span>$ 5200.00</span>
                    </li>
                    <li class="flex justify-between px-4 py-2">
                      <span class="font-medium">Paid</span>
                      <span>$ 5200.00</span>
                    </li>
                    <li class="flex justify-between px-4 py-2">
                      <span class="font-medium">Due</span>
                      <span>$ 0.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="flex justify-end items-center gap-3 px-6 py-4 border-t">
              <button
                type="button"
                class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Invoice
