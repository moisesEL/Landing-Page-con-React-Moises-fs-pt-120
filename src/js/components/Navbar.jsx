import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark" >
			<div className="container">
				<a class="navbar-brand " href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#itemsNavbar" >
					<span className="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="itemsNavbar">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;