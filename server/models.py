from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    apellido = db.Column(db.String(80), unique=True, nullable=False)


    def __repr__(self):
        return f'<Usuario {self.nombre}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "correo": self.correo,
            "apellido": self.apellido
        }