import { useState, useEffect, useRef } from "react";


function DoingList() {
  const [doing, setDoing] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const addDoing = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setDoing([...doing, input]);
      setInput("");
    }
  };

  const removeDoing = (index) => {
    const newDoing = doing.filter((_, i) => i !== index);
    setDoing(newDoing);
  };

  return (
    <section className="card-container">
    <h1 className="card-title">Fazendo</h1>
    <p className="card-subtitle">Clique para adicionar um cartão</p>
      <form onSubmit={addDoing}>
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
        {doing.map((doinglist, index) => (
          <li key={index}>
            <p> {doinglist} </p>
            <button onClick={() => removeDoing(index)}> X </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DoingList;
