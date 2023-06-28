function Layout({ name, children }) {
	return (
		<div className='container'>
			<div className={`content ${name}`}>
				<figure className='sub_visual'>
					<h1>{name}</h1>
				</figure>
				<section>
					<div className='inner'>{children}</div>
				</section>
			</div>
		</div>
	);
}

export default Layout;
