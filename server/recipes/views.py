import json
from collections import namedtuple
from flask import request
from recipes import app, db
from recipes.models import Recipes


@app.route("/recipes", methods=['GET', 'POST'])
def recipes():
    if request.method == 'POST':
        recipes = request.get_json()['recipes']
        for recipe in recipes:
            recipe_obj = namedtuple("Recipe", recipe.keys())(*recipe.values())
            recipe_db = Recipes(
                day=recipe_obj.day, url=recipe_obj.url, book=recipe_obj.book, page=recipe_obj.page)
            db.session.add(recipe_db)
            db.session.commit()
        return '{"success": true}'
    if request.method == 'GET':
        recipes = []
        for row in Recipes.query.all():
            recipes.append(
                {"day": row.day, "url": row.url, "book": row.book, "page": row.page})
        return json.dumps({"recipes": recipes})
