<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            v-model="email"
            required
          >
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="password"
            required
          >
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <router-link
            to="/register"
            class="text-blue-500 hover:text-blue-700 font-bold"
          >
            Register
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { api, setAuthHeader } from '../service/api';

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