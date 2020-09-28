const React= require('react');
const {Component, createRef} =React;
const Try = require('./Try');

function getNumber() {
    const candidate= [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i=0; i<4; i++){
        const chosen=candidate.splice(Math.floor(Math.random()*(9-i)))[0];
        array.push(chosen);
    }
    return array;

}


class NumberBall extends Component{
    state = {   
        result : '',
        value : '',
        answer: getNumber(),
        tries :[],
    }
    onSubmitForm =(e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer){
            this.setState({
                result: '정답',
                // tries: [...this.state.tries, {...} ]     ********************
            })
            alert("게임 다시 시작");
            this.setState({
                value: '',
                answer: getNumber(),
                tries: [],

            })
        }else{
            const answerArray = this.state.value.split(',').map( (v) => parseInt(v));
            let strike=0;
            let ball =0; 
            if(this.state.tries.length>=9){
                this.setState({
                    result : `10번 끝 정답은 ${this.state.answer} `
                })
                alert("게임 다시 시작");
                this.setState({
                    value: '',
                    answer: getNumber(),
                    tries: [],
                })

            }else{
                for(let i=0; i<4; i++){
                    if(answerArray[i]=== this.state.answer[i]){
                        strike+=1;

                    }else if(this.state.answer.includes(answerArray[i])){
                        ball+=1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries]
                })
            }
        }

    }

    onChange =(e) => {
        this.setState( {value: e.target.value} )
    }


    render() {
        return ( 
            <React.Fragment>
                <div>{this.state.result}</div>
                <form onSubmit ={}>
                    <input onChange={} value={} ></input>
                    <button>입력</button>
                </form>
                <div>{this.state.tries.length}</div>           
            </React.Fragment>
        );
    }
}


module.exports 