import Script from 'next/script';

export default function Head() {
	return (
		<>
			<title>Bridger Tower | Designer and Developer</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta
				name="description"
				content="Bridger Tower is a designer and developer living in Salt Lake City, Utah. He specializes in front-end web development, software & app design, and product marketing & branding."
			/>
			<link rel="icon" href="/favicon.ico" />
			{/* og information */}
			<meta property="og:title" content="Bridger Tower | Designer and Developer" />
			<meta
				property="og:description"
				content="Bridger Tower is a designer and developer living in Salt Lake City, Utah. He specializes in front-end web development, software & app design, and product marketing & branding."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://btower.dev/" />
			<meta property="og:image" content="/og.jpg" />

			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-5K5X5N8BWJ"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-5K5X5N8BWJ', {
                  page_path: window.location.pathname,
                  });
                  `
				}}
			/>
		</>
	);
}
