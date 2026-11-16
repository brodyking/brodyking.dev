const genNav = (activePage) => {
  document.getElementById("nav").innerHTML = `
			<ul>
				<li class="${activePage == "index" ? "active" : ""}"><a href="/">brodyking.dev</a></li>
				<li class="${activePage == "contact" ? "active" : ""}"><a href="/pages/contact/">contact</a></li>
				<li class="${activePage == "portfolio" ? "active" : ""}"><a href="/pages/portfolio/">portfolio</a></li>
			</ul>
  `;
}
