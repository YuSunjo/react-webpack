const React= require('react');
const {Component, createRef} =React;
const Subject = require('./components/Subject');
const Contents = require('./components/Contents');
const Desc = require('./components/Desc');


class Practice extends Component {
    constructor(props){
        super(props);
        this.state ={
            mode: 'read',
            selected_content_id :2,
            subject: {title : 'web', sub: 'website'},
            welcome: {title: 'welcome', desc: 'hello' },
            contents: [
                {id:1 , title:'HTML', desc :'html'  },
                {id:2 , title: 'CSS',desc :'css'} ,
                {id:3 ,title: 'JavaScript',desc:'javascript'} ],
        }
        
    }
    onChangePage= () => {
        this.setState({
            mode:'welcome',
        })
    }
    onChangeContents = (id) => {
        this.setState({
            mode: 'read',
            selected_content_id: Number(id),
        })
    }

    render() {
        let _title, _desc=null;
        if(this.state.mode==='welcome'){
            _title=this.state.welcome.title;
            _desc=this.state.welcome.desc;
        }else if(this.state.mode==='read'){
            var i =0; 
            console.log('왜 끊기는거야!')
            while(i< this.state.contents.length){
                var data=this.state. contents[i];
                if(data.id === this.state.selected_content_id){
                    _title= data.title;
                    _desc = data.desc;
                    break;
                }
                i +=1;
            }
            
        }
        
        return (
            <React.Fragment> 
                <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={this.onChangePage}></Subject>
                <Contents data={this.state.contents} onChangeContents={this.onChangeContents}></Contents>
                <Desc title={_title} desc={_desc}></Desc>

            

            </React.Fragment>
        )
    }
}

module.exports = Practice;