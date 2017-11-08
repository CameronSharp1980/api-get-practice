function GetController() {
    var getService = new GetService();

    this.getPokemon = function getPokemon(urlVar) {
        getService.getPokemon(urlVar)
    }

    this.getDnd = function getDnd() {
        getService.getDnd()
    }

    this.drawSpell = function drawSpeel(url) {
        getService.drawSpell(url)
    }
}