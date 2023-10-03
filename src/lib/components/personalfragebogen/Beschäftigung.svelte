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
	<label for="berufsbezeichnung" class="required-label"
		>Berufsbezeichnung (Ausgeübte Tätigkeit)</label
	>
	<input type="text" name="berufsbezeichnung" id="berufsbezeichnung" required />
</div>

<div class="choice">
	<label for="weitere_beschäftigung" class="required-label"
		>Üben Sie, neben dieser neuen, weitere Beschäftigungen aus?</label
	>
	<select name="weitere_beschäftigung" id="weitere_beschäftigung" required>
		<option value="ja">Ja</option>
		<option value="nein">Nein</option>
	</select>
</div>

<div class="choice">
	<label for="als" class="required-label">Wenn Ja, als </label>
	<select name="als" id="als" required>
		<option value="Nein">Ich habe oben nein gewählt</option>
		<option value="hauptbeschäftigung">Hauptbeschäftigung</option>
		<option value="nebenbeschäftigung">Nebenbeschäftigung</option>
	</select>
</div>

<h3>Wöchentliche Arbeitszeit</h3>

<div class="number">
	<label for="stundenProWoche" class="required-label">Std./Woche</label>
	<input type="number" id="stundenProWoche" name="stundenProWoche" required />
	<div class="choice">
		<select name="VollzeitoderTeilzeit" id="VollzeitoderTeilzeit" required>
			<option value="vollzeit">Vollzeit</option>
			<option value="teilzeit">Teilzeit</option>
		</select>
	</div>
</div>

<div class="number">
	<p>Ggf. Verteilung der wöchentlichen Arbeitszeit</p>
	<label for="montag">Montag:</label>
	<input type="number" id="montag" name="montag" min="0" max="24" step="1" /><br />

	<label for="dienstag">Dienstag:</label>
	<input type="number" id="dienstag" name="dienstag" min="0" max="24" step="1" /><br />

	<label for="mittwoch">Mittwoch:</label>
	<input type="number" id="mittwoch" name="mittwoch" min="0" max="24" step="1" /><br />

	<label for="donnerstag">Donnerstag:</label>
	<input type="number" id="donnerstag" name="donnerstag" min="0" max="24" step="1" /><br />

	<label for="freitag">Freitag:</label>
	<input type="number" id="freitag" name="freitag" min="0" max="24" step="1" /><br />

	<label for="samstag">Samstag:</label>
	<input type="number" id="samstag" name="samstag" min="0" max="24" step="1" /><br />

	<label for="sonntag">Sonntag:</label>
	<input type="number" id="sonntag" name="sonntag" min="0" max="24" step="1" /><br />
</div>
