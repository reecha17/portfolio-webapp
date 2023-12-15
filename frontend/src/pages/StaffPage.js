import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage() {

  const [results, setResults] = useState([]);
  const fetchResults = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        setResults(response.results);
      })
      .catch(() => {
        alert("The Random User Generator is currently not working. PLease try again later.")
      });
  };

  return (
    <>
      <h2>Staff</h2>
      <article class="staff">
        <p>Hit the add button to add 10 random staff members to the table.</p>
        <div class="random-button">
          <button id="server" onClick={fetchResults} value="add">Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Portrait</th>
              <th>Name/Email</th>
              <th>Telephone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody id="user">
            {results.map((person, index) => <StaffRow person={person} key={index} />)}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default StaffPage