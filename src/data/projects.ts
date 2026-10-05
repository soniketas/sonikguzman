interface ImageEntry {
	src: string;
	alt: string;
	// opt-in CSS device-mockup framing for a plain screenshot: 'phone' wraps a
	// portrait shot in a bezel + notch, 'browser' adds a browser-chrome bar
	// above a landscape shot. Omit for the default frameless/cover-crop look,
	// and never set this on an image that's already a photographic mockup
	// (e.g. a rendered phone-in-a-scene) since it would double up the frame.
	frame?: 'phone' | 'browser';
	// full: in a multi-image gallery, span the full row width instead of
	// sharing a column with the next image (e.g. a wide banner that should
	// sit on its own line above a pair of smaller images).
	// centered: same full-row placement, but capped to a narrower max-width
	// and centered, for a hero screenshot that should read as emphasized
	// without rendering at a pixelated, oversized blow-up of its source.
	span?: 'full' | 'centered';
	// overrides the auto phone/wide box classification (normally based on
	// the image's own width vs height). Needed for a phone mockup shot at a
	// tilted angle, which can come out landscape-shaped overall even though
	// it's conceptually a phone screenshot — without this it gets treated as
	// a wide desktop screenshot and stretched edge-to-edge instead of sitting
	// in the smaller, padded phone box.
	box?: 'phone' | 'wide';
}

