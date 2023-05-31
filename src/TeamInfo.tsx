import { observer } from 'mobx-react';
import React from 'react';
import { useTeamStore } from './TeamStore';

const TeamInfo = () => {
  const { teamName, setMascot } = useTeamStore();

  return (
    <>
      <h1
        style={{
          marginBottom: '1px',
        }}
      >
        Team: {teamName}
      </h1>
      <input
        type="text"
        placeholder="Change mascot"
        onChange={(e) => setMascot(e.target.value)}
        style={{
          marginBottom: '8px',
          padding: '8px',
        }}
      />{' '}
    </>
  );
};

export default observer(TeamInfo);
