import React from 'react';
import Counter from "./counter/counter";
import ReactDOM from "react-dom";
import MyFirstComponent from './AppComponent';
//import MySecondComponent from './SecondComponent';

import Lifecycle from './lifecycle';
import RemoteData from './remote/remote';
var position=document.getElementById("rootcontainer")
ReactDOM.render(<span><MyFirstComponent name="OBB" location="chennai">11</MyFirstComponent>
    <MyFirstComponent name="OBC" location="bangalore">12</MyFirstComponent>
    <MyFirstComponent name="OBA" location="pune">13</MyFirstComponent>
    <Counter></Counter>

    <Lifecycle></Lifecycle>
    <RemoteData></RemoteData>
    </span>,position)