import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1; /* flex가 사용된 사황에서 1은 자신이 차지할수 있는부분 다차지*/
  padding-bottom: 48xp;
  padding: 20px 32px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlock>TodoList</TodoListBlock>;
}

export default TodoList;
