import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virtualPiano';
  pianoKeys: any;

  constructor() {
  }

  ngAfterViewInit(): void {  
    this.pianoKeys = document.querySelectorAll('.key');

    this.pianoKeys.forEach((pianoKey: any, i: any) => {
        const number = i < 9 ? '0' + (i + 1) : (i + 1)
        const newUrl = './assets/audios/key' + number + '.mp3'
        pianoKey.addEventListener('click', () => {
          this.playSound(newUrl)
          console.log('play')
        })
    })
  }

  playSound(newUrl: any) {
      console.log(newUrl)
      new Audio(newUrl).play()
  }

}
