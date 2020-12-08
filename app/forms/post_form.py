from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError


class PostForm(FlaskForm):
    content = StringField("content", validators=[DataRequired()])
    caption = StringField('username', validators=[DataRequired()])
