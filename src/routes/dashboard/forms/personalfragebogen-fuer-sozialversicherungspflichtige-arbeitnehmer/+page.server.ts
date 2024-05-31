import { User_Model } from '$lib/server/models';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		console.log(data);

		const personal_number = data.get('personal-number') as unknown as number;
		const arbeitgeber = data.get('arbeitgeber') as unknown as string;
		const familienname = data.get('familienname') as unknown as string;
		const vorname = data.get('vorname') as unknown as string;
		const anschrift = data.get('anschrift') as unknown as string;
		const plz = data.get('plz') as unknown as string;
		const geburtstag = data.get('geburtstag') as unknown as string;
		const geburtsort = data.get('geburtsort') as unknown as string;
		const geburtsland = data.get('geburtsland') as unknown as string;
		const familienstand = data.get('familienstand') as unknown as string;
		const geschlecht = data.get('geschlecht') as unknown as string;
		const staatsangehörigkeit = data.get('staatsangehörigkeit') as unknown as string;
		const telefonnummer = data.get('telefonnummer') as unknown as string;
		const eintrittsdatum = data.get('eintrittsdatum') as unknown as string;
		const kostenstelle = data.get('kostenstelle') as unknown as string;
		const berufsbezeichnung = data.get('berufsbezeichnung') as unknown as string;
		const weitere_beschäftigung = data.get('weitere_beschäftigung') as unknown as string;
		const als = data.get('als') as unknown as string;
		const stundenProWoche = data.get('stundenProWoche') as unknown as number;
		const VollzeitoderTeilzeit = data.get('VollzeitoderTeilzeit') as unknown as string;
		const montag = data.get('montag') as unknown as number;
		const dienstag = data.get('dienstag') as unknown as number;
		const mittwoch = data.get('mittwoch') as unknown as number;
		const donnerstag = data.get('donnerstag') as unknown as number;
		const freitag = data.get('freitag') as unknown as number;
		const samstag = data.get('samstag') as unknown as number;
		const sonntag = data.get('sonntag') as unknown as number;
		const festlohn_stundenlohn = data.get('festlohn-stundenlohn') as unknown as string;
		const gehalt = data.get('gehalt') as unknown as number;
		const identifikationsnummer = data.get('identifikationsnummer') as unknown as number;
		const steuerklasse = data.get('steuerklasse') as unknown as number;
		const kinderfreibeträge = data.get('kinderfreibeträge') as unknown as number;
		const konfession = data.get('konfession') as unknown as string;

		const email = event.cookies.get('email');

		try {
			// Find the user
			const user = await User_Model.findOne({ 'user.email': email });

			if (!user) {
				return {
					status: 404,
					body: JSON.stringify({ error: 'User not found' })
				};
			}

			if (user.personal_fragebogen) {
				user.personal_fragebogen.push({
					personal_number,
					arbeitgeber,
					familienname,
					vorname,
					anschrift,
					plz,
					geburtstag,
					geburtsort,
					geburtsland,
					familienstand,
					geschlecht,
					staatsangehörigkeit,
					telefonnummer,
					eintrittsdatum,
					kostenstelle,
					berufsbezeichnung,
					weitere_beschäftigung,
					als,
					stundenProWoche,
					VollzeitoderTeilzeit,
					montag,
					dienstag,
					mittwoch,
					donnerstag,
					freitag,
					samstag,
					sonntag,
					festlohn_stundenlohn,
					gehalt,
					identifikationsnummer,
					steuerklasse,
					kinderfreibeträge,
					konfession
				});
			}

			await user.save();

			const message = 'Form saved successfully';

			return { message };
		} catch (error) {
			console.error(error);
			return { error };
		}
	}
};
