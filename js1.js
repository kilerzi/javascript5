const dog = {
  name: "dogster",
  kind: "dog",
  SayHello: function () {
    console.log(`${this.name} says :hey bro!!!`);
  },
};
dog.SayHello();
