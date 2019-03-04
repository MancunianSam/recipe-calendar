from flask import Flask, request
from sqlite_orm.database import Database
from sqlite_orm.field import IntegerField, TextField
from sqlite_orm.table import BaseTable
from collections import namedtuple
import json

app = Flask(__name__)


class Recipes(BaseTable):
    __table_name__ = 'recipes'
    id = IntegerField(primary_key=True, auto_increment=True)
    day = TextField(not_null=True)
    url = TextField(not_null=True)
    book = TextField(not_null=True)
    page = IntegerField(not_null=True)


@app.route("/recipes", methods=['GET', 'POST'])
def recipes():
    if request.method == 'POST':
        recipes = request.get_json()['recipes']
        for recipe in recipes:
            recipe_obj = namedtuple("Recipe", recipe.keys())(*recipe.values())
            with Database("recipes.db") as db:
                recipe_db = Recipes(
                    day=recipe_obj.day, url=recipe_obj.url, book=recipe_obj.book, page=recipe_obj.page)
                db.query().insert(recipe_db).execute()
        return "OK"
    if request.method == 'GET':
        with Database("recipes.db") as db:
            recipes = []
            for row in db.query(Recipes).select().execute():
                recipes.append(
                    {"day": row[1], "url": row[2], "book": row[3], "page": row[4]})
            return json.dumps({"recipes": recipes})
