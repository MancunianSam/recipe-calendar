import json
from recipes.models import Recipes
from recipes import app, db
import unittest
import os
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
basedir = os.path.abspath(os.path.dirname(__file__))


class RecipeTest(unittest.TestCase):

    def setUp(self):
        self.db_uri = 'sqlite:///' + os.path.join(basedir, 'test.db')
        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = self.db_uri
        self.app = app.test_client()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_get_returns_empty(self):
        result = self.app.get('/recipes')
        data = json.loads(result.data)
        assert len(data['recipes']) == 0

    def test_get_with_existing_recipe(self):
        recipe = Recipes(
            day='day', url='url', book='book', page=1)
        db.session.add(recipe)
        db.session.commit()
        result = self.app.get('/recipes')
        data = json.loads(result.data)
        assert len(data['recipes']) == 1

    def test_post_returns_success(self):
        data = {"day": "Saturday", "url": None, "book": "Steak", "page": 2}
        result = self.app.post('/recipes', json=data)

        assert json.loads(result.data)['success']

    def test_post_stores_data(self):
        data =  {"day": "Saturday", "url": None, "book": "Steak", "page": 2}
        self.app.post('/recipes', json=data)
        result = self.app.get('/recipes')
        data = json.loads(result.data)
        recipes = data['recipes']
        assert len(recipes) == 1
        recipe = recipes[0]
        assert recipe['day'] == 'Saturday'
        assert recipe['url'] == None
        assert recipe['book'] == 'Steak'
        assert recipe['page'] == 2
