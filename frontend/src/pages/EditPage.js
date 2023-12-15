import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditPage = ({ matchToEdit }) => {
  const [agent, setAgent] = useState(matchToEdit.agent);
  const [kills, setKills] = useState(matchToEdit.kills);
  const [deaths, setDeaths] = useState(matchToEdit.deaths);
  const [assists, setAssists] = useState(matchToEdit.assists);
  const [acs, setAcs] = useState(matchToEdit.acs);
  const [date, setDate] = useState(matchToEdit.date);

  const redirect = useNavigate();

  const editMatch = async () => {
    const response = await fetch(`/log/${matchToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        agent: agent,
        kills: kills,
        deaths: deaths,
        assists: assists,
        acs: acs,
        date: date
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200 || response.status === 204) {
      alert(`A match was edited.`);
    } else {
      const errMessage = await response.json();
      alert(`document not edited; status ${response.status}. ${errMessage.Error}`);
    }
    redirect("/log");
  };

  return (
    <>
      <article>
        <h2>Edit a match in the collection</h2>
        <p>You can fill out the form below to edit match data.</p>
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
                onClick={editMatch}
                id="submit"
              >Save</button></label>
          </fieldset>
        </form>
      </article>
    </>
  );
}

export default EditPage;