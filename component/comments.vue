<template>
    <div class="comments">
      <h2>Comments and Ratings</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.user }}: {{ comment.text }}</li>
      </ul>
      <form @submit.prevent="addComment">
        <textarea v-model="newComment" placeholder="Add a comment" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getComments, postComment } from '@/service/api';
  
  export default {
    data() {
      return {
        comments: [],
        newComment: ''
      };
    },
    async created() {
      this.comments = await getComments();
    },
    methods: {
      async addComment() {
        try {
          await postComment(this.newComment);
          this.comments.push({ user: 'You', text: this.newComment });
          this.newComment = '';
        } catch (error) {
          console.error('Adding comment failed', error);
        }
      }
    }
  };
  </script>
  