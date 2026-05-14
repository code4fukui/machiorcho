# machiorcho

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple quiz app that tests your knowledge of Japanese municipalities. Can you guess whether the kanji "町" in a town's name is pronounced "machi" or "chō"?

## Demo

[▶ Play the quiz: まち or ちょう?](https://code4fukui.github.io/machiorcho/)

## Features

- A 10-question quiz randomly generated from a comprehensive list of Japanese municipalities.
- Simple binary-choice interface to guess the correct pronunciation.
- Instant feedback on your answers and a final score with an accuracy percentage.
- Responsive design for both desktop and mobile browsers.
- Option to learn more about the data source or play again after the quiz.

## How It Works

This is a single-page application built with vanilla JavaScript that runs entirely in the browser. No build step or installation is required.

1.  It fetches the latest municipality data from the `city.csv` file.
2.  Using `CSV.js`, it parses the data and filters for towns whose names end with the kanji "町".
3.  The list is randomized using `shuffle.js`, and 10 questions are generated for the quiz.
4.  The `q2.js` framework handles the quiz logic and UI updates.

## Running Locally

Clone this repository and open `index.html` in a modern web browser.

```bash
git clone https://github.com/code4fukui/machiorcho.git
cd machiorcho
# Open index.html in your browser
```

## Data and Credits

- **Quiz Data**: The questions are generated using data from the [Address Base Registry by the Digital Agency](https://www.digital.go.jp/policies/base_registry_address/), provided in CSV format by [Code for FUKUI's address-japan project](https://github.com/code4fukui/address-japan).
  - Data file used: [city.csv](https://code4fukui.github.io/address-japan/data/city.csv)
- **App Framework**: This app is built using the [q2.js 2-choice quiz framework](https://fukuno.jig.jp/3597) by [fukuno.jig.jp](https://fukuno.jig.jp/) (CC BY).

## License

MIT License — see [LICENSE](LICENSE).