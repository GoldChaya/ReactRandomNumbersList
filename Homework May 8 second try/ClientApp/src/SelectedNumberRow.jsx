import React from 'react';


class SelectedNumberRow extends React.Component {

    render() {
        return (<>
            <tr>
                <td>{this.props.number}</td>
                {this.props.isLocked ? <td><button onClick={this.props.onLockClicked} className='btn btn-primary'>Unlock</button></td> :
                    <td><button onClick={this.props.onLockClicked} className='btn btn-primary'>Lock</button></td>}
            </tr>

           </> );

    }



};

export default SelectedNumberRow;