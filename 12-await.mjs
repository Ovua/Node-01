function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }

      });
    });
  }

  async function getResults() {
    try {
    const Tina = await luckyDraw('Tina')
    const Jorge = await luckyDraw('Jorge')
    const Julien = await luckyDraw('Julien')
    }
     catch(err) {
        console.log(err)
     }

}

getResults()