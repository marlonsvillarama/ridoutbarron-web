// @ts-nocheck
import { json } from "@sveltejs/kit";
import { Resend } from "resend";
import { RESEND_API_KEY } from '$app/env/private';

const resend = new Resend(RESEND_API_KEY);

const buildEmail = (data) => {
    return `
    Oops! Someone just tried to submit an inquiry but got an error instead:

    <p>First Name: ${data.first_name}</p>
    <p>Last Name: ${data.last_name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Category: ${data.category}</p>
    <p>Message: ${data.message}</p>
    `;
};

export async function POST({ request }) {
    const requestData = await request.json();
    console.log('requestData', requestData);

    try {
        const { data, error } = await resend.emails.send({
            from: requestData.email,
            to: ['marlonsvillarama@gmail.com'],
            replyTo: ['marlonsvillarama@gmail.com'],
            subject: 'RidoutBarron - Web inquiry failed',
            html: buildEmail(requestData)
        });

        if (error) {
            console.log('error', JSON.stringify(error));
            return json({ status: 400, ok: false, error: error.message })
        }

        return json({ status: 201, ok: true, data: data.message });
    }
    catch (ex) {
        return json({ status: 500, ok: false, error: ex.toString() })
    }
}