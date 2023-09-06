export const Home = () => {
	return (
		<>
			<div id="myCarousel" className="carousel slide">
				{/* Indicators */}
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to={0} className="active" />
					<li data-target="#myCarousel" data-slide-to={1} />
					<li data-target="#myCarousel" data-slide-to={2} />
				</ol>
				{/* Wrapper for slides */}
				<div className="carousel-inner">
					<div className="item active">
						<div
							className="fill"
							style={{ backgroundImage: 'url("/images/back-4.jpg")' }}
						/>
						<div className="carousel-caption slide-up">
							<h1 className="banner_heading">
								Your partner for <span>international transport </span>throughout the
								entire territory of Europe
							</h1>
						</div>
					</div>
					<div className="item">
						<div
							className="fill"
							style={{ backgroundImage: 'url("/images/back-1.jpg")' }}
						/>
						<div className="carousel-caption slide-up">
							<h1 className="banner_heading">
								Offering transport services with main focus in <span>BENELUX </span>
								as well as <span>DE &amp; AT</span>
							</h1>
						</div>
					</div>
					<div className="item">
						<div
							className="fill"
							style={{ backgroundImage: 'url("/images/back-2.jpg")' }}
						/>
						<div className="carousel-caption slide-up">
							<h1 className="banner_heading">
								<span>Fast</span> and <span>reliable </span> transport of any cargo
								that fits in a curtainside trailer
							</h1>
						</div>
					</div>
				</div>
				{/* Left and right controls */}
				<a
					className="left carousel-control"
					href="#myCarousel"
					role="button"
					data-slide="prev"
				>
					{" "}
					<i className="fa fa-angle-left" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="right carousel-control"
					href="#myCarousel"
					role="button"
					data-slide="next"
				>
					{" "}
					<i className="fa fa-angle-right" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
			<section id="features">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-12 block">
							<div className="col-md-2 col-xs-2">
								<i className="fa fa-cubes feature_icon" />
							</div>
							<div className="col-md-10 col-xs-10">
								<h4>FTL &amp; LTL general cargo</h4>
								<p>
									Experienced in transport of different types of goods: big bags,
									machines, palletized, metal constructions, paper rolls etc.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-xs-12 block">
							<div className="col-md-2 col-xs-2">
								<i className="fa fa-support feature_icon" />
							</div>
							<div className="col-md-10 col-xs-10">
								<h4>Customer and solution oriented</h4>
								<p>
									Since its establishment in 2019 the company has operated in
									decisive, customer and solution oriented manner. We guarantee fair
									and professional service, adjustable to each customer individual
									needs.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-xs-12 block">
							<div className="col-md-2 col-xs-2">
								<i className="fa fa-truck feature_icon" />
							</div>
							<div className="col-md-10 col-xs-10">
								<h4>Modern Fleet</h4>
								<p>
									Our vehicles meet the latest environmental and technological
									requirements Euro 6 and are trackable by GPS. Managed by
									experienced drivers our vehicles spare natural resources and
									reduce the discharges of exhaust gases into the atmosphere.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section id="about">
				<div className="image-holder col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left">
					<div className="background-imgholder">
						<img
							src="/images/back-6.jpeg"
							alt="about"
							className="img-responsive"
							style={{ display: "none" }}
						/>
					</div>
				</div>
				<div className="container-fluid">
					<div className="col-md-7 col-md-offset-5 col-sm-8 col-sm-offset-2 col-xs-12 text-inner ">
						<div className="text-block">
							<div className="section-heading">
								<h1>
									Why to choose <span>us</span> as a partner
								</h1>
								<p className="subheading">
									Why clients choose our services and continue to do so.
								</p>
							</div>
							<ul className="aboutul">
								<li>
									{/* {" "} */}
									<i className="fa fa-check" />
									Fleet consisting of modern vehicles and experienced up-to-date
									drivers.
								</li>
								<li>
									{/* {" "} */}
									<i className="fa fa-check" />
									Experience in many European countries.
								</li>
								<li>
									{/* {" "} */}
									<i className="fa fa-check" />
									Experience in different types of general cargo.
								</li>
								<li>
									{/* {" "} */}
									<i className="fa fa-check" />
									Attention to detail in everything we do.
								</li>
								<li>
									{/* {" "} */}
									<i className="fa fa-check" />
									Adding value not complication.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="about-page-section-3">
				<div className="container">
					<div className="row">
						<img
							width="auto"
							src="/images/next_generation_eu.png"
							className="img-responsive"
							alt="eu_fund"
						/>
					</div>
				</div>
			</section>
		</>
	);
}