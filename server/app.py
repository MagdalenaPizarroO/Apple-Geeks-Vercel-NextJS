from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
import os
from models import db, Usuario

# app instance
app = Flask(__name__)

# Cargar las variables de entorno desde el archivo .env.development.local
load_dotenv('.env.development.local')
# Acceder a la variable POSTGRES_URL
postgres_url = os.getenv('POSTGRES_URL')
# Configuración de la conexión a la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = postgres_url

migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

from routes import *

if __name__ == "__main__":
    app.run(debug=True, port=8080)
