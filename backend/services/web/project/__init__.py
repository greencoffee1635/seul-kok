import os

from werkzeug.utils import secure_filename
from flask import (
    Flask,
    jsonify,
    send_from_directory,
    request,
    redirect,
    url_for
)
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import psycopg2
import sqlite3
dbpath = '/home/app/web/project/tempdb.db'

app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    active = db.Column(db.Boolean(), default=True, nullable=False)

    def __init__(self, email):
        self.email = email

'''
with sqlite3.connect('tempdb.db',check_same_thread=False) as conn :
    c=conn.cursor()
    c.execute("UPDATE tasks SET status={} WHERE id ='{}'".format(3,task_id))
    conn.commit()
    c.close()

with sqlite3.connect('tempdb.db',check_same_thread=False) as conn :
    c=conn.cursor()
    c.execute("UPDATE user SET password = '{}' where email = '{}';".format(pw_hash, email))
    conn.commit()
    c.close()

with sqlite3.connect('tempdb.db',check_same_thread=False) as conn :
    c=conn.cursor()
    c.execute("INSERT INTO user(email,password) VALUES ('{}', '{}');".format(email,pw_hash))
    conn.commit()
    c.close()

conn = sqlite3.connect("tempdb.db")	
c = conn.cursor()
c.execute("select * from tasks where id='{}'".format(idx))
dbdata = c.fetchall()

참고쿼리
select *from first_table order by random(); 

db col
media	title	genre	keywords	synopsis	director	actor	poster

'''

@app.route("/upload", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        file = request.files["file"]
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["MEDIA_FOLDER"], filename))
    return """
    <!doctype html>
    <title>upload new File</title>
    <form action="" method=post enctype=multipart/form-data>
      <p><input type=file name=file><input type=submit value=Upload>
    </form>
    """


@app.route("/surveyopen", methods=["GET", "POST"])
def surveyopen():
    if request.method == "GET":
        contents = []
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute("select * from contents_netflix order by random() LIMIT 2;")
            netflix = c.fetchall()
            c.execute("select * from contents_watcha order by random() LIMIT 2;")
            watcha = c.fetchall()
            c.execute("select * from contents_disneyplus order by random() LIMIT 2;")
            disney = c.fetchall()
            c.execute("select * from contents_tving order by random() LIMIT 2;")
            tving = c.fetchall()
            c.close()
        for i in range(2):
            contents.append({'ott': 'netflix','title': netflix[i][1], 'poster': netflix[i][7]})
            contents.append({'ott': 'watcha','title': watcha[i][1], 'poster': watcha[i][7]})
            contents.append({'ott': 'disney','title': disney[i][1], 'poster': disney[i][7]})
            contents.append({'ott': 'tving','title': tving[i][1], 'poster': tving[i][7]})      
        data = {'contents': contents }
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/surveyresult", methods=["GET", "POST"])
def surveyresult():
    if request.method == "POST":
        survey = request.form["survey"]
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute("select * from contents_netflix order by random() LIMIT 2;")
            netflix = c.fetchall()
            
            c.close()
        # info = []
        content1 = {
            'title':'덩케르크',
            'genre':'드라마',
            'desc':'해변: 보이지 않는 적에게 포위된 채 어디서 총알이 날아올지 모르는 위기의 일주일. 바다: 군인들의 탈출을 돕기 위해 배를 몰고 덩케르크로 항해하는 하루. 하늘: 적의 전투기를 공격해 추락시키는 임무, 남은 연료로 비행이 가능한 한 시간. “우리는 해변에서 싸울 것이다. 우리는 상륙지에서 싸울 것이다. 우리는 들판에서 싸우고 시가에서도 싸울 것이다. 우리는 끝까지 싸울 것이다”',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/280x400/movie_1443_1556596217.jpg' 
            }
        content2 = {
            'title':'돈 룩 업',
            'genre':'드라마',
            'desc':'지구를 향해 돌진하는 혜성의 존재를 발견한 두 천문학자. 임박한 재앙을 전 인류에 경고하려 언론사를 찾아다니기 시작한다. 하지만 다른 데 정신이 팔린 세상은 시큰둥한 반응뿐. 그래서요?',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/280x400/movie_99054_1637206025.jfif' 
            }
        content3 = {
            'title':'프라미싱 영 우먼',
            'genre':'드라마',
            'desc':'7년 전 자신의 가장 친한 친구가 당한 비극적인 사건에 충격을 받고 고통 속에 살고 있는 카산드라가 친구를 위해 완벽하고 치밀한 복수를 실행하면서 벌어지는 이야기',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/280x400/movie_85692_1607562803.jpg' 
            }
        content4 = {
            'title':'그 해 우리는',
            'genre':'드라마',
            'desc':'함께해서 더러웠고 다신 보지 말자!로 끝났어야 할 인연이 10년이 흘러 카메라 앞에 강제 소환 되어 펼쳐지는 청춘 다큐를 가장한 아찔한 로맨스 드라마',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_96780_1638895190.jfif' 
            }
        content5 = {
            'title':'모가디슈',
            'genre':'드라마',
            'desc':'1991년 소말리아의 수도 모가디슈에서는 내전으로 총성이 끊이지 않는다. 대한민국의 UN 가입을 위해 그곳에 파견된 대사관 직원들은 살아남기 위해 하루하루를 버텨내고, 설상가상 북한 대사관 일행들이 도움을 요청하며 문을 두드리는데… 1분 정보: 소말리아의 모가디슈는 대한민국 국민의 출입이 금지된 지역이라 실제 촬영은 모로코의 에사우이라에서 진행했다. 코로나19 상황에서 2020년 성수기의 흥행작이었던 <다만 악에서 구하소서> 이후 대략 1년 만에 300만을 돌파한 영화!',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/280x400/movie_88708_1629421777.jpg' 
            }
        content6 = {
            'title':'불가살',
            'genre':'드라마',
            'desc':'죽일 수도, 죽을 수도 없는 불가살(不可殺)이 된 남자가 600년 동안 환생을 반복하는 한 여자를 쫓는 슬프지만 아름다운 이야기',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_100106_1637574073.jpg' 
            }
        content7 = {
            'title':'콰이어트 플레이스',
            'genre':'드라마',
            'desc':' 소리를 내면 괴생명체가 오는 세상. 애보트 가족은 폐쇄된 뉴욕 주에서 서로를 지키기 위해 조용한 습관 속에서 살고 있다.  1분 정보 : 영화 제목처럼, 영화 내내 소리가 정말 적게 등장한다. 캐릭터들이 생존을 위해 대부분 수화를 쓰고 있다. 실제 부부인 존 크래신스키와 에밀리 블런트가 첫 동반 출연하였다. 남편인 존 크래신스키는 주인공 역할 외에도 연출, 각본까지 담당했다.',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/280x400/movie_62388_1524750706.jpg' 
            }
        content8 = {
            'title':'우리의 끝',
            'genre':'드라마',
            'desc':'젊은 신혼부부 애덤과 그레이스를 무자비하게 살해한 범인이 두 사람의 고향인 스코틀랜드 산간 지방으로 찾아간다. 오랜 앙숙인 커플의 가족들이 사는 곳이다.',
            'poster':'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_82484_1593012811.jpg' 
            }
        info = [content1,content2,content3,content4,content5,content6,content7,content8]
        data = {'mostOTT':'netflix', 'contents': info}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/detail", methods=["GET", "POST"])
