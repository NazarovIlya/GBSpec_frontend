export class Bank {

  constructor(name) {
    this.name = name;
    this.clientList = [];
    this.scoreList = [];
  }

  addClient = (client) => this.clientList.push(client);

  openAccount = (client, score, amount) => {
    for (let i = 0; i < this.clientList.length; i++) {
      if (client === this.clientList[i]) {
        const item = { [score]: amount };
        this.scoreList.push(item);
        console.log(`Client ${client.name}, ${client.age} added`);
      }
    }
  }

  deposit = (accontNumber, amount) => {
    for (let i = 0; i < this.scoreList.length; i++) {
      if (Object.keys(this.scoreList[i]) == accontNumber) {
        this.scoreList[i][accontNumber] += amount;
        console.log(`Replenishment of the ${Object.keys(this.scoreList[i])} account in the amount of ${Object.values(this.scoreList[i])} Tugricks was completed successfully!`);
      }
    }
  }

  withdraw = (accontNumber, amount) => {
    for (let i = 0; i < this.scoreList.length; i++) {
      if (Object.keys(this.scoreList[i]) == accontNumber) {
        this.scoreList[i][accontNumber] -= amount;
        console.log(`The withdrawal of funds from the ${Object.keys(this.scoreList[i])} account in the amount of ${Object.values(this.scoreList[i])} was completed successfully`);
      }
    }
  }

  checkBalance = (accontNumber) => {
    for (let i = 0; i < this.scoreList.length; i++) {
      if (Object.keys(this.scoreList[i]) == accontNumber) {
        console.log(`Deposit accaunt #${Object.keys(this.scoreList[i])} balance is --> ${Object.values(this.scoreList[i])} Tugricks`);
      }
    }
  }
}

 