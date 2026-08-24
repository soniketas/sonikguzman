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
		cover: string;
		process: string[];
	};
	extraSections?: {
		title: string;
		description: string;
		images?: string[];
		video?: string;
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
			"Novosafe launched with a consumer-first MVP — I designed the company's first website in Framer and the app's MVP for individual homeowners. After the company pivoted to B2B, that single-location experience no longer fit: chain retailers and energy-facility operators needed to manage dozens of sites, not one.",
		process:
			'The redesigned app is now focused on the on-site operator — the person managing day-to-day security at a single location — with a clear arm/disarm status control and an SOS action front and center. I explored several directions (Version A/B/C) before converging on reusable components — nav bar, widget containers, device and room cards — built to extend across future device types. Multi-site management for chain retailers and energy-facility operators will live in a separate web app.',
		result:
			"An in-progress, ongoing collaboration: the redesigned app experience is currently rolling out to novosafe's chain-retail and energy-facility clients.",
		color: '#13294b',
		nameColor: '#8fb8ff',
		images: {
			cover: '/images/novosafe/home.png',
			process: ['/images/novosafe/home.png', '/images/novosafe/locations.png'],
		},
		extraSections: [
			{
				title: 'The original consumer app',
				description:
					'Before the B2B pivot, I designed the MVP for individual homeowners — device monitoring with live status, and on-demand snapshots from any connected sensor or camera.',
				video: '/images/novosafe/b2c-snapshot-demo.mp4',
			},
			{
				title: 'The marketing website',
				description:
					"I also designed novosafe's first website in Framer, built around two entry points — one for homes, one for businesses. That business side reflected an earlier, different B2B concept than the one the app has since pivoted to.",
				video: '/images/novosafe/website-toggle-demo.mp4',
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
			'A platform connecting construction professionals with timber suppliers — evolved to use AI for extracting material lists directly from building plans.',
		challenge:
			"Getting a materials quote from timber suppliers meant manually reading building plans, listing every beam and panel by hand, and emailing multiple distributors — slow and error-prone for both builders and Arbo's own team.",
		process:
			"The platform has two very different sides. Clients get a simple, guided request flow: upload your plans, and Avi (Arbo's AI) extracts the material list automatically — reviewable before it's sent anywhere. Internally, Arbo's specialists work from a denser operations dashboard: matching requests with consulted suppliers, comparing incoming offers, and managing accounts across three roles (Admin, Expert, Supplier). I designed both sides on a shared design system built with Tailwind CSS and Anima, so the specialist and client screens stayed visually consistent while serving very different needs.",
		result:
			"The AI-assisted request flow replaced a manual, email-based process with a single upload-to-quote flow — reviewable by both the client and Arbo's team before it ever reached a supplier.",
		color: '#dcecc9',
		nameColor: '#4c7a1f',
		images: {
			cover: '/images/arbo/cover.png',
			process: ['/images/arbo/client-upload.png', '/images/arbo/specialist-offers.png'],
		},
		extraSections: [
			{
				title: 'A further exploration: an AI structure editor',
				description:
					"Beyond the shipped flow, I explored a more ambitious redesign — a 3D structure editor where AI would flag reliability issues, like beam collisions, directly on the model before a request was ever sent to a supplier. It didn't make it to production, but it shaped how I think about surfacing AI confidence and errors inside complex technical interfaces.",
				images: ['/images/arbo/exploration-ai-editor.png', '/images/arbo/exploration-step-guide.png'],
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
			"IPE Systeme's patented water-injection system cuts a building's water and energy consumption, backed by real international recognition — a Silver Medal at Switzerland's International Exhibition of Inventions, a 2022 LABGRADE nomination in Italy, among others. But the technology itself is hard to explain simply. The site needed to build trust fast and turn visits into requests for a free water audit, without burying visitors in technical detail.",
		process:
			"I structured the site around four clear stops: home, about (the company's 15-year history and its real accolades), services (the installation broken into three concrete steps — reception & analysis, water study, installation), and contact. Built in WordPress with Elementor and the Astra theme, with the 'free water audit' request form kept one click away on every page.",
		result:
			"The site is IPE Systeme's live digital presence, presenting its patented system and real international awards through a simple structure built around a single conversion goal: getting visitors to request their water audit.",
		color: '#454F5E',
		nameColor: '#7fd1de',
		images: {
			cover: '/images/ipe-systeme/cover.png',
			process: ['/images/ipe-systeme/methodology.png', '/images/ipe-systeme/intro.png'],
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
			"Greta Stefanel sells handmade, nature-inspired pieces across five very different categories — accessories, interior prints, wooden pins, holographic stickers, art prints. Browsing needed to make that range easy to scan at a glance, and buying a single art print shouldn't require the same multi-step basket flow as a multi-item order.",
		process:
			"I redesigned the homepage around a bold, image-led Categories grid — each of the five categories gets a full-bleed photo with its name overlaid, so the range of what's sold is legible in one scroll. On product pages, I added a direct PayPal buy option next to 'Add to basket', so a customer buying one print can check out without detouring through the basket at all. Built in WordPress with WooCommerce.",
		result:
			"The categories grid and direct-checkout option are live on gretastefanel.com today, shortening the path from a single product page straight to payment.",
		color: '#697861',
		nameColor: '#fffcea',
		images: {
			cover: '/images/greta-stefanel/cover.png',
			process: ['/images/greta-stefanel/categories.png', '/images/greta-stefanel/checkout.png'],
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
			"I built RunUp as a single-page installable PWA with no backend — everything lives in one state hook and persists to the device's local storage. Each fridge or shelf is a 'zone' with its own products and ideal stock levels; the home screen shows what's empty, low, or full at a glance, and a picking list is generated automatically, grouped by zone, of exactly what to bring from the deposit. Critically, the app distinguishes between stock a runner actually restocked and a real deposit shortage, so gaps stay visible instead of quietly resetting at the next shift.",
		result:
			"RunUp is currently being tested by real runners during service at a bar — an active pilot, not just a prototype.",
		color: '#e7f158',
		nameColor: '#181611',
		images: {
			cover: '/images/runup/home.png',
			process: ['/images/runup/zone.png', '/images/runup/picking.png'],
		},
	},
];
