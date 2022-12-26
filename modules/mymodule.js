let doSayHello = function (name) {
  let str = `Hello ${name}`;
  return str;
};

module.exports.sayHello = function (name) {
  let str = doSayHello(name);
  return str;
};
