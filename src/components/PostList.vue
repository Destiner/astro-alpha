<template>
  <ul>
    <li
      v-for="(post, index) in posts"
      :key="index"
    >
      <a :href="`${post.url}/`">
        {{ post.frontmatter.title }}
      </a>
    </li>
  </ul>
</template>

<script
  setup
  lang="ts"
>
import { PropType } from 'vue';

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
});
</script>

<script lang="ts">
export interface Post {
  frontmatter: {
    title: string;
    date: string;
  };
  url: string;
}
</script>
