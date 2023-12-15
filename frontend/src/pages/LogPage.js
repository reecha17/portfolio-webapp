import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MatchList from "../components/MatchList";

function LogPage({ setMatch }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [matches, setMatches] = useState([]);

  // RETRIEVE the entire list of matches
  const loadMatches = async () => {
    const response = await fetch("/log");
    const matches = await response.json();
    setMatches(matches);
  };

  // UPDATE a single match
  const onEditMatch = async (match) => {
    setMatch(match);
    redirect("/edit");
  };

  // DELETE a single match
  const onDeleteMatch = async (_id) => {
    const response = await fetch(`/log/${_id}`, { method: "DELETE" });
    if (response.status === 204) {
      const getResponse = await fetch("/log");
      const matches = await getResponse.json();
      setMatches(matches);
    } else {
      console.error(
        `Failed to delete match with id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD all the matches
  useEffect(() => {
    loadMatches();
  }, []);

  // DISPLAY the matches
  return (
    <>
      <h2>List of Matches</h2>
      <p>
        Record and keep track of your match statistics for Valorant. You can add
        match data by pressing the add button at the top right of the table.
      </p>
      <MatchList
        matches={matches}
        onEdit={onEditMatch}
        onDelete={onDeleteMatch}
      />
    </>
  );
}

export default LogPage;
