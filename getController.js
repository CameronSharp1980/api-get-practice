function GetController() {
    var getService = new GetService();

    this.getPokemon = function getPokemon(urlVar) {
        getService.getPokemon(urlVar)
    }
    this.drawDndButtons = function drawDndButtons() {
        var dndSpells = getService.getSpells()
        var dndElem = document.getElementById('dnd-buttons')
        var template = ''
        for (var i = 0; i < dndSpells.results.length; i++) {
            var spell = dndSpells.results[i];
            template += `
                        
                        <button onclick="app.controllers.getController.drawSpell('${spell.url}')">${spell.name}</button>
                        `
        }
        // console.log(template)
        dndElem.innerHTML = template
    }

    this.getDnd = function getDnd() {
        getService.getDnd()
    }


    this.drawSpell = function drawSpell(url) {
        getService.drawSpell(url)
    }
}