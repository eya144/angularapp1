import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  message : string ;
  added : boolean = false 
  constructor(private produitService: ProduitService , private router : Router) { }

 
  addProduit(){
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['produits']).then(router => {
      window.location.reload();
    })

    }

    

  ngOnInit() {
  }

}
