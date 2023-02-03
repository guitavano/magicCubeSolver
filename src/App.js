
import { useState } from 'react';
import './App.css';

function App() {

  const [cube, setCube] = useState([
    {"name": "U", "value":["G1","G2","G3","G4","G5","G6","G7","G8","G9"]},
    {"name": "L", "value":["R1","R2","R3","R4","R5","R6","R7","R8","R9"]},
    {"name": "F", "value":["W1","W2","W3","W4","W5","W6","W7","W8","W9"]},
    {"name": "R", "value":["O1","O2","O3","O4","O5","O6","O7","O8","O9"]},
    {"name": "B", "value":["Y1","Y2","Y3","Y4","Y5","Y6","Y7","Y8","Y9"]},
    {"name": "D", "value":["B1","B2","B3","B4","B5","B6","B7","B8","B9"]},
  ])

  function rotate(e, name){

    let color = e.target.className.split(" ")[0]
    
    let clickedSide = cube.find(side => side.name === name)

    console.log(clickedSide)

    let array = [...clickedSide.value]

    let newCube = [...cube]

    if(clickedSide.name === "U"){
      array = rotateMidPieces(array)
      array = rotateCornerPieces(array)
      let save = newCube[1].value[1]
      newCube[1].value[1] = newCube[2].value[1]
      newCube[2].value[1] = newCube[3].value[1]
      newCube[3].value[1] = newCube[4].value[1]
      newCube[4].value[1] = save

      let save2 = newCube[1].value[0]
      newCube[1].value[0] = newCube[2].value[0]
      newCube[2].value[0] = newCube[3].value[0]
      newCube[3].value[0] = newCube[4].value[0]
      newCube[4].value[0] = save2

      let save3 = newCube[1].value[2]
      newCube[1].value[2] = newCube[2].value[2]
      newCube[2].value[2] = newCube[3].value[2]
      newCube[3].value[2] = newCube[4].value[2]
      newCube[4].value[2] = save3

      newCube[0].value = array
    }else if(clickedSide.name === "L"){
      array = rotateMidPieces(array)
      array = rotateCornerPieces(array)
      
      let save = newCube[4].value[5]
      newCube[4].value[5] = newCube[5].value[3]
      newCube[5].value[3] = newCube[2].value[3]
      newCube[2].value[3] = newCube[0].value[3]
      newCube[0].value[3] = save

      let save2 = newCube[4].value[8]
      newCube[4].value[8] = newCube[5].value[0]
      newCube[5].value[0] = newCube[2].value[0]
      newCube[2].value[0] = newCube[0].value[0]
      newCube[0].value[0] = save2

      let save3 = newCube[4].value[2]
      newCube[4].value[2] = newCube[5].value[6]
      newCube[5].value[6] = newCube[2].value[6]
      newCube[2].value[6] = newCube[0].value[6]
      newCube[0].value[6] = save3

      newCube[1].value = array
    }else if(clickedSide.name === "F"){
      array = rotateMidPieces(array)
      array = rotateCornerPieces(array)

      let save = newCube[1].value[5]
      newCube[1].value[5] = newCube[5].value[1]
      newCube[5].value[1] = newCube[3].value[3]
      newCube[3].value[3] = newCube[0].value[7]
      newCube[0].value[7] = save

      let save2 = newCube[1].value[8]
      newCube[1].value[8] = newCube[5].value[2]
      newCube[5].value[2] = newCube[3].value[0]
      newCube[3].value[0] = newCube[0].value[6]
      newCube[0].value[6] = save2

      let save3 = newCube[1].value[2]
      newCube[1].value[2] = newCube[5].value[0]
      newCube[5].value[0] = newCube[3].value[6]
      newCube[3].value[6] = newCube[0].value[8]
      newCube[0].value[8] = save3

      newCube[2].value = array
    }else if(clickedSide.name === "R"){
      array = rotateMidPieces(array)
      array = rotateCornerPieces(array)

      let save = newCube[2].value[5]
      newCube[2].value[5] = newCube[5].value[5]
      newCube[5].value[5] = newCube[4].value[3]
      newCube[4].value[3] = newCube[0].value[5]
      newCube[0].value[5] = save

      let save2 = newCube[2].value[8]
      newCube[2].value[8] = newCube[5].value[8]
      newCube[5].value[8] = newCube[4].value[0]
      newCube[4].value[0] = newCube[0].value[8]
      newCube[0].value[8] = save2

      let save3 = newCube[2].value[2]
      newCube[2].value[2] = newCube[5].value[2]
      newCube[5].value[2] = newCube[4].value[6]
      newCube[4].value[6] = newCube[0].value[2]
      newCube[0].value[2] = save3

      newCube[3].value = array
    }else if(clickedSide.name === "B"){
      array = rotateMidPieces(array)
      array = rotateCornerPieces(array)

      let save = newCube[3].value[5]
      newCube[3].value[5] = newCube[5].value[7]
      newCube[5].value[7] = newCube[1].value[3]
      newCube[1].value[3] = newCube[0].value[1]
      newCube[0].value[1] = save
      
      let save2 = newCube[3].value[8]
      newCube[3].value[8] = newCube[5].value[6]
      newCube[5].value[6] = newCube[1].value[0]
      newCube[1].value[0] = newCube[0].value[2]
      newCube[0].value[2] = save2

      let save3 = newCube[3].value[2]
      newCube[3].value[2] = newCube[5].value[8]
      newCube[5].value[8] = newCube[1].value[6]
      newCube[1].value[6] = newCube[0].value[0]
      newCube[0].value[0] = save3


      newCube[4].value = array
    }else if(clickedSide.name === "D"){
      array = rotateMidPieces(array)
      array = rotateCornerPieces(array)

      let save = newCube[1].value[7]
      newCube[1].value[7] = newCube[4].value[7]
      newCube[4].value[7] = newCube[3].value[7]
      newCube[3].value[7] = newCube[2].value[7]
      newCube[2].value[7] = save

      let save2 = newCube[1].value[6]
      newCube[1].value[6] = newCube[4].value[6]
      newCube[4].value[6] = newCube[3].value[6]
      newCube[3].value[6] = newCube[2].value[6]
      newCube[2].value[6] = save2

      let save3 = newCube[1].value[8]
      newCube[1].value[8] = newCube[4].value[8]
      newCube[4].value[8] = newCube[3].value[8]
      newCube[3].value[8] = newCube[2].value[8]
      newCube[2].value[8] = save3

      newCube[5].value = array
    }

    setCube(newCube)

  }

  function rotateMidPieces(array){
    let save = array[0]
    array[0] = array[6]
    array[6] = array[8]
    array[8] = array[2]
    array[2] = save
    return array
  }

  function rotateCornerPieces(array){
    let save2 = array[1]
    array[1] = array[3]
    array[3] = array[7]
    array[7] = array[5]
    array[5] = save2
    return array
  }

  return (
    <div className="App">
      <h1>Magic Cube Solver</h1>
      <div className='cube-container'>
      <div className='cube'>
      {cube?.map((side) => {
        return(
        <div className='side' key={side.name.toString()}>
          {side.value?.map((piece) => {
            if(piece.includes("5")){
              return(
                <div className={`${piece[0]} block clicker`} onClick={(e) => rotate(e, side.name)} key={piece}>
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
