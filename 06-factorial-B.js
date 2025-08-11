function factorialofWordsCount(sentence) {
    // Unhappy scenario check
    if (typeof sentence !== "string" || sentence.trim() === "" || !isNaN(sentence)) {
        console.log(`Invalid input: ${sentence}`);
        return;
    }

    // Count words
    let words = sentence.trim().split(/\s+/);
    let wordCount = words.length;

    // Factorial function
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1); // recursive
    }

    // Output
    console.log(`Sentence: "${sentence}"`);
    console.log(`Word Count: ${wordCount}`);
    console.log(`Factorial of Word Count: ${factorial(wordCount)}`);
    console.log("----------------------------------------");
}

// Test cases
factorialofWordsCount("Revision is the mother of Success");
factorialofWordsCount("We never fail, we always learn, Mind it");
factorialofWordsCount(null);
factorialofWordsCount("");
factorialofWordsCount(undefined);
factorialofWordsCount(NaN);
factorialofWordsCount("Your Full Name");