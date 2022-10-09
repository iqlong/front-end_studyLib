import React, { Component } from 'react'
import qs from 'querystring'

export default class Message extends Component {
  state = { num: 1}
  get computeNum() {
    return this.state.num + 3
  }


  render() {
    console.log(qs.parse(this.props.location.search.slice(1)), this);
    const {name, age} = qs.parse(this.props.location.search.slice(1));
    const { mes } = this.props.location.state || {}
    return (
      <div>
        Message is : {name} {` => ${age}`}
        <hr />
        { mes }
        { this.computeNum }

        &nbsp;&nbsp;&nbsp;
        <button onClick={() => {
            // this.computeNum = 2
          }
        }>set computed</button>
        {/* 默认的不显示： undefined 和 null */}
      </div>
    )
  }
}
