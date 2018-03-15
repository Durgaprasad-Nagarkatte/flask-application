import sqlite3 as sql

def insertUser(member_id,loan_amount, funded_amount, term):
    con = sql.connect("database.db")
    cur = con.cursor()
    cur.execute("INSERT INTO  loan_info(member_id, loan_amount, funded_amount, term) VALUES (?,?,?,?)", (member_id, loan_amount, funded_amount, term))
    con.commit()
    con.close()

def retrieveUsers():
	con = sql.connect("database.db")
	cur = con.cursor()
	cur.execute("SELECT member_id FROM loan_info")
	users = cur.fetchall()
	con.close()
	return users