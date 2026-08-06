import psycopg

class UserConeection():
    conn=None

    def__init__(self):
    try:
    
        self.conn=psycopg.connect("dbname=ce_web user=licoln password=777 port=5432 host=localhost")
    except psycop.OperationalError as err:
        print("Error al conectar a la base de datos:", e) 