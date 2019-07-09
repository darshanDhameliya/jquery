function infinityDisplay() {
    while (true)
        postMessage("hello");
}
console.log("inside worker");
infinityDisplay();