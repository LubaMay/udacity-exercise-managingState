import React, {Component} from 'react'

class Game extends Component {
	constructor(props){
    	super(props)
      	const valuesArr = this.makeNewQuestion()
      	this.state = {
        	value1: valuesArr[0],
          	value2: valuesArr[1],
          	value3: valuesArr[2],
          	proposedAnswer: valuesArr[3],
          	numCorrect:valuesArr[4],
          	numQuestions: valuesArr[5]
          
        }
    }
  
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100)
    const value2 =  Math.floor(Math.random() * 100)
    const value3 =  Math.floor(Math.random() * 100)
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3
    const numCorrect = 0;
    const numQuestions = 0;	
    return [value1, value2, value3, proposedAnswer, numCorrect, numQuestions]
  }


	rerenderEquation = () => {
      const [value1, value2, value3, proposedAnswer] = this.makeNewQuestion()

    	this.setState({
        	value1: value1,
          	value2: value2,
          	value3: value3, 
          	proposedAnswer: proposedAnswer
        })
    }

  correctAnswer = (btnValue) => {
    const {value1, value2, value3, proposedAnswer} = this.state
    const correctEquation = (value1 + value2 + value3) === proposedAnswer
	if(correctEquation && btnValue){
    	this.setState((prevState) => ({
        	numCorrect: prevState.numCorrect + 1,
          	numQuestions: prevState.numQuestions + 1
        }))
    } else if(!correctEquation && !btnValue) {
      this.setState((prevState) => ({
        	numCorrect: prevState.numCorrect + 1,
          	numQuestions: prevState.numQuestions + 1
        }))
    } else {
    	this.setState((prevState) => ({
          	numQuestions: prevState.numQuestions + 1
        }))
    }
    
    this.rerenderEquation()
  }


  render(){ 
  	return (
    	<div>
      	<div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.correctAnswer(true)}>True</button>
          <button onClick={()=>this.correctAnswer(false)}>False</button>
          <p className="text">
            Your Score: {`${this.state.numCorrect}/${this.state.numQuestions}`}
          </p>
      	</div>
    )
  }
}

export default Game