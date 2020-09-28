const React= require('react');
const {PureComponent} =React;

class Try extends PureComponent{
    render(){
        const{tryInfo} = this.props;
        return (
            <React.Fragment>
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
            </React.Fragment>
            

            
        )
    }
}

module.exports =Try; 