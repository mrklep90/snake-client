/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput));
  return stdin;
}

handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    connection.write('Move: up');
  } else if (key === '\u0073') {
    connection.write('Move: down');
  } else if (key === '\u0061') {
    connection.write('Move: left');
  } else if (key === '\u0064') {
    connection.write('Move: right');
  } else if (key === '\u0065') {
    connection.write('Say: Hello!');
  } else if (key === '\u0071') {
    connection.write('Say: Sup?')
  }
};

module.exports = {
  setupInput,
}