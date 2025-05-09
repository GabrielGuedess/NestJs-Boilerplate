import ora from 'ora';
import { spawn } from 'child_process';

const spinner = ora('Checking for dead code...').start();

const subprocess = spawn('pnpm', ['knip'], { stdio: 'inherit' });

subprocess.on('exit', code => {
  if (code === 0) {
    spinner.succeed('No dead code found ✅');
  } else {
    spinner.fail('Dead code detected ❌');
    process.exit(code ?? 1);
  }
});
