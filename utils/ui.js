import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

const questionAsync = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}
export { rl, questionAsync} ;