export interface Project {
	slug: string;
	name: string;
	category: string;
	year: string;
	client: string;
	role: string;
	tools: string;
	// Short (~3-5 word) descriptive line for the home grid card — what the
	// project actually does, not a repeat of the client/company name.
	tagline: string;
	summary: string;
	challenge: string;
	process: string;
	result: string;
	color: string; // stack card background
	nameColor: string; // project name overlay color
	images?: {
		// optional: omit entirely when the case study doesn't need a top
		// hero image (e.g. the main gallery below already carries the visuals)
		cover?: ImageEntry;
		// 'cover' is for a cover image that's already a composed photographic
		// mockup (e.g. a phone rendered in a real scene) — it drops the
		// brand-color letterbox and crops to a wide, frameless panorama
		// instead of containing the whole photo inside a colored box.
		// 'flush' is for a graphic that already carries its own full-bleed
		// background (e.g. a brand asset designed on solid black) — no crop,
		// no added colour, so its own background is the only one visible.
		// Default ('contain') suits a plain app/site screenshot, which
		// still wants the colored box as a backdrop around it.
		coverFit?: 'contain' | 'cover' | 'flush';
		process: ImageEntry[];
		// 'contain' for portrait screenshots (e.g. phone UI) that would
		// otherwise get cropped by the gallery's default landscape cover-crop
		processFit?: 'cover' | 'contain';
	};
	extraSections?: {
		title: string;
		description: string;
		images?: ImageEntry[];
		// default 'cover' does a 16:10 crop, same as the main gallery — fine
		// for screenshots already close to that ratio. 'contain' switches to
		// the same phone/wide auto-classification the main gallery uses, for
		// wordmarks, colour grids, or banners that aren't close to 16:10 and
		// would otherwise get cropped down to a sliver.
		imagesFit?: 'cover' | 'contain';
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
		role: 'UX/UI & Brand Designer (Freelance)',
		tools: 'Figma, Framer, Illustrator',
		tagline: 'Security Dashboard Redesign',
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
				src: '/images/novosafe/app-b2b-arm-disarm.webp',
				alt: "Novosafe B2B app screen showing 'Ihr Standort ist geschützt' with an arm/disarm control and an SOS button, next to the same screen in its disarmed, green state.",
			},
			process: [
				{
					src: '/images/novosafe/app-b2b-arm-disarm.webp',
					alt: "Novosafe B2B app screen showing 'Ihr Standort ist geschützt' with an arm/disarm control and an SOS button, next to the same screen in its disarmed, green state.",
				},
				{
					src: '/images/novosafe/app-b2b-locations.webp',
					alt: 'Novosafe B2B app location picker listing chain-retail sites with their arm status, next to the arm/disarm screen for the selected location.',
				},
			],
			processFit: 'contain',
		},
		extraSections: [
			{
				title: 'Brand & identity',
				description:
					"Before the product had a single screen, I designed novosafe's logo from zero: a monogram built from two angled strokes that read at once as the initial and an upward, protective arc. Alongside it I set the colour palette and launch collateral that carried the brand across the website, the app, and print. Navy reads as the more technical, professional side, so it carries the B2B identity. Green reads warmer and closer to home, so it carries the B2C one.",
				imagesFit: 'contain',
				images: [
					{
						src: '/images/novosafe/brand-wordmark.webp',
						alt: "novosafe's primary mark: a navy monogram of two angled strokes reading as the initial and an upward arc, next to the 'novosafe' wordmark.",
					},
					{
						src: '/images/novosafe/brand-colors.webp',
						alt: 'Four colour variants of the novosafe mark: navy for the primary B2B identity, green for B2C, yellow for stickers, and a reversed white-on-navy version.',
					},
					{
						src: '/images/novosafe/google-ad.webp',
						alt: "A novosafe Google Ads creative over a photo of a house lit up at dusk, with the headline 'Ihr Zuhause. Sicher wie nie.', the logo in the corner, and a call to action reading 'Mehr erfahren über unseren smarten Einbruchschutz'.",
						span: 'full',
					},
				],
			},
			{
				title: 'The original consumer app',
				description:
					'Before the B2B pivot, I designed the MVP for individual homeowners: device monitoring with live status, and on-demand snapshots from any connected sensor or camera.',
				imagesFit: 'contain',
				images: [
					{
						src: '/images/novosafe/app-b2c-arm-disarm.webp',
						alt: "Two consumer app screens: 'Ihr Zuhause ist geschützt' in blue when armed, and 'Ihr Zuhause ist offen' in green when disarmed, each with arm, disarm, and night-mode controls.",
						box: 'phone',
					},
					{
						src: '/images/novosafe/app-b2c-rooms.webp',
						alt: 'Consumer app home screen next to a Rooms screen listing connected devices grouped by room.',
						box: 'phone',
					},
				],
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
				imagesFit: 'contain',
				images: [
					{
						src: '/images/novosafe/website-b2b.webp',
						alt: "novosafe marketing website's business entry point, with the headline 'Ihre Firma - rund um die Uhr geschützt' over a photo of an office hallway.",
					},
					{
						src: '/images/novosafe/website-b2c.webp',
						alt: "novosafe marketing website's home entry point, its second numbered panel, next to a photo of a family home.",
					},
				],
				video: {
					src: '/images/novosafe/website-toggle-demo.mp4',
					description:
						"Screen recording of the novosafe marketing website stepping through numbered content panels over a photo of a house exterior.",
					controls: true,
				},
			},
			{
				title: 'A parallel lead-gen experiment',
				description:
					"As a parallel lead-generation initiative for that website, I ran two channel-specific campaigns, one for a community platform (nebenan.de) and one for a national newspaper (FAZ), each testing a channel-matched landing variant against a generic one. nebenan.de's own creative guidelines are explicit about this: address people directly in the informal 'Du', and speak through the brand name rather than 'we', since the ad runs inside their platform, not ours. I rewrote the nebenan.de landing page around both rules: dropped every 'wir', wrote consistently in 'Du', and kept the message focused on what you actually get instead of leading with a pitch. The informal, ad-free variant outperformed the generic one: 6.25% vs. 0% conversion (small sample, directional result).",
				imagesFit: 'contain',
				images: [
					{
						src: '/images/novosafe/nebenan-ab-test.webp',
						alt: "Two nebenan.de landing page variants on phones: Variant A written in the informal 'Du', Variant B in the formal 'Sie', both asking what the visitor wants to protect.",
					},
				],
			},
		],
	},
	{
		slug: 'novosafe-shop',
		name: 'Novosafe',
		category: 'E-commerce · Direct Sales',
		year: '2025',
		client: 'novosafe',
		role: 'UX/UI Web Designer (Freelance)',
		tools: 'Shopify',
		// TEMP placeholder (borrowed from category) — needs Sonia's real tagline
		tagline: 'Direct-to-Consumer Security Store',
		summary:
			'A Shopify store built for novosafe to sell its Ajax-powered security packages directly online, designed and built but never launched publicly.',
		challenge:
			"Alongside the B2B app redesign, novosafe asked me to explore what a direct-to-consumer sales channel could look like: a store where individual customers could buy a ready-made security package without going through a sales call first.",
		process:
			"I built the store in Shopify around four package tiers (Wohnung or Haus, Basic or Premium), each itemized with its exact contents, hub, sirens, keypad, sensors, so a buyer knows precisely what arrives. For anyone still unsure before purchasing, a persistent call banner and a WhatsApp button offer a quick conversation, alongside a standard cart and checkout flow.",
		result:
			"The exploration resulted in a fully working store, from browsing a package to checkout, though it was always an open exploration rather than a committed launch, and it never went live publicly.",
		color: '#3d5877',
		nameColor: '#bcd9f2',
		images: {
			cover: {
				src: '/images/novosafe-shop/home-tablet.webp',
				alt: "Novosafe Shopify store homepage on a laptop mockup against a grey studio backdrop, with the headline 'Smarte Sicherheit. Fairer Preis.' over an Ajax security kit, and a four-step buying guide below.",
			},
			coverFit: 'flush',
			process: [
				{
					src: '/images/novosafe-shop/packages.webp',
					alt: 'Novosafe Shopify store showing four security packages: Wohnung Basic, Wohnung Premium, Haus Basic, and Haus Premium, each with its price.',
				},
				{
					src: '/images/novosafe-shop/product-detail.webp',
					alt: "Novosafe Shopify product page for the Wohnung Premium Pack, with a banner reading 'Unsicher? Ein kurzer Anruf, klare Antworten' and a phone number above the product gallery.",
				},
			],
			processFit: 'contain',
		},
		extraSections: [
			{
				title: 'From cart to checkout',
				description:
					"The store included a full purchase flow: an itemized cart breaking down every component in a package, and a standard Shopify checkout for delivery and payment.",
				images: [
					{
						src: '/images/novosafe-shop/cart.webp',
						alt: 'Novosafe Shopify cart drawer listing the Wohnung Premium Pack and its individual components: Ajax Button, Hub, Siren, Tags, and door sensor.',
					},
					{
						src: '/images/novosafe-shop/checkout.webp',
						alt: 'Novosafe Shopify checkout page with contact and delivery address fields next to an order summary totaling 332,00 €.',
					},
				],
			},
		],
	},
	{
		slug: 'wocomo',
		name: 'wocomo',
		category: 'Brand Identity · Motion Design',
		year: '2021',
		client: 'Nikita Ventures GmbH',
		role: 'Graphic & Motion Designer, Channel Manager',
		tools: 'Photoshop, After Effects, Premiere, Copywriter',
		tagline: 'YouTube Network Brand System',
		summary:
			'A visual identity and motion system for wocomo, an international YouTube network, built to hold a wide range of subjects under one recognisable brand.',
		challenge:
			"wocomo is an international YouTube network spanning a wide range of subjects, from documentaries to travel to music. A different logo for each channel would have splintered that range into unrelated identities, with nothing to tie them together as one brand.",
		process:
			"I designed the W// logo and built its colour system around one idea: every channel keeps the same W// mark and takes on its own colour, so the network reads as one recognisable family across a plurality of topics. I also built the motion intro's closing frame in After Effects, reused across the network's video excerpts. Day to day, I ran the content side across several of the network's channels, including wocomoMUSIC, wocomoHUMANITY, WOCOMOdocs, and wocomoTRAVEL: writing titles and descriptions, building each video's thumbnail, deciding publishing schedules, and managing copyright, particularly for music content. I paid close attention to who a video's audience actually was, and adjusted the title, the language, or the timing of its release to reach them.",
		result:
			"The W// system now identifies the network across a dozen channels and colours, from wocomoMUSIC to wocomoWILDLIFE. Retitling and relaunching videos to match their real audience, not just their series name, took individual videos to 27 million, 12.6 million, and 8.4 million views.",
		color: '#021056',
		nameColor: '#fa1898',
		images: {
			process: [
				{
					src: '/images/wocomo/brand-wordmark.webp',
					alt: "wocomo's primary mark: a navy tile with the W// icon, next to the 'wocomo' wordmark in white.",
				},
				{
					src: '/images/wocomo/color-system.webp',
					alt: 'Twelve colour variants of the W// mark, one per channel: wocomoDOCS, TRAVEL, MUSIC, COOK, HUMANITY, BODY, CULTURE, WILDLIFE, HISTORY, KIDS, MOTORS, and MOVIES.',
				},
			],
			processFit: 'contain',
		},
		extraSections: [
			{
				title: 'The motion intro',
				description:
					"The animation itself: the same closing frame shown above, in motion. Every video excerpt across the network opens with this intro, built in After Effects.",
				video: {
					src: '/images/wocomo/intro.mp4',
					description:
						"wocomo's brand intro animation: the W// mark builds alongside a row of colour dots and the words 'onderful content in motion', then settles into the plain wocomo wordmark.",
				},
			},
			{
				title: "Building wocomo's identity",
				description:
					"A few examples of that system at work: thumbnails and a channel banner built from the same template, applied consistently across different videos and channels.",
				imagesFit: 'contain',
				images: [
					{
						src: '/images/wocomo/yt-banner.webp',
						alt: "wocomoMUSIC's YouTube channel banner: a row of colourful dots on black, with the W//ocomoMUSIC wordmark and the tagline 'Music for Grownups, From Classical to Jazz Music'.",
						span: 'full',
					},
					{
						src: '/images/wocomo/thumb-culture.webp',
						alt: 'A wocomoCULTURE video thumbnail with the purple W// badge, over a still of a traditional wrestling match.',
					},
					{
						src: '/images/wocomo/thumb-titan.webp',
						alt: "A video thumbnail titled 'Settling on Titan' with a teal W// badge, over a render of a dome habitat on an alien landscape.",
					},
				],
			},
			{
				title: "Running the network's channels, day to day",
				description:
					"Beyond the brand system, I ran the content side of several channels day to day: writing titles and descriptions, building each thumbnail, deciding publishing schedules, and managing copyright. For a video profiling conductor Alondra de la Parra, I titled it in Spanish as well as English from the start, betting there was a Spanish-speaking audience for it, and timed its promotion around Mexico's Independence Day. That paid off: the video has since reached 27 million views, with Spanish-speaking viewers becoming its largest audience segment. A documentary originally titled 'Q'eswachaka: El último puente inca', a name few people outside Peru would recognise, I retitled as 'Comunidades andinas: Cultura y costumbres del Perú más remoto', something a broader audience could actually search for, and released as separate English and Spanish versions. That version reached 8.4 million views. The same logic applied to an episode of Barber Shop, a documentary series about barbershops around the world: retitling it to lead with its actual story rather than just the series name got it far more traction than the original title.",
				imagesFit: 'contain',
				images: [
					{
						src: '/images/wocomo/thumb-maestra.webp',
						alt: "wocomoMUSIC thumbnail for 'La Maestra: Alondra de la Parra', titled in Spanish and English, marked at 27 million views.",
					},
					{
						src: '/images/wocomo/thumb-andinas.webp',
						alt: "wocomoHUMANITY thumbnail for 'Comunidades andinas: Cultura y costumbres del Perú más remoto', marked at 8.4 million views.",
					},
					{
						src: '/images/wocomo/thumb-barbershop.webp',
						alt: 'A Barber Shop episode thumbnail retitled around its real story, marked at 12.6 million views.',
					},
					{
						src: '/images/wocomo/thumb-brexit.webp',
						alt: "'Brexit: a divided kingdom' documentary thumbnail, marked at 66.8 thousand views.",
					},
				],
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
		tagline: 'AI-Assisted Material Sourcing',
		summary:
			'A platform connecting construction professionals with timber suppliers, evolved to use AI for extracting material lists directly from building plans.',
		challenge:
			"Getting a materials quote from timber suppliers meant manually reading building plans, listing every beam and panel by hand, and emailing multiple distributors: slow and error-prone for both builders and Arbo's own team.",
		process:
			"The platform has two very different sides. Clients get a simple, guided request flow: upload your plans, and Avi (Arbo's AI) extracts the material list automatically, reviewable before it's sent anywhere. Internally, Arbo's specialists work from a denser operations dashboard: matching requests with consulted suppliers, comparing incoming offers, and managing accounts across three roles (Admin, Expert, Supplier). I designed both sides on a shared design system built with Tailwind CSS and Anima, so the specialist and client screens stayed visually consistent while serving very different needs.",
		result:
			"The AI-assisted request flow replaced a manual, email-based process with a single upload-to-quote flow, reviewable by both the client and Arbo's team before it ever reached a supplier. Automated a process that previously required manually cross-referencing multi-page construction plans, freeing engineers to focus on validation instead of data entry.",
		color: '#dcecc9',
		nameColor: '#456e1c',
		images: {
			cover: {
				src: '/images/arbo/cover.webp',
				alt: "Arbo login screen on a laptop, with a 'Welcome to Arbo' panel introducing Avi, Arbo's AI, next to the email and password fields.",
			},
			coverFit: 'flush',
			process: [],
		},
		extraSections: [
			{
				title: 'Request management',
				description:
					"Every request lands in a queue Arbo's specialists work from directly. Before anything moves forward, it goes through a completeness check across four areas, general information, transport, dates, and any special requirements, flagging what's missing before it's processed. Once a request passes, extraction turns it into a structured materials list, broken down by panel type, thickness, surface quality and area, each row carrying its own AI confidence score, so specialists can see at a glance which figures to trust and which to double check before quoting.",
				images: [
					{
						src: '/images/arbo/request-queue.webp',
						alt: "Arbo request detail view: general information, a completeness-check tracker across four areas, and the AI-extracted quantities panel.",
						span: 'centered',
					},
					{
						src: '/images/arbo/completeness-check.webp',
						alt: 'Arbo completeness check dialog, stepping through general information, transport information, dates, and other details for a request.',
					},
					{
						src: '/images/arbo/ai-extracted-list.webp',
						alt: "Arbo's AI-extracted quantities panel: total area, average category and thickness, and total volume broken down by quality grade.",
					},
				],
			},
			{
				title: 'Order management',
				description:
					"Once a request is approved, it becomes an order specialists track through its own pipeline: sent to experts, assigned, sent to suppliers, and through to an offer sent back to the client. Each order carries an automatic summary of its documents, generated by the same AI that extracts the materials list, along with customer and delivery details at a glance, and a record of every supplier consulted, tracked by whether they've opened the request and the status of their quote. Once offers come back, specialists filter and compare them by price and delivery date before sending the best ones on to the client.",
				images: [
					{
						src: '/images/arbo/orders-dashboard.webp',
						alt: 'Arbo order detail view with its approval pipeline (Approve, Send to Experts, Assign, Send to Suppliers, Offer received, Send offers to client) and attached documents.',
						span: 'centered',
					},
					{
						src: '/images/arbo/consulted-suppliers.webp',
						alt: 'Arbo consulted suppliers list for an order, each with its response status.',
					},
					{
						src: '/images/arbo/offer-comparison.webp',
						alt: 'Arbo offer comparison view, showing supplier quotes side by side for the same order.',
					},
				],
			},
			{
				title: "The client's request flow",
				description:
					"Clients get the simpler side of that same flow: upload the files for a request, fill in delivery details while Avi extracts a dimensions-based summary in the background, then review and download the generated list once it's ready. Specialists work from a fuller version of that same extraction internally, the confidence-scored breakdown above, which is what actually drives the quote.",
				images: [
					{
						src: '/images/arbo/client-flow-upload.webp',
						alt: 'Arbo client request flow, upload step: a drag-and-drop area for timber lists, specifications, and structural calculations.',
					},
					{
						src: '/images/arbo/client-flow-delivery-details.webp',
						alt: 'Arbo client request flow, delivery details step, with a background extraction progress bar already at 50 percent.',
					},
					{
						src: '/images/arbo/client-flow-processing.webp',
						alt: "Arbo client request flow's 'Almost Done' waiting screen, with extraction at 90 percent while the client reviews their request.",
					},
					{
						src: '/images/arbo/client-flow-success.webp',
						alt: "Arbo client request flow's 'Documents Processed Successfully' screen, with a downloadable materials list and order summary.",
					},
					{
						src: '/images/arbo/client-flow-materials-list.webp',
						alt: 'Arbo materials list preview modal, showing extracted items with their length, width, height, quantity, and total volume.',
					},
				],
			},
			{
				title: 'A further exploration: an AI structure editor',
				description:
					"Beyond the shipped flow, I explored a more ambitious redesign: a 3D structure editor where AI would flag reliability issues, like beam collisions, directly on the model before a request was ever sent to a supplier. It didn't make it to production, but it shaped how I think about surfacing AI confidence and errors inside complex technical interfaces.",
				images: [
					{
						src: '/images/arbo/exploration-ai-analysis.webp',
						alt: 'AI document-analysis loading screen, extracting material data from an uploaded plan at 76% complete.',
					},
					{
						src: '/images/arbo/exploration-3d-editor.webp',
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
		tagline: 'Website & Accessibility Redesign',
		summary:
			"A WordPress site for a patented water-saving system, turning a technical sustainability product into a clear, credible lead-generation experience.",
		challenge:
			"IPE Systeme's patented water-injection system cuts a building's water and energy consumption, backed by real international recognition: a Silver Medal at Switzerland's International Exhibition of Inventions, a 2022 LABGRADE nomination in Italy, among others. But the technology itself is hard to explain simply. The site needed to build trust fast and turn visits into requests for a free water audit, without burying visitors in technical detail.",
		process:
			"I structured the site around four clear stops: home, about (the company's 15-year history and its real accolades), services (the installation broken into three concrete steps: reception & analysis, water study, installation), and contact, built in WordPress with Elementor and the Astra theme, with the 'free water audit' request form kept one click away on every page. As part of my process, I regularly audit the accessibility of the projects I work on. For IPE Systeme, I ran a WCAG 2.1 AA review using axe-core and backed it up with manual keyboard testing, since automated tools alone miss a lot. I found an inconsistent heading hierarchy, invisible focus indicators, and a contact form with no persistent labels. The homepage's semantic structure has already been fixed. Visible focus and form labels are still in progress. To me, accessibility isn't something you check off once. It's part of the ongoing review cycle for any digital product.",
		result:
			"The site is IPE Systeme's live digital presence, presenting its patented system and real international awards through a simple structure built around a single conversion goal: getting visitors to request their water audit.",
		color: '#454F5E',
		nameColor: '#7fd1de',
		images: {
			cover: {
				src: '/images/ipe-systeme/laptop-mockup.webp',
				alt: "IPE Systeme homepage on a laptop mockup, with the headline 'Juntos, somos más sostenibles' over an aerial river landscape photo and a call to request a free water audit.",
			},
			coverFit: 'flush',
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
		// TEMP placeholder (borrowed from category) — needs Sonia's real tagline
		tagline: 'Single-Item Checkout Redesign',
		summary:
			'A nature- and folklore-inspired art shop, redesigned around clear product categories and a direct checkout path for single-item purchases.',
		challenge:
			"Greta Stefanel sells handmade, nature-inspired pieces across five very different categories: accessories, interior prints, wooden pins, holographic stickers, art prints. Browsing needed to make that range easy to scan at a glance, and buying a single art print shouldn't require the same multi-step basket flow as a multi-item order.",
		process:
			"I redesigned the homepage around a bold, image-led Categories grid: each of the five categories gets a full-bleed photo with its name overlaid, so the range of what's sold is legible in one scroll. On product pages, I added a direct PayPal buy option next to 'Add to basket', so a customer buying one print can check out without detouring through the basket at all. Built in WordPress with WooCommerce.",
		result:
			"The categories grid and direct-checkout option are live on gretastefanel.com today, shortening the path from a single product page straight to payment. Redesigned checkout to accept PayPal directly, removing the redirect-and-re-enter-details step that was likely causing drop-off.",
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
		tagline: 'Mobile-First E-Commerce Redesign',
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
				src: '/images/dwa-kolory/cover-mockup.webp',
				alt: 'Dwa Kolory homepage design shown on an angled iPhone mockup against a bright abstract background, with a 2x2 category grid for accessories, gifts, clothing, and t-shirts below the logo and nav.',
			},
			coverFit: 'cover',
			process: [
				{
					src: '/images/dwa-kolory/mobile-category.webp',
					alt: 'Dwa Kolory mobile accessories category page, showing crochet keychains one per row: a pumpkin, out of stock, at the top.',
					frame: 'phone',
				},
				{
					src: '/images/dwa-kolory/mobile-product.webp',
					alt: 'Dwa Kolory mobile product page for a crochet pumpkin keychain, marked out of stock, with expandable description and details sections below.',
					frame: 'phone',
				},
			],
			processFit: 'contain',
		},
		extraSections: [
			{
				title: 'Checkout, kept short',
				description:
					"The path from a product photo to checkout stays short: an express-pay row (Shop Pay, PayPal, Google Pay, Apple Pay) sits above the standard contact-info form, so returning shoppers can skip straight past it.",
				images: [
					{
						src: '/images/dwa-kolory/checkout-mockup.webp',
						alt: 'Dwa Kolory checkout screen on an iPhone mockup against a dark concrete background, showing express-pay buttons for Shop Pay, PayPal, Google Pay, and Apple Pay above a contact information form.',
					},
				],
			},
			{
				title: 'On desktop',
				description:
					"The site is built mobile-first since that's how Dwa Kolory's traffic actually arrives from Instagram, but it holds up on a larger screen too: the stacked mobile category list becomes a proper grid, and the same product page gets more breathing room.",
				images: [
					{
						src: '/images/dwa-kolory/desktop-home.webp',
						alt: 'Dwa Kolory desktop homepage with a wheat field hero photo and a category row for accessories, candles, and clothes.',
						frame: 'browser',
					},
					{
						src: '/images/dwa-kolory/desktop-category.webp',
						alt: 'Dwa Kolory desktop accessories category grid of crochet keychains, including a pumpkin, sunflower, bird, and cat, each with its price.',
						frame: 'browser',
					},
					{
						src: '/images/dwa-kolory/desktop-product.webp',
						alt: 'Dwa Kolory desktop product page for a crochet pumpkin keychain, priced at €10 and marked out of stock.',
						frame: 'browser',
					},
					{
						src: '/images/dwa-kolory/desktop-candles.webp',
						alt: 'Dwa Kolory desktop candles category page, showing two stone-carved candles priced at €70 each.',
						frame: 'browser',
					},
				],
			},
		],
	},
	{
		slug: 'runup',
		name: 'RunUp',
		category: 'AI Integration · PWA',
		year: '2026',
		client: 'Personal project',
		role: 'Product Design + Development',
		tools: 'React, Vite, Tailwind CSS, Firebase, Claude (vision), Vercel',
		tagline: 'AI-Assisted Bar Inventory App',
		summary:
			'A PWA that helps bar staff track stock, restock faster, and now count what\'s on hand from a photo instead of by hand.',
		challenge:
			"Bars usually track stock however works in the moment: a runner's memory, a whiteboard, a spreadsheet nobody keeps current. Everyone ends up recounting the same shelves shift after shift, and no one has a clear read on what's actually there.",
		process:
			"RunUp splits the bar into zones, one per fridge or shelf, each with a target stock level per product, and builds a restock list automatically, sorted by zone, so a runner knows exactly what to grab from the deposit. Once more than one person started using it on their own phone, I added a small backend, Firestore behind a Vercel function, so stock stays in sync no matter who's updating it. I also added a camera scan: point your phone at a shelf and a vision model reads back how many of each product it sees. Since I was building this solo, going with an existing vision API instead of training a custom model was the practical choice. There was no training data to gather, and it worked on the first test. A runner still confirms the count before it saves, since a crowded shelf can trip the model up.",
		result:
			"Runners use RunUp on shift today, each on their own phone, with the same stock numbers updating live no matter who's holding the camera.",
		color: '#e7f158',
		nameColor: '#181611',
		images: {
			cover: {
				src: '/images/runup/challenge-mockup.webp',
				alt: "Three RunUp phone mockups: a shift's stock status and restock list, the home screen tilted in an orange scene, and a picking list with items already checked off.",
			},
			coverFit: 'cover',
			process: [
				{
					src: '/images/runup/zone.webp',
					alt: 'RunUp zone view for a fridge with a Scan button that lets a runner photograph it for an AI-generated stock count, above a list of individual drinks with stock sliders from empty to full.',
				},
				{
					src: '/images/runup/review-count.webp',
					alt: "RunUp's Review Count screen after a scan: the AI-detected quantity for each product, adjustable before confirming, with a note that nothing is saved yet.",
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
