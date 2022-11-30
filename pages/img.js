import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const img = () => {
	return (
		<div>
			<div style={{margin:30}}>
				<Link href="/">/home page</Link>
			</div>
			<Image src="/tree.jpg" height={300} width={300} alt="tree" />
		</div>
	);
};

export default img;
