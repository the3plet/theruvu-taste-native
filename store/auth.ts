import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
 
type User = {
  name: string;
  email: string;
  token: string;
};

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  // signin:()=> void
  signout: () => void;
};

const secureStoreStorage = {
  getItem: async (name: string) => {
    const value = await SecureStore.getItemAsync(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name: string, value: any) => {
    await SecureStore.setItemAsync(name, JSON.stringify(value));
  },
  removeItem: async (name: string) => {
    await SecureStore.deleteItemAsync(name);
  },
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      signout: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // Key in SecureStore (can be anything)
      storage: secureStoreStorage,
    }
  )
);


export default useAuthStore;
