import { useState, useRef } from "react";
import './card.css'

const PlaningList = () => {

  const [plans, setPlans] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const addPlan = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setPlans([...plans, input]);
      setInput("");
    }
  };

  const removePlans = (index) => {
    const newPlans = plans.filter((_, i) => i !== index);
    setPlans(newPlans);
  };
  return (
    <section className="card-container">
      <h1 className="card-title">Planejamento</h1>
      <p className="card-subtitle">Clique para adicionar um cartão</p>
      <form onSubmit={addPlan}>
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
        {plans.map((plan, index) => (
          <li key={index}>
            <p> {plan} </p>
            <button onClick={() => removePlans(index)}> X </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PlaningList