const tvShows = [
  {
    tv_show_id: 8540,
    name: "Four in a Bed",
    type: "Reality",
    description:
      "<p><b>Four in a Bed</b> is a British reality television game show that has been airing on Channel 4 since 22 November 2010. The show involves four B&amp;B owners, who take turns to stay with one another - and pay what they consider fair for their stay. The winner is the establishment named best value for money.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/616/1540585.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/616/1540585.jpg",
    },
    number_of_seasons: 31,
    number_of_episodes: 1210,
  },
  {
    tv_show_id: 3508,
    name: "Gogglebox",
    type: "Reality",
    description:
      "<p><b>Gogglebox</b> is a British observational documentary television show which has aired on Channel 4 since 2013. The show focuses on families, friends and couples from around the country in their living rooms watching the last week's of British television.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/613/1534217.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/613/1534217.jpg",
    },
    number_of_seasons: 27,
    number_of_episodes: 390,
  },
  {
    tv_show_id: 42491,
    name: "Celebrity Gogglebox",
    type: "Reality",
    description:
      "<p>A rolling cast of famous faces, some of Britain's best loved personalities, turn their hand to being the country's most opinionated viewers, sharing their opinions on what they have been watching during the week.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/572/1431168.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/572/1431168.jpg",
    },
    number_of_seasons: 7,
    number_of_episodes: 57,
  },
  {
    tv_show_id: 4561,
    name: "First Dates",
    type: "Reality",
    description:
      "<p>The<b> First Dates</b> restaurant throws open its doors to single people looking for love.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/589/1472914.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/589/1472914.jpg",
    },
    number_of_seasons: 24,
    number_of_episodes: 221,
  },
  {
    tv_show_id: 24028,
    name: "First Dates Hotel",
    type: "Reality",
    description:
      "<p>Fred from <i>First Dates</i> invites single people to his very own summer season of love at a luxury hotel in the south of France.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/321/802993.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/321/802993.jpg",
    },
    number_of_seasons: 7,
    number_of_episodes: 44,
  },
  {
    tv_show_id: 19302,
    name: "Naked Attraction",
    type: "Reality",
    description:
      "<p><b>Naked Attraction</b> is a daring new dating series that starts where some good dates might end: naked. Modern dating is business. Simple decisions are influenced by countless factors: what you wear, what you do and how you present yourself online. Filtered photos, push-up bras and enhanced profiles are just a few of the things that can get in the way of singletons finding 'the one'. But what happens if we're stripped of everything? Could picking a partner based solely on the naked body and animal magnetism help us find our perfect mate? In each episode, two new singletons join host Anna Richardson as they seek to choose a date from a selection of six naked people, who will be revealed to them one body part at a time. Round by round, they whittle these six naked suitors down to one, based solely on pure physical attraction.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/398/997056.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/398/997056.jpg",
    },
    number_of_seasons: 12,
    number_of_episodes: 73,
  },
  {
    tv_show_id: 7973,
    name: "Married at First Sight UK",
    type: "Reality",
    description:
      "<p><b>Married at First Sight</b> is a ground-breaking series which asks if science can help us fall in love. Chosen from an initial pool of over 1500 applicants, individuals seeking long-term love are carefully assessed by a panel of experts in the fields of psychology, social and evolutionary anthropology, and theology. Once matched, three highly compatible couples prepare to enter into a legally-binding marriage with a complete stranger - meeting for the very first time at their own wedding where they'll declare 'I do'. But what makes the perfect match? And will everyone make it down the aisle?</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/588/1471880.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/588/1471880.jpg",
    },
    number_of_seasons: 10,
    number_of_episodes: 184,
  },
  {
    tv_show_id: 11867,
    name: "Geordie Shore: Their Journey",
    type: "Reality",
    description:
      "<p>In <b>Geordie Shore: Their Journey</b>, the cast of <i>Geordie Shore</i> past and present reunite to discuss their time on the show and for those who have left, what they have achieved since leaving the programme.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/39/99945.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/39/99945.jpg",
    },
    number_of_seasons: 1,
    number_of_episodes: 2,
  },
  {
    tv_show_id: 2098,
    name: "The Only Way is Essex",
    type: "Reality",
    description:
      "<p>Reality series which follows a group of friends living their day-to-day lives in Essex.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/583/1457887.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/583/1457887.jpg",
    },
    number_of_seasons: 35,
    number_of_episodes: 436,
  },
  {
    tv_show_id: 831,
    name: "Made in Chelsea",
    type: "Reality",
    description:
      "<p>A look at the lifestyles of a group of 20-something residents of the exclusive postcode in London, Chelsea, SW3.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/591/1478757.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/591/1478757.jpg",
    },
    number_of_seasons: 30,
    number_of_episodes: 346,
  },
  {
    tv_show_id: 3180,
    name: "Ex on the Beach",
    type: "Reality",
    description:
      "<p><b>Ex on the Beach</b> returns this summer for more ex-plosive drama. This time, we'll be shipping eight new sexy singles off on a heavenly holiday in Mexico… but these aren't any ordinary love seekers. To keep it interesting, we've added a few celebrities to the mix. Not only will the beach babes be forced to contend with scorned exes and unfinished business, a few inevitable celebrity crushes will no doubt complicate matters even more as several famous faces will be invading the villa and making life interesting for our housemates.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/17/43384.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/17/43384.jpg",
    },
    number_of_seasons: 10,
    number_of_episodes: 96,
  },
  {
    tv_show_id: 38356,
    name: "Race Across the World",
    type: "Reality",
    description:
      "<p><b>Race Across the World</b> will pit pairs of travellers against each other in a race to reach the Far East without taking a single flight, with no smartphone in sight. Each contestant will only have the cash equivalent of an air fare to their destination to pay for their overland travel. If they run out, they'll need to earn more.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/597/1494496.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/597/1494496.jpg",
    },
    number_of_seasons: 5,
    number_of_episodes: 42,
  },
  {
    tv_show_id: 3645,
    name: "Hunted",
    type: "Reality",
    description:
      "<p>The real-life thriller where ordinary people go on the run from a team of expert hunters. Where will they hide? Who can they trust? What would YOU do?</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/18/47269.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/18/47269.jpg",
    },
    number_of_seasons: 8,
    number_of_episodes: 50,
  },
  {
    tv_show_id: 7145,
    name: "SAS: Who Dares Wins",
    type: "Reality",
    description:
      "<p>Selection for the SAS is one of the world's toughest job interviews and physical fitness is only the starting point. What's really being tested is psychological resilience and character as candidates undergo sleep deprivation, interrogation and a series of increasingly complex mind games. In this programme, five ex-special forces soldiers re-create tasks from the SAS's secret selection process, putting 30 civilian men through the ultimate test of their physical and - more importantly - their psychological resilience.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/177/443999.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/177/443999.jpg",
    },
    number_of_seasons: 8,
    number_of_episodes: 45,
  },
  {
    tv_show_id: 41626,
    name: "Celebrity SAS: Who Dares Wins for Stand Up to Cancer",
    type: "Reality",
    description:
      "<p>In the first ever celebrity series of SAS: Who Dares Wins, 12 well-known faces embark on one of the toughest tests of their lives, to raise money for Stand Up To Cancer. They're living and surviving together in an unforgiving ex-military base, high in the Chilean Andes. From the recruits' very first challenge - a terrifying backwards dive out of a helicopter - Ant Middleton and his team of ex-special forces instructors are determined to show them that no allowances will be made for their celebrity status.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/481/1203013.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/481/1203013.jpg",
    },
    number_of_seasons: 8,
    number_of_episodes: 55,
  },
  {
    tv_show_id: 2955,
    name: "Taskmaster",
    type: "Game Show",
    description:
      "<p>Greg Davies is the <b>Taskmaster </b>who, with the help of his right-hand man, Alex, sets out to test the wiles, wit and wisdom of five hyper competitive comedians through a series of ingenious challenges. With the chance to be crowned show champion, rivalry amongst the comedians is encouraged, dodgy tactics rewarded and bribes accepted.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/587/1467935.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/587/1467935.jpg",
    },
    number_of_seasons: 21,
    number_of_episodes: 190,
  },
  {
    tv_show_id: 61321,
    name: "The 1% Club",
    type: "Game Show",
    description:
      "<p>In <b>The 1% Club</b>, 100 contestants begin every show - but to make it to the end and win the top prize of up to £100,000, contestants must correctly answer a question only 1% of the country would get right.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/592/1480034.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/592/1480034.jpg",
    },
    number_of_seasons: 5,
    number_of_episodes: 65,
  },
  {
    tv_show_id: 8537,
    name: "Pointless Celebrities",
    type: "Game Show",
    description:
      "<p>Alexander Armstrong and Richard Osman present a celebrity version of the general knowledge quiz in which contestants try to come up with the answers that nobody else could think of.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/178/445040.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/178/445040.jpg",
    },
    number_of_seasons: 22,
    number_of_episodes: 361,
  },
  {
    tv_show_id: 904,
    name: "Antiques Roadshow",
    type: "Reality",
    description:
      "<p><b>Antiques Roadshow </b>experts examine and value antiques and collectables.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/567/1418002.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/567/1418002.jpg",
    },
    number_of_seasons: 48,
    number_of_episodes: 968,
  },
  {
    tv_show_id: 3382,
    name: "Bargain Hunt",
    type: "Game Show",
    description:
      "<p>Two teams of amateur collectors have an hour at an antiques fair in which to acquire the best bargains possible with £300.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/17/44438.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/17/44438.jpg",
    },
    number_of_seasons: 25,
    number_of_episodes: 904,
  },
  {
    tv_show_id: 3427,
    name: "Escape to the Country",
    type: "Variety",
    description:
      "<p>A series which helps prospective buyers find their dream home in the country.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/581/1453527.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/581/1453527.jpg",
    },
    number_of_seasons: 26,
    number_of_episodes: 1267,
  },
  {
    tv_show_id: 3251,
    name: "Grand Designs",
    type: "Documentary",
    description:
      "<p>Kevin McCloud follows intrepid individuals trying to design and build their dream home.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/591/1478756.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/591/1478756.jpg",
    },
    number_of_seasons: 27,
    number_of_episodes: 257,
  },
  {
    tv_show_id: 40390,
    name: "Glow Up: Britain's Next Make-Up Star",
    type: "Reality",
    description:
      "<p><b>Glow Up: Britain's Next Make-Up Star</b> is a competition to look for the next big make-up star of tomorrow. Tapping into the huge online passion for extreme make-up transformations, the series will see a talented cast of hopefuls live and work together as they attempt to prove their potential to industry professionals from a multitude of worlds from fashion to film. With regular eliminations, the challenges will not only test their skills under pressure but also give them the opportunity to unleash their creative vision with jaw-dropping results.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/555/1388941.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/555/1388941.jpg",
    },
    number_of_seasons: 7,
    number_of_episodes: 55,
  },
  {
    tv_show_id: 43250,
    name: "Interior Design Masters with Alan Carr",
    type: "Reality",
    description:
      "<p><b>Interior Design Masters</b> takes ten fledgling designers and launches them into the world of interior design. With eight weeks and eight different challenges to tackle, in each episode the designers will be confronted with a new space to transform in an attempt to win the grand prize offer of a life changing design contract.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/452/1131341.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/452/1131341.jpg",
    },
    number_of_seasons: 6,
    number_of_episodes: 49,
  },
  {
    tv_show_id: 40861,
    name: "RuPaul's Drag Race UK",
    type: "Reality",
    description:
      "<p>Mama Ru presides as fabulous queens aim to be the UK's next Drag Race superstar. Who will dazzle the celeb judges and the amazing Michelle Visage? Join the party, squirrel friends!</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/589/1473218.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/589/1473218.jpg",
    },
    number_of_seasons: 8,
    number_of_episodes: 78,
  },
  {
    tv_show_id: 48737,
    name: "Coronation Street Icons",
    type: "Variety",
    description:
      "<p><b>Coronation Street Icons</b> will consist of four episodes narrated by Sally Lindsay, each on a different cobbles legend.</p><p>The four that have been chosen are Ken Barlow, Sally Metcalfe, Liz McDonald and Roy Cropper, with respective actors William Roache, Sally Dynevor, Beverley Callard and David Neilson recalling stories alongside archive footage.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/291/729720.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/291/729720.jpg",
    },
    number_of_seasons: 3,
    number_of_episodes: 6,
  },
  {
    tv_show_id: 82386,
    name: "EastEnders Revealed",
    type: "Documentary",
    description: "<p>Behind the scenes in Albert Square. </p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/554/1385631.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/554/1385631.jpg",
    },
    number_of_seasons: 11,
    number_of_episodes: 144,
  },
  {
    tv_show_id: 87830,
    name: "Hollyoaks Later",
    type: "Scripted",
    description:
      "<p>`<b>Hollyoaks Later</b>' is a spinoff of long-running soap opera `Hollyoaks'. The programme, which airs in a late-night time slot, delves deeper into the lives, loves and misdemeanours of some of the `Hollyoaks' characters, who shed their teen images as they try to find their feet away from the village. Due to its late-night schedule, `Hollyoaks Later' offers raunchier storylines and events than its parent programme, which airs earlier in the day. </p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/594/1485976.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/594/1485976.jpg",
    },
    number_of_seasons: 8,
    number_of_episodes: 32,
  },
  {
    tv_show_id: 35525,
    name: "Jeremy Clarkson Meets the Neighbours",
    type: "Documentary",
    description:
      "<p>Jeremy Clarkson drives a 1960s Jaguar E-Type around six European countries to discover just how different their lifestyles are to those in Britain, and whether the reality matches the stereotypical perception of each country.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/150/375001.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/150/375001.jpg",
    },
    number_of_seasons: 1,
    number_of_episodes: 5,
  },
  {
    tv_show_id: 11363,
    name: "Love Island",
    type: "Reality",
    description:
      "<p>On <b>Love Island</b> the Islanders must do their best to flirt, date, couple up in a bid to avoid being ‘dumped' from the Island. With new arrivals, heads may turn, while others will prove their true feelings. From romance and heart-to-hearts, to betrayal, bombshells and broken hearts, there's never a dull moment in the ultimate search for love. More texts, fire pit gatherings and challenges await the lovestruck Islanders, meaning there'll be plenty for them to dish the dirt on in the Beach Hut. Twists and turns will follow every step of the way, with shock recouplings, unexpected breakups and dramatic dumpings.</p><p>As the couples attempt to win the hearts of each other – and the public – one couple will ultimately triumph and be crowned <i>Love Island</i> winners</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/572/1431169.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/572/1431169.jpg",
    },
    number_of_seasons: 12,
    number_of_episodes: 558,
  },
  {
    tv_show_id: 1514,
    name: "Big Brother",
    type: "Reality",
    description:
      "<p><b>Big Brother</b> is the UK's biggest reality TV show and is one of the most talked-about shows in British TV history. </p><p>Big Brother takes place entirely within the confines of the Big Brother House. It's essentially a competition between the housemates, the object of which is to be the last remaining housemate in the House. At least one housemate will leave the House every week by a process of nomination and public eviction. Housemates will nominate each other for eviction and those with the most votes from their peers face a public vote. The housemate that receives most public votes leaves the House and is out of the competition. </p><p>Housemates are provided with a shopping budget each week to buy food and other necessities. Throughout the series housemates will be asked to complete tasks set by Big Brother. If the group does well in the tasks they get rewarded with a bigger shopping budget, plus special treats. On the final night of Big Brother the public vote on which housemate they want to win the show. The housemate with most votes wins a fabulous cash prize!</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/60/150620.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/60/150620.jpg",
    },
    number_of_seasons: 19,
    number_of_episodes: 1419,
  },
  {
    tv_show_id: 72624,
    name: "Celebrity Big Brother",
    type: "Reality",
    description:
      "<p><b>Celebrity Big Brother </b>will see a new cast of famous faces isolated from the outside world as they embark on the ultimate social experiment, taking up residence in the iconic Big Brother house. </p><p>Leaving luxury behind, the celebrities will take part in weekly nominations and tough tasks with cameras capturing their every move. Who will win the hearts of the nation, go all the way to the finish line and be crowned the winner? </p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/563/1407731.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/563/1407731.jpg",
    },
    number_of_seasons: 3,
    number_of_episodes: 34,
  },
  {
    tv_show_id: 58174,
    name: "The Traitors",
    type: "Game Show",
    description:
      "<p>Nail-biting psychological competition where 22 strangers play the ultimate reality game of detection, backstabbing and trust, in the hope of winning up to £120,000.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/606/1515386.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/606/1515386.jpg",
    },
    number_of_seasons: 5,
    number_of_episodes: 48,
  },
  {
    tv_show_id: 849,
    name: "I'm a Celebrity, Get Me Out of Here!",
    type: "Reality",
    description:
      "<p><b>I'm a Celebrity, Get Me Out of Here! </b>is the country's top survival reality TV show, where celebrities must live without any comforts and compete against each other in order to be crowned winner. </p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/598/1496591.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/598/1496591.jpg",
    },
    number_of_seasons: 25,
    number_of_episodes: 517,
  },
  {
    tv_show_id: 4395,
    name: "Strictly Come Dancing",
    type: "Reality",
    description:
      "<p>Are today's celebrities fleet of foot or do they have two left feet? That's the question Tess Daly and Claudia Winkleman will be finding the answer to when they present <b>Strictly Come Dancing</b>.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/589/1474861.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/589/1474861.jpg",
    },
    number_of_seasons: 23,
    number_of_episodes: 567,
  },
  {
    tv_show_id: 2964,
    name: "Britain's Got Talent",
    type: "Variety",
    description:
      "<p><b>Britain's Got Talent</b> brings together the very best variety acts from across the nation as they compete to win a life changing £250,000 and a coveted spot on The Royal Variety Performance.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/614/1537335.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/614/1537335.jpg",
    },
    number_of_seasons: 19,
    number_of_episodes: 297,
  },
  {
    tv_show_id: 696,
    name: "The X Factor",
    type: "Reality",
    description:
      "<p>Thousands audition. Only one can win. The search is on for the next singing Superstar.</p><p><b>The X Factor</b> is a talent show in which the participants have to audition before a jury.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/529/1324859.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/529/1324859.jpg",
    },
    number_of_seasons: 15,
    number_of_episodes: 447,
  },
  {
    tv_show_id: 8627,
    name: "Dancing on Ice",
    type: "Variety",
    description:
      "<p><b>Dancing on Ice</b> is a reality series in which celebrities and their professional partners figure skate in front of a panel of judges.</p><p>Each week the celebrities and their partners perform a live ice dance routine. The judges judge each performance and give a score, depending on the performance. These total scores then create a leaderboard which combines with the public vote in order to determine the two lowest placed couples. As this is the case, the pair with the lowest score from the judges can avoid being in the bottom two if the public vote for them.</p><p>Once the scores and votes are combined to form the final leaderboard for that week's show, the two/three couples at the bottom compete in a final showdown known as the \"Skate Off\", where they perform their routine again. Once the couples have performed their routines for the judging panel, the judges decide on who deserves to stay and cast their votes, based on their second performance. The couple with the most votes from the judges receives a place in the following week's show, while the couple with the fewest votes leaves the competition.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/551/1379628.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/551/1379628.jpg",
    },
    number_of_seasons: 17,
    number_of_episodes: 272,
  },
  {
    tv_show_id: 4859,
    name: "The Voice UK",
    type: "Reality",
    description:
      "<p>Join will.i.am and our other superstar coaches on their mission to find the next big thing for the music business. Alongside Will we have award-winning Jennifer Hudson, Lord of rock Gavin Rossdale and the legend that is Sir Tom Jones - all on the look out for the next big superstar. Will is promising magic, drama and lots of talent - and we can guarantee that this series of <b>The Voice UK</b> will not disappoint! The prize is a life-changing record deal with Polydor Records, one of the industry's most successful labels.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/535/1339644.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/535/1339644.jpg",
    },
    number_of_seasons: 13,
    number_of_episodes: 191,
  },
  {
    tv_show_id: 2958,
    name: "The Apprentice",
    type: "Reality",
    description:
      "<p><b>The Apprentice </b>sees fourteen candidates, competing against each other for a position at Lord Alan Sugar's company. Each week the candidates take part in a task set by Lord Sugar. Each team will have a Team Leader who managers that group for that task. The team that performs the best will win a reward and avoid the boardroom. The losing team will be summoned to the boardroom where their team leader will be forced to pick two people in their team who we join them in the boardroom and a chance to be fired. After twelve weeks Lord Sugar will be left with his Apprentice, who will work for him at a salary of £100,000. Lord Sugar is very busy so he has Nick and Karen, who act as his eyes and ears, to inform him of what's going on.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/611/1527868.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/611/1527868.jpg",
    },
    number_of_seasons: 20,
    number_of_episodes: 270,
  },
  {
    tv_show_id: 2953,
    name: "Dragons' Den",
    type: "Reality",
    description:
      "<p>Series in which budding entrepreneurs get three minutes to pitch their business ideas to five multi-millionaires willing to invest their own cash.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/611/1527731.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/611/1527731.jpg",
    },
    number_of_seasons: 23,
    number_of_episodes: 281,
  },
  {
    tv_show_id: 7186,
    name: "MasterChef",
    type: "Reality",
    description:
      "<p>Into the kitchen and under the spotlight. Amateur cooks duel it out for the right to be called the MasterChef UK Champion.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/586/1466131.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/586/1466131.jpg",
    },
    number_of_seasons: 21,
    number_of_episodes: 533,
  },
  {
    tv_show_id: 9607,
    name: "Celebrity MasterChef",
    type: "Reality",
    description:
      "<p>Celebrities compete to win the coveted cookery competition title.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/602/1506871.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/602/1506871.jpg",
    },
    number_of_seasons: 20,
    number_of_episodes: 332,
  },
  {
    tv_show_id: 7201,
    name: "MasterChef: The Professionals",
    type: "Reality",
    description:
      "<p>The hunt for the the next superstar chef. Professional cooks are put through their paces. Who will cope and who will crack?</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/612/1532217.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/612/1532217.jpg",
    },
    number_of_seasons: 18,
    number_of_episodes: 388,
  },
  {
    tv_show_id: 2950,
    name: "The Great British Bake Off",
    type: "Reality",
    description:
      "<p>Over 10 weeks, 12 of the best amateur bakers in Britain will whisk, knead, ice, beat and bake their way through classic British cakes, perfect patisserie, Italian delights, sticky caramel constructions and elaborate layered puddings. All 12 will be hoping to impress with their skill, creativity, knowledge and passion to clinch the Bake Off Crown. Each of the 30 new challenges have been carefully designed by judges Paul Hollywood and Prue Leith to reveal just who is a star baker.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/585/1464906.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/585/1464906.jpg",
    },
    number_of_seasons: 16,
    number_of_episodes: 201,
  },
  {
    tv_show_id: 3909,
    name: "The Great British Sewing Bee",
    type: "Reality",
    description:
      "<p>Amateur sewers take on challenges as they compete to be named Britain's best home sewer.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/581/1454841.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/581/1454841.jpg",
    },
    number_of_seasons: 12,
    number_of_episodes: 103,
  },
  {
    tv_show_id: 8295,
    name: "Junior Bake Off",
    type: "Reality",
    description:
      "<p>Harry Hill hosts, as judges Liam Charles and Ravneet Gill take on the tough task of finding Britain's best junior baker.</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/607/1517955.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/607/1517955.jpg",
    },
    number_of_seasons: 11,
    number_of_episodes: 163,
  },
  {
    tv_show_id: 3780,
    name: "Come Dine with Me",
    type: "Game Show",
    description:
      "<p>The knives (and forks) are out as a group of strangers compete for the title of ultimate dinner party host. And the £1000 on the table adds spice to the proceedings...</p>",
    TVShowIMG_URL: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/616/1541467.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/616/1541467.jpg",
    },
    number_of_seasons: 29,
    number_of_episodes: 1865,
  },
];
module.exports = tvShows;
