import React from "react";
import './style.scss';
const Heading = (props) => {
    return(
        <div className="rl-heading">
      {(() => {
        switch (props.type) {
          case 'heading-1':
            return <h1>{props.title}</h1>;
          case 'heading-2':
            return <h2>{props.title}</h2>;
          case 'heading-3':
            return <h3>{props.title}</h3>;
            case 'heading-4':
            return <h4>{props.title}</h4>;
            case 'heading-5':
            return <h5>{props.title}</h5>;
            case 'heading-6':
            return <h6>{props.title}</h6>;
          default:
            return <h2>{props.title}</h2>;
        }
      })()}
    </div>
    )
}

export default Heading;