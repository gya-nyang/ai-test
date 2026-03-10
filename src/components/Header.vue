<template>
  <header class="header">
    <h1>나의 웹사이트</h1>
    <nav>
      <ul>
        <li>홈</li>
        <li>소개</li>
        <li>문의</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: blue;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
</style>
