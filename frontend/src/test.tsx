import React, {useEffect, useState} from 'react';
import axios from 'axios';


  
const Test: React.FC = () => {
    const [table, setTable] = useState([])
    // const [age, setAge] = useState(0)
    const [count, setCount] = useState(0)
    const [sub1,setSub1] = useState(0)
    const [sub2,setSub2] = useState("")
    const [operator,setOp] = useState("")
    const [decimalmode,setD] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/tests')
        .then(res => {
            setTable(res.data.table)
            // setAge(res.data.op)
        }).catch(e => {
            console.log(e)
        })
    })
    // alert(table)
    // console.log(table)
    const digit = (origin:number,add:number) => {
        if(decimalmode===true){
            setSub2(sub2+add.toString())
        } else {
        setSub1(origin*10+add)
        }}
    const plus = () => {
        equ()
        setOp("+")
    }
    const minus = () => {
        equ()
        setOp("-")
    }
    const mult = () => {
        equ()
        setOp("*")
    }
    const div = () => {
        equ()
        setOp("/")
    }
    const equ = () => {
        // alert(parseFloat(sub2))
        let sub3:number = sub1
        if (!(sub2 === "" || sub2 === ".")) {
            sub3 = (sub1+parseFloat(sub2))
        }
        // alert(sub3)
        // setSub1(sub3)
        // alert(sub1)
        if(operator==="+" || operator===""){
            setCount(Math.round((count+sub3)*10**15)/10**15)
        } else if(operator==="-"){
            setCount(Math.round((count-sub3)*10**15)/10**15)
        } else if (operator==="*"){
            setCount(Math.round((count*sub3)*10**15)/10**15)
        } else {
            setCount(Math.round((count/sub3)*10**15)/10**15)
        }
        setSub1(0)
        setSub2("")
        setOp("");
        setD(false);

    }
    const reset = () => {
        setCount(0)
        setOp("")
        setSub1(0)
        setSub2("")
        setD(false);
        
    }
    const plusminus = () => {
        setCount(-count)
    }
    const decimal = () => {
        setD(true);
        setSub2(".")
    }
    
    return (
    <div>
        <pre>
        
        </pre>
        {/* age: {age} */}
        <div className='calculator'>
            <div className='display'>{count}</div>
            <div className='subdisplay'>{operator}     {sub1}{sub2}</div>
            
            <div>{decimalmode}</div><br/>
            <button onClick={() => digit(sub1,1)}>1</button>
            <button onClick={() => digit(sub1,2)}>2</button>
            <button onClick={() => digit(sub1,3)}>3</button>
            <button onClick={plus}>+</button><br/>
            <button onClick={() => digit(sub1,4)}>4</button>
            <button onClick={() => digit(sub1,5)}>5</button>
            <button onClick={() => digit(sub1,6)}>6</button>
            <button onClick={minus}>-</button><br/>
            <button onClick={() => digit(sub1,7)}>7</button>
            <button onClick={() => digit(sub1,8)}>8</button>
            <button onClick={() => digit(sub1,9)}>9</button>
            <button onClick={mult}>×</button><br/>
            <button onClick={plusminus}>+/-</button>
            <button onClick={() => digit(sub1,0)}>0</button>
            <button onClick={decimal}>.</button> 
            <button onClick={div}>÷</button><br/>
            <button onClick={reset}>C</button>
            <button onClick={equ}>=</button>
            
        </div>
    </div>)
}

export default Test;