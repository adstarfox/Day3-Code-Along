let roboHealth = 100
let roboAttack = 20

let robo2Health = 100
let robo2Attack = 25

if (roboAttack > robo2Attack){
    console.log (`Robo has a higher attack than Robo2`)
} else {
    console.log (`Robo2 has a higher attack power than Robo`)
}

// roboHealth -= robo2Attack

// console.log(roboHealth)

while (roboHealth > 30){
    roboHealth -= robo2Attack
    console.log(`Robo2 attacks robo. Robo's health is now ${roboHealth}`)
}

for (let i = 0; i < 2; i++){
    if (roboHealth + 50 > 100){
        roboHealth = 100
    } else {
        roboHealth += 50
    }
}

console.log(`Robo's health is now at ${roboHealth}`)

let roboDefense = 15

roboHealth -= robo2Attack - roboDefense

console.log(roboHealth)

let attacks = 0

while (roboHealth > 30){
    roboHealth -= robo2Attack - roboDefense
    console.log(`Robo2 attacks robo. Robo's health is now ${roboHealth}`)
    attacks++
}

console.log(`It took ${attacks} attacks`)