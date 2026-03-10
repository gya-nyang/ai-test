<template>
  <div class="home">
    <div class="hero">
      <h2>투두 앱 버전 선택</h2>
      <p>가장 세련된 방식으로 일정을 관리하세요.</p>
    </div>
    <div class="links">
      <router-link to="/local-todo" class="btn btn-primary">로컬 스토리지 버전 시작하기</router-link>
      <div class="btn btn-disabled">서버리스 DB 버전 (준비 중)</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

// 홈 레이아웃: 넓은 스페이싱과 큰 타이포그래피 (애플 히어로 스타일)
.home {
  max-width: $max-width-content;
  margin: 0 auto;
  padding: 80px 22px;
  text-align: center;
}

.hero {
  margin-bottom: 60px;

  h2 {
    font-size: 48px;
    font-weight: 700;
    color: $color-text-primary;
    margin-bottom: 12px;
    letter-spacing: -0.015em;
  }

  p {
    font-size: 24px;
    color: $color-text-secondary;
    margin: 0;
    font-weight: 400;
  }
}

.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

// 애플 스타일의 둥근 버튼
.btn {
  display: inline-block;
  padding: 12px 28px;
  font-size: 17px;
  font-weight: 400;
  border-radius: 980px; // 완전한 타원형 버튼
  min-width: 250px;
  transition: all $transition-speed cubic-bezier(0.25, 0.1, 0.25, 1);
  text-decoration: none;

  &-primary {
    background-color: $color-accent;
    color: white;

    &:hover {
      background-color: $color-accent-hover;
      transform: scale(1.02); // 살짝 커지는 효과
      text-decoration: none;
    }
  }

  &-disabled {
    background-color: #f5f5f7;
    color: $color-text-secondary;
    border: 1px solid $color-border;
    cursor: not-allowed;
  }
}

@media (max-width: 768px) {
  .hero h2 { font-size: 32px; }
  .hero p { font-size: 19px; }
}
</style>
