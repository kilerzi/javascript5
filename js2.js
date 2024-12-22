const onepeice = {
  name: "one piece",
  author: "Eiichiro Oda",
  read: true,
  checkReadStatus: function () {
    if (this.read === true) {
      console.log("You have read one piece");
    } else {
      console.log("You have not read one peice.");
    }
  },
};
onepeice.checkReadStatus();

const naruto = {
  name: "naruto",
  author: "the guy who wrote naruto",
  read: false,
  checkReadStatus: function () {
    if (this.read === true) {
      console.log("You have read naruto");
    } else {
      console.log("You have not naruto.");
    }
  },
};
naruto.checkReadStatus();
