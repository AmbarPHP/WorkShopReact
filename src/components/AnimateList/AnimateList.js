import React, { useState} from "react";
import { Flipper, Flipped } from "react-flip-toolkit";


const listData = [0,1,2,3,4,5,6];//[...Array(7).keys()];
const createCardFlipId = index => `listItem-${index}`;

const shouldFlip = index => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <div className="avatar" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 400);
      }}
    >
      <div className="expandedListItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="expandedListItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}
            >
              <div className="avatar avatarExpanded" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.slice(0, 3).map(i => (
                <div />
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

function setIsFocused (index) {
  if (this.isfocused === index) 
   {return null; }
 else  {return index;}

}



const  AnimatedList=() => {

  const [isfocused, setIsFocused] = useState(null);


    return (
      <Flipper
        flipKey={isfocused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: isfocused !== null
          }
        }}
        decisionData={isfocused}
      >
        <ul className="list">
          {listData.map(index => {
            return (
              <li >
                {index === isfocused ? (
                  <ExpandedListItem
                    index={isfocused}
                    onClick={ setIsFocused(null)}
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={() => setIsFocused(null)}/>
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
    );
  
}

export default AnimatedList ;
