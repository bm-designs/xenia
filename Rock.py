from flask import Flask, request, jsonify
from flask_sqlalchemy  import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_bcrypt import Bcrypt


### Over all code quality is OK for now, when more 
### feature work is finshed, effort towards cleaning 
### rock should be done 



app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'secret'
app.config['SECRET_KEY'] = 'Thisissuposedtobesecret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/xenia_main?user=xenia_root&password=temp'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


def make_response_payload(result, message):
	standard_response_payload = {'result': result,
							     'message': message}

	return standard_response_payload


# holder for now, will update based on model changes
class xenia_user_info(db.Model):

    user_id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(256))
    email = db.Column(db.String(256), unique=True)


@app.route('/user_init', methods=["POST"])
def user_init():
    print(request)
    request_json_blob = request.get_json()
    username = request_json_blob['username']
    password = request_json_blob['password']
    email = request_json_blob["email"]
    
    number_of_accounts_with_email = xenia_user_info.query.filter_by(email=email).count()
    number_of_accounts_with_username = xenia_user_info.query.filter_by(user_id=username).count()
    
    if number_of_accounts_with_email > 0:
        response_payload = make_response_payload(False, "That email is already used")

    elif number_of_accounts_with_username > 0:
        response_payload = make_response_payload(False, "That username is already used")


    else:
        new_user = xenia_user_info(user_id=username, password=password, email=email)
        db.session.add(new_user)
        db.session.commit()
        response_payload = make_response_payload(True, None )

    return jsonify(response_payload)

@app.route('/update_user', methods=["POST"])
def update_user():


	#general method to handle onboarding 

	response_payload = make_response_payload(False, 'endpoint not finished')
	return jsonify(response_payload)

    #todo refactor

# @app.route('/login', methods=["POST"])
# def login():
#     request_json_blob = request.get_json()
#     print(request_json_blob)
#     username = request_json_blob["username"]
#     password = request_json_blob["password"]
#     user = Xenia_main.query.filter_by(username=username).first()

#     if user:
#         if bcrypt.check_password_hash(user.password, password):
#             access_token = create_access_token(identity= {
#                 "username": username,
#                 "email": user.email
#             })
            
#             response_payload = make_response_payload(True, None)
#             response_payload['token'] = access_token
#             return jsonify(response_payload)

#     response_payload = make_response_payload(False, "Invalid Username or Password")
#     return jsonify(response_payload)

    #pull fields from payload and do db lookup, based on fields
    # if credenitals valid
	# create and return JWT access token


	# return error

	# debug purposes s

# ignore for now prototyping
@app.route('/get_match_data', methods=['GET'])
def get_match_data():
	return('this end point is up /record_match_data')

# ignore for now prototyping
@app.route('/record_new_matches', methods=['POST'])
def record_new_matches():
	return('this end point is up /record_new_matches')
@app.route('/test', methods=['GET'])
def test():
    return make_response_payload()

if __name__ == '__main__':
	app.run(debug=True)