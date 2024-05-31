import mongoose from 'mongoose';

const User_Schema = new mongoose.Schema({
	user: {
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true }
	},
	personal_fragebogen: [
		{
			personal_number: { type: Number },
			arbeitgeber: { type: String },
			familienname: { type: String },
			vorname: { type: String },
			anschrift: { type: String },
			plz: { type: String },
			geburtstag: { type: String },
			geburtsort: { type: String },
			geburtsland: { type: String },
			familienstand: { type: String },
			geschlecht: { type: String },
			staatsangehörigkeit: { type: String },
			telefonnummer: { type: String },
			eintrittsdatum: { type: String },
			kostenstelle: { type: String },
			berufsbezeichnung: { type: String },
			weitere_beschäftigung: { type: String },
			als: { type: String },
			stundenProWoche: { type: Number },
			VollzeitoderTeilzeit: { type: String },
			montag: { type: Number },
			dienstag: { type: Number },
			mittwoch: { type: Number },
			donnerstag: { type: Number },
			freitag: { type: Number },
			samstag: { type: Number },
			sonntag: { type: Number },
			festlohn_stundenlohn: { type: String },
			gehalt: { type: Number },
			identifikationsnummer: { type: Number },
			steuerklasse: { type: Number },
			kinderfreibeträge: { type: Number },
			konfession: { type: String }
		}
	]
});

export const User_Model = mongoose.model('User', User_Schema);
