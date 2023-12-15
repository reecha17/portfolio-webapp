import React from 'react';
import Match from './Match';
import { CgAdd } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function MatchList({ matches, onDelete, onEdit }) {
  return (
    <table id="matches">
      <caption>Add and Edit Matches</caption>
      <thead>
        <tr>
          <th>Edit</th>
          <th>Agent</th>
          <th>Kills</th>
          <th>Deaths</th>
          <th>Assists</th>
          <th>ACS</th>
          <th>Date</th>
          <th>Delete</th>
          <th className='add'><Link to="../create"><i><CgAdd /></i></Link></th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match, i) =>
          <Match
            onDelete={onDelete}
            onEdit={onEdit}
            match={match}
            key={i}
          />)}
      </tbody>
    </table>
  );
}

export default MatchList