from waitress import serve
import recipes
serve(recipes.app, host='0.0.0.0', port=8084)
