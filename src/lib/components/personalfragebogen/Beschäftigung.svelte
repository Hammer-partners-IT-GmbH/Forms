<h2>Beschäftigung</h2>

<div class="date">
	<label for="eintrittsdatum" class="required-label">Eintrittsdatum</label>
	<input type="date" name="eintrittsdatum" id="eintrittsdatum" required />
</div>

<div class="text">
	<label for="kostenstelle" class="required-label">Kostenstelle / Betriebsstätte</label>
	<input type="text" name="kostenstelle" id="kostenstelle" required />
</div>

<div class="text">
	<label for="berufsbezeichnung">Berufsbezeichnung (Ausgeübte Tätigkeit)</label>
	<input type="text" name="berufsbezeichnung" id="berufsbezeichnung" />
</div>

<div class="choice">
	<label for="weitere_beschäftigung"
		>Üben Sie, neben dieser neuen, weitere Beschäftigungen aus?</label
	>
	<select name="weitere_beschäftigung" id="weitere_beschäftigung" required>
		<option value="ja">Ja</option>
		<option value="nein">Nein</option>
	</select>
</div>

<div class="choice">
	<label for="als">Wenn Ja, als </label>
	<select name="als" id="als">
		<option value="hauptbeschäftigung">Hauptbeschäftigung</option>
		<option value="nebenbeschäftigung">Nebenbeschäftigung</option>
	</select>
</div>
