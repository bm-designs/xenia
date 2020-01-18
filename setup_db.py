import psycopg2

def setup_db():
	conn = psycopg2.connect(database="xenia_main", user="xenia_root", password="temp", host='localhost')
	cur = conn.cursor()

	create_account_table = """
							CREATE TABLE xenia_user_info (
            				 	user_id VARCHAR(255),
								password VARCHAR(255),
								email VARCHAR(255),
								PRIMARY KEY (user_id))
							"""

	create_photo_table = """
							CREATE TABLE xenia_user_photos (
								user_id VARCHAR(255) REFERENCES xenia_user_info(user_id),
								photo_names VARCHAR(255),
								PRIMARY KEY (user_id))
						 """

	create_attribute_table = """
								CREATE TABLE xenia_user_attributes (
								user_id VARCHAR(255) REFERENCES xenia_user_info(user_id),
								clean_rating int,
								is_smoker boolean,
            					relationship_rating int,
            					has_pets boolean,
            					snores boolean,
            					allows_social_gathering boolean,
            					bed_time Time,
            					drinker_type int,
            					kitchen_use int,
            					PRIMARY KEY (user_id))
							 """

	cur.execute(create_account_table)
	cur.execute(create_photo_table)
	cur.execute(create_attribute_table)
	
	cur.close()
	conn.commit()


if __name__ == '__main__':
	setup_db()