const React= require('react');
const {useState, useRef} = React;
const {Component} =React;

const Gugudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() *9));
    const [second, setSecond] = useState(Math.ceil(Math.random() *9));
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const inputRef =useRef(null);

   
    const onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(value) === first*second) {
            setResult('정답' + value);
            setFirst(Math.ceil(Math.random() *9));
            setSecond(Math.ceil(Math.random() *9));
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput =(e) => {
        setValue(e.target.value);

    }
    return (
        <React.Fragment>
            <div>{first}곱하기 {second} =?</div>
            <form onSubmit={onSubmit}> 
                <input ref={inputRef} onChange={onChangeInput} value={value}></input>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
    )


    
}

module.exports = Gugudan;