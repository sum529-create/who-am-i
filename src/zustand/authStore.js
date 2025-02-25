import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isOpen: false,
  selTestId: null,
  setUser: (user) => {
    set({ user });
  },
  setToken: (token) => {
    try {
      window.localStorage.setItem("accessToken", token);
      set({ token });
    } catch (error) {
      console.error(error);
    }
  },
  logout: () => {
    window.localStorage.removeItem("accessToken");
    set({ user: null, token: null });
  },
  setIsOpen: (isOpen) => {
    set({ isOpen });
  },
  setSelTestId: (selTestId) => {
    set({ selTestId });
  },
}));

export default useAuthStore;
