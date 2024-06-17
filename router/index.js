import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import UserProfile from '../views/userProfile.vue';
import Overview from '../views/Overview.vue';
import DashboardOwner from '../views/DashboardOwner.vue';
import Spots from '../views/spots.vue';
import PasswordReset from '../views/PasswordReset.vue';
import BookingConfirmation from '../views/BookingConfirmation.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: UserProfile },
  { path: '/bookings', component: Overview },
  { path: '/owner', component: DashboardOwner },
  { path: '/spots/:id', component: Spots },
  { path: '/password-reset', component: PasswordReset },
  { path: '/booking-confirmation', component: BookingConfirmation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;