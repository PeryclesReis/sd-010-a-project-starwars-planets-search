import React, { useContext } from 'react';
import ContextStauo from '../provider/ContextStauo';

function TableBody() {
  const { dataTitle, filters } = useContext(ContextStauo);

  const body = () => (
    <tbody className="tbody">
      {dataTitle.filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name))
        .map((element) => (
          <tr key={ element.name } className="lines-table">
            {Object.values(element)
              .map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
    </tbody>
  );

  return (
    body()
  );
}

export default TableBody;
