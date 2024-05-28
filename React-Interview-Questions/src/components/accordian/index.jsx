import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected == id ? null : id);
  }

  function handMultiSelection(id) {
    let copyOfMultiple = [...multiple];
    const findIndexOfId = copyOfMultiple.indexOf(id);
    if (findIndexOfId == -1) {
      copyOfMultiple.push(id);
    } else {
      copyOfMultiple.splice(findIndexOfId, 1);
    }

    setMultiple(copyOfMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {" "}
        {!enableMultiSelection
          ? "Enable Multi Selection"
          : "Enable Single Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection 
              ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
              : selected == dataItem.id  && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div> No Data Found</div>
        )}
      </div>
    </div>
  );
}


//31 31