import React, { useState,} from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, Paper, Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//mainQuizPage component
function MainQuizPage() {
  const navigate = useNavigate(); //navigation function for avatar
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null); //current selected question index
  const [anchorEl, setAnchorEl] = useState(null); //state to track current element that the menu is anchored to
  const [menuQuestionIndex, setMenuQuestionIndex] = useState(null); //state for the current question index in the menu 
  const [quizStarted, setQuizStarted] = useState(false); //to track if the quiz has started or not
  const [score, setScore] = useState(null);//for score

  //generate question based on index
  const generateQuestion = (i) => {
    const correctAnswer = `${2 * (i + 1)}`;
    const options = [correctAnswer, `${2 * (i + 2)}`, `${2 * (i + 3)}`, `${2 * (i + 4)}`].sort(() => Math.random() - 0.5);
    return {
      text: `${i + 1} + ${i + 1}`,
      options,
      correct: correctAnswer,
      userAnswer: null,
      answered: false
    };
  }

  //store list of questions
  const [questions, setQuestions] = useState(Array.from({ length: 10 }, (_, i) => generateQuestion(i)));

  //open menu
  const handleMenuOpen = (event, index) => {
    //prevent opening the menu if the quiz has started
    if (quizStarted) {
      return;
    }
    setAnchorEl(event.currentTarget);
    setMenuQuestionIndex(index);
  };

  //close menu function
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuQuestionIndex(null);
  };

  //delete question function
  const deleteQuestion = () => {
    if (quizStarted) {
      console.log("Can't delete questions during an active quiz");
      return;
    }
    setQuestions(prev => prev.filter((_, index) => index !== menuQuestionIndex));
    handleMenuClose();
  };

  //edit question function
  const editQuestion = () => {
    if (quizStarted) {
      console.log("Can't edit questions during an active quiz");
      return;
    }
    console.log('Editing question:', menuQuestionIndex + 1);
    handleMenuClose();
  };

  //add question
  const addQuestion = () => {
    if (quizStarted) {
      console.log("Can't add questions during an active quiz");
      return;
    }
    setQuestions(prev => [...prev, generateQuestion(prev.length)]);
  };

  //start quiz button
  const startQuiz = () => {
    setQuizStarted(true);
  };

  //check if answer is correct
  const checkAnswer = (option) => {
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      newQuestions[selectedQuestionIndex].userAnswer = option;
      newQuestions[selectedQuestionIndex].answered = true;
      checkIfQuizIsFinished();
      return newQuestions;
    });
  };


  //to determine the styles for each option
  const getOptionStyle = (option, question) => {
    if (!question.answered) return {}; 
    if (option === question.userAnswer && option === question.correct) return { backgroundColor: 'green' }; 
    if (option === question.userAnswer) return { backgroundColor: 'red' }; 
    if (option !== question.userAnswer && option === question.correct) return { backgroundColor: 'green' }; 
    return {};
  };

  //calculate and update the score
  const calculateScore = () => { const correctAnswers = questions.reduce((acc, question) => {
    return acc + (question.userAnswer === question.correct ? 1 : 0);}, 0);
    const scorePercentage = (correctAnswers / questions.length) * 100;
    setScore(scorePercentage);
  };

  //check if quiz completed
  const checkIfQuizIsFinished = () => { 
    const allAnswered = questions.every(question => question.answered); 
    if (allAnswered) {calculateScore();}
  };



  return (
    <div>

        {/*AppBar for the main header*/}
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h2" style={{ margin: 0 }}>
            Quiz
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={() => navigate('/profile/:UserId')}>
              <Avatar alt="User Profile" src="https://via.placeholder.com/40" />
            </Button>
            <Button variant="contained">
              LEADERBOARD
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <Paper elevation={3} style={{ width: '20%', maxHeight: '100vh', overflow: 'auto', padding: '10px' }}>
          {/*left side bar for all the question*/}
          <List>

            {/*loop thought to diplay each question*/}
            {questions.map((_, index) => (
              <ListItem button key={index} onClick={() => { setSelectedQuestionIndex(index); }}>
                {`Question ${index + 1}`}

                {/*option menu the thrre dots to edit and delte the question*/}
                <Button style={{ marginLeft: '10px', color: 'black', textTransform: 'none' }} 
                        disabled={quizStarted} 
                        onClick={(e) => handleMenuOpen(e, index)}>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '4px' }}>
                    <span style={{ color: 'black' }}>•</span>
                    <span style={{ color: 'black' }}>•</span>
                    <span style={{ color: 'black' }}>•</span>
                  </div>
                </Button>
            
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl) && menuQuestionIndex === index}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={editQuestion}>Edit</MenuItem>
                  <MenuItem onClick={deleteQuestion}>Delete</MenuItem>
                </Menu>
              </ListItem>
            ))}
          </List>


         {/*Add question and start quiz button*/}
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
            <Button variant="contained" color="primary" onClick={addQuestion} disabled={quizStarted}>
              Add Question
            </Button>
            {!quizStarted && (
              <Button variant="contained" color="primary" onClick={startQuiz}>
                Start Quiz
              </Button>
            )}
          </div>
        </Paper>
        

        {/*diplay questions and answer options*/}
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {selectedQuestionIndex !== null && (
            <>
              <Typography variant="h4" component="h2" style={{ marginBottom: '30px' }}>
                {`Question ${selectedQuestionIndex + 1}`}
              </Typography>
              <Typography variant="h4" component="h2" style={{ marginBottom: '30px' }}>
                {questions[selectedQuestionIndex].text}
              </Typography>
              
              {/*show answeer woptions when quiz is started*/}
              {quizStarted && (
                <>
                    {/*top two options*/}
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', marginBottom: '20px' }}>
                    {questions[selectedQuestionIndex].options.slice(0, 2).map((option, index) => (
                      <Button
                        key={index}
                        variant="contained"
                        style={getOptionStyle(option, questions[selectedQuestionIndex])}
                        onClick={() => !questions[selectedQuestionIndex].answered && checkAnswer(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>

                        {/*bottom two option*/}
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', marginBottom: '40px' }}>
                    {questions[selectedQuestionIndex].options.slice(2, 4).map((option, index) => (
                      <Button
                        key={index}
                        variant="contained"
                        style={getOptionStyle(option, questions[selectedQuestionIndex])}
                        onClick={() => !questions[selectedQuestionIndex].answered && checkAnswer(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>

                   {/*show result of question*/}     
                  {questions[selectedQuestionIndex].answered && (
                    <Typography variant="h5" component="h2">
                      {questions[selectedQuestionIndex].userAnswer === questions[selectedQuestionIndex].correct
                        ? "Correct"
                        : `Incorrect`}
                    </Typography>
                  )}
                </>
              )}
            </>
          )}
        </div>
        {/* Display score if the quiz has finished */}
{score !== null && (
  <Typography variant="h4" component="h2">
    {`Your score: ${score.toFixed(2)}%`}
  </Typography>
)}

      </div>
    </div>
  );
}

export default MainQuizPage;