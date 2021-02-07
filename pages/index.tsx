import { memo } from 'react';
import { NextPage } from 'next';

import { TodoType } from '../types/todo';
import TodoList from '../components/TodoList';

const todos: TodoType[] = [
  { id: 1, text: '마트가서 장보기', color: 'red', checked: false },
  { id: 2, text: '수학 숙제하기', color: 'pink', checked: false },
  { id: 3, text: '코딩하기', color: 'yellow', checked: true },
  { id: 4, text: '넥스트 공부하기', color: 'green', checked: true },
  { id: 5, text: '요리 연습하기', color: 'blue', checked: false },
  { id: 6, text: '분리 수거하기', color: 'indigo', checked: false },
];

const Index: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default memo(Index);
