<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 My Vite-Vue Application. 모든 권리 보유.</p>
      <div class="footer-links">
        <a href="#">개인정보 처리방침</a>
        <a href="#">사용 약관</a>
        <a href="#">판매 정책</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

// 푸터 스타일: 미니멀하고 정제된 그레이 컬러 사용
.footer {
  background-color: $color-bg-light;
  padding: 40px 22px;
  border-top: 1px solid $color-border;
  color: $color-text-secondary;
  font-size: 12px;

  .footer-content {
    max-width: $max-width-content;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  p {
    margin: 0;
  }

  .footer-links {
    display: flex;
    gap: 15px;

    a {
      color: $color-text-secondary;
      text-decoration: none;

      &:hover {
        color: $color-text-primary;
        text-decoration: underline;
      }
    }
  }
}
</style>
