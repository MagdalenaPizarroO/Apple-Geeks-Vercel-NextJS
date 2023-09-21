from flask import Flask, jsonify
from app import app, db
from models import Usuario

@app.route("/api/hello", methods=['GET'])
def handle_hello():
    response_body = {
        "message": "Hello World!"
    }
    return jsonify(response_body)

@app.route("/api/poblar_db", methods=['GET'])
def poblar_db():
    # Crear registros ficticios
    usuario1 = Usuario(nombre='Juan', correo='juan@example.com', apellido="López")
    usuario2 = Usuario(nombre='María', correo='maria@example.com', apellido="Pérez")

    # Agregar registros a la sesión y guardar en la base de datos
    db.session.add(usuario1)
    db.session.add(usuario2)
    db.session.commit()

    return jsonify({"message": "Base de datos poblada exitosamente"})

@app.route("/api/ver_db", methods=['GET'])
def ver_db():
    usuarios = Usuario.query.all()
    return jsonify([usuario.serialize() for usuario in usuarios])
