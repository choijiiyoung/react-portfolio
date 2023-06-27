function Layout({ name }) {
	return (
		<div className='container'>
			<div className={`content ${name}`}>
				<figure className='sub_visual'>
					<h1>{name}</h1>
				</figure>
				<section>
					<div className='inner'></div>
				</section>
			</div>
		</div>
	);
}

export default Layout;
