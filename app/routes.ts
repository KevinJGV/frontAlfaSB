import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";

export default [
	layout("layouts/initSession.tsx", [
		route("/signin", "routes/signin.tsx"),
		route("/signup", "routes/signup.tsx"),

	]),

	// layout("layouts/homeLayout.tsx", [
	// 	route("/", "routes/home.tsx")
	// ]),
] as RouteConfig;
