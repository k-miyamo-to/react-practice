import React from "react";

class TaskList extends React.Component {
    render(){
        const displayTasks = this.props.tasks.filter(item => {
            switch(this.props.filterType){
                case "completed":
                    return item.completed === true;
                case "active":
                    return item.completed === false;
                case "all":
                default:
                    return true;
           }
        });

        const nodes =displayTasks.map(item => {
            const node = item.completed === true
                ? <del>{item.label}</del>
                : <span>{item.label}</span>;

                return (
                    <li key={item.id} className="TaskList-list">
                       <label className="TaskList-list-label">
                         <input
                            type="checkbox" 
                            checked={item.completed}
                            onChange={event => this.props.onChangeItem(item.id)}
                        />
                        {node}
                        </label>
                   </li>
                );
        });
        return(
            <ul>{nodes}</ul>
        )
    }
}
export default TaskList;
