import { create } from "zustand";
import axios from "axios";
import { Baseurl } from "../Config";
import { toast } from "react-hot-toast"; // Import toast

// Define the Zustand store for managing master materials
const useMasterMaterialStore = create((set) => ({
  masterMaterials: [],
  stores: [],
  totalCount: 0,
  loading: false,
  error: null,

  fetchMasterMaterials: async (page, limit) => {
    set({ loading: true, error: null });
    try {
      const params = {};

      // Sirf tabhi page aur limit bhejo jab dono defined hain
      if (page !== undefined && limit !== undefined) {
        params.page = page;
        params.limit = limit;
      }

      const response = await axios.get(Baseurl + `rawmaterialmaster/all`, {
        params,
      });

      set({
        masterMaterials: response.data.data.rawMaterials,
        totalCount: response.data.data.totalCount,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "An error occurred",
        loading: false,
      });
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },

  // Add new master material
  addMasterMaterial: async (formData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        Baseurl + `rawmaterialmaster/add`,
        formData
      );
      set((state) => ({
        masterMaterials: [response.data.data, ...state.masterMaterials],
        loading: false,
      }));
      toast.success("Master Material added successfully"); // Show success message
    } catch (error) {
      set({
        error: error.response?.data?.message || "An error occurred",
        loading: false,
      });
      toast.error(error.response?.data?.message || "An error occurred"); // Show error message
    }
  },
  addMasterMaterialsBulk: async (materialsArray) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        Baseurl + `rawmaterialmaster/add/bulk`,
        materialsArray
      );

      // After bulk add/update, fetch all or update local state based on response
      // You can either refetch or update the store like below:

      // If response contains updated list, set directly:
      set({ masterMaterials: response.data.data, loading: false });

      // Or just fetch fresh data after bulk add:
      await useMasterMaterialStore.getState().fetchMasterMaterials();

      toast.success("Bulk master materials added/updated successfully");
    } catch (error) {
      set({
        error: error.response?.data?.message || "An error occurred",
        loading: false,
      });
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },

  // Edit master material
  editMasterMaterial: async (id, formData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.patch(
        `${Baseurl}rawmaterialmaster/${id}`,
        formData
      );
      set((state) => ({
        masterMaterials: state.masterMaterials.map((item) =>
          item._id === id ? response.data.data : item
        ),
        loading: false,
      }));
      toast.success("Master Material updated successfully"); // Show success message
    } catch (error) {
      set({
        error: error.response?.data?.message || "An error occurred",
        loading: false,
      });
      toast.error(error.response?.data?.message || "An error occurred"); // Show error message
    }
  },

  // Delete master material
  deleteMasterMaterial: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(Baseurl + `rawmaterialmaster/delete?id=${id}`);
      set((state) => ({
        masterMaterials: state.masterMaterials.filter(
          (item) => item._id !== id
        ),
        loading: false,
      }));
      toast.success("Master Material deleted successfully"); // Show success message
    } catch (error) {
      set({
        error: error.response?.data?.message || "An error occurred",
        loading: false,
      });
      toast.error(error.response?.data?.message || "An error occurred"); // Show error message
    }
  },
  getMasterMaterialById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${Baseurl}rawmaterialmaster/single/${id}`
      );
      set({ loading: false });
      return response.data.data; // return the fetched data
    } catch (error) {
      set({
        error: error.response?.data?.message || "An error occurred",
        loading: false,
      });
      toast.error(error.response?.data?.message || "An error occurred");
      return null;
    }
  },

  fetchStores: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${Baseurl}store/all`);
      set({ stores: response.data.data, loading: false });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch stores";
      set({ error: errorMessage, loading: false });
      toast.error(errorMessage);
    }
  },

  addStore: async (formData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${Baseurl}store/add`, formData);

      set((state) => ({
        stores: [response.data.data, ...state.stores],
        loading: false,
      }));
      toast.success("Store added successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to add store";
      set({ error: errorMessage, loading: false });
      toast.error(errorMessage);
    }
  },
  toggleStoreStatus: async (storeId) => {
    set({ error: null });
    try {
      const response = await axios.patch(
        `${Baseurl}store/toggle-status/${storeId}`
      );
      set((state) => ({
        stores: state.stores.map((store) =>
          store._id === storeId
            ? { ...store, active: response.data.active }
            : store
        ),
      }));
      toast.success("Store status updated");
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update status",
        // loading: false, // no need to set loading here either
      });
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  },

  deleteStore: async (storeId) => {
    set({ error: null });
    try {
      await axios.delete(`${Baseurl}store/delete/${storeId}`);
      set((state) => ({
        stores: state.stores.filter((store) => store._id !== storeId),
      }));
      toast.success("Store deleted successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to delete store";
      set({ error: errorMessage });
      toast.error(errorMessage);
    }
  },
}));

export default useMasterMaterialStore;
