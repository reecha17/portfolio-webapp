import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const [agent, setAgent] = useState('');
  const [kills, setKills] = useState('');
  const [deaths, setDeaths] = useState('');
  const [assists, setAssists] = useState('');
  const [acs, setAcs] = useState('');
  const [date, setDate] = useState('');

  const redirect = useNavigate();

  const addMatch = async () => {
    const newMatch = { agent, kills, deaths, assists, acs, date };
    const response = await fetch('/log', {
      method: 'post',
      body: JSON.stringify(newMatch),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      alert(`A match was added.`);
      redirect("/log");
    } else {
      alert(`Match was not added with status code = ${response.status}.`);
      redirect("/log");
    }
  };

  return (
    <>
      <article>
        <h2>Add to the collection</h2>
        <p>You can fill out the form below to record match data.</p>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <fieldset>
            <label for="agent">Agent</label>
            <input
              type="agent"
              placeholder="Name of agent played."
              value={agent}
              onChange={e => setAgent(e.target.value)}
              id="agent" />

            <label for="kills">Kills</label>
            <input
              type="number"
              value={kills}
              placeholder="Kills"
              onChange={e => setKills(e.target.value)}
              id="kills" />

            <label for="deaths">Deaths</label>
            <input
              type="number"
              value={deaths}
              placeholder="Deaths"
              onChange={e => setDeaths(e.target.value)}
              id="deaths" />

            <label for="assists">Assists</label>
            <input
              type="number"
              value={assists}
              placeholder="Assists"
              onChange={e => setAssists(e.target.value)}
              id="assists" />
            
            <label for="acs">ACS</label>
            <input
              type="number"
              value={acs}
              placeholder="ACS"
              onChange={e => setAcs(e.target.value)}
              id="acs" />

            <label for="date">Date</label>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={e => setDate(e.target.value)}
              id="date" />

            <label for="submit">
              <button
                type="submit"
                onClick={addMatch}
                id="submit"
              >Add</button></label>
          </fieldset>
        </form>
      </article>
    </>
  );
}

export default CreatePage;