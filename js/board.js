var board = [
    ["a0", "b0", "c0", "d0", "e0", "f0", "g0", "h0"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]
];

let queen = {
    pos: {
        x: 4,
        y: 0
    }
};

console.log(" Queen position: " + board[queen.pos.x][queen.pos.y]);

let direction = "n";
let steps = 2;

changeDirection(direction, steps);

function changeDirection(direction, steps) {
    switch (direction) {
        case 'n': {
            let temp = queen.pos.y + steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.y = temp;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }


        case 's': {
            let temp = queen.pos.y - steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.y = temp;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }

        case 'e': {
            let temp = queen.pos.x + steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.x = temp;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }


        case 'w': {
            let temp = queen.pos.x - steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.x = temp;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }

        case 'ne': {
            let temp = queen.pos.x + steps;
            let temp1 = queen.pos.y + steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.x = temp;
                queen.pos.y = temp1;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }

        case 'nw': {
            let temp = queen.pos.x - steps;
            let temp1 = queen.pos.y + steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.x = temp;
                queen.pos.y = temp1;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }

        case 'sw': {
            let temp = queen.pos.x + steps;
            let temp1 = queen.pos.y - steps;
            if (temp1 > 8 && temp1 < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.x = temp;
                queen.pos.y = temp1;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }

        case 'se': {
            let temp = queen.pos.x + steps;
            let temp1 = queen.pos.y + steps;
            if (temp1 > 8 && temp1 < 0) {
                console.log("Outside the Boundary")
            } else {
                queen.pos.x = temp;
                queen.pos.y = temp1;
                console.log("Current Position is :" + board[queen.pos.x][queen.pos.y])
            }
            break;
        }

    }
}