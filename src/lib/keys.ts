const test_publishable_key =
	'pk_test_51O2guJGvSx9gKzNOpBMs75BI2gg1OZFt7Yep0RA5aFJrs37iqiOqGhPON6sbW3BhfYx6ph3NQuN4S44cD7Wl8qVi00XteS6L9v';
const prod_account_price_id_full = 'price_1Po3Z4GvSx9gKzNO1BTjXPLi';
const prod_account_price_id_half = 'price_1PpeUZGvSx9gKzNOsiShpzf2';
const prod_account_price_id = prod_account_price_id_full;

const prod_contact_price_id = 'price_1Po3aKGvSx9gKzNO2A3wBrfz';
const prod_publishable_key =
	'pk_live_51O2guJGvSx9gKzNOvCql221PDRPlq564tmqXcekOJjc6Vti8FpTrPnx6Ib4LNhlzSMFDovhhz3TJ3Yy5uefRHzir000QpRy0t8';
const test_account_price_id = 'price_1Pp9A6GvSx9gKzNOyOE8EU8f';
const test_contact_price_id = 'price_1Pp99iGvSx9gKzNOtkNURBJr';

const testEnv = false;

export const publishableKey = testEnv ? test_publishable_key : prod_publishable_key;
export const account_price_id = testEnv ? test_account_price_id : prod_account_price_id;
export const contact_price_id = testEnv ? test_contact_price_id : prod_contact_price_id;

export const email_public_key = 'WoMvTOlnT-icksOTQ';
export const email_service = 'service_8wzh2fl';
export const email_template = 'template_xvk8z5h';
