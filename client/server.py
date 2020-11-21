import hug

# установка
# pip install hug
# запуск из текущей директории
# hug -f server.py

api = hug.API(__name__)
api.http.add_middleware(hug.middleware.CORSMiddleware(api, max_age=10))

posts = [
""" ## Title
---------
> Hello from post1
>
> Here you can learn about ecology""",
         """ ## Title
---------
> Hello from post1
>
> Here you can learn about recycling"""]

info = [
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Plastic-recyc-01.svg/90px-Plastic-recyc-01.svg.png",
     "title": "01 PET",
     "text": "Полиэстер, бутылки для напитков",
     "key": 0},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Plastic-recyc-02.svg/90px-Plastic-recyc-02.svg.png",
     "title": "02 PEHD",
     "text": "Пластиковые бутылки, пакеты, мусорные вёдра",
     "key": 1},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Plastic-recyc-03.svg/90px-Plastic-recyc-03.svg.png",
     "title": "03 PVC",
     "text": "Оконные рамы, бутылки для химических продуктов, покрытия для полов, изоляция (электротехника) электрических проводов",
     "key": 2}
]


@hug.get('/posts')
def echo():
    return [{"id": i, "content": content} for i, content in enumerate(posts)]


@hug.get('/info')
def echo():
    return info

@hug.get('/')
def get_demo():
    return {'result': 'Hello World'}
