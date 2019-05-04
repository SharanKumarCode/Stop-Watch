import { Time } from './Time';
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-watch',
  templateUrl: './display-watch.component.html',
  styleUrls: ['./display-watch.component.scss']
})
export class DisplayWatchComponent implements OnInit {

  time:Time = {
    hours:0,
    minutes:0,
    seconds:0,
    minseconds:0
  }

  watchStatus:string = "START";
  interval:any = null;

  constructor() { }

  ngOnInit() {
  }

  toggleWatch(){
    if(this.watchStatus === "START"){
      this.watchStatus = "PAUSE";
      this.runTimer();
      $('.wholeContainer').addClass('animateContainer');
    } else if(this.watchStatus === "PAUSE"){
      this.watchStatus = "START"; 
      clearInterval(this.interval);
      $('.wholeContainer').removeClass('animateContainer');
    }
  }

  runTimer(){
    this.interval = setInterval(()=>{
      if(this.time.minseconds < 100){
      this.time.minseconds = this.time.minseconds + 1;
      } else {
        this.time.minseconds = 0;
        this.updateSeconds();
      }
    },10);
  }

  resetTimer(){
    this.time.hours = 0;
    this.time.minseconds = 0;
    this.time.minutes = 0;
    this.time.seconds = 0;
  }

  updateSeconds(){
    if(this.time.seconds <= 58){
    this.time.seconds = this.time.seconds + 1;
    } else {
      this.time.seconds = 0;
      this.updateMinutes();
    }
  }

  updateMinutes(){
    if(this.time.minutes < 58){
    this.time.minutes = this.time.minutes + 1;
    } else {
      this.time.minutes = 0;
      this.updateHours();
    }
  }

  updateHours(){
    if(this.time.hours < 100){
    this.time.hours = this.time.hours + 1;
    } else if(this.time.hours >= 100){
      this.time.hours = 0;
    }
  }
}