import React from "react";

export default function Main(props) {
  const inQueue = props.bars.inQueue;
  const grammar1 = inQueue === 1 ? "is" : "are";
  const grammar2 = inQueue === 1 ? "person" : "people";

  let peopleArray = [];
  for (let i = 0; i < inQueue; i++) {
    const newDiv = document.createElement("div");
    peopleArray.push(newDiv);
  }
  return (
    <main>
      <p>
        There {grammar1} {inQueue} {grammar2} in the queue
      </p>
      {peopleArray.map((person) => {
        return (
          <div className="container">
            <div className="imgholder">
              <img className="personimg" alt="person" src="https://icons-for-free.com/iconfiles/png/512/person+icon-1320184115749571165.png" />
            </div>
          </div>
        );
      })}
    </main>
  );
}
