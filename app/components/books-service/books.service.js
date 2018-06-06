app.service('books', function(){
	var bookList=[
		{
		    "title" : "The Lion, the Witch and the Wardrobe",
		    "id" : "lionWitch",
		    "authorId" : "Lewis",
		    "bookDate" : "1950",
		    "author" : "C. S. Lewis",
			"genre" : 'Science Fiction & Fantasy',
		    "genreId" : 'scienceFiction',
		    "shortBio" : "The Lion, the Witch and the Wardrobe is a high fantasy novel for children by C. S. Lewis, published by Geoffrey Bles in 1950. It was the first published of seven novels in The Chronicles of Narnia (1950–1956) and the best known; among all the author's books it is the most widely held in libraries.[2] Although it was written as well as published first in the series, it is volume two in recent editions, which are sequenced according to Narnia history (the first being The Magician's Nephew). Like the others, it was illustrated by Pauline Baynes, and her work has been retained in many later editions.",
		    "images": [
		        "books/bookimage/LionLewis.jpg" 
		    ]
		},
		{
		    "title" : "The Chronicles of Narnia",
		    "id" : "narnia",
		    "authorId" : "Lewis",
		    "bookDate" : "1949",
		    "author" : "C. S. Lewis",
		    "genre" : 'Literature & Fiction',
		    "genreId" : 'literatureFiction',
		    "shortBio" : "Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Stables Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations. This edition presents all seven books—unabridged—in one impressive volume. The books are presented here according to Lewis' preferred order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published. ",
		    "images": [
		        "books/bookimage/narnia.jpg" 
		    ]
		},
		{
		    "title" : "Prince Caspian",
		    "id" : "caspian",
		    "authorId" : "Lewis",
		    "bookDate" : "1951",
		    "author" : "C. S. Lewis",
		    "genre" : 'Literature & Fiction',
		    "genreId" : 'literatureFiction',
		    "shortBio" : "This edition of Lewis's classic fantasy fiction is packaged specifically for adults. Complementing the look of the author's non-fiction books, and anticipating the forthcoming Narnia feature films, this edition contains an exclusive P.S. section about the history of the book, plus a sample chapter from its sequel.",
		    "images": [
		        "books/bookimage/caspian.jpg" 
		    ]
		},
		{
		    "title" : "The Da Vinci Code",
		    "id" : "daVinci",
		    "author" : "Dan Brown",
		    "authorId" : "danBrown",
		    "genre" : 'Novel',
		    "genreId" : 'novel',
			"shortBio" : "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris, when they become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been married to Mary Magdalene. The title of the novel refers, among other things, to the finding of the first murder victim in the Grand Gallery of the Louvre, naked and posed like Leonardo da Vinci's famous drawing, the Vitruvian Man, with a cryptic message written beside his body and a pentagram drawn on his chest in his own blood.The novel explores an alternative religious history, whose central plot point is that the Merovingian kings of France were descended from the bloodline of Jesus Christ and Mary Magdalene, ideas derived from Clive Prince's The Templar Revelation (1997) and books by Margaret Starbird. The book also refers to The Holy Blood and the Holy Grail (1982) though Dan Brown has stated that it was not used as research material.",
		    "images": [
		        "books/bookimage/DanVinci.jpg" 
		    ]
		},
		{
		    "title" : "Think and Grow Rich",
		    "id" : "napoleon",
		    "author" : "Napoleon Hill",
		    "authorId" : "Napoleon",
		    "genre" : 'Literature & Fiction',
		    "genreId" : 'literatureFiction',
			"shortBio" : "Think and Grow rich has been used by millions of business leaders around the world to create a concrete plan for success that, when followed, never fails. About the author: As a young special investigator for a national business magazine, Napoleon Hill was sent to interview Andrew Carnegie. During that interview, Carnegie slyly dropped a hint of a certain master power he used; a magic law of the human mind-a little known psychological principle that was amazing in its power. Carnegie suggested to Hill that on that principle he could build the philosophy of all personal success-whether it be measured in terms of Money, Power, Position, Prestige, Influence, or Accumulation of Wealth.",
			"images": [
		        "books/bookimage/Napoleon.jpg" 
		    ]
		},
		{
		    "title" : "Harry Potter",
		    "id" : "harryPotter",
		    "author" : "J. K. Rowling",
		    "authorId" : "Rowling",
		    "genre" : 'Adventure',
		    "genreId" : 'adventure',
		    "shortBio" : "Harry Potter is a series of seven fantasy novels written by the British author J. K. Rowling. The series chronicles the adventures of a young wizard, Harry Potter, the titular character, and his friends Ronald Weasley and Hermione Granger, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's quest to overcome the Dark wizard Lord Voldemort, who aims to become immortal, conquer the wizarding world, subjugate non-magical people, and destroy all those who stand in his way, especially Harry Potter.",
		    "images": [
		        "books/bookimage/HarryRowling.png" 
		    ]
		},
		{
		    "title" : "The Catcher in the Rye",
		    "id" : "catcher",
		    "author" : "J. D. Salinger",
		    "authorId" : "Salinger",
		    "genre" : 'Historical',
		    "genreId" : 'historical',
		    "shortBio" : "The Catcher in the Rye is a 1951 novel by J. D. Salinger.[3] A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages.[6] Around 250,000 copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of identity, belonging, loss, connection, and alienation.",
		    "images": [
		        "books/bookimage/Salinger.jpg" 
		    ]	
		},
		{
		    "title" : "The Stranger",
		    "id" : "stranger",
		    "authorId" : "albertCamus",
		    "author" : "Albert Camus",
		    "genre" : 'Detective',
		    "genreId" : 'detective',
		    "shortBio" : "The Outsider or The Stranger (French: L’Étranger) is a novel by Albert Camus published in 1942. Its theme and outlook are often cited as exemplars of Camus's philosophy of the absurd and existentialism, though Camus personally rejected the latter label. The titular character is Meursault, an indifferent French Algerian ('a citizen of France domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the traditional Mediterranean culture') who, after attending his mother's funeral, apathetically kills an Arab man whom he recognises in French Algiers. The story is divided into two parts: Meursault's first-person narrative view before and after the murder, respectively",
		    "images": [
			    "books/bookimage/Camus.jpg"
			]
		},
		{
		    "title" : "Remembrance of Things Past",
		    "id" : "remembrance",
		    "author" : "Marcel Proust",
		    "authorId" : "marcelProust",
		    "genre" : 'Romance',
		    "genreId" : 'romance',
		    "shortBio" : "Here are the first two volumes of Proust’s monumental achievement, Swann’s Way and Within a Budding Grove. The famous overture to Swann's Way sets down the grand themes that govern In Search of Lost Time: as the narrator recalls his childhood in Paris and Combray, exquisite memories, long since passed—his mother’s good-night kiss, the water lilies on the Vivonne, his love for Swann’s daughter Gilberte—spring vividly into being. In Within a Budding Grove—which won the Prix Goncourt in 1919, bringing the author instant fame—the narrator turns from his childhood recollections and begins to explore the memories of his adolescence. As his affections for Gilberte grow dim, the narrator discovers a new object of attention in the bright-eyed Albertine. Their encounters unfold by the shores of Balbec. One of the great works of Western literature, now in the new definitive French Pleiade edition translated by C.K. Scott Moncrieff and Terence Kilmartin.",
		    "images": [
		        "books/bookimage/Marcel.jpg" 
		    ]
		},
		{
		    "title" : "The Trial",
		    "id" : "trial",
		    "author" : "Franz Kafka",
		    "authorId" : "franzKafka",
		    "genre" : "Adventure",
		    "genreId" : 'adventure',
		    "shortBio" : "The Trial is a novel written by Franz Kafka in 1914 and 1915 but not published until 1925. One of Kafka's best-known works, it tells the story of a man arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor the reader. Heavily influenced by Dostoevsky's Crime and Punishment and The Brothers Karamazov, Kafka even went so far as to call Dostoevsky a blood relative. [2] Like Kafka's other novels, The Trial was never completed, although it does include a chapter which brings the story to an end. Because of this, there are some inconsistencies and discontinuities in narration within the novel, such as disparities in timing.",
		    "images": [
		        "books/bookimage/Kafka.jpg" 
		    ]
		},
		{
		    "title" : "The Little Prince",
		    "id" : "littlePrince",
		    "author" : "Antoine de Saint-Exupéry",
		    "authorId" : "exupery",
		    "genre" : 'Historical',
		    "genreId" : 'historical',
		    "shortBio" : "The Little Prince first published in 1943, is a novella and the most famous work of the French aristocrat, writer, poet and pioneering aviator Antoine de Saint-Exupéry (1900–1944). The novella is both the most-read and most-translated book in the French language, and was voted the best book of the 20th century in France. Translated into more than 250 languages and dialects (as well as braille), selling nearly two million copies annually with sales totalling over 140 million copies worldwide, it has become one of the best-selling books ever published.",
		    "images": [
		        "books/bookimage/SaintPrince.jpg" 
		    ]	 
		}, 
		{
		    "title" : "Man's Fate",
		    "id" : "manFate",
		    "author" : "André Malraux",
		    "authorId" : "andreMalraux",
		    "genre" : 'Dramma',
		    "genreId" : 'dramma',
		    "shortBio" : "Man's Fate (French: La condition humaine, 'The Human Condition'), is a 1933 novel written by André Malraux. It was translated into English twice, both translations appearing in 1934, one by Haakon Chevalier under the title Man's Fate, published by Harrison Smith & Robert Haas in New York and republished by Random House as part of their Modern Library from 1936 on, and the other by Alastair MacDonald under the title Storm in Shanghai, published by Methuen in London and republished, still by Methuen, in 1948 as Man's Estate, to become a Penguin pocket in 1961. Currently the Chevalier translation is the only one still in regular print. The novel is about the failed communist insurrection in Shanghai in 1927, and the existential quandaries facing a diverse group of people associated with the revolution. Along with Les Conquérants (1928 – 'The Conquerors'), La Voie Royale (1930 – 'The Royal Way'), it forms a trilogy on revolution in Asia.",
		    "images": [
		        "books/bookimage/Malraux.jpg" 
		    ]
		},
		{
		    "title" : "Journey to the End of the Night",
		    "id" : "journeyToTheEnd",
		    "author" : "Louis-Ferdinand Céline",
		    "authorId" : "LouisCeline",
		    "genre" : 'Dramma',
		    "genreId" : 'dramma',
		    "shortBio" : "Journey to the End of the Night (Voyage au bout de la nuit, 1932) is the first novel of Louis-Ferdinand Céline. This semi-autobiographical work describes antihero Ferdinand Bardamu. Bardamu is involved with World War I, colonial Africa, and post–World War I United States (where he works for the Ford Motor Company), returning in the second half of the work to France, where he becomes a medical doctor and establishes a practice in a poor Paris suburb, the fictional La Garenne-Rancy. The novel also satirizes the medical profession and the vocation of scientific research. The disparate elements of the work are linked together by recurrent encounters with Léon Robinson, a hapless character whose experiences parallel, to some extent, those of Bardamu.",
		    "images": [
		        "books/bookimage/JourneyLouis.jpg" 
		    ]
		},
		{
		    "title" : "The Grapes of Wrath",
		    "id" : "grapesOfWrath",
		    "author" : "John Steinbeck",
		    "genre" : 'Romance',
		    "genreId" : 'romance',
		    "shortBio" : "The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939. The book won the National Book Award and Pulitzer Prize for fiction, and it was cited prominently when Steinbeck was awarded the Nobel Prize in 1962. Set during the Great Depression, the novel focuses on the Joads, a poor family of tenant farmers driven from their Oklahoma home by drought, economic hardship, agricultural industry changes and bank foreclosures forcing tenant farmers out of work. Due to their nearly hopeless situation, and in part because they were trapped in the Dust Bowl, the Joads set out for California. Along with thousands of other 'Okies', they sought jobs, land, dignity, and a future.",
		    "images": [
		        "books/bookimage/Steinbeck.jpg" 
		    ]
		},
		{
		    "title" : "For Whom the Bell Tolls  ",
		    "id" : "forWhomTheBellTolls",
		    "author" : "Ernest Hemingway",
		    "authorId": "ernestHemingway",
		    "genre" : "Adventure",
		    "genreId" : 'adventure',
		    "shortBio" : "For Whom the Bell Tolls is a novel by Ernest Hemingway published in 1940. It tells the story of Robert Jordan, a young American in the International Brigades attached to a republican guerrilla unit during the Spanish Civil War. As a dynamiter, he is assigned to blow up a bridge during an attack on the city of Segovia. The novel is regarded as one of Hemingway's best works, along with The Sun Also Rises, The Old Man and the Sea, and A Farewell to Arms.",
		    "images": [
		        "books/bookimage/Ernest.jpg"
		    ]
		},
		{
		    "title" : "Le Grand Meaulnes",
		    "id" : "meaulnes",
		    "author" : "Alain-Fournier",
		    "authorId" : "alainMeaulnes",
		    "genre" : 'Historical',
		    "genreId" : 'historical',
		    "shortBio" : "When Meaulnes first arrives in Sologne, everyone is captivated by his good looks, daring, and charisma. But when he attends a strange party at a mysterious house with a beautiful girl hidden inside, he is changed forever. This evocative novel has at its center both a Peter Pan in provincial France-a kid who refuses to grow up-and a Parsifal, pursuing his love to the ends of the earth. Poised between youthful admiration and adult resignation, Alain- Fournier's narrator compellingly carries the reader through this indelible portrait of desperate friendship and vanished adolescence.",
		    "images": [
		        "books/bookimage/Meaulnes.jpg" 
		    ]
		}
	];
	var authorList=[
		{
		    "authorId" : "albertCamus",
		    "author" : "Albert Camus",
		    "bDate": "(7 November 1913 – 4 January 1960)",
		    "authorBio" : "Albert Camus was a French Nobel Prize winning author, journalist, and philosopher. His views contributed to the rise of the philosophy known as absurdism. He wrote in his essay 'The Rebel' that his whole life was devoted to opposing the philosophy of nihilism while still delving deeply into individual freedom. Camus did not consider himself to be an existentialist despite usually being classified as one, even during his own lifetime.[1] In an interview in 1945, Camus rejected any ideological associations: 'No, I am not an existentialist. Sartre and I are always surprised to see our names linked...'. Camus was born in Algeria to a Pied-Noir family, and studied at the University of Algiers. In 1949, Camus founded the Group for International Liaisons within the Revolutionary Union Movement after his split with Garry Davis's Citizens of the World movement. The formation of this group, according to Camus, was intended to 'denounce two ideologies found in both the USSR and the USA' regarding their idolatry of technology. Camus was awarded the 1957 Nobel Prize for Literature 'for his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times'",
		    "genre" : [
		    	"Literature & Fiction",
		    	"Philosophy",
		    	"Nonfiction"
		    	],
		    "authorBooks" : [
		        "The Stranger (1941)",
		        "The Plague (1947)",
		        "The Fall (1956)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/Camus.jpg"
		    	]
		},
		{
			"authorId" : "danBrown",
			"author" : "Dan Brown",
			"bDate": "(22 June, 1964)",
			"authorBio" : "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 52 languages around the world with 200 million copies in print. In 2005, Brown was named one of the 100 Most Influential People in the World by TIME Magazine, whose editors credited him with “keeping the publishing industry afloat; renewed interest in Leonardo da Vinci and early Christian history; spiking tourism to Paris and Rome; a growing membership in secret societies; the ire of Cardinals in Rome; eight books denying the claims of the novel and seven guides to read along with it; a flood of historical thrillers; and a major motion picture franchise.” The son of a mathematics teacher and a church organist, Brown was raised on a prep school campus where he developed a fascination with the paradoxical interplay between science and religion. These themes eventually formed the backdrop for his books. He is a graduate of Amherst College and Phillips Exeter Academy, where he later returned to teach English before focusing his attention full time to writing. Brown is currently at work on a new book as well as the Columbia Pictures film version of his most recent novel.",
		    "genre" : [
		    	"Mystery & Thrillers",
		    	"Fiction",
		    	"Suspense"
		    	],
		    "authorBooks" : [
		        "Angels & Demons (2000)",
		        "The Da Vinci Code (2003)",
		        "Deception Point  (2001)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/brown.jpg"
		    	]
		},
		{
		    "author" : "Ernest Hemingway",
		    "authorId": "ernestHemingway",
		    "bDate": "(July 21, 1899 - July 02, 1961)",
		    "authorBio" : "Ernest Miller Hemingway (July 21, 1899 – July 2, 1961) was an American author and journalist. His economical and understated style had a strong influence on 20th-century fiction, while his life of adventure and his public image influenced later generations. Hemingway produced most of his work between the mid-1920s and the mid-1950s, and won the Nobel Prize in Literature in 1954. He published seven novels, six short story collections, and two non-fiction works. Additional works, including three novels, four short story collections, and three non-fiction works, were published posthumously. Many of his works are considered classics of American literature. Hemingway was raised in Oak Park, Illinois. After high school he reported for a few months for The Kansas City Star, before leaving for the Italian front to enlist with the World War I ambulance drivers. In 1918, he was seriously wounded and returned home. His wartime experiences formed the basis for his novel A Farewell to Arms (1929). In 1921, he married Hadley Richardson, the first of his four wives. The couple moved to Paris, where he worked as a foreign correspondent and fell under the influence of the modernist writers and artists of the 1920s 'Lost Generation' expatriate community. He published his first novel, The Sun Also Rises, in 1926. After his 1927 divorce from Hadley Richardson, Hemingway married Pauline Pfeiffer; they divorced after he returned from the Spanish Civil War where he had been a journalist, and after which he wrote For Whom the Bell Tolls (1940). Martha Gellhorn became his third wife in 1940; they separated when he met Mary Welsh in London during World War II. He was present at the Normandy landings and the liberation of Paris. Shortly after the publication of The Old Man and the Sea (1952), Hemingway went on safari to Africa, where he was almost killed in two successive plane crashes that left him in pain or ill health for much of his remaining life. Hemingway maintained permanent residences in Key West, Florida, (1930s) and Cuba (1940s and 1950s), and in 1959, he bought a house in Ketchum, Idaho, where he committed suicide in the summer of 1961.",
		    "authorBooks" : [
		        "The Sun Also Rises (1926)",
		        "For Whom the Bell Tolls (1940)",
		        "The Old Man and the Sea (1951)"    
		        ],
		    "genre" : [
		    	"Literature & Fiction"
		    	],
		    "authorImage": [
		        "authorsBio/authorsImages/Ernest.jpg"
		    	]
		},
		{
		    "authorId" : "Rowling",
		    "bDate": "(July 31, 1965)",
		    "author" : "J. K. Rowling",
		    "authorBio" : "Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling. She calls herself Jo and has said, 'No one ever called me 'Joanne' when I was young, unless they were angry'. Following her marriage, she has sometimes used the name Joanne Murray when conducting personal business. During the Leveson Inquiry she gave evidence under the name of Joanne Kathleen Rowling. In a 2012 interview, Rowling noted that she no longer cared that people pronounced her name incorrectly. Rowling was born to Peter James Rowling, a Rolls-Royce aircraft engineer, and Anne Rowling (née Volant), on 31 July 1965 in Yate, Gloucestershire, England, 10 miles (16 km) northeast of Bristol. Her mother Anne was half-French and half-Scottish. Her parents first met on a train departing from King's Cross Station bound for Arbroath in 1964. They married on 14 March 1965. Her mother's maternal grandfather, Dugald Campbell, was born in Lamlash on the Isle of Arran. Her mother's paternal grandfather, Louis Volant, was awarded the Croix de Guerre for exceptional bravery in defending the village of Courcelles-le-Comte during the First World War.",
		    "genre" : 'Adventure',
		    "genreId" : 'adventure',
	    	"authorBooks" : [
		        "Harry Potter Boxset (1998)",
		        "The Tales of Beedle the Bard  (2008)",
		        "The Casual Vacancy  (2012)"    
	        	],
	    	"authorImage": [
	        	"authorsBio/authorsImages/rowling.jpg"
		    	]
		},
		{
		    "authorId" : "LouisCeline",
		    "author" : "Louis-Ferdinand Céline",
		    "bDate": "(May 27, 1894 - July 01, 1961)",
		    "authorBio" : "Louis-Ferdinand Celine, pen name of Dr. Louis-Ferdinand Destouches, is best known for his works Voyage au bout de la nuit (Journey to the End of the Night), and Mort à crédit (Death on the Installment Plan). His highly innovative writing style using Parisian vernacular, vulgarities, and intentionally peppering ellipses throughout the text was used to evoke the cadence of speech. Louis-Ferdinand Destouches was raised in Paris, in a flat over the shopping arcade where his mother had a lace store. His parents were poor (father a clerk, mother a seamstress). After an education that included stints in Germany and England, her performed a variety of dead-end jobs before he enlisted in the French cavalry in 1912 two years before the outbreak of the First World War in 1914. While serving on the Western Front he was wounded in the head and suffered serious injuries – a crippled arm and headaches that plagued him all his life – but also winning a medal of honour. Released from military service, he studied medicine and emigrated to the USA where he worked as a staff doctor at the newly build Ford plant in Detroit before returning to France and establishing a medical practice among the Parisian poor. Their experiences are featured prominently in his fiction.",
		    "genre" : [
		    		"Literature & Fiction"
		    	],
	    	"authorBooks" : [
		        "Journey to the End of the Night (1932)",
		        "Death on the Installment Plan (1934)",
		        "Castle to Castle (1957)"    
	        	],
	    	"authorImage": [
	        	"authorsBio/authorsImages/celine.jpg"
		    	]
		},
		{
		    "authorId" : "franzKafka",
		    "author" : "Franz Kafka",
		    "bDate": "(July 03, 1883 - June 03, 1924)",
		    "authorBio" : "Franz Kafka (German pronunciation: [ˈfʀants ˈkafka]) was one of the major fiction writers of the 20th century. He was born to a middle-class German-speaking Jewish family in Prague, Bohemia (presently the Czech Republic), Austria–Hungary. His unique body of writing—much of which is incomplete and which was mainly published posthumously—is considered to be among the most influential in Western literature. His stories include The Metamorphosis (1912) and In the Penal Colony (1914), while his novels are The Trial (1925), The Castle (1926) and Amerika (1927). Kafka's first language was German, but he was also fluent in Czech. Later, Kafka acquired some knowledge of French language and culture; one of his favorite authors was Flaubert. Kafka first studied chemistry at the Charles-Ferdinand University of Prague, but switched after two weeks to law. This offered a range of career possibilities, which pleased his father, and required a longer course of study that gave Kafka time to take classes in German studies and art history. At the university, he joined a student club, named Lese- und Redehalle der Deutschen Studenten, which organized literary events, readings and other activities. In the end of his first year of studies, he met Max Brod, who would become a close friend of his throughout his life, together with the journalist Felix Weltsch, who also studied law. Kafka obtained the degree of Doctor of Law on 18 June 1906 and performed an obligatory year of unpaid service as law clerk for the civil and criminal courts.",
		    "genre" : [
		    		"Literature & Fiction",
		    		"Philosophy",
		    		"Short Stories"
		    	],
	    	"authorBooks" : [
		        "The Trial (1925)",
		        "The Metamorphosis (1915)",
		        "Castle (1926)"    
	        	],
	    	"authorImage": [
	        	"authorsBio/authorsImages/kafka.jpg"
		    	]
		},
		{
		    "authorId" : "Lewis",
		    "author" : "C. S. Lewis",
		    "bDate": "(November 29, 1898 - November 22, 1963)",
		    "authorBio" : "Clive Staples Lewis was one of the intellectual giants of the twentieth century and arguably one of the most influential writers of his day. He was a Fellow and Tutor in English Literature at Oxford University until 1954. He was unanimously elected to the Chair of Medieval and Renaissance Literature at Cambridge University, a position he held until his retirement. He wrote more than thirty books, allowing him to reach a vast audience, and his works continue to attract thousands of new readers every year. His most distinguished and popular accomplishments include Mere Christianity, Out of the Silent Planet, The Great Divorce, The Screwtape Letters, and the universally acknowledged classics The Chronicles of Narnia. To date, the Narnia books have sold over 100 million copies and been transformed into three major motion pictures.",
		    "genre" : [
		    	"Christianity",
		    	"Literature & Fiction",
		    	"Science Fiction & Fantasy"
		    	],
		    "authorBooks" : [
		        "The Lion, the Witch, and the Wardrobe (1950)",
		        "The Chronicles of Narnia (1949)",
		        "Prince Caspian (1951)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/lewis.jpg"
		    ]
		},
		{
		    "authorId" : "andreMalraux",
		    "author" : "André Malraux",
		    "authorBio" : "Malraux was born in Paris during 1901, the son of Fernand-Georges Malraux and Berthe Lamy (Malraux). His parents separated during 1905 and eventually divorced. He was raised by his mother and maternal grandmother, Berthe and Adrienne Lamy in the small town of Bondy. His father, a stockbroker, committed suicide in 1930. Andre had Tourette's Syndrome during his childhood, resulting in motor and vocal tics. At the age of 21, Malraux left for Cambodia with his new wife Clara Goldschmidt. In Cambodia, he undertook an exploratory expedition into the Cambodian jungle. On his return he was arrested by French colonial authorities for removing bas-reliefs from one of the temples he discovered. Banteay Srei (The French government itself had removed large numbers of sculptures and artifacts from already discovered sites such as Angkor Wat around this time). Malraux later incorporated the episode into his second novel La Voie Royale. Malraux became very critical of the French colonial authorities in Indochina, and during 1925 helped to organize the Young Annam League and founded a newspaper Indochina in Chains.",
		    "bDate": "(December 13, 1901 - November 23, 1976)",
		    "genre" : [
		    	"Literature & Fiction",
		    	"Politics"
		    	],
		    "authorBooks" : [
		        "Man's Fate  (1933)",
		        "Espoir (1937)",
		        "Anti-Memoirs (1967)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/malraux.jpg"
		    	]
		},
		{
		    "authorId" : "marcelProust",
		    "author" : "Marcel Proust",
		    "authorBio" : "French novelist, best known for his 3000 page masterpiece À la recherche du temps perdu (Remembrance of Things Past or In Search of Lost Time), a pseudo-autobiographical novel told mostly in a stream-of-consciousness style. Born in the first year of the Third Republic, the young Marcel, like his narrator, was a delicate child from a bourgeois family. He was active in Parisian high society during the 80s and 90s, welcomed in the most fashionable and exclusive salons of his day. However, his position there was also one of an outsider, due to his Jewishness and homosexuality. Towards the end of 1890s Proust began to withdraw more and more from society, and although he was never entirely reclusive, as is sometimes made out, he lapsed more completely into his lifelong tendency to sleep during the day and work at night. He was also plagued with severe asthma, which had troubled him intermittently since childhood, and a terror of his own death, especially in case it should come before his novel had been completed. The first volume, after some difficulty finding a publisher, came out in 1913, and Proust continued to work with an almost inhuman dedication on his masterpiece right up until his death in 1922, at the age of 51. Today he is widely recognised as one of the greatest authors of the 20th Century, and À la recherche du temps perdu as one of the most dazzling and significant works of literature to be written in modern times. ",
		    "bDate": "(July 10, 1871 - November 18, 1922)",
		    "genre" : [
		    	"Literature & Fiction"
		    	],
		    "authorBooks" : [
		        "Remembrance of Things Past (1922)",
		        "Swann's Way (1913)",
		        "Sodom and Gomorrah (1921)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/marcel.jpg"
		    	]
		},
		{
		    "authorId" : "alainMeaulnes",
		    "author" : "Alain-Fournier  ",
		    "authorBio" : "Alain-Fournier was the pseudonym of Henri-Alban Fournier (October 3, 1886 – September 22, 1914[1]), a French author and soldier. He was the author of a single novel, Le Grand Meaulnes (1913), which has been twice filmed and is considered a classic of French literature. Alain-Fournier was born in La Chapelle-d'Angillon, in the Cher département, in central France, the son of a school teacher. He studied at the Lycée Lakanal in Sceaux, Hauts-de-Seine, near Paris, where he prepared for the entrance examination to the École Normale Supérieure, but without success. He then studied at the merchant marine school in Brest. At the Lycée Lakanal he met Jacques Rivière, and the two became close friends. In 1909, Rivière married Alain-Fournier's younger sister Isabelle. He interrupted his studies in 1907 and from 1908 to 1909 he performed his military service. At this time he published some essays, poems and stories which were later collected and re-published under the name Miracles. Throughout this period he was mulling over what would become his celebrated novel, Le Grand Meaulnes. On the first of June 1905, Ascension day, while he was talking a stroll along banks of the Seine he had met Yvonne de Quiévrecourt, with whom he became deeply enamoured. The two spoke, but he did not manage to win her favours. The following year on the same day he waited for her at the same place, but she did not appear. That night he told Rivière, 'She did not come. And even if she had, she would not have been the same'. They did not meet again until eight years later, when she was married with two children. Yvonne de Quiévrecourt would become Yvonne de Galais in his novel. He returned to Paris in 1910 and became a literary critic, writing for the Paris-Journal. There he met André Gide and Paul Claudel. In 1912, he quit his job to become the personal assistant of the politician Casimir Perrier. Le Grand Meaulnes was finished in early 1913, and was first published in the Nouvelle Revue Française (from July to October 1913), and then as a book. Le Grand Meaulnes was nominated for, but did not win, the Prix Goncourt. It is available in English in a widely-admired 1959 translation by Frank Davison for Oxford University Press. In 1914, Alain-Fournier started work on a second novel, Colombe Blanchet, but this remained unfinished when he joined the army as a Lieutenant in August. He died fighting near Vaux-lès-Palameix[1] (Meuse) one month later, on the 22nd of September 1914. His body remained unidentified until 1991, at which time he was interred in the cemetery of Saint-Remy-la-Calonne. Most of the writing of Alain-Fournier was published posthumously: Miracles (a volume of poems and essays) in 1924, his correspondence with Jacques Rivière in 1926 and his letters to his family in 1930. His notes and sketches for Colombe Blanchet have also been published. From Wikipedia",
		    "bDate": "(October 03, 1886 - September 22, 1914)",
		    "genre" : [
		    	"Literature & Fiction"
		    	],
		    "authorBooks" : [
		        "Le Grand Meaulnes (1913)",
		        "Towards the Lost Domain: Letters from London (1905)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/alan.jpg"
		    	]
		},
		{
			"authorId" : "Napoleon",
			"author" : "Napoleon Hill",
			"authorBio" : "Napoleon Hill was an American author in the area of the new thought movement who was one of the earliest producers of the modern genre of personal-success literature. He is widely considered to be one of the great writers on success. His most famous work, Think and Grow Rich (1937), is one of the best-selling books of all time (at the time of Hill's death in 1970, Think and Grow Rich had sold 20 million copies). Hill's works examined the power of personal beliefs, and the role they play in personal success. He became an advisor to President Franklin D. Roosevelt from 1933 to 1936. 'What the mind of man can conceive and believe, it can achieve' is one of Hill's hallmark expressions. How achievement actually occurs, and a formula for it that puts success in reach of the average person, were the focal points of Hill's books",
		    "bDate": "(October 26, 1883 - November 08, 1970)",
		    "genre" : [
		    	"Business & Investing"
		    	],
		    "authorBooks" : [
		        "Think and Grow Rich (1938)",
		        "Master-Key to Riches (1981)",
		        "Grow Rich!: With Peace of Mind (1982)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/napoleon.jpg"
		    	]
		},
		{
		    "authorId" : "exupery",
		    "author" : "Antoine de Saint-Exupéry",
		    "authorBio" : "Antoine de Saint-Exupéry was born in Lyons on June 29, 1900. He flew for the first time at the age of twelve, at the Ambérieu airfield, and it was then that he became determined to be a pilot. He kept that ambition even after moving to a school in Switzerland and while spending summer vacations at the family's château at Saint-Maurice-de-Rémens, in eastern France. (The house at Saint-Maurice appears again and again in Saint-Exupéry's writing.) Later, in Paris, he failed the entrance exams for the French naval academy and, instead, enrolled at the prestigious art school l'Ecole des Beaux-Arts. In 1921 Saint-Exupéry began serving in the military, and was stationed in Strasbourg. There he learned to be a pilot, and his career path was forever settled. After leaving the service, in 1923, Saint-Exupéry worked in several professions, but in 1926 he went back to flying and signed on as a pilot for Aéropostale, a private airline that flew mail from Toulouse, France, to Dakar, Senegal. In 1927 Saint-Exupéry accepted the position of airfield chief for Cape Juby, in southern Morocco, and began writing his first book, a memoir called Southern Mail, which was published in 1929. He then moved briefly to Buenos Aires to oversee the establishment of an Argentinean mail service; when he returned to Paris in 1931, he published Night Flight, which won instant success and the prestigious Prix Femina. ",
		    "bDate": "(June 29, 1900 - July 31, 1944)",
		    "genre" : [
		    	"Philosophy",
		    	"Children's Books",
		    	"Nonfiction"
		    	],
		    "authorBooks" : [
		        "The Little Prince (1940)",
		        "Wind, Sand and Stars (1939)",
		        "Night Flight (1931)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/exupery.jpg"
		    	]
		},
		{
		    "authorId" : "Salinger",
		    "author" : "J. D. Salinger",
		    "authorBio" : "Jerome David Salinger was an American author, best known for his 1951 novel The Catcher in the Rye, as well as his reclusive nature. His last original published work was in 1965; he gave his last interview in 1980. Raised in Manhattan, Salinger began writing short stories while in secondary school, and published several stories in the early 1940s before serving in World War II. In 1948 he published the critically acclaimed story 'A Perfect Day for Bananafish' in The New Yorker magazine, which became home to much of his subsequent work. In 1951 Salinger released his novel The Catcher in the Rye, an immediate popular success. His depiction of adolescent alienation and loss of innocence in the protagonist Holden Caulfield was influential, especially among adolescent readers. The novel remains widely read and controversial, selling around 250,000 copies a year. The success of The Catcher in the Rye led to public attention and scrutiny: Salinger became reclusive, publishing new work less frequently. He followed Catcher with a short story collection, Nine Stories (1953), a collection of a novella and a short story, Franny and Zooey (1961), and a collection of two novellas, Raise High the Roof Beam, Carpenters and Seymour: An Introduction (1963). His last published work, a novella entitled 'Hapworth 16, 1924', appeared in The New Yorker on June 19, 1965.",
		    "bDate": "(January 01, 1919 - January 27, 2010)",
		    "genre" : [
		    	"Literature & Fiction",
		    	"Short Stories"
		    	],
		    "authorBooks" : [
		        "The Catcher in the Rye (1951)",
		        "Franny and Zooey (1961)",
		        "Nine Stories (1953)"
		        ],
		    "authorImage": [
		        "authorsBio/authorsImages/salinger.jpg"
		    	]
		}
	];
	var genreList=[
		{
		    "genre" : 'Adventure',
		    "genreId" : 'adventure',
		   	"genreDetail" : 'A genre of fiction in which action is the key element, overshadowing characters, theme and setting. The conflict in an adventure story is often man against nature. A secondary plot that reinforces this kind of conflict is sometimes included. In Allistair MacLean’s Night Without End, for example, the hero, while investigating a mysterious Arctic air crash, also finds himself dealing with espionage, sabotage and murder.',
		    "genreImage": [
		        "genres/genresImages/adventure.jpg"
		    	]
		},
		{
		    "genre" : 'Science Fiction & Fantasy',
		    "genreId" : 'scienceFiction',
		   	"genreDetail" : 'Looking for some awesome beach reads? Science fiction and fantasy have you covered. There’s a new Shannara book, a brand new Laurell K. Hamilton, and an Alistair Reynolds novella. Plus Scalzi’s next Old Man’s War book, and Terry Pratchett and Stephen Baxter’s Long Utopia. Here are all the books you can’t miss in June!',
		    "genreImage": [
		        "genres/genresImages/scienceFiction.jpg"
		    	]
		},
		{
		    "genre" : 'Literature & Fiction',
		    "genreId" : 'literatureFiction',
		   	"genreDetail" : 'Literary fiction is a term that has come into common usage in the early 1960s. The term is principally used to distinguish "serious fiction" which is a work that claims to hold literary merit, in comparison from genre fiction and popular fiction. The name literature is sometimes used for this genre, although it can also refer to a broader category of writing.',
		   	"genreImage": [
		        "genres/genresImages/literatureFiction.jpg"
		    	]
		},
		{
		    "genre" : 'Novel',
		    "genreId" : 'novel',
		   	"genreDetail" : 'A novel is a long prose narrative that usually describes fictional characters and events in the form of a sequential story. It rests on the consensus that the novel is today the longest genre of narrative prose, followed by the novella, novelette and the short story. However, there is no consensus as to the minimal required lenght. In part because of this wide variation, the boundary between a novella and a novel may be arbitrary and difficult to determine.',
		    "genreImage": [
		        "genres/genresImages/novel.jpg"
		    	]
		},
		{
		    "genre" : 'Historical',
		    "genreId" : 'historical',
		   	"genreDetail" : 'Historical fiction presents a story set in the past, often during a significant time period. In historical fiction, the time period is an important part of the setting and often of the story itself. Historical fiction may include fictional characters, well-known historical figures or a mixture of the two. Authors of historical fiction usually pay close attention to the details of their stories (settings, clothing, dialogue, etc.) to ensure that they fit the time periods in which the narratives take place.',
		    "genreImage": [
		        "genres/genresImages/historical.jpg"
		    	]
		},
		{
		    "genre" : 'Detective',
		    "genreId" : 'detective',
		   	"genreDetail" : 'Detective fiction is a sub-genre of crime and mystery fiction in which an investigator (often a detective), either professional or amateur, investigates a crime, often murder.',
		    "genreImage": [
		        "genres/genresImages/detective.jpg"
		    	]
		},
		{
		    "genre" : 'Romance',
		    "genreId" : 'romance',
		   	"genreDetail" : 'According to the Romance Writers of America, "Two basic elements comprise every romance novel: a central love story and an emotionally-satisfying and optimistic ending." Both the conflict and the climax of the novel should be directly related to that core theme of developing a romantic relationship, although the novel can also contain subplots that do not specifically relate to the main characters romantic love. Other definitions of a romance novel may be broader, including other plots and endings or more than two people, or narrower, restricting the types of romances or conflicts.',
		    "genreImage": [
		        "genres/genresImages/romance.jpg"
		    	]
		},
		{
		    "genre" : 'Dramma',
		    "genreId" : 'dramma',
		   	"genreDetail" : 'Drama is the specific mode of fiction represented in performance. The term comes from a Greek word meaning "action" (Classical Greek: δρᾶμα, drama), which is derived from "to do" or "to act" (Classical Greek: δράω, draō). The enactment of drama in theatre, performed by actors on a stage before an audience, presupposes collaborative modes of production and a collective form of reception. The structure of dramatic texts, unlike other forms of literature, is directly influenced by this collaborative production and collective reception.',
		    "genreImage": [
		        "genres/genresImages/dramma.jpg"
		    	]
		}
	];

	return {
		booksArray:bookList,
		authorsArray:authorList,
		genresArray:genreList,
		booksByGenre:function(genre){
			var result=[];
			angular.forEach(bookList,function(book){
				if(book.genre==genre){
					result.push(book);
				}
			});
			return result;
		},
		booksByAuthor:function(author){
			var result=[];
			angular.forEach(bookList,function(book){
				if(book.author==author){
					result.push(book);
				}
			});
			return result;
		},
		bookById:function(id){
			var result=[];
			angular.forEach(bookList,function(book){
				if(book.id==id){
					result.push(book);
				}
			});
			if(result.length==1){
				return result[0];
			} else if (result.length===0) {
				return null;
			} else {
				return undefined;
			}
		},
		genreById:function(genreId){
			var result=[];
			angular.forEach(genreList,function(genre){
				if(genre.genreId==genreId){
					result.push(genre);
				}
			});
			if(result.length==1){
				return result[0];
			} else if (result.length===0) {
				return null;
			} else {
				return undefined;
			}
		},
		authorById:function(authorId){
			var res=[];
			angular.forEach(authorList,function(author){
				if(author.authorId==authorId){
					res.push(author);
				}
			});
			if(res.length==1){
				return res[0];
			} else if (res.length===0) {
				return null;
			} else {
				return undefined;
			}
		},
		allGenres:function(){
			var result={};
			angular.forEach(bookList,function(author){
				result[author.genre]=true;
			});
			return Object.keys(result);
		},
		allBooks:function(){
			var result={};
			angular.forEach(bookList,function(book){
				result[book.title]=true;
			});
			return Object.keys(result);
		},
		authorGenres:function(author){
			var booksByAuthor=this.booksByAuthor(author);
			var result={};
			angular.forEach(booksByAuthor,function(author){
				result[author.genre]=true;
			});
			return Object.keys(result);
		},
		authorByGenre:function(genre){
			var result=[];
			angular.forEach(bookList,function(author){
				if(author.genre==genre){
					result.push(author);
				}
			});
			return result;
		},
		authorsByGenre:function(genre){
			var bookList=this.booksByGenre(genre);
			var result={};
			angular.forEach(bookList,function(book){
				result[book.author]=true;
			});
			return Object.keys(result);
		}
	};
})