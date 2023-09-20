<script>
	import { enhance } from '$app/forms';
</script>

<h1>Personalfragebogen für sozialversicherungspflichtige Arbeitnhemer</h1>

<form action="POST" autocomplete="on" use:enhance>
	<div class="number">
		<label for="mandaten-nummer">Mandatennummer</label>
		<input type="number" name="mandaten-nummer" id="mandaten-nummer" />
	</div>
	<div class="number">
		<label for="personal-number">Personalnummer</label>
		<input type="number" name="personal-number" id="personal-number" />
	</div>
	<div class="text">
		<label for="arbeitgeber">Name des Arbeitgebers</label>
		<input type="text" name="arbeitgeber" id="arbeitgeber" />
	</div>

	<h2>Persöhnliche angaben</h2>

	<div class="text">
		<label for="familienname">Familienname ggf. Geburtsname</label>
		<input type="text" name="familienname" id="familienname" />
	</div>

	<div class="text">
		<label for="vorname">Vorname</label>
		<input type="text" name="vorname" id="vorname" />
	</div>

	<div class="text">
		<label for="anschrift">Straße, Hausnummer inkl. Anschriftenzusatz</label>
		<input type="text" name="anschrift" id="anschrift" />
	</div>

	<div class="text">
		<label for="plz">PLZ, Ort</label>
		<input type="text" name="plz" id="plz" />
	</div>

	<div class="date">
		<label for="geburtstag">Geburtsdatum</label>
		<input type="date" name="geburtstag" id="geburtstag" />
	</div>

	<div class="text">
		<label for="geburtsort">Geburtsort</label>
		<input type="text" name="geburtsort" id="geburtsort" />
	</div>

	<div class="text">
		<label for="geburtsland">Geburtsland</label>
		<input type="text" name="geburtsland" id="geburtsland" />
	</div>

	<div class="choice">
		<label for="familienstand">Familienstand</label>
		<select name="familienstand" id="familienstand">
			<option value="verheiratet">Verheiratet</option>
			<option value="nicht-verheiratet">Nicht Verheiratet</option>
		</select>
	</div>

	<div class="choice">
		<label for="geschlecht">Geschlecht</label>
		<select name="geschlecht" id="geschlecht">
			<option value="männlich">Männlich</option>
			<option value="weiblich">Weiblich</option>
			<option value="unbestimmt">Unbestimmt</option>
			<option value="divers">Divers</option>
		</select>
	</div>

	<div class="text">
		<label for="staatsangehörigkeit">Staatsangehörigkeit</label>
		<input type="text" name="staatsangehörigkeit" id="staatsangehörigkeit" />
	</div>

	<div class="telefon">
		<label for="telefonnummer">Telefonnummer</label>
		<input type="tel" name="telefonnummer" id="telefonnummer" />
	</div>

	<button>Einreichen</button>
</form>

<style lang="scss">
	label {
		font-size: var(--medium-font);
	}
</style>
