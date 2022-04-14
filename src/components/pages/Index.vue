<template>
  <HeaderNav />
  <main>
    <h1>Posts</h1>
    <PostList :posts="posts" />
  </main>
  <footer />
</template>

<script
  setup
  lang="ts"
>
import { PropType } from 'vue';

import HeaderNav from '@/components/HeaderNav.vue';
import PostList, { Post } from '@/components/PostList.vue';

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 3rem;
}
</style>
