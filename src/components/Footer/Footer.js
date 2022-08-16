import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<>
			<section id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-3 col-xs-12 block">
							<div className="footer-block">
								<h4>Address</h4>
								<hr />
								<p>7200 Razgrad Vit 21, Bulgaria</p>
								<Link to="/contacts" className="learnmore">
									More <i className="fa fa-caret-right" />
								</Link>
							</div>
						</div>
						<div className="col-md-3 col-sm-3 col-xs-12 block">
							<div className="footer-block">
								<h4>Useful Links</h4>
								<hr />
								<ul className="footer-links">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About Us</Link>
									</li>
									<li>
										<Link to="/contacts">Contact</Link>
									</li>
									<li>
										<a href="https://www.logcom.at">Logcom</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-3 col-xs-12 block">
							<div className="footer-block">
								<h4>Social Media</h4>
								<hr />
								<ul className="footer-links">
									<li>
										<a href="https://www.facebook.com/lacusltd/">Facebook</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/company/lacusltd/">
											LinkedIn
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="bottom-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-12 btm-footer-links">
							<h5>© 2019 – 2022 Lacus Ltd. | All rights reserved</h5>
						</div>
					</div>
				</div>
			</section>
		</>

	);
}