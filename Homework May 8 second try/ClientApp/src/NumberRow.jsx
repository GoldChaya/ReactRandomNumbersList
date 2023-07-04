import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class NumberRow extends React.Component {

    render(){

        const { number, isSelected, onSelectClicked, isLocked } = this.props;

        return (
            <tr>
                <td>{number}</td>
                {isSelected ? <td><button onClick={onSelectClicked} className='btn btn-danger' disabled={isLocked} >Deslect</button></td> :
                    <td><button onClick={onSelectClicked} className='btn btn-warning' disabled={isLocked}>Select</button></td>}
            </tr>


        )
    }
}
  export default NumberRow;