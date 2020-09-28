const React= require('react');
const {useState, useRef} = React;

//const {Component} =React;

const WordRelayHook = () => {

    const [word, setWord] = useState('안녕');
    const [result , setResult] = useState('');
    const [value, setValue] = useState('');
    const inputRef = useRef();
    const onChange= (e) => {
        setValue(e.target.value);
    }
    const onSubmitForm =(e) => {
        e.preventDefault();
        if(word[word.length-1] ===value[0]){
            setResult('딩동댕');
            setWord(value);
            value('')
            inputRef.current.focus();
        }else{
            setResult('떙');
            setValue('');
            inputRef.current.focus();
            
        }
    }
    return ( 
        <React.Fragment>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input onChange={onChange} ref={inputRef} value={value}></input>
                <button>클릭!!!!!!</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
    )
}

module.exports = WordRelayHook;