from flask import Flask, url_for, render_template


app = Flask(__name__)
@app.route('/')
def main():
    return render_template('index.html')

@app.route('/yes')
def handleYes():
    return render_template('yes.html')


if __name__ == "__main__":
    app.run()