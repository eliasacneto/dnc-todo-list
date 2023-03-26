import { useState, useRef } from "react";

function DoneList() {
  const [done, setDone] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const addDone = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setDone([...done, input]);
      setInput("");
    }
  };

  const removeDone = (index) => {
    const newDone = done.filter((_, i) => i !== index);
    setDone(newDone);
  };

  return (
<section className="card-container">
      <h1 className="card-title">Feito</h1>
      <p className="card-subtitle">Clique para adicionar um cartão</p>
      <form onSubmit={addDone}>
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
        {done.map((doneList, index) => (
          <li key={index}>
            <p> {doneList} </p>
            <button onClick={() => removeDone(index)}> X </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DoneList;
