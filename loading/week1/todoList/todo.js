document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo');
    const todoListField = document.querySelector('.todo-title-field .todo-list-field');
    const doneListField = document.querySelector('.done-title-field .todo-list-field');

    todoInput.addEventListener('keydown', (e) => {
        if (e.isComposing) return; //이벤트 중복 실행을 방지 - 한글일 경우
        if (e.key === 'Enter') {
            const todoText = todoInput.value.trim();
            if (todoText !== '') {
                const todoElement = document.createElement('div');
                todoElement.className = 'todo';
                todoElement.innerHTML = `
                    <div class="todo-text">${todoText}</div>
                    <input type="button" value="완료" class="btn" onclick="moveToDone(this)">
                    <div class="divider todo"></div>
                `;
                todoListField.appendChild(todoElement);
                todoInput.value = ''; // 입력 필드 초기화
            }
            e.preventDefault(); // 엔터 키 기본 이벤트 방지
        }
    });
});

function moveToDone(btn) {
    const doneListField = document.querySelector('.done-title-field .todo-list-field'); // '해낸 일' 목록을 다시 찾기
    const todoElement = btn.parentElement;

    // 버튼을 '삭제' 버튼으로 변환
    btn.value = '삭제'; // 버튼의 텍스트를 '완료'에서 '삭제'로 변경
    btn.className = 'btn delete-btn'; // 클래스를 'delete-btn'으로 변경
    btn.onclick = function() { deleteDone(this.parentElement); }; // '삭제' 함수로 onclick 이벤트 변경

    // '완료'된 todo를 doneListField에 추가
    doneListField.appendChild(todoElement);
}

// '삭제' 버튼 클릭 시, done 항목 삭제
function deleteDone(doneElement) {
    doneElement.remove(); // done 항목을 DOM에서 제거
}