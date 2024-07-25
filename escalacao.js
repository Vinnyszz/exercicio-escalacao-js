function addPlayer() {
    const name = document.getElementById("name").value
    const position = document.getElementById("position").value
    const number = document.getElementById("number").value

    const confirmation = confirm("Escalar: " + name + " na poisção de " + position + "?")
    if (confirmation) {
        const teamList = document.getElementById("team-list")
        const playerItem = document.createElement("li")
        playerItem.id = "player-" + number
        //Aqui será escrito a mensagem dentro da tag li, que é a tag do playerItem
        playerItem.innerText = position + ":" + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById("position").value = ""
        document.getElementById("name").value = ""
        document.getElementById("number").value = ""
    }
}

function removePlayer() {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)

    //Nesse exemplo, ao usarmos o playerToRemove.innerText nós pegamos os valores inseridos pelo innerText la na função addPlayer.
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + " ?")

    if (confirmation) {
        document.getElementById("team-list").removeChild(playerToRemove)
        document.getElementById("numberToRemove").value = ""
    }


}