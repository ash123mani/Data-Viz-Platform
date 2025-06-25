import { useAuthStore } from '../store/authStore.ts';

export const useAuth = () => {
  const {
    user,
    loading,
    error,
    googleSignIn,
    emailPasswordLogin,
    emailPasswordRegister,
    logout,
    clearError
  } = useAuthStore();

  return {
    isAuthenticated: !!user,
    user,
    isLoading: loading,
    error,
    googleSignIn,
    login: emailPasswordLogin,
    register: emailPasswordRegister,
    logout,
    clearError
  };
};
