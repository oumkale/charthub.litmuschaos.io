import { VersionActions, VersionAction } from "../model";
import * as ChartActions from "./charts";

let baseURL: string = "";
if (
	process.env.NODE_ENV.trim() === "development" ||
	process.env.NODE_ENV.trim() === "test"
) {
	baseURL = `${window.location.protocol}//${window.location.hostname}:8080`;
} else baseURL = "/api";

export const loadVersions = () => (dispatch: Function, getState: Function) => {
	fetch(baseURL + "/version")
		.then((response) => response.json())
		.then((data) => {
			dispatch(ChartActions.loadALlCharts(data[0]));
			dispatch({
				type: VersionActions.LOAD_VERSIONS,
				payload: data,
			});
		});
};

export const toggleVersion = (version: string) => (
	dispatch: Function,
	getState: Function
) => {
	dispatch(ChartActions.loadALlCharts(version));
	return {
		type: VersionActions.TOGGLE_VERSION,
		payload: version,
	};
};
