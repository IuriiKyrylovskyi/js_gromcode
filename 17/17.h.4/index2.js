//export
const user = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const setFullName = function (name) {
  const splited = name.split(' ');
  this.firstName = splited[0];
  this.lastName = splited[1];
};

setFullName.call(user, 'John Doe');
console.log(user.firstName);
console.log(user.lastName);
console.log(user);
console.log(user.getFullName());
