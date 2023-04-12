function reviewUser(stars: number | false) {
    if (typeof stars === "number") {

        if (stars > 0 && stars < 6) {
            console.log(`O usuário enviou ${stars} estrelas`)
        } else {
            console.log("Número de estrelas inválido")
        }

    }

    else {
        console.log("Usuário não enviou estrelas")
    }
}

reviewUser(5)
reviewUser(false)