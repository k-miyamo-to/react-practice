import React from 'react';
//コンポーネント化されたJSXファイルを読み込む 
import Title from "./Title.js";　
//import './App.css';
import { catchClause } from '@babel/types';

class App extends React.Component {
  render() {
    return (
      <Title />
    );
  }
}

//メモ（↓あとで消す）
// const App = () => {
//  return(
//    <div>
//      <Cat />
//      <Cat />
//      <Cat />
//      <Cat />
//    </div>
//   )
//  }
//  const Cat = () => {
//    return<div>にゃ</div>
//  }


export default App;
