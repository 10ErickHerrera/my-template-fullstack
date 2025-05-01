from flask import Blueprint

main = Blueprint("main", __name__)

@main.route("/api/hello", methods=["GET"])
def hello():
    return {"message": "Hello from Flask!"}
