<template>
  <HeaderNav />
  <main>
    <article>
      <h1>{{ title }}</h1>
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

defineProps({
  title: {
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
</style>
