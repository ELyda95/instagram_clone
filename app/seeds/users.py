from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    James = User(fullname='James Ballard', username='YaaaBoiJames', email='james@james.com', hashed_password="password",
                about="I am the scrum master 3000", profilePicture='https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg')

    Bart = User(fullname='Bart Dorsey', username='Bartholomew', email='bart@bart.com', hashed_password="password",
                about="I am the all knowing", profilePicture='https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864')

    Sergey = User(fullname='Sergey', username='SergimusPrime', email='sergey@sergey.com', hashed_password="password",
                    about="I wvant to create many wvebsites!", profilePicture='https://livewire.thewire.in/wp-content/uploads/2019/11/Dracula-Season-1-BBC-Netflix.jpg')

    Alfredo = User(fullname='Alfredo', username='Alfredabest', email="alfredo@alfredo.com", hashed_password="password",
                     about="Cool a cuucumber", profilePicture='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539856907.jpeg')


    # db.session.add(demo)
    db.session.add(James)
    db.session.add(Bart)
    db.session.add(Sergey)
    db.session.add(Alfredo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
