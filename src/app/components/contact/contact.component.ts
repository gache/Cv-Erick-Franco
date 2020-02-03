import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatafireService } from '../../services/datafire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 // formulaire
  formulaire: FormGroup;


  // Message erreur quand l'utilisateur ne rempli pas les critères

  messageAlertNom: string = 'Le Nom est necessaire dans ce champ';
  messageNom2: string = 'il faut  minumun trois caracteres';

  messageAlertPrenom: string = 'Le Prenom est necessaire dans ce champ';

  messageAlertMail: string = 'Le Mail est necessaire dans ce champ';
  messageAlertCaracter: string = 'il faut minimun cinq caracteres';
  messageAlertMail3: string = 'Le mail pas valide';

  messageAlertSujet: string = 'Le sujet est necessaire dans ce champ';
  messageAlertMessage: string = 'Le message est necessaire dans ce champ';
 

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formBuilder: FormBuilder,
              private fireService: DatafireService ) {

    this.formulaire = this.formBuilder.group ({

      nom:     new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
      prenom:  new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
      mail:    new FormControl('', [Validators.required, Validators.minLength(5),
                                    Validators.pattern(this.emailPattern)]),
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

    if (this.formulaire.valid) {
      // j'appel ma fonction du service pour recuperer l'information de mon formulaire
      this.fireService.garderMessage(this.formulaire.value);
      // fonction qui fait que mon formulaire se vide de manière automatique
      this.formulaire.reset();
      console.log(' valido');

    } else {
      console.log('no valido');
    }
  }

  clear() {
    this.formulaire.reset();
  }

  ngOnInit() {
  }

  get nom() { return this.formulaire.get('nom');}
  get prenom() { return this.formulaire.get('prenom');}
  get mail() { return this.formulaire.get('mail');}
  get sujet() { return this.formulaire.get('sujet');}
  get message() { return this.formulaire.get('message');}

}


 // console.log(this.formulaire.value);
    // console.log(this.formulaire);
    // Appel API pour enregistrer le message
    // TODO

    // Message enregistré, vider le formulaire
    // this.clear();