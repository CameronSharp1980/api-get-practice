function GetService() {

    //'//bcw-getter.herokuapp.com/?url=';
    // var url = '//pokeapi.co/api/v2/pokemon'

    // BCW GETTER
    var bcwGetter = '//bcw-getter.herokuapp.com/?url='

    // HEARTHSTONE API
    var hearthStoneUrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards'
    var hearthStoneGetUrl = bcwGetter + encodeURIComponent(hearthStoneUrl)
    var hearthStoneData

    // POKEAPI
    var pokeApiUrl = 'http://pokeapi.co/api/v2/pokemon'
    var pokeGetUrl = bcwGetter + encodeURIComponent(pokeApiUrl)
    var pokeDex
    var pokeNextUrl
    var pokePrevUrl


    this.getPokemon = function getPokemon(urlVar) {
        //GET REQUEST AJAX

        //PROMISE
        $.get(pokeGetUrl)
            .then(function (res) {
                // debugger
                //save data to local variable to work with
                pokeDex = JSON.parse(res)
                pokeGetUrl = bcwGetter + encodeURIComponent(pokeDex.next)
                // pokeNextUrl = pokeDex.next
                // pokePrevUrl = bcwGetter + encodeURIComponent(pokeDex.previous)
                // pokeNextUrl = bcwGetter + encodeURIComponent(pokeDex.next)
                // console.log(pokeNextUrl)
                // console.log(pokePrevUrl)
                console.log(pokeDex)
                console.log(pokeGetUrl)

            })
            .fail(function (res) {
                // debugger
                console.log("The API hates you, try something else!")
            })









        // var req = new XMLHttpRequest(url)

        // req.method = 'POST'
        // req.body = {}

        // req.onsuccess = function(data){
        //     console.log(data)
        // }
        // req.fail = function(){

        // }
        // req.send()


    }


    var dndApiUrl = 'http://dnd5eapi.co/api/spells'
    var dndGetUrl = bcwGetter + encodeURIComponent(dndApiUrl)
    var dndSpells

    this.getDnd = function getDnd() {
        //GET REQUEST AJAX

        //PROMISE
        $.get(dndGetUrl)
            .then(function (res) {
                // debugger
                //save data to local variable to work with
                dndSpells = JSON.parse(res)
                console.log(dndSpells)
                // drawDndButtons(dndSpells)
                
            })
            .fail(function (res) {
                // debugger
                console.log("The API hates you, try something else!")
            })

        // var req = new XMLHttpRequest(url)

        // req.method = 'POST'
        // req.body = {}

        // req.onsuccess = function(data){
        //     console.log(data)
        // }
        // req.fail = function(){

        // }
        // req.send()


    }

    this.getSpells = function getSpells() {
        return JSON.parse(JSON.stringify(dndSpells))
    }

    // function drawDndButtons(dndSpells) {
    //     var dndElem = document.getElementById('dnd-buttons')
    //     var template = ''
    //     for (var i = 0; i < dndSpells.results.length; i++) {
    //         var spell = dndSpells.results[i];
    //         template += `

    //         <button onclick="app.controllers.getController.drawSpell('${spell.url}')">${spell.name}</button>
    //         `
    //     }
    //     // console.log(template)
    //     dndElem.innerHTML = template
    // }

    this.drawSpell = function drawSpell(url) {
        var statsElem = document.getElementById('dnd-content')
        var spellReqUrl = bcwGetter + encodeURIComponent(url)

        $.get(spellReqUrl)
            .then(function (res) {
                var spellObject = JSON.parse(res)
                console.log(JSON.parse(res))
                statsElem.innerHTML = `
                <h1>Spell Name: ${spellObject.name}</h1>
                <h3>Description</h3>
                <h6>${spellObject.desc[0]}</h6>
                <h6>Casting Time: ${spellObject.casting_time}</h6>
                `
            })
            .catch(function (res) {
                console.log("The API hates you, try something else!")
            })
    }
}