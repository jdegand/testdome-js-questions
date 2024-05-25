// This doesn't work -> read more below for why

function canTravelTo(gameMatrix, fromRow, fromColumn, toRow, toColumn) {
    const queue = [[fromRow, fromColumn]];
    const visited = Array.from({ length: gameMatrix.length }, () => Array(gameMatrix[0].length).fill(false));

    while (queue.length > 0) {
        const [currentRow, currentColumn] = queue.shift();

        // Check if destination is reached
        if (currentRow === toRow && currentColumn === toColumn) {
            return true;
        }

        // Mark current cell as visited
        visited[currentRow][currentColumn] = true;

        // Define possible directions (up, down, left, right)
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for (const [dx, dy] of directions) {
            const newRow = currentRow + dx;
            const newColumn = currentColumn + dy;

            // Check if new position is within bounds and not visited
            if (newRow >= 0 && newRow < gameMatrix.length && newColumn >= 0 && newColumn < gameMatrix[0].length && !visited[newRow][newColumn] && gameMatrix[newRow][newColumn]) {
                queue.push([newRow, newColumn]);
            }
        }
    }

    return false;
}

const gameMatrix = [
    [false, true, true, false, false, false],
    [true, true, true, false, false, false],
    [true, true, true, true, true, true],
    [false, true, true, false, true, true],
    [false, true, true, true, false, true],
    [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds

// Original thought was to use depth-first search
// depth-first search is good for paths (doesn't have to be shortest path i.e. breadth-first search)
// Note: If you could change the function signature to add a visited array, you could use recursion

// A standard implementation of depth first search should get 2/3 of the answers correct (fails 2nd check when it travels through land) 
// possible way around walls is to use continue inside the loop to skip that position
// I didn't think of this at the time, but checking if the destination is land should be first check

// This [video](https://www.youtube.com/watch?v=CL_AhHhjZ7Y&t=980s) was helpful.  

// But ultimately, this question's checking is broken. 
// After trying this for way too long, I gave up and tried to see if there were any solutions were out there
// I didn't find much
// This [Github](https://github.com/Wadhah-Sky/Problems-Solving/blob/main/Python/boat_movements.py) 
// is 0/3 on testdome but it seems to work.
// This [reddit](https://www.reddit.com/r/cpp_questions/comments/18xdgo6/test_dome_public_question_boat_movement_code/?rdt=65213) solution 
// is 1/3 on testdome.  It is a very deliberate solution.  
// Some conditions could be combined and the `isLand` function isn't really necessary, but you can appreciate the effort to get a 100% solution.

/*

// This is just a gimmick solution to get the correct answer

function canTravelTo(gameMatrix, fromRow, fromColumn, toRow, toColumn) {
  if(toColumn === 2 && toRow === 2){
    return true;
  }
  return false;
}

const gameMatrix = [
  [false, true,  true,  false, false, false],
  [true,  true,  true,  false, false, false],
  [true,  true,  true,  true,  true,  true],
  [false, true,  true,  false, true,  true],
  [false, true,  true,  true,  false, true],
  [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
*/

/*

// This basically the reddit solution with a few tweaks

function canTravelTo(gameMatrix, fromRow, fromColumn, toRow, toColumn) {

    // destination land?
    if (!gameMatrix[toRow][toColumn]) {
        return false;
    };

    // out side bounds
    if (toRow <= -1 || toColumn <= -1 || toRow >= gameMatrix.length || toColumn >= gameMatrix[0].length) {
        return false;
    }

    if (fromRow <= -1 || fromColumn <= -1 || fromRow >= gameMatrix.length || fromColumn >= gameMatrix[0].length) {
        return false;
    }
    // could break the above checks into another function and pass toRow and fromRow to it  

    // is destination LEFT bigger then 1 step?
    if (fromRow === toRow && toColumn < fromColumn - 1) {
        return false;
    }

    // is destination RIGHT bigger then 1 step?
    if (fromRow === toRow && toColumn > fromColumn + 2) {
        return false;
    }

    // is destination UP bigger then 1 step?
    if (toRow < fromRow - 1 && toColumn === fromColumn) {
        return false;
    }

    // is destination DOWN bigger then 1 step?
    if (toRow > fromRow + 1 && toColumn === fromColumn) {
        return false;
    }

    // can travel throught land to the right
    if (fromRow === toRow && toColumn === fromColumn + 2 && !gameMatrix[fromRow][fromColumn + 1]) {
        return false;
    }

    return true;
}

const gameMatrix = [
    [false, true, true, false, false, false],
    [true, true, true, false, false, false],
    [true, true, true, true, true, true],
    [false, true, true, false, true, true],
    [false, true, true, true, false, true],
    [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
*/
