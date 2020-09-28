const React= require('react');
const {Component, createRef} =React;

class Contents extends Component {
    render() {
        lists=[];
        var data= this.props.data;
        var i=0;
        while(i< data.length){
            lists.push(<li key={data[i].id}><a href={"/contents/"+data[i].id} 
            data-id={data[i].id}
            onClick={ (e)=> {
                e.preventDefault();
                this.props.onChangeContents(e.target.dataset.id);
            }}>{data[i].title}</a></li>)
            i +=1;
        }
        return (
            <React.Fragment>
                <ul>
                    {lists}
                </ul>
            </React.Fragment>
        )
    }
}

module.exports = Contents;