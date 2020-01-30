import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 // formulaire 
  formulaire: FormGroup;
// Message d'erreur sur les input
  messageAlert1: string = 'Le nom est necessaire dans ce champ';
  messageAlert2: string = 'Le Prenom est necessaire dans ce champ';
  messageAlert3: string = 'Le Mail est necessaire dans ce champ';
  messageAlert4: string = 'Le sujet est necessaire dans ce champ';
  messageAlert5: string = 'Le message est necessaire dans ce champ';

  constructor(private formBuilder: FormBuilder ) {

    this.formulaire = this.formBuilder.group ({

      nom:     new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
      prenom:  new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
      mail:    new FormControl('', [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),]),
      sujet:   new FormControl('', [Validators.required,
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
    // Appel API pour enregistrer le message
    // TODO

    // Message enregistré, vider le formulaire
    // this.clear();
  }

  clear() {
    this.formulaire.reset();
  }

  ngOnInit() {
  }

}
