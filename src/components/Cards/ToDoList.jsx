import { useState, useEffect, useRef } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef;
    document.title = `Você tem ${todos.length} tarefas a fazer`;
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
  <section className="card-container">
      <h1 className="card-title">A Fazer</h1>
      <p className="card-subtitle">Clique para adicionar um cartão</p>
      <form onSubmit={addTodo}>
        <input
          className="card-content"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <div className="btn-group">
          <button className="btn-card-add">Adicionar card</button>
          <button className="btn-cancel">Cancelar</button>
        </div>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p> {todo} </p>
            <button onClick={() => removeTodo(index)}> X </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
