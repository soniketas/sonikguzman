export interface Project {
	slug: string;
	name: string;
	category: string;
	year: string;
	client: string;
	role: string;
	tools: string;
	summary: string;
	challenge: string;
	process: string;
	result: string;
	color: string; // stack card background
	nameColor: string; // project name overlay color
	images?: {
		cover: { src: string; alt: string };
		process: { src: string; alt: string }[];
		// 'contain' for portrait screenshots (e.g. phone UI) that would
		// otherwise get cropped by the gallery's default landscape cover-crop
		processFit?: 'cover' | 'contain';
	};
	extraSections?: {
		title: string;
		description: string;
		images?: { src: string; alt: string }[];
		// controls: adds a minimal pause/play button — reserve for videos long
		// enough (WCAG 2.2.2, >5s) that autoplay-loop needs a way to stop
		video?: { src: string; description: string; controls?: boolean };
	}[];
}

export const projects: Project[] = [
	{
		slug: 'novosafe',
		name: 'Novosafe',
		category: 'Security Platform',
		year: '2025',
		client: 'novosafe',
		role: 'UX/UI Web Designer (Freelance)',
		tools: 'Figma, Framer',
		summary:
			'A B2B security platform helping multi-location businesses arm, monitor, and manage their sites from one app.',
		challenge:
			"Novosafe launched with a consumer-first MVP: I designed the company's first website in Framer and the app's MVP for individual homeowners. After the company pivoted to B2B, that single-location experience no longer fit: chain retailers and energy-facility operators needed to manage dozens of sites, not one.",
		process:
			'The redesigned app is now focused on the on-site operator, the person managing day-to-day security at a single location, with a clear arm/disarm status control and an SOS action front and center. I explored several directions (Version A/B/C) before converging on reusable components (nav bar, widget containers, device and room cards) built to extend across future device types. Multi-site management for chain retailers and energy-facility operators will live in a separate web app.',
		result:
			"An in-progress, ongoing collaboration: the redesigned app experience is currently rolling out to novosafe's chain-retail and energy-facility clients.",
		color: '#13294b',
		nameColor: '#8fb8ff',
		images: {
			cover: {
				src: '/images/novosafe/home.webp',
				alt: "Novosafe app home screen showing an armed status message, a Berlin store location, and a large arm/disarm control with an SOS button.",
			},
			process: [
				{
					src: '/images/novosafe/home.webp',
					alt: "Novosafe app home screen showing an armed status message, a Berlin store location, and a large arm/disarm control with an SOS button.",
				},
				{
					src: '/images/novosafe/locations.webp',
					alt: 'Novosafe app locations list for a chain retailer, showing 44 sites with individual arm/disarm toggles, search, and filters.',
				},
			],
			processFit: 'contain',
		},
		extraSections: [
			{
				title: 'The original consumer app',
				description:
					'Before the B2B pivot, I designed the MVP for individual homeowners: device monitoring with live status, and on-demand snapshots from any connected sensor or camera.',
				video: {
					src: '/images/novosafe/b2c-snapshot-demo.mp4',
					description:
						"Screen recording of the consumer app requesting an on-demand snapshot from a motion sensor and showing its signal and battery strength.",
					controls: true,
				},
			},
			{
				title: 'The marketing website',
				description:
					"I also designed novosafe's first website in Framer, built around two entry points: one for homes, one for businesses. That business side reflected an earlier, different B2B concept than the one the app has since pivoted to.",
				video: {
					src: '/images/novosafe/website-toggle-demo.mp4',
					description:
						"Screen recording of the novosafe marketing website stepping through numbered content panels over a photo of a house exterior.",
				},
			},
		],
	},
	{
		slug: 'arbo',
		name: 'Arbo',
		category: 'Materials Platform · AI',
		year: '2024',
		client: 'Arbo',
		role: 'UX/UI Web Designer',
		tools: 'Figma, Tailwind CSS, Anima',
		summary:
			'A platform connecting construction professionals with timber suppliers, evolved to use AI for extracting material lists directly from building plans.',
		challenge:
			"Getting a materials quote from timber suppliers meant manually reading building plans, listing every beam and panel by hand, and emailing multiple distributors: slow and error-prone for both builders and Arbo's own team.",
		process:
			"The platform has two very different sides. Clients get a simple, guided request flow: upload your plans, and Avi (Arbo's AI) extracts the material list automatically, reviewable before it's sent anywhere. Internally, Arbo's specialists work from a denser operations dashboard: matching requests with consulted suppliers, comparing incoming offers, and managing accounts across three roles (Admin, Expert, Supplier). I designed both sides on a shared design system built with Tailwind CSS and Anima, so the specialist and client screens stayed visually consistent while serving very different needs.",
		result:
			"The AI-assisted request flow replaced a manual, email-based process with a single upload-to-quote flow, reviewable by both the client and Arbo's team before it ever reached a supplier.",
		color: '#dcecc9',
		nameColor: '#456e1c',
		images: {
			cover: {
				src: '/images/arbo/cover.webp',
				alt: "Arbo login screen on a laptop, with a 'Welcome to Arbo' panel introducing Avi, Arbo's AI, next to the email and password fields.",
			},
			process: [
				{
					src: '/images/arbo/client-upload.webp',
					alt: 'Arbo client request flow: a file-upload step for timber lists, specifications, and structural calculations, with a four-step progress tracker.',
				},
				{
					src: '/images/arbo/specialist-offers.webp',
					alt: "Arbo internal operations dashboard listing supplier offers for an order, grouped by status with requested, approved, rejected, and pending counts.",
				},
			],
		},
		extraSections: [
			{
				title: 'A further exploration: an AI structure editor',
				description:
					"Beyond the shipped flow, I explored a more ambitious redesign: a 3D structure editor where AI would flag reliability issues, like beam collisions, directly on the model before a request was ever sent to a supplier. It didn't make it to production, but it shaped how I think about surfacing AI confidence and errors inside complex technical interfaces.",
				images: [
					{
						src: '/images/arbo/exploration-ai-editor.webp',
						alt: 'AI document-analysis loading screen, extracting material data from an uploaded plan at 76% complete.',
					},
					{
						src: '/images/arbo/exploration-step-guide.webp',
						alt: 'Exploratory 3D structure editor showing a timber roof frame from four angles, with an AI-flagged collision error between a support beam and a crossbeam.',
					},
				],
			},
		],
	},
	{
		slug: 'ipe-systeme',
		name: 'IPE Systeme',
		category: 'Sustainability · Water Management',
		year: '2023',
		client: 'IPE Systeme',
		role: 'UX/UI Web Designer (Freelance)',
		tools: 'WordPress, Elementor, Astra',
		summary:
			"A WordPress site for a patented water-saving system, turning a technical sustainability product into a clear, credible lead-generation experience.",
		challenge:
			"IPE Systeme's patented water-injection system cuts a building's water and energy consumption, backed by real international recognition: a Silver Medal at Switzerland's International Exhibition of Inventions, a 2022 LABGRADE nomination in Italy, among others. But the technology itself is hard to explain simply. The site needed to build trust fast and turn visits into requests for a free water audit, without burying visitors in technical detail.",
		process:
			"I structured the site around four clear stops: home, about (the company's 15-year history and its real accolades), services (the installation broken into three concrete steps: reception & analysis, water study, installation), and contact. Built in WordPress with Elementor and the Astra theme, with the 'free water audit' request form kept one click away on every page.",
		result:
			"The site is IPE Systeme's live digital presence, presenting its patented system and real international awards through a simple structure built around a single conversion goal: getting visitors to request their water audit.",
		color: '#454F5E',
		nameColor: '#7fd1de',
		images: {
			cover: {
				src: '/images/ipe-systeme/cover.webp',
				alt: "IPE Systeme homepage hero over an aerial river landscape photo, with the headline 'Juntos, somos más sostenibles' and a call to request a free water audit.",
			},
			process: [
				{
					src: '/images/ipe-systeme/methodology.webp',
					alt: "IPE Systeme's three-step methodology section: reception and analysis, water study, and system installation.",
				},
				{
					src: '/images/ipe-systeme/intro.webp',
					alt: "IPE Systeme introduction section describing the patented water-injection system's savings, next to a forest lake photo and icons for implementation, consultancy, and monitoring.",
				},
			],
		},
	},
	{
		slug: 'greta-stefanel',
		name: 'Greta Stefanel',
		category: 'E-commerce · Checkout Redesign',
		year: '2024',
		client: 'Greta Stefanel',
		role: 'UX/UI Web Designer (Freelance)',
		tools: 'WordPress, WooCommerce',
		summary:
			'A nature- and folklore-inspired art shop, redesigned around clear product categories and a direct checkout path for single-item purchases.',
		challenge:
			"Greta Stefanel sells handmade, nature-inspired pieces across five very different categories: accessories, interior prints, wooden pins, holographic stickers, art prints. Browsing needed to make that range easy to scan at a glance, and buying a single art print shouldn't require the same multi-step basket flow as a multi-item order.",
		process:
			"I redesigned the homepage around a bold, image-led Categories grid: each of the five categories gets a full-bleed photo with its name overlaid, so the range of what's sold is legible in one scroll. On product pages, I added a direct PayPal buy option next to 'Add to basket', so a customer buying one print can check out without detouring through the basket at all. Built in WordPress with WooCommerce.",
		result:
			"The categories grid and direct-checkout option are live on gretastefanel.com today, shortening the path from a single product page straight to payment.",
		color: '#697861',
		nameColor: '#fffcea',
		images: {
			cover: {
				src: '/images/greta-stefanel/cover.webp',
				alt: "Phone mockup of the Greta Stefanel shop's Categories page, with the Accessories tile shown over a textile scarf photo.",
			},
			process: [
				{
					src: '/images/greta-stefanel/categories.webp',
					alt: 'Greta Stefanel shop Categories grid with full-bleed photos for the Accessories and Stickers categories.',
				},
				{
					src: '/images/greta-stefanel/checkout.webp',
					alt: "Two phones showing a Greta Stefanel product page for a Ritual Fabric Print, with a quantity selector, 'Add to basket', and a direct PayPal buy option.",
				},
			],
		},
	},
	{
		slug: 'dwa-kolory',
		name: 'Dwa Kolory',
		category: 'E-commerce · Mobile-First Redesign',
		year: '2024',
		client: 'Dwa Kolory',
		role: 'UX/UI Web Designer (Freelance)',
		tools: 'Webflow',
		summary:
			'A mobile-first redesign for a Ukrainian heritage concept store, built to carry its Instagram-driven traffic straight into an easy shop.',
		challenge:
			"Dwa Kolory sells handmade goods, crochet, embroidery, jewelry, candles, rooted in Ukrainian heritage, and most of its discovery happens on Instagram. Visitors were arriving from a feed built entirely around product photography, on their phones, so the shop needed to match that experience instead of forcing them onto a desktop-first layout.",
		process:
			"I rebuilt the site in Webflow with a mobile-first layout: a simple category grid (accessories, clothing, jewelry, candles) up front, each category represented by the same kind of strong product photography the brand already uses on Instagram, and a short path from a product photo to checkout.",
		result:
			"The redesigned store is live at dwakoloryua.com, carrying Dwa Kolory's Instagram-first product photography into a shop that works the way its actual traffic arrives: on mobile.",
		color: '#26509e',
		nameColor: '#f0c814',
		images: {
			cover: {
				src: '/images/dwa-kolory/cover.webp',
				alt: 'Dwa Kolory homepage with a wheat field hero photo and a category row for accessories, candles, and clothes.',
			},
			process: [
				{
					src: '/images/dwa-kolory/category.webp',
					alt: 'Dwa Kolory accessories category grid of crochet keychains, including a pumpkin, sunflower, bird, and cat, each with its price.',
				},
				{
					src: '/images/dwa-kolory/product.webp',
					alt: 'Dwa Kolory product page for a crochet pumpkin keychain, priced at €10 and marked out of stock.',
				},
			],
		},
	},
	{
		slug: 'runup',
		name: 'RunUp',
		category: 'Bar Inventory · PWA',
		year: '2026',
		client: 'Personal project',
		role: 'Product Design + Development',
		tools: 'React, Vite, Tailwind CSS',
		summary:
			'An installable PWA that lets bar runners see restock status at a glance and generates an accurate shopping list from the deposit.',
		challenge:
			"Bars track fridge and shelf stock informally, so runners waste time re-checking what's actually missing and how much, shift after shift. When the deposit doesn't have enough of something, that shortage tends to get lost the moment the next shift starts.",
		process:
			"I built RunUp as a single-page installable PWA with no backend. Everything lives in one state hook and persists to the device's local storage. Each fridge or shelf is a 'zone' with its own products and ideal stock levels; the home screen shows what's empty, low, or full at a glance, and a picking list is generated automatically, grouped by zone, of exactly what to bring from the deposit. Critically, the app distinguishes between stock a runner actually restocked and a real deposit shortage, so gaps stay visible instead of quietly resetting at the next shift.",
		result:
			"RunUp is currently being tested by real runners during service at a bar: an active pilot, not just a prototype.",
		color: '#e7f158',
		nameColor: '#181611',
		images: {
			cover: {
				src: '/images/runup/home.webp',
				alt: "RunUp home screen showing today's shift stock status: 1 empty, 8 low, 8 full, and a restock breakdown by zone.",
			},
			process: [
				{
					src: '/images/runup/zone.webp',
					alt: 'RunUp zone view for Refrigerador 1, listing individual drinks with stock sliders from empty to full.',
				},
				{
					src: '/images/runup/picking.webp',
					alt: 'RunUp picking list grouped by zone, with a checkbox for each product still needed from the deposit.',
				},
			],
			processFit: 'contain',
		},
	},
];
