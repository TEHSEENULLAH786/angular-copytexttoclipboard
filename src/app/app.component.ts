import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('videoProgress') videoProgress: any;
  videoSource = 'assets/test.mp4';
  constructor() {}

  //   // this.sliceForm = this.formBuilder.group({
  //   //   startTime: [ '', Validators.pattern('[0-9_:]+') ],
  //   //   endTime: [ '', Validators.pattern('[0-9_:]+') ],
  //   // });
  // }
  // ngAfterViewInit() {
  //   const video: HTMLVideoElement = this.videoPlayer.nativeElement;
  //   // const progressBar: HTMLVideoElement = this.progressBar.nativeElement;
  //   this.videoPlayer.nativeElement.addEventListener('loadedmetadata', () => {
  //     this.totalTime = this.videoPlayer.nativeElement.duration;
  //     this.rangeValues = [0, this.totalTime];
  //     this.valueInput.nativeElement.innerHTML = this.toHHMMSS(
  //       this.rangeValues[0]
  //     );
  //     this.valueSpan.nativeElement.innerHTML = this.toHHMMSS(this.totalTime);
  //     // this.sliceForm.patchValue({
  //     //   startTime: this.toHHMMSS(this.rangeValues[0]),
  //     //   endTime: this.toHHMMSS(this.totalTime),
  //     // });
  //   });
  //   this.renderer.listen(video, 'timeupdate', () => {
  //     this.updateProgressBar();
  //   });
  // }
  // updateProgressBar() {
  //   const video: HTMLVideoElement = this.videoPlayer.nativeElement;
  //   // const progressBar: HTMLElement = this.progressBar.nativeElement;
  //   const progress = (video.currentTime / video.duration) * 100;
  //   // progressBar.style.width = progress + '%';
  //   // this.valueInput.nativeElement.innerHTML = this.toHHMMSS(progress);
  //   // if (
  //   //   this.sliceForm.value.endTime > 0 &&
  //   //   video.currentTime >= this.sliceForm.value.endTime
  //   // ) {
  //   //   video.currentTime = this.sliceForm.value.startTime;
  //   // }
  // }
  // toHHMMSS(val) {
  //   var sec_num = parseInt(val, 10);
  //   var hours = Math.floor(sec_num / 3600) as any;
  //   var minutes = Math.floor((sec_num - hours * 3600) / 60) as any;
  //   var seconds = (sec_num - hours * 3600 - minutes * 60) as any;

  //   if (hours < 10) {
  //     hours = '0' + hours;
  //   }
  //   if (minutes < 10) {
  //     minutes = '0' + minutes;
  //   }
  //   if (seconds < 10) {
  //     seconds = '0' + seconds;
  //   }

  //   // only mm:ss
  //   if (hours == '00') {
  //     var time = minutes + ':' + seconds;
  //   } else {
  //     var time = hours + ':' + minutes + ':' + seconds;
  //   }

  //   return time;
  // }
  // changeCheck(event) {
  //   var startValue = event?.values[0];
  //   var endValue = event?.values[1];
  //   this.valueInput.nativeElement.innerHTML = this.toHHMMSS(startValue);
  //   this.valueSpan.nativeElement.innerHTML = this.toHHMMSS(endValue);
  //   this.videoPlayer.nativeElement.currentTime = startValue;
  //   this.videoPlayer.nativeElement.endValue = endValue;
  //   // this.sliceForm.patchValue({
  //   //   startTime:this.toHHMMSS(startValue),
  //   //   endTime:this.toHHMMSS(endValue)
  //   // })
  // }
}
