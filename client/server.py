import hug

# pip install hug

api = hug.API(__name__)
api.http.add_middleware(hug.middleware.CORSMiddleware(api, max_age=10))

posts = [
    """ ## В Петербурге на берегу Финского залива прошла всероссийская акция "Вода России"
Акция "Вода России", проходящая в регионах страны в рамках национального проекта "Экология", состоялась в Петербурге на территории памятника природы "Комаровский берег" на берегу Финского залива. Триста волонтеров собрали 280 мешков мусора, очистив 3,5 км берега, передает корреспондент ТАСС.

Учащиеся колледжей, университетов, а также чиновники собирали мусор раздельно. Отходы были сгружены в мусоровоз, бункер которого состоит из двух частей, собранный мусор в нем не перемешивается, машину предоставила для акции компания "Петро-Васт".

Как рассказал ТАСС председатель комитета по природопользованию Петербурга Денис Беляев, большая часть мусора на берегу залива - это отходы, которые оставляют недобросовестные отдыхающие. "Это хорошее желание - выехать куда-то на берег, ближе к природе и отдохнуть. Но, к сожалению, уровень экологической культуры не дотягивает. И очень часто после такого отдыха на берегу остаются привезенные с собой и брошенные пластиковые, бытовые и прочие отходы", - рассказал он. Весомая часть мусора выбрасывается на берег волнами из залива. По словам Беляева, в Петербурге подобные акции по очистке берегов водных объектов проходят практически еженедельно, в том числе по инициативе горожан.

Холодная погода в Петербурге не помешала волонтерам очистить 3,5 км берега. Организаторы подготовили для них горячее питание и напитки, а в конце акции были названы имена самых активных участников.

Экологические акции "Вода России" начались по всей стране благодаря федеральной целевой программе "Развитие водохозяйственного комплекса Российской Федерации в 2012-2020 годы", с 2019 года они проходят в рамках федеральной программы "Сохранение уникальных водных объектов" национального проекта "Экология".
""",
    """ ## Переработка
Переработку отходов следует отличать от утилизации. Целью переработки является превращение отходов во вторичное сырьё, энергию или продукцию с определёнными потребительскими свойствами.

Переработка отходов может включать или не включать их обработку — деятельность, направленную на изменение физического, химического или биологического состояния отходов для обеспечения последующих работ по обращению с отходами. Обработке подвергается множество извлекаемых из отходов материалов, включая стекло, бумагу, алюминий, асфальт, железо, ткани, различные виды пластика и органические отходы (источники многочисленных вредных веществ и даже бактерий и вирусов). В некоторых случаях отдельные процессы переработки отходов бывают технически нецелесообразны или экономически невыгодны из-за непомерно больших затрат материальных, транспортных, финансовых и человеческих ресурсов.

При переработке отходов могут образовываться отходы.""",
    """ ## Утилизация отходов
Утилизация отходов — использование отходов для производства товаров (продукции), выполнения работ, оказания услуг, включая повторное применение отходов, в том числе повторное применение отходов по прямому назначению (рециклинг), их возврат в производственный цикл после соответствующей подготовки (регенерация), а также извлечение полезных компонентов для их повторного применения (рекуперация);

> Под утилиза́цией отходов (от лат. utilis — полезный) понимается следующее:
> * использование отходов на различных стадиях их технологического цикла;
> * обеспечение вторичного использования или переработки отходов и отслуживших свой срок или забракованных изделий.

При проектировании современной продукции рассматривают её утилизируемость — комплекс показателей, обеспечивающих эффективную утилизацию отходов, образующихся при её производстве и эксплуатации и после вывода из обращения.

Таким образом, понятия утилизация и переработка пересекаются. Так, переработка отходов может включать их утилизацию в части вторичного использования, а утилизация может включать в себя переработку отходов в тех случаях, когда она технически возможна, технологически необходима или требуется законодательством. С другой стороны, утилизация не рассматривает переработку там, где отходы могут быть использованы в продукции напрямую, без переработки. По мнению некоторых специалистов, помимо вторичных ресурсов и отходов производства и потребления, утилизации также подлежат ресурсы, не находящие прямого применения.
""",
    """ ## Рециклинг
Также не следует отождествлять переработку отходов с рециклингом (син. рециклизация). Термин рециклинг используется для обозначения процесса возвращения отходов в процессы техногенеза. Другими словами, рециклинг — это процесс, а переработка отходов — это деятельность состоящая из отраслей деятельности и множества различных процессов. В этом смысле рециклинг является одним из элементов утилизации отходов, которая в свою очередь является частью переработки отходов. Рециклинг отходов осуществляется повторным использованием отходов по тому же назначению, например стеклянных бутылок после их соответствующей безопасной обработки и маркировки (этикетирования), либо путём возврата отходов после соответствующей обработки в производственный цикл (например жестяных банок — в производство стали; макулатуры — в производство бумаги и картона и т. п.).
""", """ ## Сортировка отходов
Сортировка — это выбор компонентов из смешанных (не сортированных) уже образованных в результате сбора отходов.

Разделение и/или смешение отходов согласно определенным критериям на качественно различающиеся составляющие.

Сортировка отходов осуществляется на специализированных предприятиях, комплексах сортировки, сортировочных цехах, сортировочных линиях.

Подавляющее большинство сортировочных линий в мире являются ручными. Но также существуют и автоматизированные, на которых металлы отделяются магнитом, самая мелкая фракция отсеивается механически, мусор продувается в баллистическом сепараторе и разделяется на легкий и тяжелый. После этого оптическая система сортирует пластики по сортам и/или цвету. На высокоавтоматизированных линиях люди-операторы работают только на первом этапе сортировки, а именно отслеживают крупные или опасные для оборудования предметы (газовые баллоны и т. п.).

В России существует закон, запрещающий захоранивать некоторые полезные материалы, которые могут быть переработаны во вторичные компоненты. Однако запрет не действует, если, например, полезные материалы содержатся в составе твердых коммунальных отходов. Поэтому для правильной переработки необходимо, чтобы полезные отходы раздельно доезжали до сортировок и не смешивались в общей массе мусора."""
]

