# Quizify – M.Sc. Computer Science Syllabus Quiz

A responsive MCQ quiz website built with HTML, CSS and JavaScript.

## Features
- Semester I and Semester II subject categories
- Individual quiz for every listed subject
- Four options per question
- Instant answer feedback and explanations
- Score summary and answer review
- Responsive layout for desktop and mobile

## Run in PyCharm
1. Extract the ZIP file.
2. Open the `Quizify_MSc_Syllabus` folder in PyCharm.
3. Keep `index.html`, `style.css`, `script.js`, and `questions.js` in the same folder.
4. Right-click `index.html` and choose **Open in Browser**.
5. Select a semester and subject to begin.

## Add more questions
Open `questions.js`. Each subject has a `questions` array. Add questions using this format:

```js
["Question text", ["Option A", "Option B", "Option C", "Option D"], 2, "Explanation for the correct answer."]
```

The answer index starts from zero: 0 = A, 1 = B, 2 = C, 3 = D.

## Publish with GitHub Pages
1. Create a GitHub repository named `Quizify-MSc-Syllabus`.
2. Upload all four project files and this README.
3. Open repository **Settings → Pages**.
4. Under Build and deployment choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish your site.

Note: This is a static front-end project. It does not need Python or a database to run.
