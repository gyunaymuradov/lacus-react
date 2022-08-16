import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {

	const [sticky, setSticky] = useState('');
	const [collapseClasses, setCollapseClasses] = useState({ toggle: 'collapsed', collapse_in: 'collapse navbar-collapse navbar-right' });
	const [classNames, setClassNames] = useState({ '/': 'active' });
	const { pathname } = useLocation();
	// const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		setClassNames(state => ({
			'/': '',
			'/contacts': '',
			'/about': '',
			[pathname]: 'active',
		}));
		setCollapseClasses(state => ({
			toggle: 'collapsed',
			collapse_in: 'navbar-collapse navbar-right collapse',
			// collapse_in: 'test ',

		}));
		window.scrollTo(0, 0);
	}, [pathname]);

	const onMenuButtonClick = () => {
		setCollapseClasses(state => ({
			...state,
			collapse_in: state.collapse_in === 'navbar-collapse navbar-right collapse in' ? 'navbar-collapse navbar-right collapse' : 'navbar-collapse navbar-right collapse in' ,
		}));
	}

	window.addEventListener("scroll", () => {
		// console.log('scrollllllllll');
		// setScrollY(window.scrollY);
		// console.log(window.scrollY);
		if (window.scrollY > 49) {
			setSticky('sticky');
		} else {
			setSticky('');
		}
	});

	return (
		<header className={sticky}>
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="row">
						<div className="navbar-header">
							<button
								type="button"
								className={`navbar-toggle`}
								data-toggle="collapse"
								// data-target="#navbar"
								onClick={onMenuButtonClick}
								aria-expanded="false"
								aria-controls="navbar"
							>
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>

							<NavLink className="navbar-brand" to="/">
								<h1>Lacus</h1>
								<span>International Transport</span>
							</NavLink>
							{/* <div>{scrollY}</div> */}

						</div>
						<div id="navbar" className={`${collapseClasses.collapse_in}`}>
							{/* navbar-collapse navbar-right collapse in ---- when its open */}
							{/* navbar-collapse navbar-right collapse ----- when its closed */}
							<ul className="nav navbar-nav">
								<li className={classNames['/']}>
									<NavLink to="/">Home</NavLink>
								</li>
								<li className={classNames['/about']}>
									<NavLink to="/about">About</NavLink>
								</li>
								<li className={classNames['/contacts']} >
									<NavLink to="/contacts">Contact</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}