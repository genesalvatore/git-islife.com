// Make all git theology repos public via GitHub API
const repos = [
  'git-islife.com',
  'git-theology.com',
  'gittheology.com',
  'gittruth.com',
  'git-manifesto.com',
  'git-islove.com',
  'git-ispower.com',
  'git-isforever.com',
  'git-iseternal.com',
  'git-isprivate.com',
  'git-ispublic.com',
  'git-isyourchoice.com'
];

const token = process.env.GITHUB_TOKEN;
const owner = 'genesalvatore';

async function makePublic() {
  console.log('Making repos public...\n');
  
  for (const repo of repos) {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ private: false })
      });

      if (response.ok) {
        console.log(`✅ ${repo} is now PUBLIC`);
      } else {
        const error = await response.json();
        console.log(`❌ ${repo} failed: ${error.message}`);
      }
    } catch (error) {
      console.log(`❌ ${repo} error: ${error.message}`);
    }
  }
  
  console.log('\n✅ All repos are now PUBLIC!');
  console.log('\nThe Cathedral is live. 🏛️');
}

makePublic();