info = [
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Plastic-recyc-01.svg/90px-Plastic-recyc-01.svg.png",
     "title": "01 PET",
     "text": "Полиэтилентерефталат (лавсан). Полиэстер, бутылки для напиткnов",
     "key": 0},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Plastic-recyc-02.svg/90px-Plastic-recyc-02.svg.png",
     "title": "02 PEHD",
     "text": "Полиэтилен высокой плотности (низкого давления). Пластиковые бутылки, пакеты, мусорные вёдра",
     "key": 1},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Plastic-recyc-03.svg/90px-Plastic-recyc-03.svg.png",
     "title": "03 PVC",
     "text": "Поливинилхлорид. Оконные рамы, бутылки для химических продуктов, покрытия для полов, изоляция (электротехника) электрических проводов",
     "key": 2},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Plastic-recyc-04.svg/90px-Plastic-recyc-04.svg.png",
     "title": "04 PELD",
     "text": "Полиэтилен низкой плотности (высокого давления). Пакеты, вёдра, трубы, крышки",
     "key": 3},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Plastic-recyc-05.svg/90px-Plastic-recyc-05.svg.png",
     "title": "05 PP",
     "text": "Полипропилен.	Автомобильные бамперы, внутренняя отделка автомобилей, корпуса электроинструмента, упаковка из-под шоколадок, макарон, пластиковые стаканчики",
     "key": 4},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Plastic-recyc-06.svg/84px-Plastic-recyc-06.svg.png",
     "title": "06 PS",
     "text": "Полистирол. Игрушки, одноразовая посуда, цветочные горшки, видеокассеты, чемоданы, одноразовые стаканчики",
     "key": 5},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Plastic-recyc-07.svg/84px-Plastic-recyc-07.svg.png",
     "title": "07 0 (Other)",
     "text": "Остальные виды пластика. Полиуретан, поликарбонат, полиамиды, полиакрилонитрил и др., биопластики",
     "key": 6},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Plastic-recyc-09.svg/84px-Plastic-recyc-09.svg.png",
     "title": "09 ABS",
     "text": "АБС-пластик	Корпуса мониторов/телевизоров и электроинструмента, кофеварки, сотовые телефоны, компьютерный пластик, распечатанные на 3D-принтере компоненты, которые не являются биопластиками, такими как PLA",
     "key": 7},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Recycling-Code-20.svg/90px-Recycling-Code-20.svg.png",
     "title": "20 PAP (PCB)",
     "text": "Гофрированный картон. Коробки от бытовой техники, продуктов, косметики",
     "key": 8},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Recycling-Code-21.svg/90px-Recycling-Code-21.svg.png",
     "title": "21 PAP",
     "text": "Прочий картон	Открытки, обложки книг, короб-упаковка",
     "key": 9},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Recycling-Code-22.svg/90px-Recycling-Code-22.svg.png",
     "title": "22 PAP",
     "text": "Бумага. Журналы и газеты, конверты, бумажные пакеты, бумага для печати",
     "key": 10},
    {"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Recycling-Code-22.svg/90px-Recycling-Code-22.svg.png",
     "title": "23 PBD (PPB)",
     "text": "Вощёная бумага. Упаковка для почтовых отправлений или для декора букетов",
     "key": 11},
]


@hug.get('/posts')
def get_posts():
    return [{"id": i, "content": content} for i, content in enumerate(posts)]


@hug.get('/info')
def get_info():
    return info