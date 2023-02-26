const sentence = "hello there from lighthouse labs";

timeoutDelay = 50;

for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(char);
  }, timeoutDelay)
  timeoutDelay += 50;
}