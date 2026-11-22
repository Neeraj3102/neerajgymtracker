const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

function findAndPatch() {
  const candidates = [];
  try {
    const npmRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
    candidates.push(path.join(npmRoot, '@bubblewrap', 'cli', 'dist', 'lib', 'cmds', 'build.js'));
  } catch (_) {}

  try {
    const found = execSync('find /usr -name "build.js" 2>/dev/null | grep "@bubblewrap/cli" | grep "cmds/build.js"', { encoding: 'utf8', shell: '/bin/bash' }).trim().split('\n');
    candidates.push(...found.filter(Boolean));
  } catch (_) {}

  let patched = 0;
  for (const target of new Set(candidates)) {
    if (fs.existsSync(target) && fs.statSync(target).isFile()) {
      let s = fs.readFileSync(target, 'utf8');
      const prev = s;
      s = s.replace(/\x60\"\x24\{passwords\.keystorePassword\}\"\x60/g, 'passwords.keystorePassword.trim()');
      s = s.replace(/\x60\"\x24\{passwords\.keyPassword\}\"\x60/g, 'passwords.keyPassword.trim()');
      s = s.replace(/passwords\.keystorePassword(?!\.trim)/g, 'passwords.keystorePassword.trim()');
      s = s.replace(/passwords\.keyPassword(?!\.trim)/g, 'passwords.keyPassword.trim()');
      if (s !== prev) {
        fs.writeFileSync(target, s);
        console.log('✅ Successfully patched Bubblewrap password quoting & tab trimming in:', target);
        patched++;
      }
    }
  }

  try {
    const coreFound = execSync('find /usr -name "AndroidSdkTools.js" 2>/dev/null | grep "@bubblewrap/core"', { encoding: 'utf8', shell: '/bin/bash' }).trim().split('\n');
    for (const coreTarget of coreFound.filter(Boolean)) {
      if (fs.existsSync(coreTarget)) {
        let cs = fs.readFileSync(coreTarget, 'utf8');
        const cprev = cs;
        cs = cs.replace(/`pass:\x24\{ksPass\}`/g, '`pass:${String(ksPass).trim()}`');
        cs = cs.replace(/`pass:\x24\{keyPass\}`/g, '`pass:${String(keyPass).trim()}`');
        if (cs !== cprev) {
          fs.writeFileSync(coreTarget, cs);
          console.log('✅ Successfully patched AndroidSdkTools.js in:', coreTarget);
        }
      }
    }
  } catch (_) {}

  console.log(`Total Bubblewrap files patched: ${patched}`);
}

findAndPatch();
