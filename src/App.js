import React, { Component } from 'react'
import Keyboard from './keyboard/Keyboard'
import './App.css';
import Container from 'react-bootstrap/Container'
import Header from './header/Header';
import Notification from './notification/Notification';

import Tabs from 'react-bootstrap/Tabs'

import Tab from 'react-bootstrap/Tab'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'

import { words } from './repository/Data'

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.randomWord = this.getRandomWord();
    console.log('=> ', this.randomWord);
    this.state = {
      secretWord: this.randomWord,
      displayedWord: this.generateDisplayedWord(this.randomWord),
      foundCharacteresLength: 0,
      error: 0,
      score: 0,
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomWord() {
    const wordsLength = words.length;
    return words[this.getRandomInt(wordsLength)];
  }

  generateDisplayedWord(randomWord) {
    var displayedWord = '';
    for (let i = 0; i < randomWord.length; i++) {
      displayedWord = displayedWord + '_';
    }
    return displayedWord;
  }

  handleCardClick = key => {
    let { displayedWord, error } = this.state;
    var found = false;
    for (var i = 0; i < this.randomWord.length; i++) {
      if (this.randomWord.charAt(i) === key) {
        displayedWord = displayedWord.replaceAt(i, key);
        found = true;
      }
    }
    if (!found) {
      this.setState({ error: error + 1 });
    }
    this.setState(
      {
        displayedWord: displayedWord,
        foundCharacteresLength: displayedWord.replaceAll('_', '').length,
      }
    )
  }

  init = (won) => {
    this.randomWord = this.getRandomWord();
    console.log('=> ', this.randomWord);
    const { score } = this.state;
    this.setState(
      {
        secretWord: this.randomWord,
        displayedWord: this.generateDisplayedWord(this.randomWord),
        foundCharacteresLength: 0,
        error: 0,
        score: won ? score + 1 : score,
      }
    )
  }

  render() {
    const { secretWord, foundCharacteresLength, displayedWord, error, score } = this.state;
    const won = secretWord.length === foundCharacteresLength
    const failed = error > 6;
    return (
      <div>
        <Header></Header>
        {won && (
          <Notification type="success" />
        )}
        {failed && (
          <Notification type="danger" />
        )}
        <Container className="margin-top">
          <Tabs defaultActiveKey="game"
            transition={false}
            id="noanim-tab-example">
            <Tab eventKey="instruction" title="Instructions">
              <div className="">
                <h1>Welcome to Hangman!</h1>
                <p>
                  A game of guessing a word or phrase one letter at a time.
                </p>
                <ListGroup variant="flush">
                  <ListGroup.Item>All words relate to football.</ListGroup.Item>
                  <ListGroup.Item>You have 7 attempts to find the right word</ListGroup.Item>
                </ListGroup>
              </div>
            </Tab>
            <Tab eventKey="game" title="Game">
              <Row className="justify-content-md-center margin-top" >
                <Col md="auto h1 displayed-word">
                  {displayedWord}
                </Col>
              </Row>
              <Keyboard onClick={this.handleCardClick} error={error} won={won}></Keyboard>
              <p>
                Attempts:  <strong>{7 - error}</strong>
              </p>
              <p>
                Score:  <strong>{score}</strong>
              </p>
              {failed && <Button variant="danger" onClick={() => this.init(false)}>Try again</Button>}
              {won && <Button variant="success" onClick={() => this.init(true)}>Next word</Button>}
            </Tab>
          </Tabs>
        </Container>
      </div>

    );
  }

}

export default App;
