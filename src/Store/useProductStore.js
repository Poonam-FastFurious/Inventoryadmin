/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
import { Baseurl } from "../Config";

const useProductStore = create((set, get) => ({
  rawMaterials: [],
  blendFormulas: [],
  productionBatches: [],
  packedProduct: [],
  sales: [],
  saleDetail: null,
  isPackedProductFetched: false,
  loading: false,
  // ✅ Get All Raw Materials
  getAllRawMaterials: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(Baseurl + "raw/all"); // adjust API endpoint as needed
      set({ rawMaterials: response.data.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  // ✅ Add Raw Material
  addRawMaterial: async (rawMaterialData) => {
    set({ loading: true });
    try {
      const response = await axios.post(Baseurl + "raw/add", rawMaterialData, {
        headers: {
          "Content-Type": "application/json", // ✅ sending JSON as expected by controller
        },
      });

      set((state) => ({
        rawMaterials: [...state.rawMaterials, response.data.data],
        loading: false,
      }));

      toast.success("Raw material added successfully");
      return response.data.data;
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to add raw material"
      );
    }
  },

  deleteRawMaterial: async (id) => {
    if (!id) return toast.error("Raw material ID is required");

    set({ loading: true });
    try {
      await axios.delete(`${Baseurl}raw/delete?id=${id}`);
      set((state) => ({
        rawMaterials: state.rawMaterials.filter((item) => item._id !== id),
        loading: false,
      }));
      toast.success("Raw material deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to delete raw material"
      );
    }
  },

  getRawMaterialHistory: async (masterId, type = "") => {
    if (!masterId) return toast.error("Master ID is required");

    set({ loading: true });
    try {
      const response = await axios.get(`${Baseurl}raw/history`, {
        params: { masterId, type },
      });

      set({ loading: false });
      return response.data.data; // This is the raw material history array
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to fetch raw material history"
      );
    }
  },

  // ✅ Add Blend Formula

  addBlendFormula: async (blendFormulaData) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        Baseurl + "formula/add",
        blendFormulaData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Add the new formula to the store's list
      set((state) => ({
        blendFormulas: [...state.blendFormulas, response.data.data],
        loading: false,
      }));

      return response.data.data;
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to add blend formula"
      );
    }
  },
  getAllBlendFormulas: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(Baseurl + "formula/blend-formulas"); // Adjust endpoint as needed
      set({ blendFormulas: response.data.data.formulas, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to fetch blend formulas"
      );
    }
  },
  // Inside your useProductStore definition
  deleteBlendFormula: async (id) => {
    try {
      const response = await axios.delete(`${Baseurl}formula/delete?id=${id}`);

      // Remove the deleted formula from state
      set((state) => ({
        blendFormulas: state.blendFormulas.filter(
          (formula) => formula._id !== id
        ),
      }));

      toast.success("Blend formula deleted successfully");
    } catch (error) {
      console.error("❌ Error deleting blend formula:", error);
      toast.error(
        error.response?.data?.message || "Failed to delete blend formula"
      );
    }
  },

  createProductionBatch: async (data) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${Baseurl}production/create`, data, {
        headers: { "Content-Type": "application/json" },
      });

      // Immediately add the new batch to the productionBatches state
      set((state) => ({
        productionBatches: [...state.productionBatches, response.data.data],
        loading: false,
      }));

      toast.success("Batch created successfully");
      return response.data.data;
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to create production batch"
      );
    }
  },
  getAllProductionBatches: async (status = "") => {
    set({ loading: true, productionBatches: [] }); // Clear previous batches before fetching new data
    try {
      // Append the status filter if provided
      const url = status
        ? `${Baseurl}production/all?status=${status}` // Add status filter
        : `${Baseurl}production/all`; // No filter for all batches

      const response = await axios.get(url); // Adjust API endpoint as needed
      set({ productionBatches: response.data.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  updateProductionBatchStatus: async (batchId, status) => {
    set({ loading: true });
    try {
      const response = await axios.patch(
        `${Baseurl}production/update`,
        {
          batchId,
          status,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Optional: Refresh production batches after update
      await useProductStore.getState().getAllProductionBatches("pending");

      toast.success(response.data.message || "Batch updated successfully");
      set({ loading: false });
      return response.data.batch;
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to update batch status"
      );
    }
  },
  getProductionBatchDetails: async (batchId) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${Baseurl}production/details/${batchId}`
      );
      set({ loading: false });
      return response.data.data;
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to fetch batch details"
      );
    }
  },

  getAllPackedProducts: async () => {
    const state = useProductStore.getState();
    if (state.isPackedProductFetched) return; // already fetched, no need to fetch again

    set({ loading: true });
    try {
      const response = await axios.get(`${Baseurl}packging/all`);
      set({
        packedProduct: response.data.data,
        loading: false,
        isPackedProductFetched: true, // mark as fetched
      });
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to fetch packaged products"
      );
    }
  },
  // Add this helper function to your store:
  forceRefreshPackedProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${Baseurl}packging/all`);
      set({
        packedProduct: response.data.data,
        loading: false,
        isPackedProductFetched: true, // still keep this if needed elsewhere
      });
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to fetch packaged products"
      );
    }
  },

  createPackagingEntry: async (packagingData) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        `${Baseurl}packging/create`,
        packagingData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const newEntry = response.data.data;

      set((state) => ({
        packedProduct: [newEntry, ...state.packedProduct],
        loading: false,
      }));

      toast.success("Packaging created successfully");
      return newEntry;
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response?.data?.message || "Failed to create packaging"
      );
    }
  },

  getAllSales: async () => {
    const state = get();
    if (state.isSalesFetched) return;

    set({ loading: true });
    try {
      const response = await axios.get(`${Baseurl}sales/all`);
      set({
        sales: response.data.data,
        isSalesFetched: true,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to fetch sales");
    }
  },

  createSaleEntry: async (saleData) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${Baseurl}sales/create`, saleData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newSale = response.data.data;

      // update sales list
      set((state) => ({
        sales: [newSale, ...state.sales],
        loading: false,
      }));

      toast.success("Sale created successfully");

      // ✅ Refresh packedProduct after sale (because stock reduced)
      await get().forceRefreshPackedProducts(); // <-- re-fetch updated stock

      return newSale;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to create sale");
    }
  },
  getSaleById: async (id) => {
  set({ loading: true });
  try {
    const response = await axios.get(`${Baseurl}sales/${id}`);
    set({ saleDetail: response.data.data, loading: false });
  } catch (error) {
    set({ loading: false });
    toast.error(error.response?.data?.message || "Failed to fetch sale details");
  }
},
}));
export default useProductStore;
