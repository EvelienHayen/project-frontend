<template>
  <div class="password-reset">
    <h2>Password Reset</h2>
    <form @submit.prevent="resetPassword">
      <input type="email" v-model="email" placeholder="Email" required />
      <button type="submit">Reset Password</button>
    </form>
  </div>
</template>

<script>
import { resetUserPassword } from '@/services/api';

export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async resetPassword() {
      try {
        await resetUserPassword(this.email);
        alert('Password reset link sent to your email');
      } catch (error) {
        console.error('Password reset failed', error);
      }
    }
  }
};
</script>
