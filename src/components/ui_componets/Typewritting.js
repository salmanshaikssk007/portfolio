import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Typewritting = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Frontend Devloper"]}
      />

      <br />

      <ReactTypingEffect
        text={["Frontend Devloper"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    // style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

export default Typewritting ;