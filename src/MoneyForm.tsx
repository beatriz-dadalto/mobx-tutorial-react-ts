import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { useTeamStore } from './TeamStore';
import Athlete from './Athlete';

type FormState = {
  name: string;
  age: number;
  salary: number;
};

// reset the state
const initialState: FormState = {
  name: '',
  age: 0,
  salary: 0,
};

let formState: FormState = observable({
  name: '',
  age: 0,
  salary: 0,
});

const MoneyForm = () => {
  //const totalValue = computed(() => formState.salary * formState.years);
  const { totalYearlyCost, addPlayer } = useTeamStore();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
        <p>Total: {totalYearlyCost} Million</p>
        <input
          type="text"
          placeholder="Player name..."
          style={{ height: '40px' }}
          value={formState.name}
          onChange={action((e) => {
            formState.name = e.target.value;
          })}
        />
        <input
          type="number"
          placeholder="Player age..."
          style={{
            height: '40px',
          }}
          value={formState.age}
          onChange={action((e) => {
            formState.age = Number(e.target.value);
          })}
        />
        <input
          type="number"
          placeholder="Yearly salary..."
          style={{
            height: '40px',
          }}
          value={formState.salary}
          onChange={action((e) => {
            formState.salary = Number(e.target.value);
          })}
        />
        <button
          type="button"
          onClick={action((e) => {
            addPlayer(
              new Athlete(formState.name, formState.age, formState.salary),
            );
            formState = initialState;
          })}
          style={{
            padding: '8px',
            background: 'blue',
            borderRadius: '4px',
            color: 'white',
            border: 'none',
            marginTop: '12px'
          }}
        >
          Add Player
        </button>
      </div>
    </>
  );
};

export default observer(MoneyForm);
