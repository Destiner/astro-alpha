<template>
  <header>
    <div class="wrapper">
      <div class="brand">
        <a
          class="brand-title-link"
          href="/"
        >
          <span class="brand-title">The Press</span>
        </a>
      </div>
      <div>
        <a
          class="app-link"
          href="https://github.com/Destiner/astro-alpha"
          target="_blank"
        >
          <span class="app-title">Source code</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  position: fixed;
  z-index: 50;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem 1.5rem;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid var(--outline);
  background: #ffffff06;
}

/* Firefox doesn't support backdrop-filter yet */
@supports (-moz-appearance: none) {
  header {
    background: var(--bg);
  }
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
}

.brand {
  display: flex;
  align-items: flex-start;
}

.brand-title-link {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  text-decoration: none;
}

.brand-title {
  align-self: center;
  color: var(--brand);
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.75rem;
}

.app-link {
  text-decoration: none;
}

.app-title {
  align-self: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: var(--text-primary);
  color: var(--bg);
}
</style>
