const React= require('react');
const {Component, createRef} =React;

class Subject extends Component {
    
    render() {
        return (
            <React.Fragment>
                <h1><a href="/" onClick={ (e) => {
                    e.preventDefault();
                    this.props.onChangePage();
                } } >{this.props.title}</a></h1>
                <span>{this.props.sub}</span>
            </React.Fragment>
        )
    }
}

module.exports = Subject;