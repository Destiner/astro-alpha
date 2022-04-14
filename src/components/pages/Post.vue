<template>
  <HeaderNav />
  <main>
    <article>
      <h1>{{ title }}</h1>
      <div class="date">Published on {{ formatDate(date) }}</div>
      <slot />
    </article>
  </main>
  <footer />
</template>

<script
  setup
  lang="ts"
>
import HeaderNav from '@/components/HeaderNav.vue';
import formatDate from '@/utils/formatting';

defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

article {
  max-width: 720px;
  margin: 8px 16px;
}

article img {
  max-width: 100%;
}

.date {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
