from flask import Flask, url_for, render_template
from markupsafe import escape

def create_app():
    app = Flask(__name__)
    @app.route('/')
    def main():
        return render_template('index.html')

    @app.route('/yes')
    def handleYes():
        return render_template('yes.html')

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)