const React= require('react');
const {Component, createRef} =React;

class Desc extends Component {
    
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </React.Fragment>
        )
    }
}

module.exports = Desc;