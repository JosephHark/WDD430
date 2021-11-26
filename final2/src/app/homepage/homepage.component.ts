import { Component, OnInit } from '@angular/core';
import { Random, browserCrypto } from "random-js";
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
declare const require: any;
const words = require('an-array-of-english-words');
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  question: any = <any>{};
  answer: string;
  timer;
  started: boolean;
  rightWord: string;
  inputtedAnswers: string[] = [];
  elapsedTime;
  message: string;
  numLetters: number;
  constructor() { }
  ngOnInit() {
    if (!localStorage.getItem('numLetters')) {
      localStorage.setItem('numLetters', '4');
    }
  }
  ngOnDestroy() {
    this.stop();
  }
  start() {
    this.message = '';
    this.started = true;
    const random = new Random(browserCrypto);
    this.numLetters = +localStorage.getItem('numLetters');
    const filteredWords = words.filter(w => w.length == this.numLetters);
    const index = random.integer(0, filteredWords.length - 1);
    this.rightWord = filteredWords[index];
    console.log(this.rightWord);
    let numSeconds = 0;
    this.timer = setInterval(() => {
      numSeconds++;
      this.elapsedTime = moment.utc(numSeconds * 1000).format('H:mm:ss');
    }, 1000)
  }
recordFastestTime() {
    const currentFastTime = moment(this.getFastestTime(), 'H:mm:ss');
    const newFastestTime = moment(this.elapsedTime, 'H:mm:ss')
    if (currentFastTime > newFastestTime) {
      localStorage.setItem(
        'fastestTime',
        this.elapsedTime
      );
    }
  }
  stop() {
    this.started = false;
    this.inputtedAnswers = [];
    clearInterval(this.timer);
  }
  checkAnswer(answerForm: NgForm) {
    if (answerForm.invalid) {
      return;
    }
    this.inputtedAnswers.push(this.answer);
    if (this.answer == this.rightWord) {
      this.stop();
      this.recordFastestTime();
      this.message = `You win! The correct word is ${this.rightWord}`;
    }
    this.answer = '';
  }
  getFastestTime() {
    return localStorage.getItem('fastestTime') || '1000000:00:00';
  }
  getNumBullsandCows(answer: number) {
    const rightAnsStr = this.rightWord.toString().split('');
    const answerStr = answer.toString().split('');
    const numBulls = rightAnsStr.filter((r, i) => rightAnsStr[i] == answer[i]).length;
    const numCows = answerStr.length - numBulls;
    return `${numBulls} bulls, ${numCows} cows`;
  }
}