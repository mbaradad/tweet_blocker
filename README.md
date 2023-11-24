# Block tweets by string
This is a simple Tampermonkey script that allows you to filter your timeline so that tweets containing certain words are not displayed. Useful to block users' client-side (by restricting tweets containing the username) or annoying conversation topics.

## Installation
1) Install Tampermonkey [Tampermonkey](https://www.google.com) on your favourite broser. This allows you to add arbitrary scripts on your browser.
2) Go to: ```Create a new script...``` and place the contents of script.js there, replacing the words "<word_1>", "<word_2>"... by the strings/usernames you want to avoid seeing. Any tweet containing any of these words will be removed from your timeline.
