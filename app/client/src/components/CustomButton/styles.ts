import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
		color: theme.palette.text.secondary,
		fontWeight: 700,
		"&:hover": {
			color: theme.palette.getContrastText("rgb(10,55,171)"),
		},
	},
}));
