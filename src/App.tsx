import { useState } from 'react';
import { Input } from './components/Input';
import styled from 'styled-components';
import './App.scss';
import { Button } from './components/Button';

const Title = styled.h1`
  font-size: 50px;
  line-height: 62px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  letter-spacing: 10px;
  color: yellow;
  margin: 50px 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ListStyled = styled.ul`
  margin-top: 30px;
  width: 450px;
  font-size: 16px;
  line-height: 23px;
  padding: 10px 20px 20px 20px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: grey;
`;

const Element = styled.li`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:last-child {
    margin-bottom: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 25px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: yellow;
    margin-top: 10px;
  }
`;

const Remover = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: yellow;
  font-size: 16px;
  font-weight: 700;
  padding: 4px;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;
const Subtitle = styled.p`
  font-size: 24px;
  line-height: 33px;
  font-weight: 700;
  margin: 20px 0 30px;
  color: yellow;
  text-transform: uppercase;
`

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleClick = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const removeTask = (id: number) => {
    const taskArray = tasks.filter(task => task.id !== id);
    setTasks(taskArray);
  };

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const hasIncompleteTasks = tasks.some(task => !task.completed);
  const hasCompletedTasks = tasks.some(task => task.completed);

  return (
    <>
      <Title>Todo list</Title>
      <Wrapper>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={handleClick} text="Add To List" isDisabled={input.length === 0} />
      </Wrapper>
      {tasks.length > 0 && (
        <>
          {hasIncompleteTasks && (
            <ListStyled>
              <Subtitle>Tasks to do</Subtitle>
              {tasks.map(task => {
                if (!task.completed) {
                  return (
                    <Element key={task.id}>
                      <label>
                        <Checkbox
                          checked={task.completed}
                          onChange={() => toggleComplete(task.id)}
                        />
                        {task.text}
                      </label>
                      <Remover onClick={() => removeTask(task.id)}>✕</Remover>
                    </Element>
                  );
                }
                return null;
              })}
            </ListStyled>
          )}
          {hasCompletedTasks && (
            <ListStyled>
              <Subtitle>Completed tasks</Subtitle>
              {tasks.map(task => {
                if (task.completed) {
                  return (
                    <Element key={task.id}>
                      <label>
                        <Checkbox
                          checked={task.completed}
                          onChange={() => toggleComplete(task.id)}
                        />
                        <span style={{ textDecoration: 'line-through' }}>{task.text}</span>
                      </label>
                      <Remover onClick={() => removeTask(task.id)}>✕</Remover>
                    </Element>
                  );
                }
                return null;
              })}
            </ListStyled>
          )}
        </>
      )}
    </>
  );
}

export default App;