
import { useState } from 'react';
import './App.css';

function App() {

  document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

  const [cube, setCube] = useState([
    {"name": "U", "value":["G1","G2","G3","G4","G5","G6","G7","G8","G9"]},
    {"name": "L", "value":["R1","R2","R3","R4","R5","R6","R7","R8","R9"]},
    {"name": "F", "value":["W1","W2","W3","W4","W5","W6","W7","W8","W9"]},
    {"name": "R", "value":["O1","O2","O3","O4","O5","O6","O7","O8","O9"]},
    {"name": "B", "value":["Y1","Y2","Y3","Y4","Y5","Y6","Y7","Y8","Y9"]},
    {"name": "D", "value":["B1","B2","B3","B4","B5","B6","B7","B8","B9"]},
  ])

  function rotate(e, name, direction){
    
    let clickedSide = cube.find(side => side.name === name)

    console.log(clickedSide)

    let array = [...clickedSide.value]

    let newCube = [...cube]

    if(clickedSide.name === "U"){
      array = rotateMidPieces(array, direction)
      array = rotateCornerPieces(array, direction)

      newCube = rotateSides(newCube, direction, ["1","2","3","4"], ["1","1","1","1"], ["0","0","0","0"], ["2","2","2","2"])

      newCube[0].value = array
    }else if(clickedSide.name === "L"){
      array = rotateMidPieces(array, direction)
      array = rotateCornerPieces(array, direction)

      newCube = rotateSides(newCube, direction, ["4","5","2","0"], ["5","3","3","3"], ["8","0","0","0"], ["2","6","6","6"])

      newCube[1].value = array
    }else if(clickedSide.name === "F"){
      array = rotateMidPieces(array, direction)
      array = rotateCornerPieces(array, direction)

      newCube = rotateSides(newCube, direction, ["1","5","3","0"], ["5","1","3","7"], ["8","2","0","6"], ["2","0","6","8"])

      newCube[2].value = array
    }else if(clickedSide.name === "R"){
      array = rotateMidPieces(array, direction)
      array = rotateCornerPieces(array, direction)

      newCube = rotateSides(newCube, direction, ["2","5","4","0"], ["5","5","3","5"], ["8","8","0","8"], ["2","2","6","2"])

      newCube[3].value = array
    }else if(clickedSide.name === "B"){
      array = rotateMidPieces(array, direction)
      array = rotateCornerPieces(array, direction)

      newCube = rotateSides(newCube, direction, ["3","5","1","0"], ["5","7","3","1"], ["8","6","0","2"], ["2","8","6","0"])

      newCube[4].value = array
    }else if(clickedSide.name === "D"){
      array = rotateMidPieces(array, direction)
      array = rotateCornerPieces(array, direction)

      newCube = rotateSides(newCube, direction, ["1","4","3","2"], ["7","7","7","7"], ["6","6","6","6"], ["8","8","8","8"])

      newCube[5].value = array
    }

    setCube(newCube)

  }

  function rotateSides(newCube, direction, orderOfSides, orderOfMiddle, orderOfFirstCorner, orderOfSecondCorner){
    if(direction === 'left'){
      orderOfSides = orderOfSides.reverse()
      orderOfMiddle = orderOfMiddle.reverse()
      orderOfFirstCorner = orderOfFirstCorner.reverse()
      orderOfSecondCorner = orderOfSecondCorner.reverse()
    }
    console.log(orderOfMiddle)
    let save = newCube[orderOfSides[0]].value[orderOfMiddle[0]]
    newCube[orderOfSides[0]].value[orderOfMiddle[0]] = newCube[orderOfSides[1]].value[orderOfMiddle[1]]
    newCube[orderOfSides[1]].value[orderOfMiddle[1]] = newCube[orderOfSides[2]].value[orderOfMiddle[2]]
    newCube[orderOfSides[2]].value[orderOfMiddle[2]] = newCube[orderOfSides[3]].value[orderOfMiddle[3]]
    newCube[orderOfSides[3]].value[orderOfMiddle[3]] = save

    let save2 = newCube[orderOfSides[0]].value[orderOfFirstCorner[0]]
    newCube[orderOfSides[0]].value[orderOfFirstCorner[0]] = newCube[orderOfSides[1]].value[orderOfFirstCorner[1]]
    newCube[orderOfSides[1]].value[orderOfFirstCorner[1]] = newCube[orderOfSides[2]].value[orderOfFirstCorner[2]]
    newCube[orderOfSides[2]].value[orderOfFirstCorner[2]] = newCube[orderOfSides[3]].value[orderOfFirstCorner[3]]
    newCube[orderOfSides[3]].value[orderOfFirstCorner[3]] = save2

    let save3 = newCube[orderOfSides[0]].value[orderOfSecondCorner[0]]
    newCube[orderOfSides[0]].value[orderOfSecondCorner[0]] = newCube[orderOfSides[1]].value[orderOfSecondCorner[1]]
    newCube[orderOfSides[1]].value[orderOfSecondCorner[1]] = newCube[orderOfSides[2]].value[orderOfSecondCorner[2]]
    newCube[orderOfSides[2]].value[orderOfSecondCorner[2]] = newCube[orderOfSides[3]].value[orderOfSecondCorner[3]]
    newCube[orderOfSides[3]].value[orderOfSecondCorner[3]] = save3

    return newCube
  }

  function rotateCornerPieces(array, direction){
    console.log('corner')
    if(direction === 'left'){
      let save = array[2]
      array[2] = array[8]
      array[8] = array[6]
      array[6] = array[0]
      array[0] = save
    }else{
      let save = array[0]
      array[0] = array[6]
      array[6] = array[8]
      array[8] = array[2]
      array[2] = save
    }
    
    return array
  }

  function rotateMidPieces(array, direction){
    if(direction === 'left'){
      let save2 = array[5]
      array[5] = array[7]
      array[7] = array[3]
      array[3] = array[1]
      array[1] = save2
    }else{
      let save2 = array[1]
      array[1] = array[3]
      array[3] = array[7]
      array[7] = array[5]
      array[5] = save2
    }
    
    return array
  }

  return (
    <div className="App">
      <h1>Magic Cube Solver - Building 🚧</h1>
      <p>Left Click: Right Move</p>
      <p>Right Click: Left Move</p>
      <div className='cube-container'>
      <div className='cube'>
      {cube?.map((side) => {
        return(
        <div className={`${side.name} side`} key={side.name.toString()}>
          {side.value?.map((piece) => {
            if(piece.includes("5")){
              return(
                <div className={`${piece[0]} block clicker`} onMouseDown={(e) => {
                  if(e.button === 0){
                    rotate(e, side.name, 'right')
                  }else{
                    rotate(e, side.name, 'left')
                  }
                }} key={piece}>
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
      )})}
      </div>
      </div>
    </div>
  );
}

export default App;
