export const Contacts = () => {
	return (
		<div>
			<section id="top_banner">
				<div className="banner">
					<div className="inner text-center"></div>
				</div>
			</section>
			<section id="contact">
				<div className="overlay">
					<div className="gmap-area">
						<div className="container">
							<div className="row">
								<div className="col-sm-5">
									<div className="gmap">
										<iframe
											title="location"
											frameBorder={0}
											scrolling="no"
											marginHeight={0}
											marginWidth={0}
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15887.238408717047!2d26.51895494204485!3d43.534470423396264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af0f1d0f964185%3A0x5e905a683372e528!2sLacus%20Ltd.!5e0!3m2!1sen!2sbg!4v1659618718194!5m2!1sen!2sbg&t=m&z=10&iwloc=A&cid=1073661719450182870&output=embed"
										/>
									</div>
								</div>
								{/* <div className="col-sm-6 map-content"><div className="row"></div></div> */}
								<div className="col-sm-6 map-content">
									<ul className="row">
										<li className="col-sm-3">

										</li>
										<li className="col-sm-6">
											<h5>Contact us</h5>
											<p>
												<i className="fa fa-envelope" />
												&nbsp;&nbsp;
												<a href="mailto:info@lacusltd.com">info@lacusltd.com</a>
											</p>
											<p>
												<i className="fa fa-phone" />
												&nbsp;&nbsp;<a href="tel:00359899635595">00359 899635 595</a>
											</p>
											<p>
												<i className="fa fa-map-marker" />
												&nbsp;&nbsp;7200 Razgrad Vit 21, Bulgaria
											</p>
											<p>
												<a href="https://www.facebook.com/lacusltd/">
													<i className="fa fa fa-facebook" />
												</a>
												&nbsp;&nbsp;{" "}
												<a href="https://www.linkedin.com/company/lacusltd/">
													<i className="fa fa fa-linkedin" />
												</a>
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}