from flask import Flask, render_template, url_for, request, redirect
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
    if request.method == 'POST':
        book_title = request.form['title']
        book_author = request.form['author']
        # book_read = request.form['status'] TODO: Fix error when checkbox not checked
        
        new_book = Book(title=book_title, author=book_author)
        try:
            db.session.add(new_book)
            db.session.commit()
            return redirect('/')
        except:
            return "Book could not be added. Check browser console for details"
    
    else:
        books = Book.query.order_by(Book.added_on).all()
        return render_template('index.html', books=books)

@app.route('/delete/<int:id>')
def deleteBook(id):
    book_to_delete = Book.query.get_or_404(id)
    try:
        db.session.delete(book_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return "Book could not be deleted."

if __name__ == "__main__":
    app.run(debug=True)