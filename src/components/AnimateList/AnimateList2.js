import React, {useState} from "react";

import { Flipper, Flipped } from "react-flip-toolkit";

import "./style.scss";


const listData = [0, 1, 2, 3, 4, 5, 6, 7];
const colors = ["#6da5ff", "#7971ea", "#5900d8"];
// we'll iterate over this array to create groups of 3 components
const baseArray = [...Array(3).keys()];

const ListItem = ({ index, color, onClick }) => {
  return (
    <Flipped flipId={`listItem-${index}`}>
      <div
        className="listItem"
        style={{ backgroundColor: color }}
        onClick={setFocused(index)}
      >
        <div className="listItemContent">
          <div className="avatar" />
          <div className="description">{baseArray.map(i => <div />)}</div>
        </div>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, color, onClick }) => {
  return (
    <Flipped flipId={`listItem-${index}`}>
      <div
        className="expandedListItem"
        style={{ backgroundColor: color }}
        onClick={setFocused(index)}
      >
        <div className="expandedListItemContent">
          <div className="avatar avatarExpanded" />
          <div className="description">{baseArray.map(i => <div />)}</div>
          <div className="additional-content">{baseArray.map(i => <div />)}</div>
        </div>
      </div>
    </Flipped>
  );
};


function setFocused (index) {
    if (setFocused === index) {
        return null; 
    }
   else  {
       return index;
    }
  }





function AnimatedList2 () {
 

  const [focused, setFocused] = useState(null);


    
    return (
        <Flipper 
        flipKey={focused}
        className="staggered-list-content"
        >
          <ul className="list">
            {listData.map(index => {
              return (
                <li>
                  {index === focused ? (
                    <ExpandedListItem
                      index={focused}
                      color={colors[focused % colors.length]}
                      onClick={setFocused(index)}
                    />
                  ) : (
                    <ListItem
                      index={index}
                      key={index}
                      color={colors[index % colors.length]}
                      onClick={setFocused(index)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </Flipper>
      );
}

export default AnimatedList2;