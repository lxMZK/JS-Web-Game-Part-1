let item = 11
let speed = 10

// Character Movement
document.onkeydown = keyDown
document.onkeyup = keyUp
function keyDown(e) {
    switch (e.keyCode) {
        case 37:
            // Move Left
            greenCharacter.src = 'assets/green-character/west.gif'
            if (parseInt(greenCharacter.style.left) - speed > 0) {
                greenCharacter.style.left = (parseInt(greenCharacter.style.left) - speed) + 'px'
            }
            break;
        case 38:
            // Move Up
            greenCharacter.src = 'assets/green-character/north.gif'
            if (parseInt(greenCharacter.style.bottom) + speed < 500) {
                greenCharacter.style.bottom = (parseInt(greenCharacter.style.bottom) + speed) + 'px'
            }
            break;
        case 39:
            // Move Right
            greenCharacter.src = 'assets/green-character/east.gif'
            if (parseInt(greenCharacter.style.left) + speed < (window.innerWidth - greenCharacter.width)) {
                greenCharacter.style.left = (parseInt(greenCharacter.style.left) + speed) + 'px'
            }
            break;
        case 40:
            // Move Down
            greenCharacter.src = 'assets/green-character/south.gif'
            if (parseInt(greenCharacter.style.bottom) - speed > 0) {
                greenCharacter.style.bottom = (parseInt(greenCharacter.style.bottom) - speed) + 'px'
            }
            break;
        case 16:
            // Shift Key
            speed = 20
            break;
        default:
            console.log(e.keyCode)
            break;
    }
}

function keyUp(e) {
    if (e.keyCode == 16) {
        speed = 10
    }
}

function newImage(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)
    return img
}

function newItem(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    img.style.cursor = 'pointer'
    document.body.append(img)

    // Functionality for inventory
    img.addEventListener('dblclick', function () {
        if (img.style.top != '11px') {
            img.style.left = item + 'px'
            img.style.top = '11px'
            item += 65
        }
    })
}

// Renders grass up to well
for (let y = 0; y <= 400; y += 100) {
    for (let x = 0; x < (window.innerWidth); x += 100) {
        newImage('grass.png', x + 'px', y + 'px')
    }
}

// Renders sky above grass
for (let y = 500; y <= window.innerHeight; y += 100) {
    for (let x = 0; x < (window.innerWidth); x += 100) {
        newImage('sky.png', x + 'px', y + 'px')
    }
}

// Renders images
newImage('inv.png')
let greenCharacter = newImage('green-character.gif', '100px', '100px')
newImage('pine-tree.png', '450px', '200px')
newImage('tree.png', '200px', '300px')
newImage('pillar.png', '350px', '100px')
newImage('crate.png', '150px', '200px')
newImage('well.png', '500px', '425px')

// Creates interactables
newItem('sword.png', '500px', '405px')
// ***Notice: Asset is misspelled***
newItem('sheild.png', '165px', '185px')
newItem('staff.png', '600px', '100px')