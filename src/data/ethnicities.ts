import { Ethnicity } from "./types";

export const ethnicities: Ethnicity[] = [
  {
    id: "kho-mu",
    slug: "kho-mu",
    name: "Khơ Mú",
    location: ["Tương Dương", "Kỳ Sơn", "Quế Phong", "Con Cuông", "Quỳ Châu"],
    population: {
      total: 90612,
      year: 2019,
      provinceStats: "Nghệ An tập trung đông nhất toàn quốc với 41.139 người (48,9%)",
      details: "Vượt xa các tỉnh Điện Biên, Sơn La, Lai Châu về mật độ dân số tập trung."
    },
    geographicStats: {
      terrain: "Vùng sườn núi cao, địa hình đồi núi dốc, sinh tồn gắn chặt với nương rẫy.",
      climate: "Nhiệt đới gió mùa, chịu ảnh hưởng của gió Lào khắc nghiệt."
    },
    costumeInfo: {
      description: "Trang phục Khơ Mú mang đậm nét gắn kết với núi rừng, nổi bật với hệ thống trang sức bạc và vỏ ốc cầu kỳ. Áo cóm (Tẹp) thường có dải hoa văn rực rỡ và các hàng tiền bạc dọc nẹp ngực.",
      colors: ["#1e293b", "#cbd5e1", "#84cc16", "#be123c"],
      jewelryNote: "Vòng bạc (hoa tai, vòng cổ) tuân thủ quy tắc 'không khép kín', để hở một khoảng trống cho linh hồn lưu thông.",
      image: "/images/costumes/khomu_costume.png"
    },
    history: "Người Khơ Mú (Xá Cẩu, Mứn Xen, Pu Thênh, Tềnh, Tày Hạy) là thực thể nhân khẩu thuộc ngữ tộc Mon-Khmer lâu đời.",
    longDescription: "Phương thức sinh tồn cốt lõi gắn chặt với hệ sinh thái nương rẫy. Kỹ thuật dùng 'gậy chọc hốc' để tra hạt trên triền đồi dốc thể hiện trí tuệ sinh thái xuất sắc, tôn trọng cấu trúc cơ học của đất, tránh xới mòn.",
    culturalNarrative: "Nghi lễ cúng hồn lúa là bản trường ca về sự hồi sinh. Khoảng hở trên trang sức bạc được lý giải như một 'cầm cửa' để linh hồn lưu thông, kỵ sự viên mãn tuyệt đối để tránh tà tà ác.",
    ritualPhilosophy: "Tín ngưỡng vạn vật hữu linh, coi trọng ma nhà (ông bà tổ tiên) và ma bếp. Sự sống và cái chết là một vòng tuần hoàn tự nhiên được bảo trợ bởi các đấng siêu nhiên trong rừng sâu.",
    ecologicalLogic: "Trí tuệ sinh thái (Ecological Intelligence) thể hiện qua kỹ năng chế biến 'canh bon' từ các loại lá và rễ rừng phức tạp nhằm trung hòa độc tính tự nhiên và cung cấp khoáng chất thiết yếu cho cơ thể.",
    heritage: [
      {
        id: "dan-lat",
        name: "Nghệ thuật Đan lát",
        type: "custom",
        isNationalHeritage: false,
        description: "Chế tác gùi, giỏ phức tạp với hoa văn đan nong mốt, nong hai để vận chuyển lương thực trên núi dốc.",
        imageUrl: "/images/heritages/khomu_dan_lat.png"
      },
      {
        id: "khomu_ma_nha",
        name: "Lễ cúng ma nhà",
        type: "custom",
        isNationalHeritage: false,
        description: "Nghi thức tâm linh quan trọng nhất trong gia đình để cầu mong sự bảo vệ của tổ tiên.",
        imageUrl: "/images/heritages/khomu_ma_nha.png"
      },
      {
        id: "hai-bep-lua",
        name: "Hệ thống Hai bếp lửa",
        type: "custom",
        isNationalHeritage: false,
        description: "Bếp lửa thiêng (chỉ dùng khi cúng tổ tiên) và bếp lửa sinh hoạt, thể hiện sự tách biệt giữa không gian tâm linh và trần thế.",
        imageUrl: "/images/heritages/khomu_hai_bep.png"
      },
      {
        id: "ruou-can-khomu",
        name: "Văn hóa Rượu cần",
        type: "custom",
        isNationalHeritage: false,
        description: "Biểu tượng của lòng hiếu khách và sự thành đạt, rượu được ủ từ men lá rừng đặc hữu.",
        imageUrl: "/images/heritages/khomu_ruou_can.png"
      },
      {
        id: "cha-ro-festival",
        name: "Lễ hội Cha Rơ (Mừng cơm mới)",
        type: "festival",
        isNationalHeritage: false,
        description: "Nghi thức tâm linh gọi hồn lúa từ nương rẫy về nhà, thể hiện lòng tri ân sâu sắc với hạt gạo và khát vọng cuộc sống no đủ.",
        imageUrl: "/images/heritages/khomu_com_moi.png"
      },
      {
        id: "naming-custom",
        name: "Tục đặt tên theo loài vật",
        type: "custom",
        isNationalHeritage: false,
        description: "Sự ẩn mình và tôn trọng nguồn gốc tự nhiên, cầu mong thần linh che chở cho trẻ thơ khỏi các lực quản tà ác thông qua cái tên mộc mạc.",
        imageUrl: "/images/heritages/khomu_naming.png"
      }
    ],
    cuisines: [
      {
        id: "mo-ga",
        name: "Mọ Gà",
        description: "Thịt gà băm nhuyễn trộn gia vị rừng, gói lá chuối đồ chín, bảo lưu toàn bộ dưỡng chất trong quá trình hấp thụ nhiệt.",
        ingredients: ["Thịt gà", "Gia vị rừng", "Lá chuối"],
        imageUrl: "/images/cuisines/mo_ga.png"
      },
      {
        id: "canh-bon",
        name: "Canh Bon",
        description: "Món canh từ da trâu, khoai ngứa và các loại lá rừng rễ cây, yêu cầu kỹ năng chế biến phức tạp để trung hòa độc tính thực vật.",
        ingredients: ["Da trâu", "Lá rừng", "Lá bon"],
        imageUrl: "/images/cuisines/canh_bon.png"
      },
      {
        id: "canh-ot",
        name: "Canh Ột",
        description: "Món canh đặc biệt nấu khi giết mổ gia súc lớn, kết hợp nội tạng và thảo mộc núi rừng.",
        ingredients: ["Nội tạng", "Thảo mộc", "Ớt rừng"],
        imageUrl: "/images/cuisines/canh_ot.png"
      },
      {
        id: "mang-chua-khomu",
        name: "Măng chua rừng",
        description: "Măng rừng lên men tự nhiên, là gia vị cốt lõi trong hầu hết các món mọc và nhọc của người Khơ Mú.",
        ingredients: ["Măng rừng", "Muối", "Nước suối"],
        imageUrl: "/images/cuisines/mang_chua.png"
      }
    ],
    imageUrl: "/images/khomu_heritage.png"
  },
  {
    id: "tho",
    slug: "tho",
    name: "Thổ",
    location: ["Nghĩa Đàn", "Tân Kỳ", "Quỳ Hợp", "Con Cuông", "Tương Dương"],
    population: {
      total: 40445,
      year: 1989,
      provinceStats: "Tổ hợp các nhóm Kẹo, Mọn, Cuối, Đan Lai - Ly Hà và Tày Poọng.",
      details: "Tập trung tại các vùng đồi núi thấp và thung lũng, vị trí chuyển tiếp vùng cao và đồng bằng."
    },
    geographicStats: {
      terrain: "Vùng đồi núi thấp và thung lũng, khu vực 'bản lề' văn hóa giữa miền ngược và miền xuôi.",
      climate: "Khí hậu nhiệt đới gió mùa, giao thoa giữa hai vùng khí hậu dốc và bằng."
    },
    costumeInfo: {
      description: "Trang phục người Thổ có sự giao thoa văn hóa đặc biệt. Phụ nữ mặc áo 5 thân màu nâu hoặc trắng, váy sọc ngang (mượn từ người Thái) nhưng đặc trưng bởi phần cạp váy luôn được nối thêm vải trắng.",
      colors: ["#451a03", "#ffffff", "#1e1b4b"],
      funeralNote: "Đồ tang may bằng vải trắng thô, đường kim lộn ngược ra ngoài, gấu áo để xổ chỉ te tua biểu thị cho sự hỗn mang, đảo lộn trật tự.",
      image: "/images/costumes/tho_costume.png"
    },
    history: "Dân tộc Thổ đóng vai trò là 'bản lề' văn hóa, sinh sống tại khu vực tiếp biến và giao thoa liên tục giữa người Thái, Mông và người Kinh.",
    longDescription: "Một hiện tượng dân tộc học thú vị là 'nghịch lý kỹ thuật': người Thổ trồng bông nhưng không phát triển kỹ thuật dệt vải và thêu thùa. Sự thực dụng trong văn hóa cho phép họ mượn và cải biên các thành tố từ dân tộc lân cận để tạo nên bản sắc riêng.",
    culturalNarrative: "Những câu chuyện cổ tích và làn điệu đu đu điềng điềng mang đậm màu sắc triết lý nhân sinh về sự thiện lương và lẽ công bằng. Đường kim may đồ tang lộn ngược thể hiện quan niệm đảo lộn trật tự khi có biến cố sinh tử.",
    ritualPhilosophy: "Sự giao thoa giữa tín ngưỡng bản địa (thờ thần Đá, thần Rừng) và các tôn giáo truyền thống. Hệ thống tín ngưỡng mang tính thực dụng và bao dung cao, dễ dàng tiếp nhận các yếu tố văn hóa mới.",
    heritage: [
      {
        id: "boc-mo",
        name: "Lễ hội Bốc Mó",
        type: "festival",
        isNationalHeritage: false,
        description: "Tục thờ thần nước, làm sạch nguồn nước bản làng và cầu mong mùa màng dồi dào.",
        imageUrl: "/images/heritages/tho_boc_mo.png",
        timeline: [
          { title: "Chuẩn bị", description: "Làm sạch nguồn nước, phát quang mỏ nước." },
          { title: "Nghi lễ", description: "Cúng tạ ơn thần linh tại mỏ nước bản làng." }
        ]
      },
      {
        id: "chia-thit-thu-rung",
        name: "Tục chia thịt thú rừng",
        type: "custom",
        isNationalHeritage: false,
        description: "Tính cộng đồng tuyệt đối: thịt thú rừng săn được luôn được chia đều cho mọi hộ gia đình trong làng, không phân biệt công sức tham gia.",
        imageUrl: "/images/tho_heritage.png"
      },
      {
        id: "danh-ca-co-truyen",
        name: "Nghề đánh bắt cá cổ truyền",
        type: "custom",
        isNationalHeritage: false,
        description: "Kỹ thuật quăng chài và đặt bẫy cá trên các dòng suối thung lũng, thể hiện kinh nghiệm quan sát dòng chảy tích lũy lâu đời.",
        imageUrl: "/images/heritages/tho_danh_ca.png"
      },
      {
        id: "tho-stone-worship",
        name: "Tục thờ Thần Đá (Hòn Đá Ngồi)",
        type: "custom",
        isNationalHeritage: false,
        description: "Sự linh thiêng hóa các thực thể địa chất, cầu mong sức mạnh bền vững và sự che chở của mẹ đất cho bản làng.",
        imageUrl: "/images/heritages/tho_than_da.png"
      },
      {
        id: "bach-ma-temple-fest",
        name: "Lễ hội Đền Bạch Mã",
        type: "festival",
        isNationalHeritage: true,
        description: "Sự giao thoa văn hóa Kinh - Thổ độc đáo, tôn vinh các vị anh hùng có công khai phá và bảo vệ vùng biên viễn.",
        imageUrl: "/images/heritages/tho_bach_ma.png"
      }
    ],
    cuisines: [
      {
        id: "dac-san-tho",
        name: "Bánh đầu chó (Bánh sừng trâu)",
        description: "Lễ vật quan trọng trên mâm cúng tổ tiên, tượng trưng cho sức mạnh lao động và mùa màng bội thu.",
        imageUrl: "/images/cuisines/banh_dau_cho.png"
      },
      {
        id: "banh-la-gai",
        name: "Bánh lá gai",
        description: "Món bánh có màu đen bóng rực rỡ từ lá gai, vị ngọt bùi của đậu xanh và gạo nếp cái hoa vàng.",
        imageUrl: "/images/cuisines/banh_la_gai.png"
      },
      {
        id: "canh-boi",
        name: "Canh bồi",
        description: "Món ăn dân dã làm từ các loại rau rừng, củ quả nấu với bột gạo tạo độ sền sệt bổ dưỡng.",
        imageUrl: "/images/cuisines/canh_boi.png"
      }
    ],
    imageUrl: "/images/tho_heritage.png"
  },
  {
    id: "mong",
    slug: "mong",
    name: "Mông",
    location: ["Kỳ Sơn", "Tương Dương", "Quế Phong", "Quỳ Hợp", "Con Cuông"],
    geographicStats: {
      terrain: "Rẻo cao, đỉnh núi cao vút hiểm trở, biệt lập hoàn toàn về không gian.",
      climate: "Cận nhiệt đới vùng núi, mùa đông khắc nghiệt với sương muối và giá rét."
    },
    costumeInfo: {
      description: "Trang phục người Mông tại Nghệ An (Mông Trắng và Mông Hoa) là kiệt tác của kỹ thuật dệt lanh, vẽ sáp ong (batik) và thêu ghép vải màu rực rỡ. Silver coins và trang sức bạc đóng vai trò trung tâm.",
      colors: ["#020617", "#dc2626", "#db2777", "#ffffff"],
      image: "/images/costumes/mong_costume.png"
    },
    history: "Cộng đồng người Mông tại Nghệ An chia sẻ chung hệ giá trị cốt lõi về thẩm mỹ và sức sống kiên cường trên những đỉnh núi đá.",
    longDescription: "Cây lanh là trục văn hóa trung tâm. Phụ nữ Mông tự tay thực hiện mọi công đoạn: se sợi, dệt khung cửi, nhuộm chàm, vẽ sáp ong và thêu hoa văn hình học. Lương thực chính là ngô nương đá, thích ứng tuyệt vời với hệ sinh thái lạnh giá.",
    culturalNarrative: "Khèn Mông là sợi dây kết nối giữa người sống và người chết, giữa con người và thế giới thần linh. Tiếng khèn vang lên là tiếng lòng của người miền đá, kể về cội nguồn và khát vọng tự do.",
    ritualPhilosophy: "Người Mông tin rằng mọi vật đều có thần linh trú ngụ (Thần Bếp, Thần Cửa). Lời thề Nào Sồng là cam kết tâm linh cao nhất của cộng đồng trong việc bảo vệ rừng và trật tự làng bản.",
    heritage: [
      {
        id: "gau-tao",
        name: "Lễ hội Gầu Tào",
        type: "festival",
        isNationalHeritage: true,
        description: "Lễ hội cầu phúc, mùa màng và con cái với cây Nêu đóng vai trò là Trục Vũ Trụ (Axis Mundi).",
        imageUrl: "/images/heritages/mong_gau_tao.png",
        timeline: [
          { title: "Dựng cây Nêu", description: "Trục Vũ Trụ kết nối thần linh mở đường giáng trần giao tiếp với con người." },
          { title: "Nghi lễ hiến tế", description: "Thầy cúng khấn mời thần trời, thần đất chứng giám." }
        ]
      },
      {
        id: "le-gio-ho",
        name: "Lễ giỗ họ (Tết họ)",
        type: "custom",
        isNationalHeritage: false,
        description: "Nghi lễ củng cố tinh thần dòng họ, mỗi gia đình mang sản vật đến đóng góp và chia thịt tế lễ cho cả dòng họ.",
        imageUrl: "/images/heritages/mong_gio_ho.png"
      },
      {
        id: "dao-go-tru-ta",
        name: "Tục chế tác dao gỗ trừ tà",
        type: "custom",
        isNationalHeritage: false,
        description: "Dùng để trừ tà trong các nghi lễ tâm linh, thể hiện quan niệm về sự cân bằng giữa thế giới thực và thế giới vô hình.",
        imageUrl: "/images/heritages/mong_dao_go.png"
      },
      {
        id: "nao-song-oath",
        name: "Hội thề Nào Sồng",
        type: "festival",
        isNationalHeritage: false,
        description: "Lời thề tâm linh trước thần linh để bảo vệ rừng và quy ước bản làng, minh chứng cho sự tôn trọng tuyệt đối của người Mông với tự nhiên.",
        imageUrl: "/images/heritages/mong_nao_song.png"
      },
      {
        id: "forest-spirit-worship",
        name: "Tục cúng Thần Rừng",
        type: "custom",
        isNationalHeritage: false,
        description: "Nghi lễ bày tỏ lòng biết ơn và sự kính sợ đối với linh hồn của đại ngàn, nơi khởi nguồn của nguồn nước và sự sinh tồn.",
        imageUrl: "/images/heritages/mong_than_rung.png"
      }
    ],
    cuisines: [
      {
        id: "men-men",
        name: "Mèn mén",
        description: "Lương thực chính làm từ ngô hạt nghiền nhỏ, đồ chín bằng hơi, biểu hiện cho sức sống bền bỉ trên núi cao.",
        imageUrl: "/images/hmong_cuisine.png"
      },
      {
        id: "thang-co",
        name: "Thắng cố",
        description: "Món canh hầm từ thịt và nội tạng (thường là ngựa hoặc bò) với 12 loại gia vị thảo mộc núi rừng.",
        imageUrl: "/images/hmong_cuisine.png"
      },
      {
        id: "thit-gac-bep-mong",
        name: "Thịt lợn gác bếp",
        description: "Phương pháp bảo quản thực phẩm truyền thống: ướp gia vị rồi hun khói lâu ngày trên bếp lửa.",
        imageUrl: "/images/cuisines/thit_gac_bep.png"
      },
      {
        id: "ruou-ngo",
        name: "Rượu Ngô",
        description: "Kết tinh từ hạt ngô nương đá, là linh hồn trong các nghi lễ và vòng tròn đoàn kết bản làng.",
        imageUrl: "/images/rituals/ruou_ngo_icon.png"
      }
    ],
    imageUrl: "/images/hmong_history.png"
  },
  {
    id: "o-du",
    slug: "o-du",
    name: "Ơ Đu",
    location: ["Tương Dương (Bản Văng Môn)"],
    population: {
      total: 432,
      year: 2019,
      provinceStats: "Hiện nay chỉ còn khoảng 93 hộ gia đình tập trung tại bản Văng Môn.",
      details: "Một trong những dân tộc có dân số thấp nhất Việt Nam."
    },
    geographicStats: {
      terrain: "Khu tái định cư bản Văng Môn, vùng núi xã Nga My, huyện Tương Dương.",
      climate: "Chu kỳ thời gian tính theo âm thanh Thần Sấm - Lễ mừng tiếng sấm đầu mùa."
    },
    costumeInfo: {
      description: "Trang phục truyền thống Ơ Đu mang vẻ đẹp tinh tế, khiêm nhường. Áo dài tay, không khuy với 4 sợi dây buộc mang tính biểu tượng, cùng chân váy thêu hình zic-zac tinh xảo màu đỏ nhạt.",
      colors: ["#0f172a", "#fecaca", "#fcd34d"],
      image: "/images/costumes/odu_costume.png"
    },
    history: "Ký ức mong manh của một tộc người từng du canh du cư qua các vùng thung lũng Nậm Ngân.",
    longDescription: "Chu kỳ thời gian tính theo tiếng sấm đầu tiên trong năm. Nghi thức thanh tẩy tại dòng suối Nậm Ngân là cách gột rửa muộn phiền năm cũ để đón sinh khí thịnh vượng. Đây là tộc người mang trong mình ký ức sâu đậm về sự gắn bó với hang động và dòng suối nguồn.",
    culturalNarrative: "Tộc người 'nhỏ bé nhất nhưng kiên cường nhất', gìn giữ lời thề của tổ tiên từ ngàn năm trong những thanh âm độc đáo của dân ca Ơ Đu.",
    ritualPhilosophy: "Lễ hội đón tiếng sấm đầu năm là cột mốc tâm linh quan trọng bậc nhất, đánh dấu sự hồi sinh của vạn vật và sự thay tên đổi họ của mỗi thành viên trong cộng đồng.",
    heritage: [
      {
        id: "le-mung-tieng-sam",
        name: "Lễ Chăm Phtrong (Mừng tiếng sấm)",
        type: "festival",
        isNationalHeritage: true,
        description: "Lễ hội đón tiếng sấm đầu năm báo hiệu mùa màng bắt đầu, nghi lễ thiêng liêng nhất của tộc người.",
        imageUrl: "/images/heritages/odu_le_sam.png"
      },
      {
        id: "bep-lo-kep",
        name: "Hệ thống bếp lò kép",
        type: "custom",
        isNationalHeritage: false,
        description: "Nhà sàn có bếp ngoài để tiếp khách (không lửa) và bếp trong để nấu ăn gia đình, tôn trọng sự riêng tư tối đa của gia đình.",
        imageUrl: "/images/heritages/odu_bep_lo.png"
      },
      {
        id: "rice-soul-worship",
        name: "Lễ cúng hồn lúa",
        type: "festival",
        isNationalHeritage: false,
        description: "Nỗ lực thực hành tâm linh để giữ gìn sợi dây liên kết giữa tộc người và cây trồng cốt lõi, tin rằng mỗi hạt thóc đều có linh hồn.",
        imageUrl: "/images/heritages/odu_hon_lua.png"
      },
      {
        id: "odu-taboos",
        name: "Tục kiêng kỵ trong nhà",
        type: "custom",
        isNationalHeritage: false,
        description: "Hệ thống các quy tắc tâm linh khi khách vào nhà, thể hiện quan niệm về sự thiêng liêng và tôn trọng không gian sống gia đình.",
        imageUrl: "/images/heritages/odu_kieng_ky.png"
      }
    ],
    cuisines: [
      {
        id: "thit-chuot-say",
        name: "Thịt chuột sấy khô",
        description: "Lễ vật bắt buộc trong hôn nhân truyền thống, thể hiện sự no đủ và kỹ năng săn bắt thiện nghệ.",
        imageUrl: "/images/cuisines/chuot_lam.png"
      },
      {
        id: "ca-uop-muoi-odu",
        name: "Cá ướp muối suối",
        description: "Phương pháp bảo quản cá suối lâu dài, tạo nên hương vị mặn mòi đặc trưng của vùng lòng hồ Nậm Nơm.",
        imageUrl: "/images/cuisines/ca_uop_muoi.png"
      },
      {
        id: "mam-cung-le-sam",
        name: "Mâm cúng Tết Chăm Phtrong",
        description: "Mâm cúng gồm thịt sóc, con nhọc và cơm đồ 3 sắc màu (đen, tím, trắng).",
        imageUrl: "/images/cuisines/mam_cung_sam.png"
      }
    ],
    imageUrl: "/images/odu_heritage.png"
  },
  {
    id: "thai",
    slug: "thai",
    name: "Thái",
    location: ["Vùng thung lũng dọc các con sông"],
    history: "Cư dân làm ruộng nước sớm nhất Đông Nam Á, có ảnh hưởng văn hóa lan tỏa mạnh mẽ trong khu vực.",
    longDescription: "Dân tộc thiểu số chiếm số đông nhất, định cư tại các thung lũng dồi dào nguồn nước. Người Thái nổi tiếng với trình độ canh tác lúa nước bậc thầy, nghệ thuật dệt thổ cẩm cầu kỳ và hệ thống lễ hội tâm linh đặc sắc gắn liền với bản mường.",
    culturalNarrative: "Nội dung 'Xống chụ xon xao' và các điệu Xòe cổ là bản anh hùng ca về phẩm giá, tình yêu và tinh thần đoàn kết cộng đồng Thai-Pha.",
    ritualPhilosophy: "Quan niệm về 'Phi' (thần linh) bảo hộ mường bản và 'Tằng Cẩu' như một lời giao ước tâm linh về sự thủy chung. Lễ hội Đền Chín Gian là điểm hội tụ đức tin của 9 bản mường cổ xưa.",
    costumeInfo: {
      description: "Hệ thống trang phục tinh xảo with áo cỏm trắng, hàng khuy bạc bướm và váy đen chàm. Điểm nhấn là thắt lưng tôn dáng and khăn Piêu thêu hoa văn tâm linh phức tạp.",
      colors: ["#0f172a", "#ffffff", "#be123c", "#eab308"],
      image: "/images/costumes/thai_costume.png"
    },
    heritage: [
      {
        id: "viet-chu-thai",
        name: "Chữ Thái Cổ",
        type: "script",
        isNationalHeritage: true,
        description: "Hệ thống chữ viết cổ lưu giữ kho tàng thi ca và lịch sử phong phú của dân tộc.",
        imageUrl: "/images/thai_script.png"
      },
      {
        id: "le-hoi-hang-bua",
        name: "Lễ hội Hang Bua",
        type: "festival",
        isNationalHeritage: true,
        description: "Lễ hội truyền thống lớn nhất của người Thái vùng Tây Bắc Nghệ An.",
        imageUrl: "/images/cuisines/le_hoi_hang_bua.png"
      },
      {
        id: "triet-ly-nong-lanh",
        name: "Triết lý Nóng-Lạnh trong ẩm thực",
        type: "custom",
        isNationalHeritage: false,
        description: "Sự cân bằng tuyệt đối giữa nguyên liệu (nóng/lạnh) và sức khỏe, phản ánh nhân sinh quan hài hòa với tự nhiên.",
        imageUrl: "/images/heritages/thai_nong_lanh.png"
      },
      {
        id: "le-hoi-xang-khan",
        name: "Lễ hội Xăng Khan",
        type: "festival",
        isNationalHeritage: false,
        description: "Nghi lễ tạ ơn thầy mo, cầu sức khỏe và bình an cho cộng đồng, diễn ra with âm nhạc cồng chiêng rộn rã.",
        imageUrl: "/images/heritages/thai_xang_khan.png"
      },
      {
        id: "den-chin-gian-fest",
        name: "Lễ hội Đền Chín Gian",
        type: "festival",
        isNationalHeritage: true,
        description: "Trục kết nối tâm linh giữa 9 bản mường cổ xưa với tổ tiên, cầu mong sự bảo hộ cho mùa màng và sự hưng thịnh của vùng miền Tây.",
        imageUrl: "/images/heritages/thai_den_9_gian.png"
      },
      {
        id: "tang-cau-custom",
        name: "Tục Tằng Cẩu",
        type: "custom",
        isNationalHeritage: false,
        description: "Dấu ấn văn hóa biểu thị tình trạng hôn nhân và sự thủy chung, đồng thời là lời tuyên cáo tâm linh về địa vị của người phụ nữ.",
        imageUrl: "/images/heritages/thai_tang_cau.png"
      }
    ],
    cuisines: [
      {
        id: "xoi-ngu-sac",
        name: "Xôi ngũ sắc",
        description: "Biểu tượng của ngũ hành và sự đủ đầy, màu sắc tạo ra hoàn toàn từ thảo mộc thiên nhiên.",
        imageUrl: "/images/cuisines/xoi_ngu_sac.png"
      },
      {
        id: "pa-pinh-top",
        name: "Cá nướng (Pa Pỉnh Tộp)",
        description: "Cá suối nướng gập đặc trưng with gia gia vị mắc khén, hạt dổi - biểu tượng ẩm thực thung lũng.",
        imageUrl: "/images/cuisines/pa_moc.png"
      },
      {
        id: "nam-pia",
        name: "Nậm pịa",
        description: "Món ăn từ dịch ruột non bổ dưỡng, hương vị đắng bùi độc đáo từ các loại thảo mộc vùng cao.",
        imageUrl: "/images/cuisines/nam_pia.png"
      },
      {
        id: "reu-da-cay",
        name: "Rêu đá (Cay)",
        description: "Rêu suối được thu hái, xào hoặc nướng trong lá chuối, có tác dụng thanh nhiệt và giải độc.",
        imageUrl: "/images/cuisines/reu_da.png"
      }
    ],
    imageUrl: "/images/thai_heritage.png"
  },
  {
    id: "kinh",
    slug: "kinh",
    name: "Kinh",
    location: ["TP. Vinh", "Cửa Lò", "Diễn Châu", "Yên Thành", "Quỳnh Lưu", "Thanh Chương", "Nam Đàn"],
    population: {
      total: 3327791,
      year: 2019,
      provinceStats: "Dân tộc chiếm đa số tuyệt đối tại Nghệ An",
      details: "Tập trung tại các vùng đồng bằng và ven biển, là chủ thể chính trong sự phát triển kinh tế của tỉnh."
    },
    geographicStats: {
      terrain: "Đồng bằng duyên hải và các lưu vực sông lớn (Sông Lam), điều kiện canh tác lý tưởng.",
      climate: "Nhiệt đới gió mùa, chịu ảnh hưởng mạnh của biển và gió Tây Nam khô nóng."
    },
    costumeInfo: {
      description: "Trang phục người Kinh tại Nghệ An mang vẻ đẹp thanh lịch, thực dụng. Phụ nữ trung môn với Áo dài truyền thống trong các dịp lễ hội và Áo nâu (Áo cánh) kết hợp với váy hoặc quần đen trong sinh hoạt lao động xưa.",
      colors: ["#ffffff", "#451a03", "#000000", "#be123c"],
      image: "/images/costumes/kinh_costume.png"
    },
    history: "Lịch sử người Kinh tại Nghệ An gắn liền với quá trình khai phá vùng đất Hoan Châu, là nơi sản sinh ra nhiều anh hùng dân tộc và hào kiệt.",
    longDescription: "Văn hóa người Kinh ở Nghệ An đặc trưng bởi tính hiếu học, khí phách kiên cường và lòng yêu nước nồng nàn. Hệ thống làng xã truyền thống gắn liền với nghề trồng lúa nước, các làng nghề thủ công và niềm tin thờ cúng tổ tiên, các vị thành hoàng làng có công với nước.",
    culturalNarrative: "Bản sắc sông Lam, núi Hồng: Sự kết hợp giữa sự khắc nghiệt của thiên nhiên và bề dày lịch sử tạo nên cốt cách người Nghệ: bộc trực, kiên định, hiếu học và trọng nghĩa tình.",
    ritualPhilosophy: "Lấy Đạo Hiếu làm gốc, thờ cúng tổ tiên là nền tảng đạo đức gia đình. Tín ngưỡng thờ Mẫu và thờ các anh hùng dân tộc (ở Đền Cờn, Đền Cuông) thể hiện lòng tri ân và khát vọng quốc thái dân an.",
    heritage: [
      {
        id: "vi-giam",
        name: "Dân ca Ví, Giặm Nghệ Tĩnh",
        type: "audio",
        isNationalHeritage: true,
        description: "Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO công nhận, kết tinh từ lao động và tâm hồn người dân xứ Nghệ.",
        imageUrl: "/images/kinh_heritage.png"
      },
      {
        id: "den-cuong",
        name: "Lễ hội Đền Cuông",
        type: "festival",
        isNationalHeritage: true,
        description: "Lễ hội tưởng nhớ Thục Phán An Dương Vương, mang đậm màu sắc truyền thuyết và tín ngưỡng dân gian vùng duyên hải.",
        imageUrl: "/images/heritages/kinh_den_cuong.png",
        timeline: [
          { title: "Lễ Khai mạc", description: "Rước kiệu và dâng hương tại đền chính." },
          { title: "Phần hội", description: "Các trò chơi dân gian như đấu vật, chọi gà, diễn xướng dân ca." }
        ]
      },
      {
        id: "lang-sen",
        name: "Khu di tích Kim Liên",
        type: "custom",
        isNationalHeritage: true,
        description: "Quê hương của Chủ tịch Hồ Chí Minh, biểu tượng của tinh thần yêu nước và ý chí dân tộc.",
        imageUrl: "/images/nghean_hero.png"
      },
      {
        id: "den-con-fest",
        name: "Lễ hội Đền Cờn (Môn Thứ Nhất)",
        type: "festival",
        isNationalHeritage: true,
        description: "Được mệnh danh là ngôi đền linh thiêng nhất Nghệ An, nơi hội tụ đức tin của ngư dân vùng biển Quỳnh Lưu - Hoàng Mai cầu mong sự che chở của biển cả.",
        imageUrl: "/images/heritages/kinh_den_con.png"
      },
      {
        id: "cau-ngu-quynh-luu",
        name: "Lễ hội Cầu Ngư Quỳnh Lưu",
        type: "festival",
        isNationalHeritage: true,
        description: "Nghi lễ tâm linh giao lưu giữa con người và thần biển (Cá Ông), cầu mong gió yên bể lặng và những chuyến ra khơi bội thu.",
        imageUrl: "/images/heritages/kinh_cau_ngu.png"
      },
      {
        id: "tho-mau-kinh",
        name: "Tín ngưỡng Thờ Mẫu Tam Phủ",
        type: "custom",
        isNationalHeritage: true,
        description: "Di sản UNESCO vinh danh sức mạnh của người phụ nữ và sự bao dung của thiên nhiên, với nghi lễ Hầu đồng đặc trưng.",
        imageUrl: "/images/heritages/kinh_tho_mau.png"
      }
    ],
    cuisines: [
      {
        id: "sup-luon",
        name: "Súp lươn Nghệ An",
        description: "Đặc sản nổi tiếng với lươn đồng tươi ngon, gia vị cay nồng đặc trưng, ăn kèm với bánh mỳ hoặc bánh mướt.",
        ingredients: ["Lươn đồng", "Nghệ", "Ớt", "Hành tăm"],
        imageUrl: "/images/cuisines/sup_luon.png"
      },
      {
        id: "nhut-thanh-chuong",
        name: "Nhút Thanh Chương",
        description: "Món muối dân dã từ mít mật thái sợi, được ví như 'thịt bò' của người nghèo xưa, nay trở thành đặc sản độc đáo.",
        ingredients: ["Mít non", "Muối", "Ớt", "Mía"],
        imageUrl: "/images/cuisines/nhut_thanh_chuong.png"
      },
      {
        id: "tuong-nam-dan",
        name: "Tương Nam Đàn",
        description: "Loại nước chấm được ủ từ đậu nành và gạo nếp, yêu cầu kỹ thuật lên men khắt khe để đạt được độ thơm ngon chuẩn mực.",
        imageUrl: "/images/cuisines/tuong_nam_dan.png"
      }
    ],
    imageUrl: "/images/kinh_heritage.png"
  }
];
