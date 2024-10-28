const timelinePhotos = document.getElementById('timelinePhotosId')
const aboutThird = document.getElementById('aboutThirdId')
const h1Element = aboutThird.querySelector('h1')
const pElement = aboutThird.querySelector('p')
document.getElementById('date_1604').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(0px)'
  h1Element.innerHTML = 'Изобретение камеры обскура'
  pElement.innerHTML =
    'Немецкий астроном Иоганн Кеплер изобрёл камеру-обскуру. Это была первая камера в&nbsp;мире, которая позволяла спроецировать изображение на&nbsp;стену в&nbsp;тёмной комнате. Художники использовали это изобретение для зарисовки натуры.'
})
document.getElementById('date_1820').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-620px)'
  h1Element.innerHTML = 'Создание первой камеры'
  pElement.innerHTML =
    'Жозеф Нисефор Ньепс изобрёл способ регистрации изображенийс&nbsp;помощью камеры-обскуры. Он&nbsp;наносил асфальтовый лак на&nbsp;плоские камни обрабатывал их&nbsp;битумом, после пластины помещались в&nbsp;камеру-обскуру, где под воздействием света происходила полимеризация смол.'
})
document.getElementById('date_1826').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-1240px)'
  h1Element.innerHTML = 'Первая фотография'
  pElement.innerHTML =
    'Первое изображение было сделано Жозефом Ньепсом в&nbsp;1822&nbsp;году, но, к&nbsp;сожалению, не&nbsp;сохранилось до&nbsp;наших дней. Поэтому первойв&nbsp;мире фотографией считается снимок &laquo;Вид из&nbsp;окна в&nbsp;Ле&nbsp;Гра&raquo;,сделанный в&nbsp;1826&nbsp;году.'
})
document.getElementById('date_1839').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-1860px)'
  h1Element.innerHTML = 'Первая фотография с людьми'
  pElement.innerHTML =
    'Луи Дагер ввёл новую технологию: он&nbsp;покрывал пластины серебром вместо битума и&nbsp;использовал пары ртути для проявки. Фотография бульвара &laquo;Тампль в&nbsp;Париже&raquo; стала прорывом, так как на&nbsp;ней впервые были изображены люди. Фото было лишь в&nbsp;одном экземпляре.'
})
document.getElementById('date_1861').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-2480px)'
  h1Element.innerHTML = 'Первый зеркальный фотоаппарат'
  pElement.innerHTML =
    'Томас Сэттон изобрёл первый зеркальный фотоаппарат. Это был ящик со специальной крышкой, которая защищала от света. Через крышку можно было наблюдать объект съёмки. Фотограф ловил фокус с помощью объектива, а зеркала создавали изображение.'
})
document.getElementById('date_1889').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-3100px)'
  h1Element.innerHTML = 'Первая рулонная плёнка'
  pElement.innerHTML =
    'Джордж Истмен изобрёл первую рулонную фотоплёнку и&nbsp;создал каме-ру Kodak Film. Это сделало фотографию доступной для всех. Слоган &laquo;Вы&nbsp;нажимаете кнопку, мы&nbsp;делаем всё остальное&raquo; символизирует про-стоту использования фотоаппарата.'
})
document.getElementById('date_1923').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-3720px)'
  h1Element.innerHTML = 'Негативы на «Leica 0» и плёнка 35мм'
  pElement.innerHTML =
    'Появление фотоаппарата &laquo;Leica&nbsp;0&raquo;, который работает с&nbsp;35мм плёнкой. Это привело к&nbsp;стандартизации плёнки. С&nbsp;устройства можно было про-сматривать негативы (Изображение на&nbsp;светочувствительной плёнке, в&nbsp;которой светлые места получаются тёмными, а&nbsp;тёмные&nbsp;&mdash; светлыми).'
})
document.getElementById('date_1925').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-4340px)'
  h1Element.innerHTML = '«Leica 0» в массовом производстве'
  pElement.innerHTML =
    'Фотоаппараты &laquo;Leica&nbsp;0&raquo; запустились в&nbsp;массовое производство, процесс фотосъёмки стал более удобным и&nbsp;доступным для широкой аудитории, а&nbsp;компания Leica Camera AG&nbsp;существует и&nbsp;по&nbsp;сей день.'
})
document.getElementById('date_1988').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-4960px)'
  h1Element.innerHTML = 'Цифровая камера Fujifilm&Toshiba'
  pElement.innerHTML =
    'Компании FujiFilm и&nbsp;Toshiba объединили усилия для создания первой в&nbsp;мире цифровой камеры. Результатом сотрудничества стало появление камеры Fuji DS1P, которая обладала разрешением 1000&times;1000&nbsp;пикселей.'
})
document.getElementById('date_19888').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-5580px)'
  h1Element.innerHTML = 'Диджитализация, плёнка сдаёт позиции'
  pElement.innerHTML =
    'Новые технологии приводят к&nbsp;улучшению качества фотографии, большему удобству в&nbsp;использовании. С&nbsp;каждым годом цифровые фотоаппараты становятся всё более доступными, а&nbsp;поэтому вытес-няют аналоговые кадры. Плёнка уже не&nbsp;так актуальна.'
})
document.getElementById('date_2010').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-6200px)'
  h1Element.innerHTML = 'Возрождение интереса к плёнке'
  pElement.innerHTML =
    'Несмотря на&nbsp;цифровую эру, молодые фотографы начинают вновь открывать для себя пленку, ценя её&nbsp;уникальные характеристики и&nbsp;эстетику. Появляются новые компании, производящие плёнку, а&nbsp;также увеличивается количество лабораторий для её&nbsp;проявки.'
})
document.getElementById('date_2024').addEventListener('click', function () {
  timelinePhotos.style.transform = 'translateX(-6820px)'
  h1Element.innerHTML = 'Появляемся мы, медиа-сервис plёnka'
  pElement.innerHTML =
    'Наша цель&nbsp;&mdash; объединить людей, страстно любящих концепцию аналоговой фотографии: начинающим дать всю базу знаний и&nbsp;достоверный источник информации, а&nbsp;профессионалам&nbsp;&mdash; источник вдохновения и&nbsp;идеи для экспериментов с&nbsp;плёнкой!'
})
