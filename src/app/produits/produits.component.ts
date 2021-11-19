import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  
})
export class ProduitsComponent implements OnInit {
  

  produits : Produit[];

  constructor(private produitService : ProduitService , private router : Router){
    //this.produits = produitService.listeProduits();
  }


  SuprimerProduitDuTableau(prod : Produit) {
    this.produits.forEach((cur, index) => {
    if(prod.idProduit=== cur.idProduit) {
    this.produits.splice(index, 1);
    }
    });
  }


  supprimerProduit(p: Produit)
   {
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
   console.log("produit supprimé");
   this.SuprimerProduitDuTableau(p);
   });
   this.router.navigate(['produits']).then(() => {
   window.location.reload();
   });
   }
  

  ngOnInit() : void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  } 

}
