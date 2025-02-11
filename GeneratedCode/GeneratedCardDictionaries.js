function CardTitle(cardID) {
  const data = {"2579145458":"Luke Skywalker","0dcb77795c":"Luke Skywalker","6088773439":"Darth Vader","0ca1902a46":"Darth Vader","2524528997":"Cell Block Guard","3038238423":"Fleet Lieutenant","9266336818":"Grand Moff Tarkin","9680213078":"Leia Organa","5562575456":"TIE\/ln Fighter","5494760041":"Galactic Ambition","0494601180":"Alliance X-Wing","3509161777":"You're My Only Hope","8129465864":"Administrator's Tower","8560666697":"Director Krennic","e2c6231b35":"Director Krennic","3572356139":"Chewbacca","8301e8d7ef":"Chewbacca","2855740390":"Lieutenant Childsen","4786320542":"Obi-Wan Kenobi","8615772965":"Vigilance","8679831560":"Repair","6472095064":"Vanquish","0507674993":"Command Center","6903722220":"Luke's Lightsaber","8954587682":"Superlaser Technician","2703877689":"Resupply","8117080217":"Admiral Ozzel","9002021213":"Imperial Interceptor","0705773109":"Vader's Lightsaber","9500514827":"Han Solo","8297630396":"Shoot First","6901817734":"Asteroid Sanctuary","9996676854":"Admiral Motti","9097690846":"Snowtrooper Lieutenant","8986035098":"Viper Probe Droid","1557302740":"General Veers","6072239164":"AT-ST","0523973552":"I Am Your Father","2758597010":"Maximum Firepower","9568000754":"R2-D2","9799982630":"General Dodonna","1862616109":"Snowspeeder","8752877738":"Shield","2912358777":"Grand Moff Tarkin","59cd013a2d":"Grand Moff Tarkin","6514927936":"Leia Organa","87e8807695":"Leia Organa","0827076106":"Admiral Ackbar","0073206444":"Command","3974134277":"Prepare for Takeoff","2007868442":"Experience","7911083239":"Grand Inquisitor","6827598372":"Grand Inquisitor","4841169874":"Sabine Wren","51e8757e4c":"Sabine Wren","0160548661":"Fallen Lightsaber","5907868016":"Fighters for Freedom","3736081333":"Aggression","6577517407":"Wampa","8148673131":"Open Fire","3789633661":"Cunning","0949648290":"Greedo","5346983501":"Syndicate Lackeys","8800836530":"No Good to Me Dead","2050990622":"Spark of Rebellion","4626028465":"Boba Fett","0e65f012f5":"Boba Fett","7202133736":"Waylay","5954056864":"Han Solo","5e90bd91b0":"Han Solo","1951911851":"Grand Admiral Thrawn","02199f9f1e":"Grand Admiral Thrawn","2429341052":"Security Complex","8327910265":"Energy Conversion Lab","2055904747":"Echo Base","1393827469":"Tarkintown","8659924257":"Catacombs of Cadera","2569134232":"Jedha City","6093792814":"Chopper Base","6458912354":"Death Trooper","7596515127":"Academy Defense Walker","9624333142":"Count Dooku","7485151088":"Search Your Feelings","0074718689":"Restored ARC-170","4405415770":"Yoda","5449704164":"2-1B Surgical Droid","8333567388":"Distant Patroller","9702250295":"Cloud City Wing Guard","7751685516":"System Patrol Craft","8184790799":"Consular Security Force","1662196707":"Kanan Jarrus","7622279662":"Vigilant Honor Guards","3896582249":"Redemption","4599464590":"Rugged Survivors","9059202647":"Resilient","3099663280":"Entrenched","0867878280":"It Binds All Things","4849184191":"Takedown","4566580942":"Admiral Piett","7929181061":"General Tagge","3988315236":"Seasoned Shoretrooper","1780978508":"Emperor's Royal Guard","8294130780":"Gladiator Star Destroyer","3830969722":"Blizzard Assault AT-AT","3401690666":"Relentless","4631297392":"Devastator","1900571801":"Overwhelming Barrage","6253392993":"Bright Hope","4339330745":"Wedge Antilles","4919000710":"Home One","0961039929":"Colonel Yularen","1611702639":"Consortium StarViper","3138552659":"Homestead Militia","2649829005":"Agent Kallus","7648077180":"97th Legion","3987987905":"Hardpoint Heavy Blaster","3407775126":"Recruit","2383321298":"Death Star Stormtrooper","2651321164":"Tactical Advantage","4619930426":"First Legion Snowtrooper","9097316363":"Emperor Palpatine","1446471743":"Force Choke","7495752423":"Green Squadron A-Wing","3646264648":"Sabine Wren","5230572435":"Mace Windu","2404916657":"Cantina Braggart","6348804504":"Ardent Sympathizer","2668056720":"Disabling Fang Fighter","7517208605":"Star Wing Scout","0797226725":"Infiltrator's Skill","7262314209":"Mission Briefing","5154172446":"ISB Agent","4156799805":"Boba Fett","9950828238":"Seventh Fleet Defender","0052542605":"Bossk","4300219753":"Fett's Firespray","1880931426":"Lothal Insurgent","9560139036":"Ezra Bridger","1785627279":"Millennium Falcon","1017822723":"Rogue Operative","7285270931":"Auzituck Liberator Gunship","8918765832":"Chewbacca","9250443409":"Lando Calrissian","4299027717":"Mining Guild TIE Fighter","7280213969":"Smuggling Compartment","1626462639":"Change of Heart","3809048641":"Surprise Strike","4092697474":"TIE Advanced","8009713136":"C-3PO","0046930738":"Rebel Pathfinder","3443737404":"Wing Leader","2048866729":"Iden Versio","b0dbca5c05":"Iden Versio","4263394087":"Chirrut \u00cemwe","d1a7b76ae7":"Chirrut \u00cemwe","5784497124":"Emperor Palpatine","6c5b96c7ef":"Emperor Palpatine","7440067052":"Hera Syndulla","80df3928eb":"Hera Syndulla","8600121285":"IG-88","fb475d4ea4":"IG-88","3187874229":"Cassian Andor","3c60596a7a":"Cassian Andor","8244682354":"Jyn Erso","20f21b4948":"Jyn Erso","9133080458":"Inferno Four","9412277544":"Del Meeko","1664771721":"Gideon Hask","0176921487":"Power of the Dark Side","6931439330":"The Ghost","3503494534":"Regional Governor","3280523224":"Rukh","8506660490":"Darth Vader","9785616387":"The Emperor's Legion","3377409249":"Rogue Squadron Skirmisher","4721628683":"Patrolling V-Wing","1047592361":"Ruthless Raider","3232845719":"K-2SO","9647945674":"Zeb Orrelios","8429598559":"Black One","6954704048":"Heroic Sacrifice","5767546527":"For a Cause I Believe In","0256267292":"Benthic 'Two Tubes'","1705806419":"Force Throw","3058784025":"Keep Fighting","7728042035":"Chimaera","6208347478":"Chopper","3018017739":"Vanguard Ace","9644107128":"Bamboozle","0700214503":"Crafty Smuggler","3613174521":"Outer Rim Headhunter","6028207223":"Pirated Starfighter","9985638644":"Snapshot Reflexes","3426168686":"Sneak Attack","7366340487":"Outmaneuver","2202839291":"Don't Get Cocky","4536594859":"Medal Ceremony","7109944284":"Luke Skywalker","8995892693":"Red Three","4642322279":"Partisan Insurgent","9210902604":"Precision Fire","7257556541":"Bodhi Rook","6366665313":"Capital City","3810584393":"Dagobah Swamp","0461841375":"Kestro City","9633997311":"Scout Bike Pursuer","6663619377":"AT-AT Suppressor","8240629990":"Avenger","8495694166":"Jedi Lightsaber","5264521057":"Wilderness Fighter","9459170449":"Cargo Juggernaut","8788948272":"Devotion","8981523525":"Moment of Peace","3208391441":"Make an Opening","2756312994":"Alliance Dispatcher","4317911650":"Battlefield Marine","3498814896":"Mon Mothma","6912684909":"Echo Base Defender","1939951561":"Attack Pattern Delta","5575681343":"Vanguard Infantry","2471223947":"Frontline Shuttle","6432884726":"Steadfast Battalion","6718924441":"Mercenary Company","3463676231":"Academy Training","8055390529":"Traitorous","1349057156":"Strike True","8395007579":"Fifth Brother","0828695133":"Seventh Sister","9070397522":"SpecForce Soldier","1746195484":"Jedha Agitator","7533529264":"Wolffe","4323691274":"Power Failure","3802299538":"Cartel Spacer","5035052619":"Jabba the Hutt","3684950815":"Bounty Hunter Crew","1021495802":"Cantina Bouncer","9859536518":"Jawa Scavenger","1081012039":"Regional Sympathizers","4111616117":"Volunteer Soldier","8098293047":"Occupier Siege Tank","4550121827":"Protector","6515891401":"Karabast","1208707254":"Rallying Cry","8691800148":"Reinforcement Walker","5950125325":"Confiscate","5707383130":"Bendu","7861932582":"The Force Is With Me","9353672706":"General Krell","2027289177":"Escort Skiff","5555846790":"Saw Gerrera","2739464284":"Gamorrean Guards","5879557998":"Baze Malbus","4166047484":"Guardian of the Whills","8988732248":"Rebel Assault","7916724925":"Bombing Run","5464125379":"Strafing Gunship","6385228745":"Corellian Freighter","1353201082":"Superlaser Blast","1323728003":"Electrostaff","2554951775":"Bail Organa","8968669390":"U-Wing Reinforcement","2639435822":"Force Lightning","5335160564":"Guerilla Attack Pod","6702266551":"Smoke and Cinders","5871074103":"Forced Surrender","7870435409":"Bib Fortuna","2715652707":"I Had No Choice","9448937272":"Swoop Racer","2587711125":"Disarm","1598425314":"Underworld Thug","4685993945":"Frontier AT-RT","6087834273":"Restock","2503039837":"Moff Gideon","4484318969":"Moff Gideon","9005139831":"The Mandalorian","4088c46c4d":"The Mandalorian","4843225228":"Phase-III Dark Trooper","0302968596":"Calculated Lethality","5351496853":"Gideon's Light Cruiser","4117365450":"Wanted","0754286363":"The Mandalorian's Rifle","8142386948":"Razor Crest","6536128825":"Grogu","6585115122":"The Mandalorian","1982478444":"Vigilant Pursuit Craft","2288926269":"Privateer Crew","6847268098":"Timely Intervention","5874342508":"Hotshot DL-44 Blaster","0622803599":"Jabba the Hutt","f928681d36":"Jabba the Hutt","8709191884":"Hunter","c9ff9863d7":"Hunter","7424360283":"Bo-Katan Kryze","a579b400c0":"Bo-Katan Kryze","3488958204":"Remnant Science Facility","2403450809":"Remote Village","4006047777":"Maz Kanata's Castle","5662039114":"Nevarro City","2547571983":"Death Watch Hideout","6956298674":"Spice Mines","4313706014":"Coronet City","9617095664":"Jabba's Palace","6878039039":"Hylobon Enforcer","2969011922":"Pyke Sentinel","9336505300":"Death Trooper","4341703515":"Supercommando Squad","8228196561":"Clan Saxon Gauntlet","4783554451":"First Light","4843813137":"Brutal Traditions","0282219568":"Clan Wren Rescuer","7486516061":"Concord Dawn Interceptors","1747533523":"Village Protectors","8190373087":"Gentle Giant","9999079491":"Mystic Reflection","6911505367":"Second Chance","8818201543":"Midnight Repairs","4327133297":"Moisture Farmer","4511413808":"Follower of The Way","7291903225":"Rickety Quadjumper","5636691221":"HWK-290 Freighter","4383889628":"Wroshyr Tree Tender","6409922374":"Niima Outpost Constables","8639184906":"System Patrol Craft","1503633301":"Survivors' Gauntlet","3770196734":"Cargo Juggernaut","1780014071":"Public Enemy","7687006104":"Foundling","7277605274":"Resilient","4282425335":"Top Target","1368144544":"Imprisoned","3514010297":"Mandalorian Armor","3525325147":"Vambrace Grappleshot","8645125292":"Covert Strength","1973545191":"Unexpected Escape","6452159858":"Evidence of the Crime","3329959260":"Fell the Dragon","5303936245":"Rival's Fall","8712779685":"Outland TIE Vanguard","9462361238":"Seasoned Shoretrooper","1994773472":"Superlaser Technician","8305828130":"Warbird Stowaway","1885628519":"Crosshair","8552719712":"Pirate Battle Tank","1565760222":"Remnant Reserves","4643489029":"Palpatine's Return","9503028597":"Clone Deserter","4534554684":"Freetown Backup","5977238053":"Sundari Peacekeeper","3671559022":"Echo","1805986989":"Modded Cohort","9757839764":"Adelphi Patrol Wing","6775521270":"Inspiring Mentor","9828896088":"Spark of Hope","8080818347":"Rule with Respect","7204838421":"Enterprising Lackeys","5984647454":"Enforced Loyalty","5576996578":"Endless Legions","0336440515":"Warzone Lieutenant","5171970586":"Collections Starhopper","4590862665":"Gamorrean Retainer","0505904136":"Scanning Officer","3503780024":"Outlaw Corona","6905327595":"Reputable Hunter","4721657243":"Kihraxz Heavy Fighter","9483244696":"Weequay Pirate Gang","9765804063":"Discerning Veteran","3027902905":"Mercenary Company","1086021299":"Arquitens Assault Cruiser","9642863632":"Bounty Hunter's Quarry","8877249477":"Legal Authority","2178538979":"Price on Your Head","1141018768":"Commission","0802973415":"Outflank","1701265931":"Moment of Glory","3765912000":"Take Captive","2346145249":"Choose Sides","8031540027":"Dengar","2151430798":"Guavian Antagonizer","5557494276":"Death Watch Loyalist","1743599390":"Trandoshan Hunters","4897501399":"Ruthlessness","3012322434":"Give In to Your Anger","5896817672":"Headhunting","9195624101":"Heroic Renegade","4595532978":"Ketsu Onyo","6037778228":"Nite Owl Skirmisher","9951020952":"Koska Reeves","7922308768":"Valiant Assault Ship","1556608115":"Desperado Freighter","4085341914":"Heroic Resolve","3228620062":"Cripple Authority","9270539174":"Wild Rancor","8090818642":"The Chaos of War","9690731982":"Reckless Gunslinger","7642980906":"Stolen Landspeeder","3786602643":"House Kast Soldier","7351946067":"Rhokai Gunship","2965702252":"Unlicensed Headhunter","4395522409":"Disabling Fang Fighter","8679638018":"Wanted Insurgents","8991513192":"Hunting Nexu","3487311898":"Clan Challengers","3417125055":"IG-11","1304452249":"Covetous Rivals","4935319539":"Krayt Dragon","2740761445":"Guild Target","1938453783":"Armed to the Teeth","0807120264":"Death Mark","6471336466":"Vambrace Flamethrower","7826408293":"Daring Raid","6962053552":"Desperate Attack","8576088385":"Detention Block Rescue","4772866341":"Pillage","7212445649":"Bravado","9725921907":"Kintan Intimidator","6135081953":"Doctor Evazan","6939947927":"Hunter of the Haxion Brood","1810342362":"Lurking TIE Phantom","6853970496":"Slaver's Freighter","7718080954":"Frozen in Carbonite","5696041568":"Triple Dark Raid","9108611319":"Cartel Turncoat","9552605383":"L3-37","1386874723":"Omega","9115773123":"Coruscant Dissident","8656645362":"Liberated Slaves","9040137775":"Principled Outlaw","7578472075":"Let the Wookiee Win","5283722046":"Spare the Target","4717189843":"A New Adventure","1910812527":"Final Showdown","6475868209":"Criminal Muscle","2121724481":"Cloud-Rider","6947306017":"Fugitive Wookiee","0088477218":"Privateer Scyk","8095362491":"Frontier Trader","1312599620":"Smuggler's Starfighter","7171636330":"Chain Code Collector","2556508706":"Resourceful Pursuers","7982524453":"Fennec Shand","6420322033":"Enticing Reward","2011561919":"Snapshot Reflexes","6117103324":"Jetpack","7270736993":"Unrefusable Offer","2750823386":"Look the Other Way","6151970296":"Bounty Posting","0931441928":"Ma Klounkee","4663781580":"Swoop Down","8750826002":"Surprise Strike","5778949819":"Relentless Pursuit","8261033110":"Evacuate","4328408486":"Incinerator Trooper","3803148745":"Ruthless Assassin","6416685228":"Snowtrooper Lieutenant","0315522200":"Black Sun Starfighter","1575743055":"Cell Block Guard","6635692731":"Hutt's Henchmen","6425029011":"Altering the Deal","7354795397":"No Bargain","9472541076":"Grey Squadron Y-Wing","9405733493":"Protector of the Throne","3881257511":"Tech","1477806735":"Wookiee Warrior","0866321455":"Smuggler's Aid","9845101935":"This Is The Way","4057912610":"Bounty Guild Initiate","3577961001":"Mercenary Gunship","4088627455":"Underworld Thug","1081897816":"Mandalorian Warrior","6870437193":"Twin Pod Cloud Car","2090698177":"Street Gang Recruiter","3074091930":"Rich Reward","1630144142":"Confiscate","9794215464":"Gar Saxon","3feee05e13":"Gar Saxon","2432897157":"Qi'ra","4aa0804b2b":"Qi'ra","9596662994":"Finn","8903067778":"Finn","4352150438":"Rey","e091d2a983":"Rey","3045538805":"Hondo Ohnaka","415bde775d":"Hondo Ohnaka","9334480612":"Boba Fett","919facb76d":"Boba Fett","2526288781":"Bossk","d2bbda6982":"Bossk","1480894253":"Kylo Ren","8def61a58e":"Kylo Ren","9226435975":"Han Solo","a742dea1f1":"Han Solo","1384530409":"Cad Bane","724979d608":"Cad Bane","0254929700":"Doctor Aphra","58f9f2d4a0":"Doctor Aphra","0911874487":"Fennec Shand","2b13cefced":"Fennec Shand","5440730550":"Lando Calrissian","040a3e81f3":"Lando Calrissian","6722700037":"Doctor Pershing","1090660242":"The Client","5632569775":"Lom Pyke","0252207505":"Synara San","3731235174":"Supreme Leader Snoke","5511838014":"Kuiil","5080989992":"Rose Tico","0196346374":"Rey","2560835268":"The Armorer","5169472456":"Chewbacca","9871430123":"Sugi","0474909987":"Val","0518313150":"Embo","3399023235":"Fenn Rau","2744523125":"Salacious Crumb","7936091758":"General Tagge","9734237871":"Ephant Mon","8862896760":"Maul","8380936981":"Jabba's Rancor","9752523457":"Finalizer","9850906885":"Maz Kanata","2143627819":"The Marauder","3468546373":"General Rieekan","9151673075":"Cobb Vanth","3141660491":"The Darksaber","3991112153":"Kylo's TIE Silencer","8687233791":"Punishing One","6769342445":"Jango Fett","3622749641":"Krrsantan","6263178121":"Kylo Ren","3086868510":"Pre Vizsla","6234506067":"Cassian Andor","5966087637":"Poe Dameron","2470093702":"Wrecker","9637610169":"Bo-Katan Kryze","6910883839":"Migs Mayfeld","5830140660":"Bazine Netal","6097248635":"4-LOM","1690726274":"Zuckuss","5818136044":"Xanadu Blood","0598830553":"Dryden Vos","7964782056":"Qi'ra","2522489681":"Zorii Bliss","5752414373":"Millennium Falcon","4002861992":"DJ","3010720738":"Tobias Beckett","8107876051":"Enfys Nest","5738033724":"Boba Fett's Armor","3952758746":"Toro Calican","7674544152":"Kragan Gorr","6884078296":"Greef Karga","7022736145":"Tarfful","0981852103":"Lady Proxima","6463485981":"Experience","3358002015":"Shield","1401885853":"Count Dooku","8292269690":"Darth Vader","9954244145":"Emperor Palpatine","3038397952":"Kylo Ren","7315203824":"Asajj Ventress","5866567543":"Darth Maul","2155351882":"Ahsoka Tano","7224a2074a":"Ahsoka Tano","2872203891":"General Grievous","fb7af4616c":"General Grievous","3876951742":"General's Guardian","0511508627":"Captain Rex","7380773849":"Coruscant Guard","2282198576":"Anakin Skywalker","5027991609":"Separatist Commando","5584601885":"Battle Droid Escort","6772128891":"Hailfire Tank","1209133362":"332nd Stalwart","3463348370":"Battle Droid","3941784506":"Clone Trooper","2742665601":"Nala Se","f05184bd91":"Nala Se","6064906790":"Nute Gunray","b7caecf9a3":"Nute Gunray","2784756758":"Obi-Wan Kenobi","0ee1e18cf4":"Obi-Wan Kenobi","2847868671":"Yoda","e71f6f766c":"Yoda","5683908835":"Count Dooku","6fa73a45ed":"Count Dooku","1686059165":"Wat Tambor","12122bc0b1":"Wat Tambor","7734824762":"Captain Rex","47557288d6":"Captain Rex","2870878795":"Padm\u00e9 Amidala","4ae6d91ddc":"Padm\u00e9 Amidala","6461101372":"Maul","40b649e6f6":"Maul","5081383630":"Pre Vizsla","11299cc72f":"Pre Vizsla","8777351722":"Anakin Skywalker","24a81d97b5":"Anakin Skywalker","4628885755":"Mace Windu","9b212e2eeb":"Mace Windu","8929774056":"Asajj Ventress","f8e0c65364":"Asajj Ventress","9155536481":"Jango Fett","cfdcbd005a":"Jango Fett","0026166404":"Chancellor Palpatine","ad86d54e97":"Chancellor Palpatine","2358113881":"Quinlan Vos","3f7f027abd":"Quinlan Vos","5333016146":"Rune Haako","0677558416":"Wartime Trade Official","1039828081":"Calculating MagnaGuard","4776553531":"General Grievous","6412545836":"Morgan Elsbeth","2761325938":"Devastating Gunship","5084084838":"Droideka Security","6436543702":"Providence Destroyer","3381931079":"Malevolence","7895170711":"A Fine Addition","1389085256":"Lethal Crackdown","7924172103":"Barriss Offee","8919416985":"Outspoken Representative","8552292852":"Kashyyyk Defender","2260777958":"41st Elite Corps","3033790509":"Captain Typho","6384086894":"Satine Kryze","6648824001":"Obi-Wan's Aethersprite","4541556921":"Knight of the Republic","9832122703":"Luminara Unduli","4036958275":"Hello There","7244268162":"Finn","7289764651":"Duchess's Champion","5013214638":"Equalize","5157630261":"Compassionate Senator","3504029875":"Warrior Drone","4718895864":"Padawan Starfighter","0598115741":"Royal Guard Attach\u00e9","8345985976":"Trade Federation Shuttle","4179773207":"Infantry of the 212th","3420865217":"Daughter of Dathomir","7000286964":"Vulture Interceptor Wing","7200475001":"Ki-Adi-Mundi","8845972926":"Falchion Ion Tank","1320229479":"Multi-Troop Transport","0216922902":"The Zillo Beast","9399634203":"I Have the High Ground","6732988831":"Grievous Reassembly","2359136621":"Guarding the Way","3596811933":"Disruptive Burst","0968965258":"Death by Droids","5406361032":"Vanquish","2565830105":"The Invasion of Christophsis","3680942691":"Confederate Courier","9610332938":"Poggle the Lesser","6999668340":"Droid Commando","5630404651":"MagnaGuard Wing Leader","7979348081":"Kraken","1039176181":"Kalani","7013591351":"Admiral Trench","9283787549":"Separatist Super Tank","7579458834":"Reprocess","4895747419":"Consolidation of Power","2265363405":"Echo","2395430106":"Republic Tactical Officer","0268657344":"Admiral Yularen","8640210306":"Advanced Recon Commando","1314547987":"Shaak Ti","9966134941":"Pelta Supply Frigate","6190335038":"Aayla Secura","6238512843":"Republic Defense Carrier","0633620454":"Synchronized Strike","3500129784":"Petition the Senate","0142631581":"Mas Amedda","1192349217":"Manufactured Soldiers","9415708584":"Pyrrhic Assault","0249398533":"Obedient Vanguard","3258646001":"Steadfast Senator","6534973905":"Patrolling V-Wing","8426882030":"Ryloth Militia","7252148824":"501st Liberator","8418001763":"Huyang","9176356859":"Republic ARC-170","4824842849":"Subjugating Starfighter","6330903136":"B2 Legionnaires","9017877021":"Clone Commander Cody","2041344712":"Osi Sobeck","0345124206":"Clone","5243634234":"Baktoid Spider Droid","2554988743":"Gor","7344129644":"Outflank","6830921347":"Tactical Advantage","2267524398":"The Clone Wars","4916334670":"Encouraging Leadership","3365254092":"Resupply","5316152584":"Take Captive","1272825113":"In Defense of Kamino","8139901441":"Bo-Katan Kryze","6022703929":"OOM-Series Officer","6277739341":"Confederate Tri-Fighter","1313247160":"B1 Attack Platform","3556557330":"Asajj Ventress","8613680163":"Darth Maul","8201333805":"Squadron of Vultures","8540765053":"Savage Opress","8655450523":"Count Dooku","6476609909":"Corner the Prey","8060312086":"Self-Destruct","2800918480":"Soldier of the 501st","4551109857":"Anakin's Interceptor","7099699830":"Jyn Erso","6969421569":"Batch Brothers","5936350569":"Jesse","8096748603":"Steela Gerrera","6404471739":"Senatorial Corvette","3476041913":"Low Altitude Gunship","0354710662":"Saw Gerrera","2585318816":"Resolute","8022262805":"Bold Resistance","7789777396":"Mister Bones","0056489820":"Unlimited Power","0595607848":"Disaffected Senator","9227411088":"Clone Heavy Gunner","8084593619":"Dendup's Loyalist","3410014206":"Vanguard Droid Bomber","3600744650":"Bold Recon Commando","2298508689":"Reckless Torrent","1368135704":"Relentless Rocket Droid","0683052393":"Hevy","1641175580":"Kit Fisto","3693364726":"Aurra Sing","4210027426":"Heavy Persuader Tank","4362937866":"Daring Raid","4042866439":"Grenade Strike","6669050232":"Grim Resolve","2103133661":"Blood Sport","5807228000":"Open Fire","1417180295":"Strategic Analysis","5013139687":"Caught in the Crossfire","7235023816":"Guerilla Insurgency","1167572655":"Planetary Invasion","6406254252":"Soulless One","0036920495":"Elite P-38 Starfighter","6623894685":"Infiltrating Demolisher","9964112400":"Rush Clovis","3589814405":"Tactical Droid Commander","4489623180":"Ziro the Hutt","0021045666":"San Hill","0693815329":"Cad Bane","3459567689":"Wartime Profiteering","4113123883":"Unnatural Life","2483302291":"On the Doorstep","1882027961":"Wolf Pack Escort","8307804692":"Padm\u00e9 Amidala","5616678900":"R2-D2","7144880397":"Ahsoka Tano","2843644198":"Sabine Wren","7494987248":"Plo Koon","2443835595":"Republic Attack Pod","8414572243":"Enfys Nest","9620454519":"Clear the Field","0328412140":"Creative Thinking","7510418786":"Aid from the Innocent","9216621233":"Jar Jar Binks","0038286155":"Chancellor Palpatine","1302133998":"Impropriety Among Thieves","5445166624":"Clone Dive Trooper","9262288850":"Independent Senator","6257858302":"B1 Security Team","9479767991":"Favorable Delegate","8549156761":"Hotshot V-Wing","0199085444":"Lux Bonteri","7732981122":"Sly Moore","8839068683":"Freelance Assassin","4512764429":"Sanctioner's Shuttle","7953154930":"Hidden Sharpshooter","3348783048":"Geonosis Patrol Fighter","3434956158":"Fives","6700679522":"Tri-Droid Suppressor","6401761275":"In Pursuit","3357486161":"Political Pressure","0959549331":"Unmasking the Conspiracy","4910017138":"Breaking In","6849037019":"Now There Are Two of Them","5190917242":"Waylay","3799780905":"Prisoner of War","4050810437":"Droid Starfighter","3246242155":"Super Battle Droid","6787851182":"Dwarf Spider Droid","9927473096":"Patrolling AAT","0398102006":"The Invisible Hand","1083333786":"Battle Droid Legion","6826668370":"Droid Deployment","4412828936":"Merciless Contest","4569767827":"Execute Order 66","9209567613":"Phase I Clone Trooper","1988887369":"Phase II Clone Trooper","8187818742":"Republic Commando","9185282472":"Eta-2 Light Interceptor","7884088000":"Armored Saber Tank","6570091935":"Tranquility","5350889336":"AT-TE Vanguard","5610901450":"Heroes on Both Sides","8719468890":"Sword and Shield Maneuver","5074877594":"Drop In","2535372432":"Aggrieved Parliamentarian","2574847177":"Headhunter Squadron","1358583691":"Volunteer Soldier","4602353389":"Brain Invaders","2483520485":"Private Manufacturing","6594935791":"Pau City","6672139274":"Sundari","7303722102":"The Crystal City","8589863038":"Droid Manufactory","7827173440":"Lair of Grievous","0348855629":"Tipoca City","6854189262":"Shadow Collective Camp","0109520913":"KCM Mining Facility","3867306441":"The Nest","9652861741":"Petranaki Arena","1023625185":"Level 1313","2293075446":"Pyke Palace","7884488904":"For The Republic","3962135775":"Foresight","1555775184":"Roger Roger","8061497086":"Perilous Position","4991712618":"Unshakeable Will","4886127868":"Nameless Valor","2397845395":"Strategic Acumen","0414253215":"General's Blade","3292172753":"Squad Support","6410481716":"Mace Windu's Lightsaber","7439418148":"Twice the Pride","3840495762":"Old Access Codes","2007876522":"Clone Cohort","7547538214":"Droid Cohort","2012334456":"On Top of Things","9003830954":"Shadowed Intentions","0875550518":"Grievous's Wheel Bike","0741296536":"Ahsoka's Padawan Lightsaber","7280804443":"Hold-Out Blaster","4179470615":"Asajj Ventress","3f0b5622a7":"Asajj Ventress","5846322081":"Grand Admiral Thrawn","53207e4131":"Grand Admiral Thrawn","3658069276":"Lando Calrissian","3064aff14f":"Lando Calrissian","3933322003":"Rose Tico","590b638b18":"Rose Tico","4030832630":"Admiral Piett","649c6a9dbd":"Admiral Piett","7661383869":"Darth Vader","fb0da8985e":"Darth Vader","8943696478":"Admiral Holdo","ccf9474416":"Admiral Holdo","0011262813":"Wedge Antilles","6414788e89":"Wedge Antilles","9831674351":"Boba Fett","f6eb711cf3":"Boba Fett","3132453342":"Captain Phasma","fda7bdc316":"Captain Phasma","0766281795":"Luke Skywalker","11e54776e9":"Luke Skywalker","8656409691":"Rio Durant","81a416eb1f":"Rio Durant","7514405173":"Admiral Ackbar","36859e7ec4":"Admiral Ackbar","0616724418":"Han Solo","a015eb5c5e":"Han Solo","1029978899":"Colossus","4028826022":"Data Vault","4301437393":"Thermal Oscillator","6311662442":"Director Krennic","1164297413":"Onyx Squadron Brute","3878744555":"Interceptor Ace","9325037410":"Iden Versio","6390089966":"Banshee","0753794638":"Corvus","5184505570":"Chimaera","0235116526":"Fleet Interdictor","1039444094":"Paige Tico","3475471540":"Cassian Andor","5751831621":"Red Squadron X-Wing","5422802110":"D'Qar Cargo Frigate","6300552434":"Gold Leader","5834478243":"You're All Clear, Kid","3874382333":"Academy Graduate","1397553238":"Desperate Commando","0596500013":"Landing Shuttle","5093056978":"Direct Hit","1034181657":"First Order TIE Fighter","5345999887":"Kijimi Patrollers","4921363233":"Wingman Victor Two","9811031405":"Victor Leader","3427170256":"Captain Phasma","7138400365":"The Invisible Hand","6610553087":"Nien Nunb","2388374331":"Blue Leader","7924461681":"Leia Organa","0524529055":"Snap Wexley","3711891756":"Red Leader","7208848194":"Chewbacca","8779760486":"Raddus","2778554011":"General Draven","0926549684":"Resupply Carrier","4334684518":"Tandem Assault","8174214418":"Turbolaser Salvo","6861397107":"First Order Stormtrooper","9611596703":"Allegiant General Pryde","9921128444":"General Hux","9595057518":"Special Forces TIE Fighter","3282713547":"Dengar","3722493191":"IG-2000","1463418669":"IG-88","1330473789":"Devastator","4033634907":"No Disintegrations","2283726359":"BB-8","6600603122":"Massassi Tactical Officer","0514089787":"Frisk","7831643253":"Red Squadron Y-Wing","2633842896":"Biggs Darklighter","8500401413":"Red Five","6228218834":"Tactical Heavy Bomber","7072861308":"Profundity","2995807621":"Trench Run","3666212779":"Captain Tarkin","8287246260":"Droid Missile Platform","4560739921":"Hunting Aggressor","3885807284":"Fight Fire With Fire","9695562265":"Koiogran Turn","0425156332":"Planetary Bombardment","9720757803":"Rampart","7389195577":"Zygerrian Starhopper","3876470102":"Hound's Tooth","7192849828":"Mist Hunter","4573745395":"Bossk","7312183744":"Moff Gideon","7700932371":"Boba Fett","5667308555":"I Have You Now","7420426716":"Dagger Squadron Pilot","8523415830":"Anakin Skywalker","1965647391":"Blade Squadron B-Wing","1990020761":"Shuttle Tydirium","3388566378":"Ahsoka Tano","6354077246":"Black Squadron Scout Wing","6720065735":"Han Solo","1356826899":"Home One","8833191722":"Never Tell Me the Odds","0964312065":"It's a Trap","6421006753":"The Mandalorian","0587196584":"Independent Smuggler","5673100759":"BoShek","1303370295":"Death Space Skirmisher","3567283316":"Radiant VII","4819196588":"Electromagnetic Pulse","8105698374":"Commandeer","3504944818":"TIE Bomber","6648978613":"Fett's Firespray","1519837763":"Shuttle ST-149","2657417747":"Quasar TIE Carrier","5375722883":"R2-D2","8845408332":"Millennium Falcon","6854247423":"Tantive IV","7268926664":"TIE Fighter","9415311381":"X-Wing","2736121234":"Experience","9976985144":"Shield"};
  return data[cardID] !== undefined ? data[cardID] : "";
}

