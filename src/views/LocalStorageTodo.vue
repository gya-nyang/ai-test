<script setup>
import { ref, onMounted, watch } from 'vue'

// 1. 상태(State) 정의: 사용자 입력을 받을 텍스트와 할 일 목록 배열
const newTodoText = ref('')
const todos = ref([])

// 2. 초기 데이터 로드: 컴포넌트가 마운트될 때(onMounted) 로컬스토리지에서 데이터를 읽어옵니다.
onMounted(() => {
  const savedTodos = localStorage.getItem('vue3-todos-local')
  if (savedTodos) {
    // 로컬스토리지에 저장된 JSON 문자열을 다시 배열 형태로 변환합니다.
    todos.value = JSON.parse(savedTodos)
  }
})

// 3. 데이터 자동 저장: watch를 사용하여 todos 배열이 변경될 때마다 로컬스토리지에 업데이트합니다.
// { deep: true } 옵션은 배열 내부 요소의 속성 변경(예: 완료 여부 토글)까지 감지합니다.
watch(todos, (newVal) => {
  localStorage.setItem('vue3-todos-local', JSON.stringify(newVal))
}, { deep: true })

// 4. 할 일 추가 로직
const addTodo = () => {
  if (newTodoText.value.trim() === '') return

  const todo = {
    id: Date.now(), // 유니크한 ID 생성 (간단히 현재 시간 사용)
    text: newTodoText.value,
    completed: false
  }
  
  // 배열 앞에 새 항목 추가
  todos.value.unshift(todo)
  // 입력 필드 초기화
  newTodoText.value = ''
}

// 5. 할 일 삭제 로직
const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}

// 6. 전체 완료 여부 체크 (필터링 예제)
const toggleComplete = (todo) => {
  todo.completed = !todo.completed
}
</script>

<template>
  <div class="todo-app">
    <h3>로컬 스토리지 할 일 목록</h3>
    
    <!-- 입력 영역: @keyup.enter로 엔터키를 눌렀을 때도 추가되도록 함 -->
    <div class="input-group">
      <input 
        v-model="newTodoText" 
        placeholder="할 일을 입력하세요" 
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">추가</button>
    </div>

    <!-- 목록 영역 -->
    <ul class="todo-list">
      <transition-group name="list">
        <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
          <span @click="toggleComplete(todo)">{{ todo.text }}</span>
          <button @click="deleteTodo(todo.id)" class="delete-btn">삭제</button>
        </li>
      </transition-group>
    </ul>

    <div v-if="todos.length === 0" class="empty">
      할 일이 없습니다. 위에서 추가해 보세요!
    </div>
    
    <router-link to="/" class="back-link">← 홈으로 돌아가기</router-link>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
}
.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.input-group input {
  flex: 1;
  padding: 0.5rem;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid #ddd;
  background: white;
}
.todo-list li.completed span {
  text-decoration: line-through;
  color: #888;
}
.todo-list li span {
  cursor: pointer;
  flex: 1;
}
.delete-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
.empty {
  text-align: center;
  color: #888;
  margin-top: 2rem;
}
.back-link {
  display: block;
  margin-top: 2rem;
  text-align: center;
  color: blue;
}

/* 리스트 전환 애니메이션 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
