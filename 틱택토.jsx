const React= require('react');

const {Component, useState, useReducer} =React;
const Table = require('./Table')

const initialSate = {
    winner : '',
    turn : 'O',
    tableData: [['','',''],['','',''],['','','']],
}

const reducer =(state, action)=> {

}
const TTT = () => {
    const [state, dispatch] =useReducer(reducer,initialSate);
    // const [winner,setWinner] = useState('');
    // const [turn,setTurn] = useState('O');
    // const [tableDate,setTableData] = useState([['','',''],['','',''],['','','']]);

    return (
        <React.Fragment>
            <Table></Table>
            {state.winner && <div>{state.winner}님이 승리</div>}
        </React.Fragment>
    )
}


module.exports = TTT;