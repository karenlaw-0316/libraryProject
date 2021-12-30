import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons"
import * as React from "react"
import ReactPlayer from "react-player"

const HomepageArticle = () => {
  const articles = [
    {
      key: 1,
      heading: "胡浪漫其人其詩的再發現",
      subheading: "文/林立(新加坡國立大學副教授) 來自/聯合早報",
      date: "June 5, 2020",
      maintype: "text",
      fixedDescription:
        "新加坡本土有很多文學寶藏，但若得不到人們的重視，恐怕最後會被無聲無息地拉雜摧燒。舊體詩詞的作品尤其是如此。我們目前只認識邱菽園、潘受以及在本地沒有認受性的郁達夫的作品。其實戰前戰後，新加坡都有不少出色的詩人，胡浪漫（1908-1991）先生即其一。 \n\n胡先生原名桂浪，字邁，署名浪漫或浪曼，人稱浪公。我初次看到先生的名字，已是將近三十年前的事了。那時我還在香港大學攻讀碩士，在研究郁達夫的舊體詩。因為這個緣故，我讀到了胡先生在《南洋‧星洲聯合早報》（1986年1月19、26日）發表的〈緬懷郁達夫先生〉一文，知道他們交誼甚篤。在研讀郁達夫的詩集時，也看到兩人有詩歌唱酬。可以說，若不是郁達夫的關係，我就不會認識胡先生。但我對他了解不多，只知道他曾經是《星洲日報》的編輯。當時我萬沒想到，和胡先生的緣份還會繼續。",
      description: [
        {
          type: "text",
          info: "一晃眼，約二十年後，我已在新加坡定居了好些日子，並開始研究本地的舊體詩詞。也因為這個緣故，前幾年我在鄭光漢所編的《蘭花集》裏，再次見到胡先生的名字。 這本詩集收錄了鄭光漢與九位友人在淪陷時期的地下唱酬作品。胡先生而外，還有李西浪、傅無悶、李鐵民、謝雲聲等文化界名人參與其中。他們借觀賞蘭花為名， 借酒澆愁，作詩抒憤。我逐一查考這些詩人的背景，偶然在網上找到了一個紀念胡先生的網頁，稱為“胡浪曼之詩與文學”，由他的後人設立。對我來說，這就像一個小小的寶礦， 因為當中收錄了胡先生的20多首詩，集名《曼園詩選》，又稱《慧園詩存》，我對這兩個名稱不甚了了，猜想“曼園”和“慧園”大概是胡先生的字號或室名。 網頁裏有他同邑晚輩羅選才在1987年為其詩集所寫的一篇序，序文對胡先生的生平有如下的介紹：\n\n胡先生字邁。一九零八年生於永定中川科名裏。受新思潮影響，早年與一批進步人士共創下洋公學，旋即參與大革命鬥爭，對閩西農運卓有貢獻。後應其兄桂庚之命，遠遊東南亞。戰前、戰後歷任《星梧日報》、《總匯報》、《星洲日報》總編輯。一貫愛鄉愛國，反帝反封，宣傳全民抗戰、民主建國，堅定不渝。百萬雄師過大江時，因在《星洲日報》上改元易號，為當局所不滿，乃去職從商。\n\n可見胡先生是一位左派人士，離鄉後對中國國情仍甚為關注，這在他的詩裏常有反映。先生曾自述：“詩為心聲，情隨境異。生當戰亂向太平過渡之秋，凡有所作，無論題材、風格， 自然前後迥殊。青年時期，初則憂國憂時，每發為粗豪高亢之聲，惜已盡毀於戰火；繼而身遭離亂，九死一生，音轉悲涼沈郁。”（詩集自序）羅選才的序文也提到，他的“詩歌創作思想與白居易‘為時而作’之旨趣默合， 一吟一詠，皆與時代動向、人民命運息息相通……多以禦敵衛國為題材，發為豪宕淩厲、激昂高亢之音。”又說在日軍占領新加坡時，先生“身淪鐵蹄之下，九死一生，然仍潛形匿跡，以悲涼沈郁之調，或直斥當地豺狼，或側擊人間地獄。”因此羅選才將他的作品視為“詩史”。\n\n細讀胡先生的作品，便知道以上所言不虛。網頁裏所登載的，屬於其早年之作。有些提及當時寓居新加坡的名人，如劉海粟、邱菽園、楊雲史、李西浪，還有影星紫羅蘭，當然也少不了郁達夫。余下約十首作品，就是關於他在新加坡淪陷時的經歷， 或哀悼不幸遇難的友人。綜合其詩作及黃梅雨刊登於《星洲日報》（1992年7月26日）的〈文星隕落：胡浪曼〉一文，了解到先生曾被日軍拘捕十日，受盡淩辱，獲釋後被逼出任日人主導的《昭南日報》編輯局長。一年後，他始脫離魔爪，與家人逃往彭亨州立卑避難。 這段往事，很令他痛心疾首。〈日軍入市專事殺人，一班虎倀更氣焰萬丈，有人間何世之感〉一詩，便刻畫了淪陷時的亂象及其難以言表的寃情：\n\n率獸食人寧復論，乾坤正氣蕩無存。幾多車駕驕新貴，何處柴門不淚痕。\n\n垂老揚雄慚倚馬，返魂精衛枉含寃。千家野哭悽愴甚，側耳如聞三峽猨。\n\n作品很有杜甫的“詩史”筆法，次句的“乾坤正氣”與末聯的“千家野哭”和“三峽”，都在杜詩中出現過。詩人一開首即慨嘆“率獸食人”、“正氣無存”的現象，次聯鞭撻那些奉迎日軍的“新貴”，為飽遭磨難的蒼生發出哀號。 第三聯似是用兩個典故來暗示被逼出掌《昭南日報》一事。揚雄曾為篡漢的王莽寫過贊美新朝的〈劇秦美新〉一文，因此備受非議。 而胡先生雖不欲依附日人，卻不免被人誤會，是以有“返魂精衛枉含冤”一句。通過這些典故的挪用，先生婉轉地宣泄了他的自責與委屈之情。 而全篇內容，則把個人與集體的創傷共冶於一爐，從廣大與細微的視角紀錄了淪陷時期新加坡人民所受的苦難。\n\n另一首題為〈歲暮〉的詩，末尾的自註清楚地說明：“脫囚後入長《昭南日報》編輯部”。詩雲：\n\n萬斛愁量歲暮中，生寧曳尾亦途窮。一身依魏憐徐庶，三尺亡秦想沛公。\n\n夢斷羊皮頭欲白，風寒易水氣猶雄。中原底定無忘告，淒絕當年陸放翁。\n\n詩中列舉了好幾位歷史人物，包括不得已歸順曹操的徐庶，表示自己是“身在曹營心在漢”； 還有亡秦的劉邦，行刺秦王的荊軻，渴望光復中原的陸遊，所有這些都表達了推翻日軍暴政的願望。第五句用百裏奚的典故，冀望可以逃離敵寇的魔爪。 全詩的基本調子就是忍辱負重，那些處於困境或暫不得志的古人都是作者意欲效法的對象。對於胡先生和他的後人而言， 出掌《昭南日報》或被視為一個汙點，但在日軍的淫威之下，要潔身自保，何其難哉！\n\n因為網頁的發現，我產生了搜羅胡先生遺作的念頭。網頁裏有個鳴謝名單，看來是胡先生家族的友人。據此線索，我透過前南洋藝術學院院長朱添壽先生， 找到了名單裏的陳敏良前高級政務部長，再聯繫上胡先生的長公子胡鴻展，獲悉他手上有先生的詩集手稿兩冊，不禁大喜。一份埋藏了多年的文學瑰寶，由是被重新發現了。\n\n鴻展先生已是八十多歲的高齡了，聽說我在尋找他父親的作品，也是欣喜莫名，除了把兩冊手稿的復印本及有關資料交予我，還向我詳述其父的生平。 從他早年在鄉間搞革命，到1929年徙居南洋從事報業，到淪陷時期，再到後來的經商致富，使我對胡先生戲劇性的一生，了解得更為深入和全面。 原來先生被日軍逼迫充任《昭南日報》局長一事，是因為日軍威脅要把前《星洲日報》的記者全數殺害。先生為挽救同袍， 慨然與日軍周旋，以出掌《昭南日報》作為交換條件。然而他始終不願作日軍的傀儡，於是一年後的某日，忽令家人收拾行裝， 連夜逃離新加坡。戰後，先生復在《星洲日報》任事數年，旋即棄筆從商。先是經營電影業，與陳錦元創辦港聯有限公司。 繼而往馬來西亞怡保等地開發錫礦，其後又代理柔佛州彩票售賣，遂成巨賈。言談之間，不免讓人產生“書生無用”之感慨。 而鴻展先生及其弟妹，也慶幸在他們有生之年，能將父親的遺墨公諸於世，不然若干年後，難保不會隨人事的變遷灰飛煙滅。\n\n兩冊手稿，一本看來是選本，另一本則是全集，刪去重復之數，詩和對聯合共二百七十多篇，其中約六十多題曾刊於《永定文史資料》 （1986年第5輯）。結合訪談和這些作品，許多胡先生鮮為人知或被人遺忘的事跡也一一重現。例如詩集的名稱“慧園”， 乃得自他在六十年代於金馬侖高原購置的，以妻子何慧純女士命名的一所別墅。他大概也曾想以自己的名字來命名， 因此詩集又稱《曼園詩選》。從先生多首有關“慧園”的作品看來，他頗有在此終老之願，如最早一首關於“慧園”的詩有句雲：“謝眺青 山十萬金，白頭偕隱遂初心。”只是後來他把別墅出售了，偕隱的地方換成了新加坡。",
        },
        {
          type: "image",
          info: "blog-0-00.png",
          caption: "(攝於慧園，左二為胡浪漫先生，左一為何慧純女士",
        },
        {
          type: "text",
          info: "胡先生的作品有不少是和文化界友人唱酬之作，除了前面提到的劉海粟、郁達夫、邱菽園之外，還有新加坡“國寶”潘受、詞學大家趙尊嶽、 名畫家徐悲鴻和李家耀等。且看〈題劉大師《蘆花歸雁圖》〉二首之一：\n\n蘆花瑟瑟雁來時，秋盡天涯鬢有絲。萬裏烽煙歸夢斷，披圖撩亂是鄉思。\n\n劉海粟在1942年受陳嘉庚之邀，到南洋辦畫展籌款抗日，寓居於新加坡僑領胡載坤府邸。新加坡淪陷前乘船往爪哇避難。 據說此畫原是劉海粟贈與李曉音（又名筱英）女士的，李氏當時任職於新加坡的英國新聞部，是郁達夫的情人。 “雁”在傳統文學中，每含有懷鄉或書信的意思。劉海粟的畫作雖然不知所在，但透過胡先生的詩，我們可以領略到他和朋友們對故國的思念， 然而因為戰亂，已無法實現他們的“歸夢”了。 \n\n先生還有一些作品是贈與同鄉商界名人的，包括《星洲日報》的老板胡文虎、曾兄弟旅遊部的創辦人曾智強、錫礦鉅子胡曰皆等。 細細瀏覽，仿佛是重溫了新、馬兩地的人文歷史。後期，先生還為故鄉永定的學校、醫院、宗祠、天後宮等場所題寫了不少對聯，例如為下洋醫院所題一聯雲： \n\n下上同仁視，洋華結合醫。 \n\n醫院是在1957年由胡曰皆捐資創立。1986年，新加坡商人曾良材、胡冠仁、曾啟東又發起擴建診療綜合大樓，改稱為永定縣（下洋）華僑醫院， 成為了閩西最大、設備最齊全的僑辦醫院。胡先生的對聯采用了冠首格，把“下洋”兩字分篏於上下聯中。更饒有意思的是， 他主張無論階級高下，對病者都須一視同仁，並要融匯中西醫學。此外，先生又熱心捐款，曾為鄉中八十歲以上的老人舉辦“千歲宴”。雖然他從未再踏足故土，但這一點一滴，皆足以顯示他對家鄉發展和鄉中父老的關懷。 那大抵是老一輩新、馬華人的心境寫照，他們既以海外為家，但內心深處仍以故園為念。這份濃濃的鄉情，恐怕新一代是難以理解的。 \n\n先生和郁達夫的唱酬，大抵是文學史家最感興趣的部份。相關的作品有十七首，其中十二首七律是關於郁達夫的流亡，一首題為〈聞達夫避難蘇島，詩以寄之〉， 郁達夫也有和詩寄回。另外十一首組詩是寫於戰後不久，題為〈讀達夫雜憶詩，即步其韻詩以吊之〉，相信先生已聞悉郁失蹤的消息了。郁的原詩有十二首， 題為〈亂離雜詩〉，戰後由同在蘇島流亡的胡愈之攜回。但先生當時只看到十一首，多出來的一首在1967年4月11日始刊載於《南洋文摘》第四卷第八期。 和詩的第一首記述了郁達夫在逃亡時的經歷： \n\n危城日日盻來音，四韻詩成寫我心。誰信相如甘賣酒，爭傳公冶善言禽。 \n\n渡江桃葉迎雙槳，驛路梅花抵萬金。都道添香紅袖侶，今生端不負高吟。 \n\n據先生詩中的自註，第二句是說曾寄一律予郁達夫，即前述的〈聞達夫避難蘇島，詩以寄之〉。第三句指郁曾在蘇門答臘開酒廠，藉以掩飾身份。 第四句的“公冶”是孔子弟子公冶長，相傳他通鳥語，在此指郁因不慎涉露了自己懂日語，而被日軍抓去當翻譯。第五句借東晉王獻之的愛妾桃葉， 意謂郁在當地另娶了土生華人女子為妻。第六句的驛路梅花，語出陸凱〈贈範曄〉一詩，表達對遠方友人的思念，先生以此比喻收到達夫寄自蘇島的和詩。 在此情勢極為險惡之時，竟能收到對方的書信，誠是價比“萬金”矣。第八首的內容，則主要贊揚了郁達夫的氣節，並哀其亡故： \n\n裹革無由白馬迎，流螢燐火自宵征。歌傳正氣差堪峙，節比睢陽莫與京。\n\n鄉國故人同雪涕，天涯芳草獨鐘情。料應碧落銀河畔，別有嬋娟締好盟。 \n\n開首用了馬革裹屍的典故，但可惜郁達夫的遺體已無法尋回。他就如一顆失落的流螢，在南荒的曠野獨自徘徊。然而他凜然的氣概， 卻可與文天祥和張巡兩位古代的英烈相比。後四句稱這時友人都在歡慶故國重光，但達夫卻似乎留戀於天涯的芳草沒有回來， 這是再一次婉轉地提到他的死。最後先生猜想，可能風流倜儻的達夫，此時又在天上締結了一段好姻緣吧。這組詩作，不僅是兩人友情的註腳， 也為那個哀鴻遍野的年代提供了一份歷史見證。\n\n明年便是胡先生離世三十年了。經其後人同意，其遺集將於近期整理出版。這件文壇美事雖然來得較晚，但總比沒有發生的好。 從胡先生的作品，我又想到了好幾位與他同時代的本地詩人：傅無悶、謝松山、曾夢筆、曾心影等，還有許多曾在往日的報章發表詩作者。 不知道他們的後人，是否還保管著他們的遺稿？我們這個時代，已經錯過、遺失了不少東西---那些曾經被珍視、現已被棄如敝屣的東西。 但願我們能盡力將之發掘出來，那怕是一鱗半爪。那對於我們的祖先和前輩，也算是一種尊重。",
        },
        { type: "image", info: "blog-0-01.png", caption: "胡浪漫先生遺照" },
        { type: "image", info: "blog-0-02.png", caption: "《慧園詩存》手跡" },
      ],
    },
    {
      key: 2,
      heading: "【經典】紅樓夢主題曲《枉凝眉》",
      subheading: "",
      date: "",
      maintype: "video",
      fixedDescription: "",
      description: [
        { type: "video", info: "https://www.youtube.com/watch?v=DhF6ByW_WMI" },
      ],
    },
    {
      key: 3,
      heading: "新加坡華文舊體詩的百年風雅",
      subheading: "文/林立(新加坡國立大學副教授) 來自/光明日報",
      date: "July 2, 2018",
      maintype: "text",
      fixedDescription:
        "受「五四」運動的影響，白話文在20世紀20年代逐漸成為新加坡華文文學的主流。但在新加坡立國以前，華文舊體詩寫作仍相當蓬勃。據李慶年《馬來亞華人舊體詩演進史》（1881—1941）估計，從19世紀末到1941年淪陷時期，新、馬兩地華文報章刊登的舊體詩數量， 即有五萬首之多。這一數目還不包括個人詩集裏的作品。除了報章的出版，這一時期新加坡華人社群也創設了多個詩社，進一步促進了舊體詩的創作，維繫了本地詩人間的交往。",
      description: [
        {
          type: "text",
          info: "\n\n追根溯源，新加坡華文舊體詩這一豐富的文學寶庫，首先是由晚清派駐新加坡的第一任領事左秉隆建立起來的。在任期內，左秉隆積極提倡傳統文化和文學創作，並於1881年創立了新加坡第一個華文文學組織——會賢社。該社的作品曾刊登於本地最早的華文報《叻報》。其後，左秉隆的繼任者、 著名詩人黃遵憲又成立了圖南社，繼續推動本地的文學創作。在左、黃二位領事的倡導下，華文舊體詩開始在本地紮根。 \n\n除了領事官員外，清朝覆亡以前也有一些流亡詩人南來新加坡，特別是維新運動的領袖康有為。 他在戊戌政變後流亡到新加坡，得到富商和「南國詩宗」邱菽園的支持，成立了保皇會新加坡分會， 擁護被慈禧太后軟禁的光緒帝。流亡期間，康有為在新、馬寫了一系列表達其憂患意識的作品。他的南洋詩雖然有不少本地景色和意象的描寫，卻採用了傳統的象征手法，仍以中國為其詩歌世界的中心。\n\n華文舊體詩的第二代詩人，多數都是在中國出生，後來移居新加坡的文人或儒商。其中最負盛名的是邱菽園。他是多家華文報的創始人或主編，也是一位有名的慈善家。他與文友經常一起在報章上發表詩作，並組織了一些詩社。其中活躍於20世紀20年代的檀社尤其值得注意。該社網羅了當時本地最重要的詩人，除了身任社長的邱菽園外，還有著名的詩僧釋瑞于。他們在1926年出版的《檀社詩集》， 是現存唯一一部早期詩社的唱和集。與清朝的使節不同，這些詩人更多地關注本地生活和文化，他們作品中的「南洋色彩」（指本地風光、生活習俗和社會面貌等元素）也更為濃烈。「南洋色彩」一詞雖然是由新加坡的白話文學界提出，但早在他們之前， 邱菽園等舊體詩人，其實已把大量本地元素融入他們的作品之中。在〈晚過嘉東〉一詩中，邱菽園這樣形容新加坡的自然風光和天氣：「平原馳道帶疏林，隔絕炎雲一徑深。錯落磯亭涼汐信，分行椰竹淨秋心。風敧漁艇回帆受，雨漬樵蹊引草侵。 時有蠻花開爛漫，紛予內美入騷吟。」炎熱的氣候、東海岸、椰樹和漁艇等，都獨特地帶出了新加坡的南洋情調。 與此同時，邱菽園和其他很多在地詩人經常采用篇幅短小的「竹枝詞」來描述本地風情。邱菽園1932年發表的系列 《星洲竹枝詞》不僅集中反映了南洋的風土習俗，甚至還嘗試諧用閩南音譯馬來語的詩體實驗。李慶年所編的 《南洋竹枝詞匯編》，便收錄了從1888年至1950年在新、馬報章上刊登的四千多首竹枝詞。 這些竹枝詞從不同的角度，生動地記述了南洋各民族的日常生活和社會面貌，或表達了作者對故鄉、故國的懷念。 這些竹枝詞不但為我們描繪了早期新加坡人民的生活習慣和情感意識，也有助於我們進一步了解新加坡當時的社會、文化和歷史。\n\n在書寫本土情懷之外，不少舊體詩人也時刻關懷中國政局，因為他們始終把中國視為故鄉。李元瑾教授曾在 《新加坡華人身份認同意識的轉變》一文中指出，過去的新加坡華人，「尤其是知識分子，絕對認同中國，他們心中不只有鄉，還有國。他們希望祖國站立起來……只要能挽救中國命運，都願意關心或效勞」。因此在殖民地時期，許多舊體詩都以鄉愁為主題， 表達了對中國命運的關注。這種強烈的離散或原鄉意識，非但沒有削弱新加坡華文文學的特色，反而令本地作品更為多樣化。\n\n新加坡華人的故國情懷，集中地表現為1937年至1941年間的抗日救亡運動。在日軍佔領新加坡以前，新加坡華人或積極籌款，或以實際行動，援助中國的抗日戰爭，由此也催生了「抗戰文學」的出現， 其中亦包括大量的舊體詩作品。時任《星洲日報》副刊主編的邱菽園，也撰寫了不少有關支援抗戰的詩作。1938年年末，著名小說家和詩人郁達夫的南來，更促進了抗戰文學的發展。郁達夫在逗留新加坡與流亡印尼蘇門答臘期間，寫下了相當數量的舊體詩，記述他的南洋經歷與流亡時期的複雜心情。\n\n日佔時期，即便在日本軍政府的高壓統治下，仍有一批詩人暗中創作舊體詩，表達他們對侵略者的憤恨和對光復的期待。 二戰結束後，有三部關於日佔時期的舊體詩集面世，包括謝松山的《血海》、李西浪的《劫灰集》和鄭光漢編的《蘭花集》。 第一部以紀事詩加上白話注文的形式，詳盡回憶了新加坡淪陷的歷史，尤其是見證大屠殺和各種奴役、 壓榨新加坡人民的暴政與社會畸形的怪現狀。第二部以抒情的手法，記載了李西浪在淪陷時期的個人經歷和感受。第三部則是鄭光漢和詩友們的地下唱和。他們各自以不同的詩歌形式，揭示了新加坡歷史上最黑暗的時期，表現出詩人在極為險惡的環境中不屈不撓的高尚情操，同時也深刻反映了戰爭為新加坡人民帶來的生活苦難和精神創痛。\n\n從1945年光復到1965年新加坡建國以前，舊體詩的創作方興未艾。1957年，一批志同道合的本地詩人成立了新聲詩社。直到現在，該社仍在正常運作，是新加坡歷史最悠久的華人詩社。差不多在同一時間，南洋大學中文系也開設舊體詩詞寫作課程，並於20世紀60年代初出版了三部師生創作集。第一部是慶祝南大第一屆畢業禮的《雲南園吟唱集》，當時中文系廣邀新、 馬著名詩人一同雅集吟詩。另外的《新加坡古堡紀遊詩》和《南風詞集》，則收錄了中文系學生的學期詩詞作業。\n\n現時舊體詩的創作雖然在新加坡已經不如從前繁盛，但舊體詩仍受到不同年齡層讀者的歡迎。除了新聲詩社和在1990 年成立的全球漢詩總會一直努力不懈地在本地提倡舊體詩外，新加坡國立大學一批學生也在2016年夏天成立了南金詩社，推動校園內的舊體詩研習和寫作。2015年，全球漢詩總會創辦了《新洲雅苑》半年刊，由本人擔任主編，以刊登本地作品為主，本地詩人和學生因而有了新的出版和交流園地。該刊旨在重振新加坡舊體詩壇的活力，喚起民眾對於中華傳統文化的關注。創刊以來，已逐漸贏得社會各界的好評。凡此都證明，在可預見的將來，舊體詩仍會在新加坡華文文學界扮演著不可或缺的角色。",
        },
      ],
    },
    {
      key: 4,
      heading: "邱菽園的戲劇人生－如果拍一部關於邱菽園的電影",
      subheading: "文/林立 來自/聯合早報",
      date: "Thursday, May 30, 2019",
      maintype: "image",
      fixedDescription: "",
      description: [
        {
          type: "text",
          info: "新華文學不只“新文學”，還有“舊文學”，邱菽園是其中佼佼者。邱菽園一生大起大落，豐富多彩，要愛情有愛情，談政治有政治。而且，還可從詩詞中看出，邱菽園要把新加坡建構成一個理想家園，以及他對新加坡和中國的深厚感情。“邱菽園的生平故事可以拍成一部電影。”這是我在開完一次學術會議後得到的反饋。",
        },
        {
          type: "image",
          info: "blog-1.jpg",
          caption: "",
        },
        {
          type: "url",
          info: "https://www.zaobao.com.sg/zlifestyle/culture/story20190530-960607",
          display: "聯合早報",
        },
      ],
    },
    {
      key: 5,
      heading: "星洲榴蓮",
      subheading: "圖/何自力 (新加坡國立大學中文系講師)",
      date: "",
      maintype: "image",
      fixedDescription: "",
      description: [
        {
          type: "image",
          info: "blog-2.jpg",
          caption: "星洲榴蓮",
        },
      ],
    },
  ]
  const [isReadingMore, setReadingMore] = React.useState(
    articles.map(x => false)
  )
  function toggleReadingMore(index) {
    const temp = isReadingMore.map((x, i) => (i == index ? !x : x))
    setReadingMore(temp)
    console.log(isReadingMore)
  }

  return (
    <div
      style={{
        textAlign: "justify",
        minWidth: "300px",
        maxWidth: "800px",
      }}
    >
      {articles.map((article, i) => (
        <div style={{ marginBottom: "30px" }}>
          <hr></hr>
          <h3>{article.heading}</h3>
          <br />
          <h6>{article.subheading}</h6>

          <h6>{article.date}</h6>
          <br />
          {article.maintype === "text" ? (
            <div>
              <p style={{ verticalAlign: "bottom", whiteSpace: "pre-line" }}>
                {article.fixedDescription}
                {/* <span
              id="dots"
              style={{ display: !isReadingMore[i] ? "inline" : "none" }}
            >
              ...
            </span> */}
              </p>

              <div
                id="more"
                style={{ display: isReadingMore[i] ? "inline" : "none" }}
              >
                <div>
                  {article.description.map((element, i) => (
                    <div>
                      {element.type === "text" ? (
                        <p
                          style={{
                            verticalAlign: "bottom",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {element.info}
                        </p>
                      ) : element.type === "image" ? (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <img
                            src={
                              require(`../../images/article/${element.info}`)
                                .default
                            }
                            style={{ width: "100%" }}
                          />
                          <span>{element.caption}</span>
                        </div>
                      ) : element.type === "video" ? (
                        <ReactPlayer url={element.info}></ReactPlayer>
                      ) : (
                        <a href={element.info}>
                          <button
                            className={"btn btn-outline-dark rounded-0"}
                            type="button"
                            style={{
                              margin: "5px",
                              marginRight: "10px",
                              marginLeft: "0px",
                              borderRadius: "0px !important",
                            }}
                          >
                            {element.display}
                          </button>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => toggleReadingMore(i)}
                class="btn btn-outline-dark rounded-0"
                id="myBtn"
                style={{ marginTop: "30px" }}
              >
                {isReadingMore[i] ? "折疊內容" : "瀏覽更多"}
              </button>
            </div>
          ) : (
            <div style={{ maxWidth: "100%" }}>
              <div>
                {article.description.map((element, i) => (
                  <div>
                    {element.type === "text" ? (
                      <p
                        style={{
                          verticalAlign: "bottom",
                          whiteSpace: "pre-line",
                          maxWidth: "100%",
                        }}
                      >
                        {element.info}
                      </p>
                    ) : element.type === "image" ? (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img
                          src={
                            require(`../../images/article/${element.info}`)
                              .default
                          }
                          style={{ width: "100%" }}
                        />
                        <span>{element.caption}</span>
                      </div>
                    ) : element.type === "video" ? (
                      <ReactPlayer
                        url={element.info}
                        controls={true}
                      ></ReactPlayer>
                    ) : (
                      <a href={element.info}>
                        <button
                          className={"btn btn-outline-dark rounded-0"}
                          type="button"
                          style={{
                            margin: "5px",
                            marginRight: "10px",
                            marginLeft: "0px",
                            borderRadius: "0px !important",
                          }}
                        >
                          {element.display}
                        </button>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default HomepageArticle
