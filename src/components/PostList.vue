<template>
  <div class="list">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="row"
    >
      <a
        class="title"
        :href="`${post.url}/`"
      >
        {{ post.frontmatter.title }}
      </a>
      <span class="date">{{ formatDate(post.frontmatter.date) }}</span>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { PropType } from 'vue';

import formatDate from '@/utils/formatting';

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

<style scoped>
.list {
  display: flex;
  gap: 4px;
  flex-direction: column;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .list {
    gap: 8px;
  }
}

.row {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

.title {
  color: var(--text-primary);
  text-decoration: none;
}

.date {
  color: var(--text-secondary);
}
</style>
