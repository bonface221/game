import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a7ac0f3ee39c4f2996073fbb99323f79",
	},
});
