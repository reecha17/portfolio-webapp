import React from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

function Match({ match, onEdit, onDelete }) {
  return (
    <tr>
      <td className='match-table-button'><FiEdit onClick={() => onEdit(match)} /></td>
      <td>{match.agent}</td>
      <td>{match.kills}</td>
      <td>{match.deaths}</td>
      <td>{match.assists}</td>
      <td>{match.acs}</td>
      <td>{match.date.slice(0, 10)}</td>
      <td className='match-table-button'><RiDeleteBack2Line onClick={() => onDelete(match._id)} /></td>
    </tr>
  );
}

export default Match;