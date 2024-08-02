function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hacker() {
    console.log('Initializing hack program');
    await delay(1000);

    console.log('Hacking Ashish username');
    await delay(1000);

    console.log('username found aashih 17');
    await delay(1000);

    console.log('connecting to facebook');
}

hacker();
