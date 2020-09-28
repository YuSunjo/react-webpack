const React= require('react');
const {Component} =React;

class ResposeCheck extends Component{
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result : [],
    };
    timeout; 
    startTime;
    endTime;
    onClickScreen =(e) => {
        const {state, message, result} =this.state;
        console.log('클릭');
        if(state ==='waiting'){
            this.setState({
                state: 'ready',
                message : '초록색이 되면 클릭하세요',
            });
            this.timeout=setTimeout( () => {
                 this.setState({
                     state:'now',
                     message: '지금 클릭',
                 })
                 this.starTime= new Date();
            },Math.floor(Math.random() *1000)+2000 ); 
            // clearTimeout이 없으면 setTimeout이 실행됨 -> 변수에 넣어줘서 clearTimeout해주기
        }else if(state ==='ready'){
            clearTimeout(this.timeout)
            this.setState({
                state: 'waiting',
                message: '너무 성급했습니다.',
                result: [],
            })
        }else if(state ==='now'){
            this.endTime=new Date();
            this.setState(( prevState) => {
                return {
                    state : 'waiting',
                    message :'클릭해서 시작하세요',
                    result : [...prevState.result,this.endTime-this.starTime],
                }
            })
            // this.setState({
            //     state:'waiting',
            //     message :'클릭해서 시작하세요',
            //     result: [...prevState.result,this.endTime -this.starTime],
            // })
        }
    }
    onReset = () => {
        this.setState( {
            result :[],
        })
    }
    renderAverage= () => {
        return this.state.result.length ===0 ? null : 
        <React.Fragment>
        <div>평균시간: {this.state.result.reduce((a,c) => 
            a+c) / this.state.result.length
        }ms</div>
        <button onClick={this.onReset}>리셋</button>
        </React.Fragment>
    };

    render(){
        
        return (
            <React.Fragment>
                <div id= "screen" className={this.state.state} onClick={this.onClickScreen}>{this.state.message}</div>

                {this.renderAverage()}
                
            </React.Fragment>
        )
    }
}

module.exports =ResposeCheck; 