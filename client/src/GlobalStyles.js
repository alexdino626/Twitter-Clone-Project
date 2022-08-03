import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

export default createGlobalStyle`
a{
	text-decoration:none;
}

*, *::before, *::after {
	box-sizing: border-box;
}

* {
	margin: 0;
}

html, body {
	color: blueviolet;
	background: hsl(208, 100%, 97%);
	height: 100%;
	font-family: sans-serif;
}

body {
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
}

input, button, textarea, select {
	font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
	overflow-wrap: break-word;
}

#root, #__next {
	isolation: isolate;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;