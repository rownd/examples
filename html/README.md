This is a basic example showing how to set up Rownd on a static website or an app primarily driven through HTML and vanilla JavaScript.

## Usage

First, get your Rownd app key from the [Rownd dashboard](https://app.rownd.io).

Next, edit the `index.html` file and replace `REPLACE_WITH_YOUR_APP_KEY` with your app key.

Finally, to run this app, you'll need a basic web server to serve the index.html page.
Python provides a simple web server that can be used to serve static files.


To start it up, run the command for your version of Python:
```bash
# Python 3

$ python -m http.server 8123
```

```bash
# Python 2

$ python -m SimpleHTTPServer 8123
```

Then open your browser and visit http://localhost:8123/ to sign in!
