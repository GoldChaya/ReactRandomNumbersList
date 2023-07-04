


import React from 'react';
import NumberRow from './NumberRow';
import SelectedNumberRow from './SelectedNumberRow';
import 'bootstrap/dist/css/bootstrap.min.css';



class Numbers extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }


    onAddClicked = () => {

        const randomNumber = Math.floor(Math.random() * 100);
        this.setState({ numbers: [...this.state.numbers, randomNumber] });

    }

    onLockClicked = (num) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(num)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(number => number !== num) });
        }

        else {
            this.setState({ lockedNumbers: [...this.state.lockedNumbers, num] });
        }

    }

    onSelectClicked = (num) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(num)) {
            const copy = selectedNumbers.filter(number => number !== num);
            this.setState({ selectedNumbers: copy });
        }

        else {
            const copy = [...this.state.selectedNumbers];
            copy.push(num);
            this.setState({ selectedNumbers: copy });
        }


    }

    render() {
        const { selectedNumbers, numbers, lockedNumbers } = this.state;
        return (
            <div id="root">
                <div className="container" style={{ marginTop: '60px'}}>
                    <div className="row">
                        <div className='col-md-12'>
                            <button className='col-md-10 btn btn-success' onClick={this.onAddClicked}>Add</button>
                            <div style={{ maxHeight: 500, overflowY: "scroll" }}>
                               


                            <table className=" table table-hover table-striped table-bordered mt-5">
                                <thead>
                                    <tr>
                                        <th style={{ width: '25%' }}>Number</th>
                                        <th >Add / Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {numbers.map(num => (<NumberRow number={num} isSelected={selectedNumbers.includes(num)}
                                        onSelectClicked={() => this.onSelectClicked(num)} isLocked={lockedNumbers.includes(num)} />))}
                                </tbody>


                            </table>
                            </div>

                        {selectedNumbers.length !== 0 && <div>
                            <h2>Selected Numbers</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Lock/Unlock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedNumbers.map(num => <SelectedNumberRow number={num} isLocked={lockedNumbers.includes(num)}
                                        onLockClicked={() => this.onLockClicked(num)} />)}
                                </tbody>
                            </table>
                        </div>}
                        </div>
                    </div>
                </div>
            </div>)
    }


}

export default Numbers;