const React= require('react');
const {Component, createRef} =React;
const Try = require('./Try')

function getNumbers() {        //숫자 4개 겹치지 않게 뽑기
    const candidate=[1,2,3,4,5,6,7,8,9];
    const array =[];
    for(let i =0; i<4; i++){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}
class Numball extends Component{
    state ={
        value: '',
        result: '',
        answer : getNumbers(),
        tries : [],      //push 안됨  서로 배열이 달라야 render가 일어남
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value ===this.state.answer.join('')){
            this.setState({
                result: '홈런',
                tries: [...this.state.tries, {try: this.state.value, result: '홈런'}  ],
            })
            this.inputRef.current.focus();
            alert('게임을 다시 시작!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                })

            // const arr2 =[...arr1,1] 이렇게 하면 복사됨 
        }else{
            const answerArray = this.state.value.split('').map(  (v) => parseInt(v));
            console.log(answerArray)
            let strike=0;
            let ball= 0;
            if(this.state.tries.length >= 9){
                this.setState({
                    result: `10번 넘게 틀려 실패,  답은 ${this.state.answer.join(',')}`,
                });
                this.inputRef.current.focus();
                alert('게임을 다시 시작!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
                this.inputRef.current.focus();
            }else{
                for(let i=0; i<4; i++){
                    if(answerArray[i]=== this.state.answer[i]) {
                        strike +=1;
                    }else if(this.state.answer.includes(answerArray[i])){
                        ball+=1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value, result: `${strike}스트라이크 ${ball}볼`}],
                    value: '',
                });
                this.inputRef.current.focus();
            }

        }
    }
    onChange = (e) => {
        console.log(this.state.answer)
        this.setState( {value: e.target.value })
    }
    inputRef= createRef();
    // oninputRef = (c) => {
    //     this.inputRef=c;
    // }




    // frait=[
    //     {frait: '사과', taste: '맛있다.'},
    //     {frait: 'ㄴㅇㄹ', taste: 'ㅂㅈㄷ.'},
    //     {frait: 'ㅌㅌ', taste: 'ㅂㅂ.'},
    //     {frait: 'ㄱㄱ', taste: 'ㅈㅈ.'},
    //     {frait: 'ㅕ', taste: 'ㅛ.'},
    // ]
    render(){
        return (
            <React.Fragment>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChange}></input>
                    <button>입력</button>
                </form>
                <div>시도 : {this.state.tries.length}  </div>
                <ul>
                    {this.state.tries.map((v,i) => {
                        return (
                            <Try key={`${i + 1}차시도:`} tryInfo={v} />
                        );
                            
                    })}
                </ul>    
            </React.Fragment>
        );
    }
}

module.exports = Numball;