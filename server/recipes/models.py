from recipes import db

class Recipes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(64))
    url = db.Column(db.String(255))
    book = db.Column(db.String(255))
    page = db.Column(db.Integer)
    def __repr__(self):
        return '<Recipe {}>'.format(self.day)    