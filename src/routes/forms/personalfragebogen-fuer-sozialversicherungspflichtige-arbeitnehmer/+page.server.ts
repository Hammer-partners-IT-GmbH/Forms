import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		console.log(data);
		throw redirect(301, '/forms/thank-you');
	}
};
