import Auth from "../../services/Auth";

import type { IUserForRegister } from "$lib/shared";
import type { FastifyRequest } from "fastify";
import type { Reply } from "../../types/Reply";

export default async function register(request: FastifyRequest, reply: Reply) {
	const { first_name, last_name, email, password } =
		request.body as IUserForRegister;

	if (!first_name || !last_name || !email || !password) {
		return reply.code(400).send({
			message: "Please provide all required fields",
		});
	}

	const user = await Auth.register({
		first_name,
		last_name,
		email,
		password,
	});
}
