<template>
  <div class="home">
    <h2>Todo App Versions</h2>
    <p>Please select a version to try:</p>
    <div class="links">
      <router-link to="/local-todo" class="btn">LocalStorage Version</router-link>
      <div class="btn disabled">Serverless DB Version (Coming Soon)</div>
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
