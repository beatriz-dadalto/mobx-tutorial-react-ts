import { observer } from 'mobx-react';
import React from 'react';
import Athlete from './Athlete';

type Props = {
  athlete: Athlete;
};

const TradeForm = ({ athlete }: Props) => {
  const [teamName, setTeamName] = React.useState<string>('');

  return (
    <>
      <input
        type="text"
        placeholder="Team name..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
};

export default observer(TradeForm);
