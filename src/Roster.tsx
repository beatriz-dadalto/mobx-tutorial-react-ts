import { observer } from 'mobx-react';
import React from 'react';
import TradeForm from './TradeForm';
import { useTeamStore } from './TeamStore';

const Roster = () => {
  const { players } = useTeamStore();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Teams</th>
            <th>Trade Form</th>
            <th>Is it their birthday?</th>
            <th>Salary</th>
          </tr>
        </thead>
        {players.map((athlete) => {
          return (
            <tbody key={athlete.name}>
              <tr>
                <td>{athlete.name}</td>
                <td>{athlete.age}</td>
                <td>{athlete.teamHistory}</td>
                <td>
                  <TradeForm athlete={athlete} />
                </td>
                <td>
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: 'yellow',
                      borderRadius: '8px',
                    }}
                    onClick={() => athlete.wishHappyBirthday()}
                  >
                    Wish happy birthday
                  </button>
                </td>
                <td>{athlete.salary}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default observer(Roster);
