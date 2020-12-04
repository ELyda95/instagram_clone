from flask import Blueprint, jsonify
from app.models import User
from flask_login import current_user, login_user, logout_user, login_required

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    user = User.query.filter(User.id == current_user.id).one()
    print(user.to_dict())
    return user.to_dict()


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
