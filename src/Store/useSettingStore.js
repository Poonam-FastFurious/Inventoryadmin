import { create } from "zustand";
import axios from "axios";
import { Baseurl } from "../Config";
import { toast } from "react-hot-toast"; // Import toast

// Define the Zustand store for managing master materials
const useMasterMaterialStore = create((set) => ({
  masterMaterials: [],
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

  // Edit master material
  editMasterMaterial: async (id, formData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/master-materials/${id}`, formData);
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
}));

export default useMasterMaterialStore;
