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
        })
    })

    document.addEventListener('keydown', (event) => {
      let number = '';
      switch (event.keyCode) {
        case 20:
          number = '01';
          break;
        case 81:
          number = '02';
          break;
        case 65:
          number = '03'
          break
        case 87:
          number = '04'
          break
        case 83:
          number = '05'
          break
        case 68:
          number = '06'
          break
        case 69:
          number = '07'
          break
        case 70:
          number = '08'
          break
        case 82:
          number = '09'
          break
        case 71:
          number = '10'
          break
        case 84:
          number = '11'
          break
        case 72:
          number = '12'
          break
        case 74:
          number = '13'
          break
        case 89:
          number = '14'
          break
        case 75:
          number = '15'
          break
        case 85:
          number = '16'
          break
        case 76:
          number = '17'
          break
        case 73:
          number = '18'
          break
        case 186:
          number = '19'
          break
        case 222:
          number = '20'
          break
        case 79:
          number = '21'
          break
        case 220:
          number = '22'
          break
        case 80:
          number = '23'
          break
        case 13:
          number = '24'
          break
        default:
          number = ''
          break;
      }

      if (number) {
        const newUrl = './assets/audios/key' + number + '.mp3'
        this.playSound(newUrl)

      }
    })
  }

  playSound(newUrl: any) {
      new Audio(newUrl).play()
  }

}
