
import { useState } from 'react';
import './App.css';

function App() {

  const [cube, setCube] = useState([
    ["R1","R2","R3","R4","R5","R6","R7","R8","R9"],
    ["B1","B2","B3","B4","B5","B6","B7","B8","B9"],
    ["W1","W2","W3","W4","W5","W6","W7","W8","W9"],
    ["G1","G2","G3","G4","G5","G6","G7","G8","G9"],
    ["Y1","Y2","Y3","Y4","Y5","Y6","Y7","Y8","Y9"],
    ["O1","O2","O3","O4","O5","O6","O7","O8","O9"],
  ])

  const structureOfIndex = {
    0: {
      "upIndex" : 4,
      "leftIndex" : 1,
      "righIndex" : 3,
      "bottomIndex" : 2
    },
    1: {
      "upIndex" : 0,
      "leftIndex" : 4,
      "righIndex" : 2,
      "bottomIndex" : 5
    },
    2: {
      "upIndex" : 0,
      "leftIndex" : 1,
      "righIndex" : 3,
      "bottomIndex" : 5
    },
    3: {
      "upIndex" : 0,
      "leftIndex" : 2,
      "righIndex" : 4,
      "bottomIndex" : 5
    },
    4: {
      "upIndex" : 0,
      "leftIndex" : 3,
      "righIndex" : 1,
      "bottomIndex" : 5
    },
    5: {
      "upIndex" : 2,
      "leftIndex" : 1,
      "righIndex" : 3,
      "bottomIndex" : 4
    }
  }

  const positionOfMiddle = {
    0: {
      "upIndex" : 1,
      "leftIndex" : 1,
      "righIndex" : 1,
      "bottomIndex" : 1
    },
    1: {
      "upIndex" : 3,
      "leftIndex" : 5,
      "righIndex" : 3,
      "bottomIndex" : 3
    },
    2: {
      "upIndex" : 7,
      "leftIndex" : 5,
      "righIndex" : 3,
      "bottomIndex" : 1
    },
    3: {
      "upIndex" : 5,
      "leftIndex" : 5,
      "righIndex" : 3,
      "bottomIndex" : 5
    },
    4: {
      "upIndex" : 1,
      "leftIndex" : 5,
      "righIndex" : 3,
      "bottomIndex" : 7
    },
    5: {
      "upIndex" : 7,
      "leftIndex" : 7,
      "righIndex" : 7,
      "bottomIndex" : 7
    }
  }

  function rotate(e){
    let color = e.target.className.split(" ")[0]
    
    let array = cube.find(side => {
      return side.find(side => side === `${color}5`)
    })

    let newCube = [...cube]

    let index = cube.indexOf(array)

    let waitingCorner = newCube[index][0]
    newCube[index][0] = newCube[index][6]
    newCube[index][6] = newCube[index][8]
    newCube[index][8] = newCube[index][2]
    newCube[index][2] = waitingCorner

    let waitingMiddle = newCube[index][1]
    newCube[index][1] = newCube[index][3]
    newCube[index][3] = newCube[index][7]
    newCube[index][7] = newCube[index][5]
    newCube[index][5] = waitingMiddle

    let waitingMiddleSide = newCube[structureOfIndex[index].leftIndex][positionOfMiddle[index].leftIndex]
    newCube[structureOfIndex[index].leftIndex][positionOfMiddle[index].leftIndex] = newCube[structureOfIndex[index].bottomIndex][positionOfMiddle[index].bottomIndex]
    newCube[structureOfIndex[index].bottomIndex][positionOfMiddle[index].bottomIndex]  = newCube[structureOfIndex[index].righIndex][positionOfMiddle[index].righIndex]
    newCube[structureOfIndex[index].righIndex][positionOfMiddle[index].righIndex]  = newCube[structureOfIndex[index].upIndex][positionOfMiddle[index].upIndex]
    newCube[structureOfIndex[index].upIndex][positionOfMiddle[index].upIndex]  = waitingMiddleSide


    setCube(newCube)
  }

  return (
    <div className="App">
      <h1>Magic Cube Solver</h1>
      <div className='cube-container'>
      <div className='cube'>
      {cube.map((side) => (
        <div className='side' key={side.toString()}>
          {side.map((piece) => {
            if(piece.includes("5")){
              return(
                <div className={`${piece[0]} block clicker`} onClick={(e) => rotate(e)} key={piece}>
                  {piece}
                </div>
              )
            }else{
              return(
                <div className={`${piece[0]} block`} key={piece}>
                  {piece}
                </div>
              )
            }
           
          })}
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;
