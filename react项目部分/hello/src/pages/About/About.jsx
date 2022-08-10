import React from 'react';

function About() {
    return (
        <>
            <h3>About</h3>
            <Father />
        </>
    )
}

function Father() {
    return (
        <Son zhl={(v) => {console.log(v);}} />
    )
}

function Son(props) {
    const name = 'zhl'

    const toFather = (v) => {
        return () => {
            props.zhl(v)
        }
    }

    return (
        <div>
            <button onClick={ toFather(name) }>子向父传递值</button>
        </div>
    )


}

export default  About

