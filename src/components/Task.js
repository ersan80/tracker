import React, { useState, useEffect } from "react";
import DeleteIcon from "../utils/DeleteIcon";


const Task = ({ list, setList }) => {

  
  const [toggle, setToggle] = useState(true);
  const [state, setState] = useState([])

  const handleClick = (data) => {
   const newList = []
    list.map((item) => {
      if (item.id === data) {
       return  newList.push({ ...item, isDone:!item.isDone })
      }
      else {
        newList.push(item)
      }
   })
     setList(newList)
  };

  const handleDelete = (data) => {
    const arr = list.filter((item) => item.id !== data);
    console.log(arr)
    setList(arr);
  };

  return (
    <div className="container ">
      {list.length === 0 ? (
        <p>you have finished all the tasks</p>
      ) : (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Nu</th>
              <th scope="col">Task</th>
              <th scope="col">Day&Time</th>
            </tr>
            </thead>
            {list &&
          
              list.map((item, index) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td
                      onClick={() => handleClick(item.id)}
                      className={
                        item.isDone ? "text-decoration-line-through m-2" : ""
                      }
                    >
                      {item.task}
                    </td>
                    <td
                      onClick={() => handleClick(item.id)}
                      className={
                        item.isDone ? "text-decoration-line-through m-2" : ""
                      }
                    >
                      {new Date(item.dateInput).toLocaleDateString()}{" "}
                      {new Date(item.dateInput).toLocaleTimeString()}
                    </td>
                    <td onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      )}
    </div>
  );
};

export default Task;
