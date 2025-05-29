import { create } from "zustand";
import axios from "axios";
import { Baseurl } from "../Config";
import toast from "react-hot-toast";

export const useCustomerStore = create((set, get) => ({
  customers: [],
  selectedCustomer: null,
  loading: false,
  error: null,

  // ✅ Fetch all customers
  fetchCustomers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(Baseurl + "customer/all");
      set({ customers: res.data.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch customers",
        loading: false,
      });
    }
  },

  // ✅ Get one customer by ID and set to state
  getCustomerById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`/api/customer/${id}`);
      set({ selectedCustomer: res.data.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch customer",
        loading: false,
      });
    }
  },

  // ✅ Create a customer
  createCustomer: async (formData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(Baseurl + "customer/add", formData);
      const currentCustomers = get().customers;
      set({ customers: [...currentCustomers, res.data.data], loading: false });

      toast.success("Customer created successfully!");
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to create customer",
        loading: false,
      });
      toast.error(error.response?.data?.message || "Failed to create customer");
    }
  },

  // ✅ Update a customer
  updateCustomer: async (id, updatedData) => {
    set({ loading: true, error: null });

    await toast.promise(
      axios.patch(`${Baseurl}customer/update/${id}`, updatedData),
      {
        loading: "Updating customer...",
        success: (res) => {
          const updatedCustomer = res.data.data;
          const currentCustomers = get().customers;
          const updatedList = currentCustomers.map((c) =>
            c._id === id ? updatedCustomer : c
          );
          set({ customers: updatedList, loading: false });
          return "Customer updated successfully!";
        },
        error: (err) => {
          const errorMsg =
            err.response?.data?.message || "Failed to update customer";
          set({ error: errorMsg, loading: false });
          return errorMsg;
        },
      }
    );
  },

  // ✅ Delete a customer
  deleteCustomer: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${Baseurl}customer/delete?id=${id}`); // ID as query param
      const filtered = get().customers.filter((c) => c._id !== id);
      set({ customers: filtered, loading: false });
      toast.success("Customer deleted successfully");
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to delete customer";
      set({ error: message, loading: false });
      toast.error(message);
    }
  },

  // ✅ Clear selected customer
  clearSelectedCustomer: () => {
    set({ selectedCustomer: null });
  },

  suppliers: [],
  selectedSupplier: null,

  fetchSuppliers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(Baseurl + "supplier/all");
      set({ suppliers: res.data.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch suppliers",
        loading: false,
      });
    }
  },

  createSupplier: async (formData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(Baseurl + "supplier/add", formData);
      set({
        suppliers: [...get().suppliers, res.data.data],
        loading: false,
      });
      toast.success("Supplier created successfully!");
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to create supplier";
      set({ error: message, loading: false });
      toast.error(message);
    }
  },

  deleteSupplier: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${Baseurl}supplier/delete/${id}`);
      const filtered = get().suppliers.filter((s) => s._id !== id);
      set({ suppliers: filtered, loading: false });
      toast.success("Supplier deleted successfully");
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to delete supplier";
      set({ error: message, loading: false });
      toast.error(message);
    }
  },

  clearSelectedSupplier: () => set({ selectedSupplier: null }),
}));
