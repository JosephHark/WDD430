import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  settings: any = <any>{};
  fastestTime: string;
constructor(
) { }
ngOnInit() {
    if (!localStorage.getItem('numLetters')) {
      localStorage.setItem('numLetters', '4');
    }
    this.settings.numLetters = +localStorage.getItem('numLetters');
    this.fastestTime = localStorage.getItem('fastestTime');
  }
  save(settingsForm: NgForm) {
    if (settingsForm.invalid) {
      return;
    }
    localStorage.setItem('numLetters', this.settings.numLetters || 4);
    this.presentToast();
  }
  clear() {
    localStorage.removeItem('fastestTime');
    this.fastestTime = localStorage.getItem('fastestTime');
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }
}