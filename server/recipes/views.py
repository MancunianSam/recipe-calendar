import json
from collections import namedtuple
from flask import request
from recipes import app, db
from recipes.models import Recipes

def get_recipes():
    recipes = []
    for row in Recipes.query.all():
        recipes.append(
            {"day": row.day, "url": row.url, "book": row.book, "page": row.page})
    return recipes

@app.route("/recipes", methods=['GET', 'POST'])
def recipes():
    if request.method == 'POST':
        recipe = request.get_json()
        recipe_obj = namedtuple("Recipe", recipe.keys())(*recipe.values())
        recipe_db = Recipes(
            day=recipe_obj.day, url=recipe_obj.url, book=recipe_obj.book, page=recipe_obj.page)
        db.session.add(recipe_db)
        db.session.commit()
        recipes = get_recipes()
        response = {"success": True, "recipes": recipes}
        return json.dumps(response)
    if request.method == 'GET':
        recipes = get_recipes()
        return json.dumps({"recipes": recipes})
