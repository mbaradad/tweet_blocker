// ==UserScript==
// @name         Hide Specific Tweets on Twitter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide tweets containing specific phrases on Twitter
// @author       Manel Baradad
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const hideTweetsContainingPhrases = () => {
        // Phrases to be checked (case-insensitive)
        const phrases = ["<word_1>",
                         "<word_2>",
                        ];

        // Selecting tweets
        const tweets = document.querySelectorAll('[data-testid="tweet"]');

        tweets.forEach(tweet => {
            // Checking if the tweet contains any of the phrases
            const tweetText = tweet.textContent.toLowerCase();
            const shouldHide = phrases.some(phrase => tweetText.includes(phrase.toLowerCase()));

            if (shouldHide) {
                tweet.style.display = 'none'; // Hiding the tweet
            }
        });
    };

    // Run the function on page load
    hideTweetsContainingPhrases();

    // Since Twitter uses infinite scrolling, set up a MutationObserver to handle new tweets
    const observer = new MutationObserver(hideTweetsContainingPhrases);

    // Start observing the target node for configured mutations
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
