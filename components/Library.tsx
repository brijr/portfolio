const books = [
	{
		name: 'The Design of Everyday Things',
		author: 'Don Norman',
		link: 'https://amzn.to/3YWRmEE',
		coverImage: 'https://m.media-amazon.com/images/I/416Hql52NCL._SY346_.jpg'
	},
	{
		name: "Don't Make Me Think",
		author: 'Steve Krug',
		link: 'https://amzn.to/41lvAfn',
		coverImage: 'https://m.media-amazon.com/images/I/51WS36aA2BL.jpg'
	},
	{
		name: 'The Laws of UX',
		author: 'Jon Yablonski',
		link: 'https://lawsofux.com/',
		coverImage: 'https://m.media-amazon.com/images/I/61OELobx9LL.jpg'
	},
	{
		name: 'Hooked',
		author: 'Eyal Nir',
		link: 'https://amzn.to/3lQRkzw',
		coverImage: 'https://m.media-amazon.com/images/I/51DlnjccG-L._SX322_BO1,204,203,200_.jpg'
	},
	{
		name: 'A Primer of Visual Literacy',
		author: 'Donis A. Dondis',
		link: 'https://amzn.to/3KyrtGZ',
		coverImage: 'https://m.media-amazon.com/images/I/71jJslF6KHL.jpg'
	},
	{
		name: 'Know your Onions',
		author: 'Drew de Soto',
		link: 'https://www.amazon.com/Know-Your-Onions-Creative-Businessman/dp/9063692587?crid=2407C8HC3FQEE&keywords=know+your+onions&qid=1677175078&s=books&sprefix=know+your+onions,stripbooks,140&sr=1-1',
		coverImage: 'https://m.media-amazon.com/images/I/41stH9Lv6jS.jpg'
	},
	{
		name: 'The Language of Graphic Design',
		author: 'Richard Poulin',
		link: 'https://amzn.to/3EzyiV0',
		coverImage: 'https://m.media-amazon.com/images/I/61HgbIVMGsL.jpg'
	},
	{
		name: 'Thoughts on Design',
		author: 'Paul Rand',
		link: 'https://www.amazon.com/Thoughts-Design-Paul-Rand-ebook/dp/B00JVZ42I6?qid=1677175366&sr=8-4',
		coverImage: 'https://m.media-amazon.com/images/I/517p3lWK19L.jpg'
	}
];

export default function Library() {
	return (
		<section className="py-24">
			<h2 className="text-3xl font-medium mb-6">From the Library</h2>
			<p className="mb-6">The books and ideas that shape my design philosophy.</p>
			<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				{books.map((book) => (
					<li
						key={book.name}
						className="p-6 rounded-lg bg-slate-100 hover:bg-slate-300 transition-all duration-500 shadow-lg"
					>
						<a
							href={book.link}
							target="_blank"
							rel="noreferrer"
							className="w-auto flex flex-col h-full justify-between"
						>
							<div>
								<img className="h-36 mb-6" src={book.coverImage} alt="Book Cover" />
							</div>
							<p className="text-xl lg:h-12 mb-4">{book.name}</p>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
