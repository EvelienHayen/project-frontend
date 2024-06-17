<template>
  <div class="max-w-sm mx-auto">
    <h2 class="text-2xl mb-6">Login</h2>
    <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
          type="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          placeholder="Enter your email"
          required
        >
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input
          v-model="password"
          type="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          placeholder="Enter your password"
          required
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="spinner"></span>
          <span v-else>Login</span>
        </button>
        <router-link to="/password-reset" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Forgot Password?
        </router-link>
      </div>
      <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
    </form>
    <p class="text-center text-gray-500 text-sm">
      Don't have an account?
      <router-link to="/register" class="text-blue-500 hover:text-blue-800">Register</router-link>
    </p>
  </div>
</template>

<script>
import { api, setAuthHeader } from '../services/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: ''
    };
  },
  methods: {
    async login() {
      this.error = '';
      this.isLoading = true;

      try {
        const response = await api.post('/auth/login', {
          email: this.email,
          password: this.password
        });

        setAuthHeader(response.data.token);
        this.$router.push('/');
      } catch (error) {
        this.error = 'Invalid email or password';
        console.error('Login failed', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>