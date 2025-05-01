from flask import Flask
from flask_cors import CORS  # <-- importa CORS

def create_app():
    app = Flask(__name__)
    
    CORS(app)  # <-- habilita CORS para todas las rutas

    @app.route('/api/hello')
    def hello():
        return {"message": "Hello from Flask!"}

    return app