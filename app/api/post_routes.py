from flask import Blueprint, jsonify, session, request
from app.models import User, Post, db
from flask_login import current_user
from app.forms import PostForm

post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
def posts():
    post = Post.query.all()
    return post.to_dict()


@post_routes.route('/create', methods=['POST'])
def new_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        post = Post(
            content=form.data['content'],
            caption=form.data['caption'],
            userId=current_user.id
        )
        db.session.add(post)
        db.session.commit()
        return Post.to_dict(post)
