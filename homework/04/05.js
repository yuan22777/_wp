const user = {
  name: "Gemini",
  age: 1,
  greet: function() {
    console.log(`你好，我是 ${this.name}`);
  }
};

user.greet();