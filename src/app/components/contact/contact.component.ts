import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formulaire: FormGroup;
  messageAlert1: string = 'Le nom est necessaire';
  messageAlert2: string = 'Le Prenom est necessaire';
  messageAlert3: string = 'Le Mail est necessaire';
  messageAlert4: string = 'Le sujet est necessaire';
  messageAlert5: string = 'Le message est necessaire';

  constructor() {
    this.formulaire = new FormGroup({

      nom: new FormControl('', [Validators.required,
      Validators.minLength(3)]),
      prenom: new FormControl('', [Validators.required,
      Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      ]),
      sujet: new FormControl('', [Validators.required,
      Validators.minLength(3)]),
      message: new FormControl('', [Validators.required,
      Validators.minLength(5), Validators.maxLength(500)]),
    });

    this.formulaire.controls['nom'].valueChanges
      .subscribe(data => {
        console.log(data);
      }
    );
  }
  changement() {
    console.log(this.formulaire.value);
    console.log(this.formulaire);

  }

  ngOnInit() {
  }

}
