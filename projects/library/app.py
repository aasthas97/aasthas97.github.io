from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), unique=True, nullable=False)
    author = db.Column(db.String(100), unique=False, nullable=False)
    read = db.Column(db.Boolean, default=False)
    added_on = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Book <%r>' % self.id

@app.route('/', methods=['POST', 'GET'])

def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)