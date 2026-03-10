<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <!-- 라우터가 현재 URL에 맞는 컴포넌트를 여기에 렌더링합니다. -->
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  background-color: #f4f4f4;
}
</style>
