from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('name.html')


@app.route('/login', methods=['POST'])
def login():
    name = request.form.get('username')

    return redirect(url_for('welcome', name=name))


@app.route('/welcome/<name>')
def welcome(name):
    return f"<h2>Hello {name}, POST request received successfully!</h2>"


if __name__ == '__main__':
    app.run(debug=True)