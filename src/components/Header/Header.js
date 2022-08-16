import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
	return (
		<>
			<section id="top-header">
				<div className="container">
					<div className="row">
						<div className="col-md-7 col-sm-7 col-xs-7 top-header-links">
							<ul className="contact_links">
								<li>
									<i className="fa fa-phone" />
									<a href="tel:00359899635595">00359 899 635 595</a>
								</li>
								<li>
									<i className="fa fa-envelope" />
									<a href="mailto:info@lacusltd.com">info@lacusltd.com</a>
								</li>
							</ul>
						</div>
						<div className="col-md-5 col-sm-5 col-xs-5 social">
							<ul className="social_links">
								<li>
									<a href="https://www.facebook.com/lacusltd/">
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/company/lacusltd/">
										<i className="fa fa-linkedin" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		
			<Navigation />
			
		</>
	);
}