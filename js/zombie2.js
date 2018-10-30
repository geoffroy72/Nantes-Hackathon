const directionZombie2 = {
	"BAS"    : 0,
	"GAUCHE" : 1,
	"DROITE" : 2,
	"HAUT"   : 3
}



function Personnage(url, x, y, direction) {
	this.x = x; // (en cases)
	this.y = y; // (en cases)
	this.direction = direction;
	
	// Chargement de l'image dans l'attribut image
	this.image = new Image();
	this.image.referenceDuPerso = this;
	this.image.onload = function() {
		if(!this.complete) 
			throw "Erreur de chargement du sprite nommé \"" + url + "\".";
		
		// Taille du personnage
		this.referenceDuPerso.largeur = this.width / 4;
		this.referenceDuPerso.hauteur = this.height / 4;
	}
	this.image.src = "sprites/" + url;
}

Personnage.prototype.dessinerPersonnage = function(context) {
	// Ici se trouvera le code de dessin du personnage
}

context.drawImage(
	this.image, 
	0, this.direction * this.hauteur, // Point d'origine du rectangle source à prendre dans notre image
	this.largeur, this.hauteur, // Taille du rectangle source (c'est la taille du personnage)
	(this.x * 17,25) - (this.largeur / 2) + 16, (this.y * 26) - this.hauteur + 24, // Point de destination (dépend de la taille du personnage)
	this.largeur, this.hauteur // Taille du rectangle destination (c'est la taille du personnage)
);

// Liste des personnages présents sur le terrain.
this.personnages = new Array();

// Pour ajouter un personnage
Map.prototype.addPersonnage = function(perso) {
	this.personnages.push(perso);
}

// Dessin des personnages
for(var i = 0, l = this.personnages.length ; i < l ; i++) {
	this.personnages[i].dessinerPersonnage(context);
}

map.addPersonnage(new Personnage("exemple.png", 7, 14, DIRECTION.HAUT));
map.addPersonnage(new Personnage("exemple.png", 7, 0, DIRECTION.BAS));
map.addPersonnage(new Personnage("exemple.png", 0, 7, DIRECTION.DROITE));
map.addPersonnage(new Personnage("exemple.png", 14, 7, DIRECTION.GAUCHE));

