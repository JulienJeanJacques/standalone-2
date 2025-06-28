import {Component, ViewChild, ElementRef} from '@angular/core';
    //
    @Component({
    selector:    'app-e10-e4i',
    templateUrl: 'e10-e4i.html'
    })
    export class E10E4iComponent {
    isPlaying = false;
    @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

    constructor() {}   
    
    pauseVideo() {
    if (this.videoPlayer) {
    this.videoPlayer.nativeElement.pause(); 
            }
    this.isPlaying = false; 
    }

    onVideoEnded() {
    this.isPlaying = false; 
    }
    
    }
