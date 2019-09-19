import React, { Component } from "react";
//コンポーネント化されたJSXファイルを読み込む 
import Title from "./Title.js";　
import AddTodo from "./AddTodo";　
import './App.css';
//import { catchClause } from '@babel/types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filterType: "all"
    };
  }

  onTaskAdd(label) {
    // タスクの一覧を取得
    const tasks = this.state.tasks.concat();
    // 配列の最後に新しいタスクを追加
    tasks.push({
      id: Date.now(),
      label: label,
      completed: false
    });
    // ステートに記録
    this.setState({
      tasks: tasks
    });
  }
  onChangeItem(id) {
    const tasks = this.state.tasks.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      tasks: tasks
    });
  }
  onChangeFilterType(value) {
    this.setState({
      filterType: value
    });
  }
  render() {
    // App.js
    return (
      <div>
        <Title />
        <AddTodo onAdd={label => this.onTaskAdd(label)} />

      </div>
    );
  }
}

export default App;