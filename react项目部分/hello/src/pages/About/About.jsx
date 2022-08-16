import React from 'react';
import styles from './about.css'

function About() {
    return (
        <>
            <h3 className="aboutTitle">About</h3>
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

