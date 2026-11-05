// @ts-nocheck
import { json } from "@sveltejs/kit";
import { Resend } from "resend";
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

const buildEmail = (data) => {
    return `
    Dear ${data.first_name},
    <p>Thank you for your message.</p>

    <p>Sincerely yours,</p>
    <strong>Peter W. K. Barron</strong>
    <span>Partner, Ridout Barron</span>
    `;
};

export async function POST({ request }) {
    const requestData = await request.json();
    console.log('requestData', requestData);

    try {
        const { data, error } = await resend.emails.send({
            from: ['info@ridoutbarron.com'],
            to: requestData.email,
            replyTo: ['info@ridoutbarron.com'],
            subject: 'Ridout Barron - Thank you for your message.',
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