def moviedetail():
    if request.method == "POST":
        ott = request.form['ott']
        title = request.form['title']
        content: '1991년 소말리아의 수도 모가디슈에서는 내전으로 총성이 끊이지 않는다. 대한민국의 UN 가입을 위해 그곳에 파견된 대사관 직원들은 살아남기 위해 하루하루를 버텨내고, 설상가상 북한 대사관 일행들이 도움을 요청하며 문을 두드리는데… 1분 정보: 소말리아의 모가디슈는 대한민국 국민의 출입이 금지된 지역이라 실제 촬영은 모로코의 에사우이라에서 진행했다. 코로나19 상황에서 2020년 성수기의 흥행작이었던 <다만 악에서 구하소서> 이후 대략 1년 만에 300만을 돌파한 영화!'
        playdate: '2021년 7월 28일'
        genre: '드라마'
        cast: '김윤석 조인성 허준호 구교환 김소진 정만식 김재화  등'
        keyword: '#한국 #15세이상관람가 #드라마 #액션'
        time: '121분'
        info = {
            'ott' : ott,
            'title' : title,
            'content' : content,
            'playdate' : playdate,
            'genre' : genre,
            'cast' : cast,
            'keyword' : keyword,
            'time' : time
        }
        data = {'movieinfo':info }
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/main", methods=["GET", "POST"])
def mainpage():
    if request.method == "GET":
        info = []
        netflix = {
            'title':'스파이더맨',
            'poster':'spider.jpg',
            'summary':'sdsd',
            'trailer':'dddd.mp4',
            'openingDate':''
        }
        data = {'movieinfo':'info'}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/subscribe", methods=["GET", "POST"])
def subscribe():
    if request.method == "POST":
        survey = request.form["ott"]
        data = {'mostOTT':'netflix', 'mostContent':'ironman', 'survey':survey}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/mypage", methods=["GET", "POST"])
def mypage():
    if request.method == "POST":
        useremail = request.form["email"]
        data = {'mostOTT':'netflix', 'mostContent':'ironman', 'survey':survey}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res
