<template>
  <div class="home">
    <h2>투두 앱 버전 선택</h2>
    <p>사용해 볼 버전을 선택하세요:</p>
    <div class="links">
      <router-link to="/local-todo" class="btn">로컬 스토리지 버전</router-link>
      <div class="btn disabled">서버리스 DB 버전 (준비 중)</div>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
}
.btn {
  padding: 1rem 2rem;
  background-color: blue;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  width: 250px;
}
.btn.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
