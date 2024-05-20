<script setup lang="ts"></script>

<template>
	<div class="container">
		<h1>О ПРИЛОЖЕНИИ: ИНФОРМАЦИОННЫЙ СЕРВИС О РЕКАХ</h1>

		<p>
			ДОБРО ПОЖАЛОВАТЬ В ПРИЛОЖЕНИЕ О РЕКАХ РОССИИ! ЗДЕСЬ ВЫ НАЙДЕТЕ УВЛЕКАТЕЛЬНУЮ ИНФОРМАЦИЮ
			О КРУПНЕЙШИХ РЕКАХ ЭТОЙ УДИВИТЕЛЬНОЙ СТРАНЫ.
		</p>

		<h2>ОСНОВНЫЕ ВОЗМОЖНОСТИ ПРИЛОЖЕНИЯ:</h2>
		<ol>
			<li>
				<h3>ПОИСК ПО РЕКАМ</h3>
				<p>
					ПРИЛОЖЕНИЕ ПОЗВОЛЯЕТ ВАМ ВВЕСТИ НАЗВАНИЕ ИНТЕРЕСУЮЩЕЙ ВАС РЕКИ И ВЫБРАТЬ ЕЕ ИЗ
					ПРЕДЛОЖЕННЫХ ВАРИАНТОВ. ПОСЛЕ ЭТОГО ВЫ ПОЛУЧИТЕ ДОСТУП К РАЗНООБРАЗНОЙ
					ИНФОРМАЦИИ О ВЫБРАННОЙ РЕКЕ.
				</p>
			</li>
			<li>
				<h3>ПОДРОБНЫЕ ДАННЫЕ О РЕКЕ</h3>
				<p>ПОСЛЕ ВЫБОРА РЕКИ ВЫ УЗНАЕТЕ СЛЕДУЮЩИЕ ДАННЫЕ:</p>
				<ul>
					<li>
						<span class="highlight">АДМИНИСТРАТИВНАЯ ТЕРРИТОРИЯ:</span> ИНФОРМАЦИЯ О
						ТОМ, В КАКОЙ СУБЪЕКТ РОССИЙСКОЙ ФЕДЕРАЦИИ НАХОДИТСЯ РЕКА.
					</li>
					<li>
						<span class="highlight">ВПАДАЕТ В:</span> УКАЗАНИЕ НА ТО, В КАКОЙ ВОДОЕМ
						ВПАДАЕТ ДАННАЯ РЕКА.
					</li>
					<li>
						<span class="highlight">ИСТОКИ:</span> ИНФОРМАЦИЯ О МЕСТЕ ПРОИСХОЖДЕНИЯ
						РЕКИ.
					</li>
					<li><span class="highlight">ДЛИНА:</span> ОБЩАЯ ПРОТЯЖЕННОСТЬ РЕКИ.</li>
					<li>
						<span class="highlight">ПЛОЩАДЬ БАССЕЙНА:</span> РАЗМЕР ВОДОСБОРНОЙ ПЛОЩАДИ,
						СЛИВАЮЩЕЙСЯ В РЕКУ.
					</li>
					<li>
						<span class="highlight">ПРИТОКИ:</span> ПЕРЕЧИСЛЕНИЕ ОСНОВНЫХ ПРИТОКОВ
						ДАННОЙ РЕКИ.
					</li>
					<li>
						<span class="highlight">ССЫЛКА НА WIKIDATA:</span> ДЛЯ ПОЛУЧЕНИЯ
						ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ О РЕКЕ.
					</li>
				</ul>
			</li>
			<li>
				<h3>ФОТОГРАФИИ РЕКИ</h3>
				<p>
					ПРИЛОЖЕНИЕ ПРЕДОСТАВЛЯЕТ ВАМ ВОЗМОЖНОСТЬ УВИДЕТЬ КРАСИВЫЕ ФОТОГРАФИИ ВЫБРАННОЙ
					РЕКИ, ЧТОБЫ ЛУЧШЕ ПОНЯТЬ ЕЕ ПРИРОДНОЕ И КУЛЬТУРНОЕ ЗНАЧЕНИЕ.
				</p>
			</li>
			<li>
				<h3>ЛИНЕЙНАЯ СХЕМА</h3>
				<p>
					ЛИНЕЙНАЯ СХЕМА - ДЕРЕВООБРАЗНУЮ СХЕМУ ВЫБРАННОЙ РЕКИ. НА СХЕМЕ ОТОБРАЖАЮТСЯ
					ОСНОВНАЯ РЕКА, ЕЕ ПРИТОКИ, МОСТЫ, ГОРОДА И ПОСЕЛКИ ГОРОДСКОГО ТИПА, ЧТО ПОМОЖЕТ
					ВАМ ЛУЧШЕ ПРЕДСТАВИТЬ ГЕОГРАФИЮ И ИНФРАСТРУКТУРУ ВДОЛЬ РЕКИ.
				</p>
			</li>
		</ol>

		<h2>ЗАЧЕМ ЭТО ПРИЛОЖЕНИЕ?</h2>
		<p>
			ДЛЯ ОБРАЗОВАТЕЛЬНЫХ ЦЕЛЕЙ: ИЗУЧАЙТЕ ГЕОГРАФИЮ РОССИИ И ЕЕ ВОДНЫЕ БОГАТСТВА.<br />
			ДЛЯ ПУТЕШЕСТВИЙ: ПЛАНИРУЙТЕ СВОИ ПУТЕШЕСТВИЯ ВДОЛЬ РЕК И ИССЛЕДУЙТЕ НОВЫЕ МЕСТА.<br />
			ДЛЯ ЛЮБОЗНАТЕЛЬНОСТИ: УЗНАВАЙТЕ ИНТЕРЕСНЫЕ ФАКТЫ О РЕКАХ, ИХ ИСТОРИИ И ЗНАЧЕНИИ ДЛЯ
			ЖИЗНИ МЕСТНЫХ ЖИТЕЛЕЙ.
		</p>

		<p class="footer">
			НАСЛАЖДАЙТЕСЬ КРАСОТОЙ РОССИЙСКИХ РЕК!<br />
			ПРИЛОЖЕНИЕ О РЕКАХ РОССИИ СОЗДАНО ДЛЯ ТОГО, ЧТОБЫ ПОДЕЛИТЬСЯ С ВАМИ УДИВИТЕЛЬНЫМ МИРОМ
			ВОДНЫХ ПУТЕЙ ЭТОЙ УНИКАЛЬНОЙ СТРАНЫ. НАСЛАЖДАЙТЕСЬ ПУТЕШЕСТВИЕМ!
		</p>
	</div>

	<footer>
		<router-link :to="{ name: 'home' }"> На главную </router-link>
	</footer>
</template>

<style scoped>
body {
	font-family: Arial, sans-serif;
	line-height: 2;
	color: #333;
	margin: 0;
	padding: 0;
	background-color: #f9f9f9;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

.container {
	max-width: 800px;
	padding: 30px;
	background-color: #fff;
	border-radius: 0;
}

h1 {
	font-size: 48px;
	color: #007bff;
	text-align: center;
	margin-bottom: 30px;
}

h2 {
	font-size: 36px;
	color: #007bff;
	margin-bottom: 10px;
}

p {
	margin-bottom: 40px;
	font-size: 20px;
}

ul {
	margin-bottom: 40px;
	padding-left: 40px;
	font-size: 20px;
}

.highlight {
	font-weight: bold;
	color: #28a745;
}

.btn {
	display: inline-block;
	padding: 15px 30px;
	background-color: #007bff;
	color: #fff;
	text-decoration: none;
	border-radius: 5px;
	transition: background-color 0.3s;
	font-size: 20px;
}

.btn:hover {
	background-color: #0056b3;
}

.footer {
	text-align: center;
	margin-top: 80px;
}

.footer p {
	font-size: 18px;
	color: #999;
}
</style>
