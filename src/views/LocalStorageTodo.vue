<script setup>
import { ref, onMounted, watch } from 'vue'

const newTodoText = ref('')
const todos = ref([])

onMounted(() => {
  const savedTodos = localStorage.getItem('vue3-todos-local')
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos)
  }
})

watch(todos, (newVal) => {
  localStorage.setItem('vue3-todos-local', JSON.stringify(newVal))
}, { deep: true })

const addTodo = () => {
  if (newTodoText.value.trim() === '') return
  const todo = {
    id: Date.now(),
    text: newTodoText.value,
    completed: false
  }
  todos.value.unshift(todo)
  newTodoText.value = ''
}

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}

const toggleComplete = (todo) => {
  todo.completed = !todo.completed
}
</script>

<template>
  <div class="todo-view">
    <div class="todo-card">
      <header class="card-header">
        <h3>할 일 목록</h3>
        <p class="subtitle">로컬 스토리지에 안전하게 보관됩니다.</p>
      </header>
      
      <div class="input-area">
        <input 
          v-model="newTodoText" 
          placeholder="오늘 어떤 일을 하시나요?" 
          @keyup.enter="addTodo"
          class="todo-input"
        />
        <button @click="addTodo" class="add-button">추가</button>
      </div>

      <div class="todo-list-container">
        <ul class="todo-list">
          <transition-group name="list">
            <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
              <div class="todo-item-content">
                <div class="checkbox" @click="toggleComplete(todo)">
                  <div class="check-mark" v-if="todo.completed">✓</div>
                </div>
                <span class="text" @click="toggleComplete(todo)">{{ todo.text }}</span>
              </div>
              <button @click="deleteTodo(todo.id)" class="delete-btn">삭제</button>
            </li>
          </transition-group>
        </ul>
        
        <div v-if="todos.length === 0" class="empty-state">
          <p>모든 일을 마치셨네요!</p>
        </div>
      </div>
    </div>
    
    <router-link to="/" class="back-link">← 홈으로 돌아가기</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

// 투두 뷰: 부드러운 배경과 중앙 정렬
.todo-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 22px;
}

// 투두 카드: 애플 스타일의 부드러운 모서리와 그림자
.todo-card {
  background: $color-bg-white;
  border-radius: $border-radius;
  box-shadow: 0 4px 24px $color-shadow;
  padding: 32px;
  margin-bottom: 24px;
}

.card-header {
  margin-bottom: 32px;
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 4px 0;
  }
  .subtitle {
    font-size: 14px;
    color: $color-text-secondary;
    margin: 0;
  }
}

// 입력 영역: 세련된 커스텀 입력 필드
.input-area {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  .todo-input {
    flex: 1;
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid $color-border;
    border-radius: $border-radius - 4px;
    background-color: #fafafa;
    transition: all $transition-speed ease;

    &:focus {
      outline: none;
      background-color: white;
      border-color: $color-accent;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }
  }

  .add-button {
    background-color: $color-accent;
    color: white;
    padding: 0 24px;
    font-weight: 500;
    border-radius: $border-radius - 4px;
    transition: background-color $transition-speed;

    &:hover {
      background-color: $color-accent-hover;
    }
  }
}

// 리스트 아이템: 체크박스 스타일링 포함
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #f2f2f2;
    transition: opacity 0.3s;

    &:last-child {
      border-bottom: none;
    }

    &.completed {
      .text {
        text-decoration: line-through;
        color: $color-text-secondary;
      }
      .checkbox {
        background-color: #34c759; // 애플 그린 컬러
        border-color: #34c759;
      }
    }
  }
}

.todo-item-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  .text {
    cursor: pointer;
    font-size: 17px;
  }
}

// 커스텀 체크박스
.checkbox {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid $color-border;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  .check-mark {
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
}

.delete-btn {
  background: transparent;
  color: #ff3b30; // 애플 레드 컬러
  font-size: 14px;
  font-weight: 400;
  opacity: 0; // 평소에는 숨김
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
  }
}

.todo-list li:hover .delete-btn {
  opacity: 1; // 호버 시에만 삭제 버튼 노출
}

.empty-state {
  text-align: center;
  padding: 40px 0;
  color: $color-text-secondary;
  font-size: 15px;
}

.back-link {
  display: block;
  text-align: center;
  font-size: 14px;
  color: $color-text-secondary;
}

// 리스트 트랜지션
.list-enter-active, .list-leave-active { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.list-enter-from { opacity: 0; transform: translateY(10px); }
.list-leave-to { opacity: 0; transform: scale(0.95); }
</style>
