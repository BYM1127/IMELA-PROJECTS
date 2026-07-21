const { spawn } = require('child_process');

const child = spawn('npx.cmd', ['firebase', 'login', '--no-localhost'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

child.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  if (output.includes('Allow Firebase to collect')) {
    child.stdin.write('n\n');
  }
});

child.stderr.on('data', (data) => {
  console.error(data.toString());
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
