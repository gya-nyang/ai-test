<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">나의 웹사이트</router-link>
      <nav class="nav">
        <ul>
          <li><router-link to="/">홈</router-link></li>
          <li><a href="#">소개</a></li>
          <li><a href="#">문의</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

// 헤더 레이아웃: 블러 효과가 들어간 반투명 상단 바 (애플 스타일)
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8); // 80% 반투명 흰색
  backdrop-filter: saturate(180%) blur(20px); // 뒤 배경 블러 처리 (주요 특징)
  border-bottom: 1px solid $color-border;
  height: 48px; // 콤팩트한 높이
  display: flex;
  align-items: center;

  .header-content {
    width: 100%;
    max-width: $max-width-content;
    margin: 0 auto;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 19px;
    font-weight: 600;
    color: $color-text-primary;
    text-decoration: none;
    letter-spacing: -0.012em;
  }

  .nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;

    li a {
      font-size: 12px;
      color: $color-text-secondary;
      text-decoration: none;
      transition: color $transition-speed ease;

      &:hover {
        color: $color-text-primary;
        text-decoration: none;
      }
    }
  }
}
</style>
