/* ============================================================
   마이픽 — 가수 명부 (ROSTER)   ※ 작업 중 (배치 단위로 채우는 중)
   ------------------------------------------------------------
   칸: id / name / group("솔로"는 솔로) / gender("male"·"female") /
       birthMonth(1~12) / birthDay(1~31) / bio / photo / startVotes
   ※ photo만 승주님이 채우세요. 비우면 이니셜 아바타.
   ※ birthMonth:0 = 생일 미확인(라운드에 안 뜸) — 확인 후 채우기.
   ※ "

   ============================================================ */

window.ROSTER = [

  /* ───────── 그룹 ───────── */

  /* 동방신기 (보이즈) · 재중/준수 탈퇴 → 솔로 */
  { id:"yunho_tvxq",   name:"유노윤호", nameEn:"U-Know Yunho", group:"동방신기", gender:"male", birthMonth:2, birthDay:6,  bio:"", photo:"images/tvxq_yunho.jpg", startVotes:0 },
  { id:"changmin_tvxq",name:"최강창민", nameEn:"Max Changmin", group:"동방신기", gender:"male", birthMonth:2, birthDay:18, bio:"", photo:"images/tvxq_changmin.jpg", startVotes:0 },

  /* 소녀시대 (걸즈) */
  { id:"taeyeon_snsd", name:"태연", nameEn:"Taeyeon", group:"소녀시대", gender:"female", birthMonth:3,  birthDay:9,  bio:"", photo:"images/snsd_taeyeon.jpg", startVotes:0 },
  { id:"sunny_snsd",   name:"써니", nameEn:"Sunny", group:"소녀시대", gender:"female", birthMonth:5,  birthDay:15, bio:"", photo:"images/snsd_sunny.jpg", startVotes:0 },
  { id:"tiffany_snsd", name:"티파니", nameEn:"Tiffany", group:"소녀시대", gender:"female", birthMonth:8,  birthDay:1,  bio:"", photo:"images/snsd_tiffany.jpg", startVotes:0 },
  { id:"hyoyeon_snsd", name:"효연", nameEn:"Hyoyeon", group:"소녀시대", gender:"female", birthMonth:9,  birthDay:22, bio:"", photo:"images/snsd_hyoyeon.jpg", startVotes:0 },
  { id:"yuri_snsd",    name:"유리", nameEn:"Yuri", group:"소녀시대", gender:"female", birthMonth:12, birthDay:5,  bio:"", photo:"images/snsd_yuri.jpg", startVotes:0 },
  { id:"sooyoung_snsd",name:"수영", nameEn:"Sooyoung", group:"소녀시대", gender:"female", birthMonth:2,  birthDay:10, bio:"", photo:"images/snsd_sooyoung.jpg", startVotes:0 },
  { id:"yoona_snsd",   name:"윤아(소녀시대)", nameEn:"YoonA", group:"소녀시대", gender:"female", birthMonth:5,  birthDay:30, bio:"", photo:"images/snsd_yoona.jpg", startVotes:0 },
  { id:"seohyun_snsd", name:"서현", nameEn:"Seohyun", group:"소녀시대", gender:"female", birthMonth:6,  birthDay:28, bio:"", photo:"images/snsd_seohyun.jpg", startVotes:0 },

  /* SHINee (보이즈) · 故 종현 포함(전제 1) */
  { id:"onew_shinee",    name:"온유", nameEn:"Onew", group:"SHINee", gender:"male", birthMonth:12, birthDay:14, bio:"", photo:"images/shinee_onew.jpg", startVotes:0 },
  { id:"jonghyun_shinee",name:"종현", nameEn:"Jonghyun", group:"SHINee", gender:"male", birthMonth:4,  birthDay:8,  bio:"", photo:"images/shinee_jonghyun.jpg", startVotes:0 },
  { id:"key_shinee",     name:"키", nameEn:"Key",   group:"SHINee", gender:"male", birthMonth:9,  birthDay:23, bio:"", photo:"images/shinee_key.jpg", startVotes:0 },
  { id:"minho_shinee",   name:"민호", nameEn:"Minho", group:"SHINee", gender:"male", birthMonth:12, birthDay:9,  bio:"", photo:"images/shinee_minho.jpg", startVotes:0 },
  { id:"taemin_shinee",  name:"태민", nameEn:"Taemin", group:"SHINee", gender:"male", birthMonth:7,  birthDay:18, bio:"", photo:"images/shinee_taemin.jpg", startVotes:0 },

  /* 제로베이스원 (보이즈) · 2026.3 이후 5인 (탈퇴 4인은 솔로) */
  { id:"hanbin_zb1",  name:"성한빈", nameEn:"Sung Hanbin", group:"제로베이스원", gender:"male", birthMonth:6,  birthDay:13, bio:"", photo:"images/zb1_hanbin.jpg", startVotes:0 },
  { id:"jiwoong_zb1", name:"김지웅", nameEn:"Kim Jiwoong", group:"제로베이스원", gender:"male", birthMonth:12, birthDay:14, bio:"", photo:"images/zb1_jiwoong.jpg", startVotes:0 },
  { id:"matthew_zb1", name:"석매튜", nameEn:"Seok Matthew", group:"제로베이스원", gender:"male", birthMonth:5,  birthDay:28, bio:"", photo:"images/zb1_matthew.jpg", startVotes:0 },
  { id:"taerae_zb1",  name:"김태래", nameEn:"Kim Taerae", group:"제로베이스원", gender:"male", birthMonth:7,  birthDay:14, bio:"", photo:"images/zb1_taerae.jpg", startVotes:0 },
  { id:"gunwook_zb1", name:"박건욱", nameEn:"Park Gunwook", group:"제로베이스원", gender:"male", birthMonth:1,  birthDay:10, bio:"", photo:"images/zb1_gunwook.jpg", startVotes:0 },

  /* EXO (보이즈) · 크리스/루한/타오 탈퇴 → 솔로 (레이는 현 멤버) */
  { id:"xiumin_exo",  name:"시우민", nameEn:"Xiumin", group:"EXO", gender:"male", birthMonth:3,  birthDay:26, bio:"", photo:"images/exo_xiumin.jpg", startVotes:0 },
  { id:"suho_exo",    name:"수호", nameEn:"Suho",   group:"EXO", gender:"male", birthMonth:5,  birthDay:22, bio:"", photo:"images/exo_suho.jpg", startVotes:0 },
  { id:"lay_exo",     name:"레이(EXO)", nameEn:"Lay",   group:"EXO", gender:"male", birthMonth:10, birthDay:7,  bio:"", photo:"images/exo_lay.jpg", startVotes:0 },
  { id:"baekhyun_exo",name:"백현", nameEn:"Baekhyun",   group:"EXO", gender:"male", birthMonth:5,  birthDay:6,  bio:"", photo:"images/exo_baekhyun.jpg", startVotes:0 },
  { id:"chen_exo",    name:"첸", nameEn:"Chen",     group:"EXO", gender:"male", birthMonth:9,  birthDay:21, bio:"", photo:"images/exo_chen.jpg", startVotes:0 },
  { id:"chanyeol_exo",name:"찬열", nameEn:"Chanyeol",   group:"EXO", gender:"male", birthMonth:11, birthDay:27, bio:"", photo:"images/exo_chanyeol.jpg", startVotes:0 },
  { id:"do_exo",      name:"디오", nameEn:"D.O.",   group:"EXO", gender:"male", birthMonth:1,  birthDay:12, bio:"", photo:"images/exo_do.jpg", startVotes:0 },
  { id:"kai_exo",     name:"카이", nameEn:"Kai",   group:"EXO", gender:"male", birthMonth:1,  birthDay:14, bio:"", photo:"images/exo_kai.jpg", startVotes:0 },
  { id:"sehun_exo",   name:"세훈", nameEn:"Sehun",   group:"EXO", gender:"male", birthMonth:4,  birthDay:12, bio:"", photo:"images/exo_sehun.jpg", startVotes:0 },

  /* aespa (걸즈) */
  { id:"karina_aespa", name:"카리나", nameEn:"Karina", group:"aespa", gender:"female", birthMonth:4,  birthDay:11, bio:"", photo:"images/aespa_karina.jpg", startVotes:0 },
  { id:"giselle_aespa",name:"지젤", nameEn:"Giselle",   group:"aespa", gender:"female", birthMonth:10, birthDay:30, bio:"", photo:"images/aespa_giselle.jpg", startVotes:0 },
  { id:"winter_aespa", name:"윈터", nameEn:"Winter",   group:"aespa", gender:"female", birthMonth:1,  birthDay:1,  bio:"", photo:"images/aespa_winter.jpg", startVotes:0 },
  { id:"ningning_aespa",name:"닝닝", nameEn:"Ningning",  group:"aespa", gender:"female", birthMonth:10, birthDay:23, bio:"", photo:"images/aespa_ningning.jpg", startVotes:0 },

  /* RIIZE (보이즈) · 승한 탈퇴 → 솔로 */
  { id:"shotaro_riize",name:"쇼타로", nameEn:"Shotaro", group:"RIIZE", gender:"male", birthMonth:11, birthDay:25, bio:"", photo:"images/riize_shotaro.jpg", startVotes:0 },
  { id:"eunseok_riize",name:"은석", nameEn:"Eunseok",   group:"RIIZE", gender:"male", birthMonth:3,  birthDay:19, bio:"", photo:"images/riize_eunseok.jpg", startVotes:0 },
  { id:"sungchan_riize",name:"성찬", nameEn:"Sungchan",  group:"RIIZE", gender:"male", birthMonth:9,  birthDay:13,  bio:"", photo:"images/riize_sungchan.jpg", startVotes:0 },
  { id:"wonbin_riize", name:"원빈", nameEn:"Wonbin",   group:"RIIZE", gender:"male", birthMonth:3, birthDay:2, bio:"", photo:"images/riize_wonbin.jpg", startVotes:0 },
  { id:"sohee_riize",  name:"소희", nameEn:"Sohee",   group:"RIIZE", gender:"male", birthMonth:11, birthDay:21, bio:"", photo:"images/riize_sohee.jpg", startVotes:0 },
  { id:"anton_riize",  name:"앤톤", nameEn:"Anton",   group:"RIIZE", gender:"male", birthMonth:3,  birthDay:21, bio:"", photo:"images/riize_anton.jpg", startVotes:0 },

  /* ───────── 솔로 ───────── */
  { id:"jaejoong_solo", name:"김재중", nameEn:"Kim Jaejoong", group:"솔로", gender:"male",   birthMonth:1,  birthDay:26, bio:"前 동방신기", photo:"images/solo_jaejoong.jpg", startVotes:0 },
  { id:"junsu_solo",    name:"김준수", nameEn:"Kim Junsu", group:"솔로", gender:"male",   birthMonth:12, birthDay:15, bio:"前 동방신기", photo:"images/solo_junsu.jpg", startVotes:0 },

  { id:"minhyun_solo",  name:"황민현", nameEn:"Hwang Minhyun", group:"솔로", gender:"male",   birthMonth:8,  birthDay:9,  bio:"", photo:"images/solo_minhyun.jpg", startVotes:0 },
  { id:"baekho_solo",   name:"백호", nameEn:"Baekho",   group:"솔로", gender:"male",   birthMonth:7,  birthDay:21, bio:"", photo:"images/solo_baekho.jpg", startVotes:0 },

  { id:"sungwoon_solo", name:"하성운", nameEn:"Ha Sungwoon", group:"솔로", gender:"male",   birthMonth:3,  birthDay:22, bio:"", photo:"images/solo_sungwoon.jpg", startVotes:0 },
  { id:"jihoon_solo",   name:"박지훈", nameEn:"Park Jihoon", group:"솔로", gender:"male",   birthMonth:5,  birthDay:29, bio:"", photo:"images/solo_jihoon.jpg", startVotes:0 },
  { id:"yena_solo",     name:"최예나", nameEn:"Choi Yena", group:"솔로", gender:"female", birthMonth:9,  birthDay:29, bio:"", photo:"images/solo_yena.jpg", startVotes:0 },
  { id:"somi_solo",     name:"전소미", nameEn:"Jeon Somi", group:"솔로", gender:"female", birthMonth:3,  birthDay:9,  bio:"", photo:"images/solo_somi.jpg", startVotes:0 },
  { id:"changsub_solo", name:"이창섭", nameEn:"Lee Changsub", group:"솔로", gender:"male",   birthMonth:2,  birthDay:26, bio:"", photo:"images/solo_changsub.jpg", startVotes:0 },
  /* 빅뱅 (보이즈) */
  { id:"gdragon_bb",    name:"지드래곤", nameEn:"G-Dragon", group:"빅뱅", gender:"male",   birthMonth:8,  birthDay:18, bio:"", photo:"images/bigbang_gdragon.jpg", startVotes:0 },
  { id:"taeyang_bb_solo",name:"태양", nameEn:"Taeyang",   group:"빅뱅", gender:"male",   birthMonth:5,  birthDay:18, bio:"", photo:"images/solo_taeyang_bb.jpg", startVotes:0 },
  { id:"daesung_bb",    name:"대성", nameEn:"Daesung",   group:"빅뱅", gender:"male",   birthMonth:4,  birthDay:26, bio:"", photo:"images/bigbang_daesung.jpg", startVotes:0 },
  { id:"libwoo_solo",   name:"최립우", nameEn:"Choi Libwoo", group:"솔로", gender:"male",   birthMonth:1,  birthDay:2,  bio:"보이즈2플래닛 출신", photo:"images/solo_libwoo.jpg", startVotes:0 }, // 생일 미확인
  { id:"heeseung_solo", name:"희승", nameEn:"Heeseung",   group:"솔로", gender:"male",   birthMonth:10, birthDay:15, bio:"前 엔하이픈", photo:"images/solo_heeseung.jpg", startVotes:0 },

  { id:"hao_solo",      name:"장하오", nameEn:"Zhang Hao", group:"솔로", gender:"male",   birthMonth:7,  birthDay:25, bio:"前 제로베이스원", photo:"images/solo_hao.jpg", startVotes:0 },
  { id:"ricky_solo",    name:"리키", nameEn:"Ricky",   group:"솔로", gender:"male",   birthMonth:5,  birthDay:20, bio:"前 제로베이스원", photo:"images/solo_ricky.jpg", startVotes:0 },
  { id:"yujin_solo",    name:"한유진", nameEn:"Han Yujin", group:"솔로", gender:"male",   birthMonth:3,  birthDay:20, bio:"前 제로베이스원", photo:"images/solo_yujin.jpg", startVotes:0 },
  { id:"gyuvin_solo",   name:"김규빈", nameEn:"Kim Gyuvin", group:"솔로", gender:"male",   birthMonth:8,  birthDay:30,  bio:"前 제로베이스원", photo:"images/solo_gyuvin.jpg", startVotes:0 },
  { id:"seunghan_solo", name:"승한", nameEn:"Seunghan",   group:"솔로", gender:"male",   birthMonth:10, birthDay:2,  bio:"前 라이즈", photo:"images/solo_seunghan.jpg", startVotes:0 },

  /* ───────── NCT 계열 (보이즈) · 태일/크리스 제외, 마크 탈퇴→솔로 ───────── */
  /* NCT 127 */
  { id:"taeyong_nct", name:"태용", nameEn:"Taeyong", group:"NCT/NCT 127", gender:"male", birthMonth:7,  birthDay:1,  bio:"", photo:"images/nct_taeyong.jpg", startVotes:0 },
  { id:"johnny_nct",  name:"쟈니", nameEn:"Johnny", group:"NCT/NCT 127", gender:"male", birthMonth:2,  birthDay:9,  bio:"", photo:"images/nct_johnny.jpg", startVotes:0 },
  { id:"yuta_nct",    name:"유타", nameEn:"Yuta", group:"NCT/NCT 127", gender:"male", birthMonth:10, birthDay:26, bio:"", photo:"images/nct_yuta.jpg", startVotes:0 },
  { id:"doyoung_nct", name:"도영(NCT)", nameEn:"Doyoung", group:"NCT/NCT 127", gender:"male", birthMonth:2,  birthDay:1,  bio:"", photo:"images/nct_doyoung.jpg", startVotes:0 },
  { id:"jaehyun_nct", name:"재현", nameEn:"Jaehyun", group:"NCT/NCT 127", gender:"male", birthMonth:2,  birthDay:14, bio:"", photo:"images/nct_jaehyun.jpg", startVotes:0 },
  { id:"jungwoo_nct", name:"정우", nameEn:"Jungwoo", group:"NCT/NCT 127", gender:"male", birthMonth:2, birthDay:19, bio:"", photo:"images/nct_jungwoo.jpg", startVotes:0 },
  { id:"haechan_nct", name:"해찬", nameEn:"Haechan", group:"NCT/NCT 127/NCT DREAM", gender:"male", birthMonth:6, birthDay:6, bio:"", photo:"images/nct_haechan.jpg", startVotes:0 },
  /* NCT DREAM */
  { id:"renjun_nct",  name:"런쥔", nameEn:"Renjun", group:"NCT/NCT DREAM", gender:"male", birthMonth:3,  birthDay:23, bio:"", photo:"images/nct_renjun.jpg", startVotes:0 },
  { id:"jeno_nct",    name:"제노", nameEn:"Jeno", group:"NCT/NCT DREAM", gender:"male", birthMonth:4,  birthDay:23, bio:"", photo:"images/nct_jeno.jpg", startVotes:0 },
  { id:"jaemin_nct",  name:"재민", nameEn:"Jaemin", group:"NCT/NCT DREAM", gender:"male", birthMonth:8,  birthDay:13, bio:"", photo:"images/nct_jaemin.jpg", startVotes:0 },
  { id:"chenle_nct",  name:"천러", nameEn:"Chenle", group:"NCT/NCT DREAM", gender:"male", birthMonth:11, birthDay:22, bio:"", photo:"images/nct_chenle.jpg", startVotes:0 },
  { id:"jisung_nct",  name:"지성", nameEn:"Jisung", group:"NCT/NCT DREAM", gender:"male", birthMonth:2,  birthDay:5,  bio:"", photo:"images/nct_jisung.jpg", startVotes:0 },
  /* WayV */
  { id:"kun_wayv",     name:"쿤", nameEn:"Kun",   group:"NCT/WayV", gender:"male", birthMonth:1,  birthDay:1,  bio:"", photo:"images/wayv_kun.jpg", startVotes:0 },
  { id:"ten_wayv",     name:"텐", nameEn:"Ten",   group:"NCT/WayV", gender:"male", birthMonth:2,  birthDay:27, bio:"", photo:"images/wayv_ten.jpg", startVotes:0 },
  { id:"winwin_wayv",  name:"윈윈", nameEn:"Winwin", group:"NCT/WayV", gender:"male", birthMonth:10, birthDay:28, bio:"", photo:"images/wayv_winwin.jpg", startVotes:0 },
  { id:"xiaojun_wayv", name:"샤오쥔", nameEn:"Xiaojun",group:"NCT/WayV", gender:"male", birthMonth:8,  birthDay:8,  bio:"", photo:"images/wayv_xiaojun.jpg", startVotes:0 },
  { id:"hendery_wayv", name:"헨드리", nameEn:"Hendery",group:"NCT/WayV", gender:"male", birthMonth:9,  birthDay:28, bio:"", photo:"images/wayv_hendery.jpg", startVotes:0 },
  { id:"yangyang_wayv",name:"양양", nameEn:"Yangyang", group:"NCT/WayV", gender:"male", birthMonth:10, birthDay:10, bio:"", photo:"images/wayv_yangyang.jpg", startVotes:0 },
  /* NCT WISH */
  { id:"sion_wish",   name:"시온", nameEn:"Sion",  group:"NCT/NCT WISH", gender:"male", birthMonth:5, birthDay:11, bio:"", photo:"images/wish_sion.jpg", startVotes:0 },
  { id:"riku_wish",   name:"리쿠", nameEn:"Riku",  group:"NCT/NCT WISH", gender:"male", birthMonth:6, birthDay:28,  bio:"", photo:"images/wish_riku.jpg", startVotes:0 },
  { id:"yushi_wish",  name:"유우시", nameEn:"Yushi",group:"NCT/NCT WISH", gender:"male", birthMonth:4, birthDay:5,  bio:"", photo:"images/wish_yushi.jpg", startVotes:0 },
  { id:"jaehee_wish", name:"재희", nameEn:"Jaehee",  group:"NCT/NCT WISH", gender:"male", birthMonth:6, birthDay:21, bio:"", photo:"images/wish_jaehee.jpg", startVotes:0 },
  { id:"ryo_wish",    name:"료", nameEn:"Ryo",    group:"NCT/NCT WISH", gender:"male", birthMonth:8, birthDay:4,  bio:"", photo:"images/wish_ryo.jpg", startVotes:0 },
  { id:"sakuya_wish", name:"사쿠야", nameEn:"Sakuya",group:"NCT/NCT WISH", gender:"male", birthMonth:11, birthDay:18,  bio:"", photo:"images/wish_sakuya.jpg", startVotes:0 },

  /* 마크 → 솔로 (NCT 탈퇴) */
  { id:"mark_solo",   name:"마크(솔로)", nameEn:"Mark",  group:"솔로", gender:"male", birthMonth:8, birthDay:2, bio:"前 NCT", photo:"images/solo_mark.jpg", startVotes:0 },

  /* ───────── 2PM (보이즈) · 박재범 탈퇴→솔로 ───────── */
  { id:"junk_2pm",     name:"준케", nameEn:"Jun. K",   group:"2PM", gender:"male", birthMonth:1,  birthDay:15, bio:"", photo:"images/2pm_junk.jpg", startVotes:0 },
  { id:"nichkhun_2pm", name:"닉쿤", nameEn:"Nichkhun",   group:"2PM", gender:"male", birthMonth:6,  birthDay:24, bio:"", photo:"images/2pm_nichkhun.jpg", startVotes:0 },
  { id:"taecyeon_2pm", name:"택연", nameEn:"Taecyeon",   group:"2PM", gender:"male", birthMonth:12, birthDay:27, bio:"", photo:"images/2pm_taecyeon.jpg", startVotes:0 },
  { id:"wooyoung_2pm", name:"우영(2PM)", nameEn:"Wooyoung",   group:"2PM", gender:"male", birthMonth:4,  birthDay:30, bio:"", photo:"images/2pm_wooyoung.jpg", startVotes:0 },
  { id:"junho_2pm",    name:"준호", nameEn:"Junho",   group:"2PM", gender:"male", birthMonth:1,  birthDay:25, bio:"", photo:"images/2pm_junho.jpg", startVotes:0 },
  { id:"chansung_2pm", name:"찬성", nameEn:"Chansung",   group:"2PM", gender:"male", birthMonth:2,  birthDay:11, bio:"", photo:"images/2pm_chansung.jpg", startVotes:0 },

  /* GOT7 (보이즈) · 특이사항 없음 */
  { id:"jayb_got7",    name:"JAY B", nameEn:"JAY B", group:"GOT7", gender:"male", birthMonth:1,  birthDay:6,  bio:"", photo:"images/got7_jayb.jpg", startVotes:0 },
  { id:"mark_got7",    name:"마크(GOT7)", nameEn:"Mark",   group:"GOT7", gender:"male", birthMonth:9,  birthDay:4,  bio:"", photo:"images/got7_mark.jpg", startVotes:0 },
  { id:"jackson_got7", name:"잭슨", nameEn:"Jackson",   group:"GOT7", gender:"male", birthMonth:3,  birthDay:28, bio:"", photo:"images/got7_jackson.jpg", startVotes:0 },
  { id:"jinyoung_got7",name:"진영", nameEn:"Jinyoung",   group:"GOT7", gender:"male", birthMonth:9,  birthDay:22, bio:"", photo:"images/got7_jinyoung.jpg", startVotes:0 },
  { id:"youngjae_got7",name:"영재", nameEn:"Youngjae",   group:"GOT7", gender:"male", birthMonth:9,  birthDay:17, bio:"", photo:"images/got7_youngjae.jpg", startVotes:0 },
  { id:"bambam_got7",  name:"뱀뱀", nameEn:"BamBam",   group:"GOT7", gender:"male", birthMonth:5,  birthDay:2,  bio:"", photo:"images/got7_bambam.jpg", startVotes:0 },
  { id:"yugyeom_got7", name:"유겸", nameEn:"Yugyeom",   group:"GOT7", gender:"male", birthMonth:11, birthDay:17, bio:"", photo:"images/got7_yugyeom.jpg", startVotes:0 },

  /* DAY6 (보이즈) · 제이(Jae) 탈퇴→제외 */
  { id:"sungjin_day6", name:"성진", nameEn:"Sungjin",   group:"DAY6", gender:"male", birthMonth:1,  birthDay:16, bio:"", photo:"images/day6_sungjin.jpg", startVotes:0 },
  { id:"youngk_day6",  name:"Young K", nameEn:"Young K",group:"DAY6", gender:"male", birthMonth:12, birthDay:19, bio:"", photo:"images/day6_youngk.jpg", startVotes:0 },
  { id:"wonpil_day6",  name:"원필", nameEn:"Wonpil",   group:"DAY6", gender:"male", birthMonth:4,  birthDay:28, bio:"", photo:"images/day6_wonpil.jpg", startVotes:0 },
  { id:"dowoon_day6",  name:"도운", nameEn:"Dowoon",   group:"DAY6", gender:"male", birthMonth:8,  birthDay:25, bio:"", photo:"images/day6_dowoon.jpg", startVotes:0 },

  /* TWICE (걸즈) · 특이사항 없음 */
  { id:"nayeon_twice",   name:"나연", nameEn:"Nayeon", group:"TWICE", gender:"female", birthMonth:9,  birthDay:22, bio:"", photo:"images/twice_nayeon.jpg", startVotes:0 },
  { id:"jeongyeon_twice",name:"정연", nameEn:"Jeongyeon", group:"TWICE", gender:"female", birthMonth:11, birthDay:1,  bio:"", photo:"images/twice_jeongyeon.jpg", startVotes:0 },
  { id:"momo_twice",     name:"모모", nameEn:"Momo", group:"TWICE", gender:"female", birthMonth:11, birthDay:9,  bio:"", photo:"images/twice_momo.jpg", startVotes:0 },
  { id:"sana_twice",     name:"사나", nameEn:"Sana", group:"TWICE", gender:"female", birthMonth:12, birthDay:29, bio:"", photo:"images/twice_sana.jpg", startVotes:0 },
  { id:"jihyo_twice",    name:"지효", nameEn:"Jihyo", group:"TWICE", gender:"female", birthMonth:2,  birthDay:1,  bio:"", photo:"images/twice_jihyo.jpg", startVotes:0 },
  { id:"mina_twice",     name:"미나", nameEn:"Mina", group:"TWICE", gender:"female", birthMonth:3,  birthDay:24, bio:"", photo:"images/twice_mina.jpg", startVotes:0 },
  { id:"dahyun_twice",   name:"다현", nameEn:"Dahyun", group:"TWICE", gender:"female", birthMonth:5,  birthDay:28, bio:"", photo:"images/twice_dahyun.jpg", startVotes:0 },
  { id:"chaeyoung_twice",name:"채영", nameEn:"Chaeyoung", group:"TWICE", gender:"female", birthMonth:4,  birthDay:23, bio:"", photo:"images/twice_chaeyoung.jpg", startVotes:0 },
  { id:"tzuyu_twice",    name:"쯔위", nameEn:"Tzuyu", group:"TWICE", gender:"female", birthMonth:6,  birthDay:14, bio:"", photo:"images/twice_tzuyu.jpg", startVotes:0 },

  /* Stray Kids (보이즈) · 우진(Woojin) 탈퇴→제외 */
  { id:"bangchan_skz", name:"방찬", nameEn:"Bang Chan",   group:"Stray Kids", gender:"male", birthMonth:10, birthDay:3,  bio:"", photo:"images/skz_bangchan.jpg", startVotes:0 },
  { id:"leeknow_skz",  name:"리노", nameEn:"Lee Know",   group:"Stray Kids", gender:"male", birthMonth:10, birthDay:25, bio:"", photo:"images/skz_leeknow.jpg", startVotes:0 },
  { id:"changbin_skz", name:"창빈", nameEn:"Changbin",   group:"Stray Kids", gender:"male", birthMonth:8,  birthDay:11, bio:"", photo:"images/skz_changbin.jpg", startVotes:0 },
  { id:"hyunjin_skz",  name:"현진", nameEn:"Hyunjin",   group:"Stray Kids", gender:"male", birthMonth:3,  birthDay:20, bio:"", photo:"images/skz_hyunjin.jpg", startVotes:0 },
  { id:"han_skz",      name:"한", nameEn:"Han",     group:"Stray Kids", gender:"male", birthMonth:9,  birthDay:14, bio:"", photo:"images/skz_han.jpg", startVotes:0 },
  { id:"felix_skz",    name:"필릭스", nameEn:"Felix", group:"Stray Kids", gender:"male", birthMonth:9,  birthDay:15, bio:"", photo:"images/skz_felix.jpg", startVotes:0 },
  { id:"seungmin_skz", name:"승민", nameEn:"Seungmin",   group:"Stray Kids", gender:"male", birthMonth:9,  birthDay:22, bio:"", photo:"images/skz_seungmin.jpg", startVotes:0 },
  { id:"in_skz",       name:"아이엔", nameEn:"I.N", group:"Stray Kids", gender:"male", birthMonth:2,  birthDay:8,  bio:"", photo:"images/skz_in.jpg", startVotes:0 },

  /* 박재범 → 솔로 (前 2PM) */
  { id:"jaypark_solo", name:"박재범", nameEn:"Jay Park", group:"솔로", gender:"male", birthMonth:4, birthDay:25, bio:"前 2PM", photo:"images/solo_jaypark.jpg", startVotes:0 },

  /* ───────── ITZY (걸즈) · 특이사항 없음 ───────── */
  { id:"yeji_itzy",     name:"예지", nameEn:"Yeji",   group:"ITZY", gender:"female", birthMonth:5,  birthDay:26, bio:"", photo:"images/itzy_yeji.jpg", startVotes:0 },
  { id:"lia_itzy",      name:"리아", nameEn:"Lia",   group:"ITZY", gender:"female", birthMonth:7,  birthDay:21, bio:"", photo:"images/itzy_lia.jpg", startVotes:0 },
  { id:"ryujin_itzy",   name:"류진", nameEn:"Ryujin",   group:"ITZY", gender:"female", birthMonth:4,  birthDay:17, bio:"", photo:"images/itzy_ryujin.jpg", startVotes:0 },
  { id:"chaeryeong_itzy",name:"채령", nameEn:"Chaeryeong",  group:"ITZY", gender:"female", birthMonth:6,  birthDay:5,  bio:"", photo:"images/itzy_chaeryeong.jpg", startVotes:0 },
  { id:"yuna_itzy",     name:"유나(ITZY)", nameEn:"Yuna",   group:"ITZY", gender:"female", birthMonth:12, birthDay:9,  bio:"", photo:"images/itzy_yuna.jpg", startVotes:0 },

  /* ───────── Xdinary Heroes (보이즈 밴드) · 생일 확인 필요 ───────── */
  { id:"gunil_xh",   name:"건일", nameEn:"Gunil",  group:"Xdinary Heroes", gender:"male", birthMonth:7, birthDay:24, bio:"드럼", photo:"images/xh_gunil.jpg", startVotes:0 },
  { id:"jungsu_xh",  name:"정수", nameEn:"Jungsu",  group:"Xdinary Heroes", gender:"male", birthMonth:6, birthDay:26, bio:"키보드", photo:"images/xh_jungsu.jpg", startVotes:0 },
  { id:"gaon_xh",    name:"가온", nameEn:"Gaon",  group:"Xdinary Heroes", gender:"male", birthMonth:1, birthDay:14, bio:"베이스", photo:"images/xh_gaon.jpg", startVotes:0 },
  { id:"ode_xh",     name:"O.de", nameEn:"O.de",  group:"Xdinary Heroes", gender:"male", birthMonth:6, birthDay:11, bio:"키보드/신스", photo:"images/xh_ode.jpg", startVotes:0 },
  { id:"junhan_xh",  name:"준한", nameEn:"Jun Han",  group:"Xdinary Heroes", gender:"male", birthMonth:8, birthDay:18, bio:"기타", photo:"images/xh_junhan.jpg", startVotes:0 },
  { id:"jooyeon_xh", name:"주연(Xdinary Heroes)", nameEn:"Jooyeon",  group:"Xdinary Heroes", gender:"male", birthMonth:9, birthDay:12, bio:"기타", photo:"images/xh_jooyeon.jpg", startVotes:0 },

  /* ───────── NMIXX (걸즈) · 진니 탈퇴→제외 ───────── */
  { id:"lily_nmixx",    name:"릴리", nameEn:"Lily", group:"NMIXX", gender:"female", birthMonth:10, birthDay:17, bio:"", photo:"images/nmixx_lily.jpg", startVotes:0 },
  { id:"haewon_nmixx",  name:"해원", nameEn:"Haewon", group:"NMIXX", gender:"female", birthMonth:2,  birthDay:25, bio:"", photo:"images/nmixx_haewon.jpg", startVotes:0 },
  { id:"sullyoon_nmixx",name:"설윤", nameEn:"Sullyoon", group:"NMIXX", gender:"female", birthMonth:1,  birthDay:26,  bio:"", photo:"images/nmixx_sullyoon.jpg", startVotes:0 },
  { id:"bae_nmixx",     name:"배이", nameEn:"Bae", group:"NMIXX", gender:"female", birthMonth:12,  birthDay:28,  bio:"", photo:"images/nmixx_bae.jpg", startVotes:0 },
  { id:"jiwoo_nmixx",   name:"지우", nameEn:"Jiwoo", group:"NMIXX", gender:"female", birthMonth:4,  birthDay:13, bio:"", photo:"images/nmixx_jiwoo.jpg", startVotes:0 },
  { id:"kyujin_nmixx",  name:"규진", nameEn:"Kyujin", group:"NMIXX", gender:"female", birthMonth:5,  birthDay:26, bio:"", photo:"images/nmixx_kyujin.jpg", startVotes:0 },

  /* ───────── KickFlip (보이즈) · 신인, 탈퇴자 없음 · 생일 확인 필요 ───────── */
  { id:"gyehun_kf",  name:"계훈", nameEn:"Gyehun",  group:"KickFlip", gender:"male", birthMonth:9, birthDay:16, bio:"", photo:"images/kf_gyehun.jpg", startVotes:0 },
  { id:"amaru_kf",   name:"아마루", nameEn:"Amaru",group:"KickFlip", gender:"male", birthMonth:10, birthDay:21, bio:"", photo:"images/kf_amaru.jpg", startVotes:0 },
  { id:"donghwa_kf", name:"동화", nameEn:"Donghwa",  group:"KickFlip", gender:"male", birthMonth:3, birthDay:11, bio:"", photo:"images/kf_donghwa.jpg", startVotes:0 },
  { id:"juwang_kf",  name:"주왕", nameEn:"Juwang",  group:"KickFlip", gender:"male", birthMonth:5, birthDay:2, bio:"", photo:"images/kf_juwang.jpg", startVotes:0 },
  { id:"minje_kf",   name:"민제", nameEn:"Minje",  group:"KickFlip", gender:"male", birthMonth:5, birthDay:12, bio:"", photo:"images/kf_minje.jpg", startVotes:0 },
  { id:"keiju_kf",   name:"케이주", nameEn:"Keiju",group:"KickFlip", gender:"male", birthMonth:10, birthDay:4, bio:"", photo:"images/kf_keiju.jpg", startVotes:0 },
  { id:"donghyun_kf",name:"동현", nameEn:"Donghyun",  group:"KickFlip", gender:"male", birthMonth:3, birthDay:13, bio:"", photo:"images/kf_donghyun.jpg", startVotes:0 },

  /* ───────── WINNER (보이즈) · 남태현 탈퇴→제외 ───────── */
  { id:"seungyoon_winner",name:"강승윤", nameEn:"Kang Seungyoon", group:"WINNER", gender:"male", birthMonth:1, birthDay:21, bio:"", photo:"images/winner_seungyoon.jpg", startVotes:0 },
  { id:"jinu_winner",     name:"김진우", nameEn:"Kim Jinu", group:"WINNER", gender:"male", birthMonth:9, birthDay:26, bio:"", photo:"images/winner_jinu.jpg", startVotes:0 },

  { id:"hoony_winner",    name:"이승훈", nameEn:"Lee Seunghoon", group:"WINNER", gender:"male", birthMonth:1, birthDay:11, bio:"", photo:"images/winner_hoony.jpg", startVotes:0 },
  { id:"mino_winner",     name:"송민호", nameEn:"Song Mino", group:"WINNER", gender:"male", birthMonth:3, birthDay:30, bio:"", photo:"images/winner_mino.jpg", startVotes:0 },

  /* ───────── BLACKPINK (걸즈) · 특이사항 없음 ───────── */
  { id:"jisoo_bp",  name:"지수", nameEn:"Jisoo", group:"BLACKPINK", gender:"female", birthMonth:1, birthDay:3,  bio:"", photo:"images/bp_jisoo.jpg", startVotes:0 },
  { id:"jennie_bp", name:"제니", nameEn:"Jennie", group:"BLACKPINK", gender:"female", birthMonth:1, birthDay:16, bio:"", photo:"images/bp_jennie.jpg", startVotes:0 },
  { id:"rose_bp",   name:"로제", nameEn:"Rosé", group:"BLACKPINK", gender:"female", birthMonth:2, birthDay:11, bio:"", photo:"images/bp_rose.jpg", startVotes:0 },
  { id:"lisa_bp",   name:"리사", nameEn:"Lisa", group:"BLACKPINK", gender:"female", birthMonth:3, birthDay:27, bio:"", photo:"images/bp_lisa.jpg", startVotes:0 },

  /* ───────── 르세라핌 (걸즈) ───────── */
  { id:"sakura_lsf",  name:"사쿠라", nameEn:"Sakura", group:"르세라핌", gender:"female", birthMonth:3,  birthDay:19, bio:"", photo:"images/lsf_sakura.jpg", startVotes:0 },
  { id:"chaewon_lsf", name:"김채원", nameEn:"Kim Chaewon", group:"르세라핌", gender:"female", birthMonth:8,  birthDay:1,  bio:"", photo:"images/lsf_chaewon.jpg", startVotes:0 },
  { id:"yunjin_lsf",  name:"허윤진", nameEn:"Huh Yunjin", group:"르세라핌", gender:"female", birthMonth:10, birthDay:8,  bio:"", photo:"images/lsf_yunjin.jpg", startVotes:0 },
  { id:"kazuha_lsf",  name:"카즈하", nameEn:"Kazuha", group:"르세라핌", gender:"female", birthMonth:8,  birthDay:9,  bio:"", photo:"images/lsf_kazuha.jpg", startVotes:0 },
  { id:"eunchae_lsf", name:"홍은채", nameEn:"Hong Eunchae", group:"르세라핌", gender:"female", birthMonth:11, birthDay:11, bio:"", photo:"images/lsf_eunchae.jpg", startVotes:0 },

  /* ───────── 보이넥스트도어 (보이즈) ───────── */
  { id:"sungho_bnd",  name:"성호", nameEn:"Sungho",   group:"보이넥스트도어", gender:"male", birthMonth:9,  birthDay:4,  bio:"", photo:"images/bnd_sungho.jpg", startVotes:0 },
  { id:"riwoo_bnd",   name:"리우", nameEn:"Riwoo",   group:"보이넥스트도어", gender:"male", birthMonth:10, birthDay:22, bio:"", photo:"images/bnd_riwoo.jpg", startVotes:0 },
  { id:"jaehyun_bnd", name:"명재현", nameEn:"Jaehyun", group:"보이넥스트도어", gender:"male", birthMonth:12, birthDay:4,  bio:"", photo:"images/bnd_jaehyun.jpg", startVotes:0 },
  { id:"taesan_bnd",  name:"태산", nameEn:"Taesan",   group:"보이넥스트도어", gender:"male", birthMonth:8,  birthDay:10, bio:"", photo:"images/bnd_taesan.jpg", startVotes:0 },
  { id:"leehan_bnd",  name:"이한", nameEn:"Leehan",   group:"보이넥스트도어", gender:"male", birthMonth:10, birthDay:20, bio:"", photo:"images/bnd_leehan.jpg", startVotes:0 },
  { id:"woonhak_bnd", name:"운학", nameEn:"Woonhak",   group:"보이넥스트도어", gender:"male", birthMonth:11, birthDay:29, bio:"", photo:"images/bnd_woonhak.jpg", startVotes:0 },

  /* ───────── 투어스 (보이즈) ───────── */
  { id:"shinyu_tws",  name:"신유", nameEn:"Shinyu",   group:"투어스", gender:"male", birthMonth:11, birthDay:7,  bio:"", photo:"images/tws_shinyu.jpg", startVotes:0 },
  { id:"dohoon_tws",  name:"도훈", nameEn:"Dohoon",   group:"투어스", gender:"male", birthMonth:1,  birthDay:30, bio:"", photo:"images/tws_dohoon.jpg", startVotes:0 },
  { id:"youngjae_tws",name:"영재", nameEn:"Youngjae",   group:"투어스", gender:"male", birthMonth:5,  birthDay:31, bio:"", photo:"images/tws_youngjae.jpg", startVotes:0 },
  { id:"hanjin_tws",  name:"한진", nameEn:"Hanjin",   group:"투어스", gender:"male", birthMonth:1,  birthDay:5,  bio:"", photo:"images/tws_hanjin.jpg", startVotes:0 },
  { id:"jihoon_tws",  name:"지훈", nameEn:"Jihoon",   group:"투어스", gender:"male", birthMonth:3,  birthDay:28, bio:"", photo:"images/tws_jihoon.jpg", startVotes:0 },
  { id:"kyungmin_tws",name:"경민", nameEn:"Kyungmin",   group:"투어스", gender:"male", birthMonth:10, birthDay:2,  bio:"", photo:"images/tws_kyungmin.jpg", startVotes:0 },

  /* ───────── 뉴진스 (걸즈) ───────── */
  { id:"minji_njz",   name:"민지", nameEn:"Minji",   group:"뉴진스", gender:"female", birthMonth:5,  birthDay:7,  bio:"", photo:"images/njz_minji.jpg", startVotes:0 },
  { id:"hanni_njz",   name:"하니", nameEn:"Hanni",   group:"뉴진스", gender:"female", birthMonth:10, birthDay:6,  bio:"", photo:"images/njz_hanni.jpg", startVotes:0 },
  { id:"danielle_njz",name:"다니엘", nameEn:"Danielle", group:"뉴진스", gender:"female", birthMonth:4,  birthDay:11, bio:"", photo:"images/njz_danielle.jpg", startVotes:0 },
  { id:"haerin_njz",  name:"해린", nameEn:"Haerin",   group:"뉴진스", gender:"female", birthMonth:5,  birthDay:15, bio:"", photo:"images/njz_haerin.jpg", startVotes:0 },
  { id:"hyein_njz",   name:"혜인", nameEn:"Hyein",   group:"뉴진스", gender:"female", birthMonth:4,  birthDay:21, bio:"", photo:"images/njz_hyein.jpg", startVotes:0 },

  /* ───────── 방탄소년단 (보이즈) · 특이사항 없음 ───────── */
  { id:"rm_bts",      name:"RM", nameEn:"RM",   group:"방탄소년단", gender:"male", birthMonth:9,  birthDay:12, bio:"", photo:"images/bts_rm.jpg", startVotes:0 },
  { id:"jin_bts",     name:"진", nameEn:"Jin",   group:"방탄소년단", gender:"male", birthMonth:12, birthDay:4,  bio:"", photo:"images/bts_jin.jpg", startVotes:0 },
  { id:"suga_bts",    name:"슈가", nameEn:"SUGA", group:"방탄소년단", gender:"male", birthMonth:3,  birthDay:9,  bio:"", photo:"images/bts_suga.jpg", startVotes:0 },
  { id:"jhope_bts",   name:"제이홉", nameEn:"j-hope",group:"방탄소년단", gender:"male", birthMonth:2,  birthDay:18, bio:"", photo:"images/bts_jhope.jpg", startVotes:0 },
  { id:"jimin_bts",   name:"지민", nameEn:"Jimin", group:"방탄소년단", gender:"male", birthMonth:10, birthDay:13, bio:"", photo:"images/bts_jimin.jpg", startVotes:0 },
  { id:"v_bts",       name:"뷔", nameEn:"V",   group:"방탄소년단", gender:"male", birthMonth:12, birthDay:30, bio:"", photo:"images/bts_v.jpg", startVotes:0 },
  { id:"jungkook_bts",name:"정국", nameEn:"Jungkook", group:"방탄소년단", gender:"male", birthMonth:9,  birthDay:1,  bio:"", photo:"images/bts_jungkook.jpg", startVotes:0 },

  /* ───────── BABYMONSTER (걸즈) · 생일 확인 필요 ───────── */
  { id:"ruka_bm",     name:"루카", nameEn:"Ruka",   group:"BABYMONSTER", gender:"female", birthMonth:3, birthDay:20, bio:"", photo:"images/bm_ruka.jpg", startVotes:0 },
  { id:"pharita_bm",  name:"파리타", nameEn:"Pharita", group:"BABYMONSTER", gender:"female", birthMonth:8, birthDay:26, bio:"", photo:"images/bm_pharita.jpg", startVotes:0 },
  { id:"asa_bm",      name:"아사", nameEn:"Asa",   group:"BABYMONSTER", gender:"female", birthMonth:4, birthDay:17, bio:"", photo:"images/bm_asa.jpg", startVotes:0 },
  { id:"ahyeon_bm",   name:"아현", nameEn:"Ahyeon",   group:"BABYMONSTER", gender:"female", birthMonth:4, birthDay:11, bio:"", photo:"images/bm_ahyeon.jpg", startVotes:0 },
  { id:"rami_bm",     name:"라미", nameEn:"Rami",   group:"BABYMONSTER", gender:"female", birthMonth:10, birthDay:17, bio:"", photo:"images/bm_rami.jpg", startVotes:0 },
  { id:"rora_bm",     name:"로라", nameEn:"Rora",   group:"BABYMONSTER", gender:"female", birthMonth:8, birthDay:14, bio:"", photo:"images/bm_rora.jpg", startVotes:0 },
  { id:"chiquita_bm", name:"치키타", nameEn:"Chiquita", group:"BABYMONSTER", gender:"female", birthMonth:2, birthDay:17, bio:"", photo:"images/bm_chiquita.jpg", startVotes:0 },

  /* ───────── TREASURE (보이즈) · 예담·마시호 탈퇴→제외 · 생일 확인 완료 ───────── */
  { id:"hyunsuk_tre", name:"최현석", nameEn:"Choi Hyunsuk", group:"TREASURE", gender:"male", birthMonth:4,  birthDay:21, bio:"", photo:"images/tre_hyunsuk.jpg", startVotes:0 },

  { id:"jihoon_tre",  name:"지훈", nameEn:"Jihoon",   group:"TREASURE", gender:"male", birthMonth:3,  birthDay:14, bio:"", photo:"images/tre_jihoon.jpg", startVotes:0 },

  { id:"yoshi_tre",   name:"요시", nameEn:"Yoshi",   group:"TREASURE", gender:"male", birthMonth:5,  birthDay:15, bio:"", photo:"images/tre_yoshi.jpg", startVotes:0 },

  { id:"junkyu_tre",  name:"준규", nameEn:"Junkyu",   group:"TREASURE", gender:"male", birthMonth:9,  birthDay:9,  bio:"", photo:"images/tre_junkyu.jpg", startVotes:0 },

  { id:"jaehyuk_tre", name:"윤재혁", nameEn:"Yoon Jaehyuk", group:"TREASURE", gender:"male", birthMonth:7,  birthDay:23, bio:"", photo:"images/tre_jaehyuk.jpg", startVotes:0 },

  { id:"asahi_tre",   name:"아사히", nameEn:"Asahi", group:"TREASURE", gender:"male", birthMonth:8,  birthDay:20, bio:"", photo:"images/tre_asahi.jpg", startVotes:0 },

  { id:"doyoung_tre", name:"도영(TREASURE)", nameEn:"Doyoung",   group:"TREASURE", gender:"male", birthMonth:12, birthDay:4,  bio:"", photo:"images/tre_doyoung.jpg", startVotes:0 },

  { id:"haruto_tre",  name:"하루토", nameEn:"Haruto", group:"TREASURE", gender:"male", birthMonth:4,  birthDay:5,  bio:"", photo:"images/tre_haruto.jpg", startVotes:0 },

  { id:"jeongwoo_tre",name:"박정우", nameEn:"Park Jeongwoo", group:"TREASURE", gender:"male", birthMonth:9,  birthDay:28, bio:"", photo:"images/tre_jeongwoo.jpg", startVotes:0 },

  { id:"junghwan_tre",name:"소정환", nameEn:"So Junghwan", group:"TREASURE", gender:"male", birthMonth:2,  birthDay:18, bio:"", photo:"images/tre_junghwan.jpg", startVotes:0 },


  /* ───────── 투모로우바이투게더 (보이즈) · 특이사항 없음 ───────── */
  { id:"yeonjun_txt",  name:"연준", nameEn:"Yeonjun",   group:"투모로우바이투게더", gender:"male", birthMonth:9,  birthDay:13, bio:"", photo:"images/txt_yeonjun.jpg", startVotes:0 },
  { id:"soobin_txt",   name:"수빈", nameEn:"Soobin",   group:"투모로우바이투게더", gender:"male", birthMonth:12, birthDay:5,  bio:"", photo:"images/txt_soobin.jpg", startVotes:0 },
  { id:"beomgyu_txt",  name:"범규", nameEn:"Beomgyu",   group:"투모로우바이투게더", gender:"male", birthMonth:3,  birthDay:13, bio:"", photo:"images/txt_beomgyu.jpg", startVotes:0 },
  { id:"taehyun_txt",  name:"태현", nameEn:"Taehyun",   group:"투모로우바이투게더", gender:"male", birthMonth:2,  birthDay:5,  bio:"", photo:"images/txt_taehyun.jpg", startVotes:0 },
  { id:"hueningkai_txt",name:"휴닝카이", nameEn:"Huening Kai",group:"투모로우바이투게더", gender:"male", birthMonth:8,  birthDay:14, bio:"", photo:"images/txt_hueningkai.jpg", startVotes:0 },

  /* ───────── CORTIS (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"james_cortis",   name:"제임스", nameEn:"James", group:"CORTIS", gender:"male", birthMonth:10, birthDay:14, bio:"", photo:"images/cortis_james.jpg", startVotes:0 },
  { id:"juhoon_cortis",  name:"주훈", nameEn:"Juhoon",   group:"CORTIS", gender:"male", birthMonth:1,  birthDay:3,  bio:"", photo:"images/cortis_juhoon.jpg", startVotes:0 },
  { id:"martin_cortis",  name:"마틴", nameEn:"Martin",   group:"CORTIS", gender:"male", birthMonth:3,  birthDay:20, bio:"", photo:"images/cortis_martin.jpg", startVotes:0 },
  { id:"seonghyeon_cortis",name:"성현", nameEn:"Seonghyeon", group:"CORTIS", gender:"male", birthMonth:1,  birthDay:13, bio:"", photo:"images/cortis_seonghyeon.jpg", startVotes:0 },
  { id:"keonho_cortis",  name:"건호", nameEn:"Keonho",   group:"CORTIS", gender:"male", birthMonth:2,  birthDay:14, bio:"", photo:"images/cortis_keonho.jpg", startVotes:0 },

  /* ───────── 세븐틴 (보이즈) · 특이사항 없음 ───────── */
  { id:"scoups_svt",   name:"에스쿱스", nameEn:"S.Coups", group:"세븐틴", gender:"male", birthMonth:8,  birthDay:8,  bio:"", photo:"images/svt_scoups.jpg", startVotes:0 },
  { id:"jeonghan_svt", name:"정한", nameEn:"Jeonghan",    group:"세븐틴", gender:"male", birthMonth:10, birthDay:4,  bio:"", photo:"images/svt_jeonghan.jpg", startVotes:0 },
  { id:"joshua_svt",   name:"조슈아", nameEn:"Joshua",  group:"세븐틴", gender:"male", birthMonth:12, birthDay:30, bio:"", photo:"images/svt_joshua.jpg", startVotes:0 },
  { id:"jun_svt",      name:"준", nameEn:"Jun",      group:"세븐틴", gender:"male", birthMonth:6,  birthDay:10, bio:"", photo:"images/svt_jun.jpg", startVotes:0 },
  { id:"hoshi_svt",    name:"호시", nameEn:"Hoshi",    group:"세븐틴", gender:"male", birthMonth:6,  birthDay:15, bio:"", photo:"images/svt_hoshi.jpg", startVotes:0 },
  { id:"wonwoo_svt",   name:"원우", nameEn:"Wonwoo",    group:"세븐틴", gender:"male", birthMonth:7,  birthDay:17, bio:"", photo:"images/svt_wonwoo.jpg", startVotes:0 },
  { id:"woozi_svt",    name:"우지", nameEn:"Woozi",    group:"세븐틴", gender:"male", birthMonth:11, birthDay:22, bio:"", photo:"images/svt_woozi.jpg", startVotes:0 },
  { id:"the8_svt",     name:"디에잇", nameEn:"The8",  group:"세븐틴", gender:"male", birthMonth:11, birthDay:7,  bio:"", photo:"images/svt_the8.jpg", startVotes:0 },
  { id:"mingyu_svt",   name:"민규", nameEn:"Mingyu",    group:"세븐틴", gender:"male", birthMonth:4,  birthDay:6,  bio:"", photo:"images/svt_mingyu.jpg", startVotes:0 },
  { id:"dk_svt",       name:"도겸", nameEn:"DK",    group:"세븐틴", gender:"male", birthMonth:2,  birthDay:18, bio:"", photo:"images/svt_dk.jpg", startVotes:0 },
  { id:"seungkwan_svt",name:"승관", nameEn:"Seungkwan",    group:"세븐틴", gender:"male", birthMonth:1,  birthDay:16, bio:"", photo:"images/svt_seungkwan.jpg", startVotes:0 },
  { id:"vernon_svt",   name:"버논", nameEn:"Vernon",    group:"세븐틴", gender:"male", birthMonth:2,  birthDay:18, bio:"", photo:"images/svt_vernon.jpg", startVotes:0 },
  { id:"dino_svt",     name:"디노", nameEn:"Dino",    group:"세븐틴", gender:"male", birthMonth:2,  birthDay:11, bio:"", photo:"images/svt_dino.jpg", startVotes:0 },

  /* ───────── 엔하이픈 (보이즈) · 희승 탈퇴→솔로, 현재 6인 ───────── */
  { id:"jungwon_enha", name:"정원", nameEn:"Jungwon",   group:"엔하이픈", gender:"male", birthMonth:2,  birthDay:9,  bio:"", photo:"images/enha_jungwon.jpg", startVotes:0 },
  { id:"jay_enha",     name:"제이", nameEn:"Jay",   group:"엔하이픈", gender:"male", birthMonth:4,  birthDay:20, bio:"", photo:"images/enha_jay.jpg", startVotes:0 },
  { id:"jake_enha",    name:"제이크", nameEn:"Jake", group:"엔하이픈", gender:"male", birthMonth:11, birthDay:15, bio:"", photo:"images/enha_jake.jpg", startVotes:0 },
  { id:"sunghoon_enha",name:"성훈", nameEn:"Sunghoon",   group:"엔하이픈", gender:"male", birthMonth:12, birthDay:8,  bio:"", photo:"images/enha_sunghoon.jpg", startVotes:0 },
  { id:"sunoo_enha",   name:"선우(엔하이픈)", nameEn:"Sunoo",   group:"엔하이픈", gender:"male", birthMonth:6,  birthDay:24, bio:"", photo:"images/enha_sunoo.jpg", startVotes:0 },
  { id:"niki_enha",    name:"니키", nameEn:"Ni-ki",   group:"엔하이픈", gender:"male", birthMonth:12, birthDay:9,  bio:"", photo:"images/enha_niki.jpg", startVotes:0 },

  /* ───────── ILLIT (걸즈) · 특이사항 없음 ───────── */
  { id:"yunah_illit", name:"윤아(ILLIT)", nameEn:"Yunah",   group:"ILLIT", gender:"female", birthMonth:1,  birthDay:15, bio:"", photo:"images/illit_yunah.jpg", startVotes:0 },
  { id:"minju_illit", name:"민주", nameEn:"Minju",   group:"ILLIT", gender:"female", birthMonth:5,  birthDay:11, bio:"", photo:"images/illit_minju.jpg", startVotes:0 },
  { id:"moka_illit",  name:"모카", nameEn:"Moka",   group:"ILLIT", gender:"female", birthMonth:10, birthDay:8,  bio:"", photo:"images/illit_moka.jpg", startVotes:0 },
  { id:"wonhee_illit",name:"원희", nameEn:"Wonhee",   group:"ILLIT", gender:"female", birthMonth:6,  birthDay:26, bio:"", photo:"images/illit_wonhee.jpg", startVotes:0 },
  { id:"iroha_illit", name:"이로하", nameEn:"Iroha", group:"ILLIT", gender:"female", birthMonth:2,  birthDay:4,  bio:"", photo:"images/illit_iroha.jpg", startVotes:0 },

  /* ───────── 몬스타엑스 (보이즈) · 원호 탈퇴→제외, 현재 6인 ───────── */
  { id:"shownu_mx",   name:"셔누", nameEn:"Shownu",   group:"몬스타엑스", gender:"male", birthMonth:6,  birthDay:18, bio:"", photo:"images/mx_shownu.jpg", startVotes:0 },
  { id:"minhyuk_mx",  name:"민혁", nameEn:"Minhyuk",   group:"몬스타엑스", gender:"male", birthMonth:11, birthDay:3,  bio:"", photo:"images/mx_minhyuk.jpg", startVotes:0 },
  { id:"kihyun_mx",   name:"기현", nameEn:"Kihyun",   group:"몬스타엑스", gender:"male", birthMonth:11, birthDay:22, bio:"", photo:"images/mx_kihyun.jpg", startVotes:0 },
  { id:"hyungwon_mx", name:"형원", nameEn:"Hyungwon",   group:"몬스타엑스", gender:"male", birthMonth:1,  birthDay:15, bio:"", photo:"images/mx_hyungwon.jpg", startVotes:0 },
  { id:"joohoney_mx", name:"주헌", nameEn:"Joohoney",   group:"몬스타엑스", gender:"male", birthMonth:10, birthDay:6,  bio:"", photo:"images/mx_joohoney.jpg", startVotes:0 },
  { id:"im_mx",       name:"아이엠", nameEn:"I.M", group:"몬스타엑스", gender:"male", birthMonth:1,  birthDay:26, bio:"", photo:"images/mx_im.jpg", startVotes:0 },

  /* ───────── CRAVITY (보이즈) · 특이사항 없음 ───────── */
  { id:"serim_cravity",  name:"세림", nameEn:"Serim", group:"CRAVITY", gender:"male", birthMonth:3,  birthDay:3,  bio:"", photo:"images/cravity_serim.jpg", startVotes:0 },
  { id:"allen_cravity",  name:"앨런", nameEn:"Allen", group:"CRAVITY", gender:"male", birthMonth:4,  birthDay:26, bio:"", photo:"images/cravity_allen.jpg", startVotes:0 },
  { id:"jungmo_cravity", name:"정모", nameEn:"Jungmo", group:"CRAVITY", gender:"male", birthMonth:2,  birthDay:5,  bio:"", photo:"images/cravity_jungmo.jpg", startVotes:0 },
  { id:"woobin_cravity", name:"우빈", nameEn:"Woobin", group:"CRAVITY", gender:"male", birthMonth:10, birthDay:16, bio:"", photo:"images/cravity_woobin.jpg", startVotes:0 },
  { id:"wonjin_cravity", name:"원진", nameEn:"Wonjin", group:"CRAVITY", gender:"male", birthMonth:3,  birthDay:22, bio:"", photo:"images/cravity_wonjin.jpg", startVotes:0 },
  { id:"minhee_cravity", name:"민희", nameEn:"Minhee", group:"CRAVITY", gender:"male", birthMonth:9,  birthDay:17, bio:"", photo:"images/cravity_minhee.jpg", startVotes:0 },
  { id:"hyeongjun_cravity",name:"형준", nameEn:"Hyeongjun",group:"CRAVITY", gender:"male", birthMonth:11, birthDay:30, bio:"", photo:"images/cravity_hyeongjun.jpg", startVotes:0 },
  { id:"taeyoung_cravity",name:"태영", nameEn:"Taeyoung",group:"CRAVITY", gender:"male", birthMonth:1,  birthDay:27, bio:"", photo:"images/cravity_taeyoung.jpg", startVotes:0 },
  { id:"seongmin_cravity",name:"성민", nameEn:"Seongmin",group:"CRAVITY", gender:"male", birthMonth:8,  birthDay:1,  bio:"", photo:"images/cravity_seongmin.jpg", startVotes:0 },

  /* ───────── IVE (걸즈) · 특이사항 없음 ───────── */
  { id:"anyujin_ive", name:"안유진", nameEn:"An Yujin", group:"IVE", gender:"female", birthMonth:9,  birthDay:1,  bio:"", photo:"images/ive_anyujin.jpg", startVotes:0 },
  { id:"gaeul_ive",   name:"가을", nameEn:"Gaeul",   group:"IVE", gender:"female", birthMonth:9,  birthDay:24, bio:"", photo:"images/ive_gaeul.jpg", startVotes:0 },
  { id:"rei_ive",     name:"레이(IVE)", nameEn:"Rei",   group:"IVE", gender:"female", birthMonth:2,  birthDay:3,  bio:"", photo:"images/ive_rei.jpg", startVotes:0 },
  { id:"wonyoung_ive",name:"장원영", nameEn:"Jang Wonyoung", group:"IVE", gender:"female", birthMonth:8,  birthDay:31, bio:"", photo:"images/ive_wonyoung.jpg", startVotes:0 },
  { id:"liz_ive",     name:"리즈", nameEn:"Liz",   group:"IVE", gender:"female", birthMonth:11, birthDay:21, bio:"", photo:"images/ive_liz.jpg", startVotes:0 },
  { id:"leeseo_ive",  name:"이서", nameEn:"Leeseo",   group:"IVE", gender:"female", birthMonth:2,  birthDay:21, bio:"", photo:"images/ive_leeseo.jpg", startVotes:0 },

  /* ───────── KiiiKiii (걸즈) · 신인, 특이사항 없음 ───────── */
  { id:"jiyu_kiiikiii",name:"지유", nameEn:"Jiyu",  group:"KiiiKiii", gender:"female", birthMonth:5,  birthDay:14, bio:"", photo:"images/kiiikiii_jiyu.jpg", startVotes:0 },
  { id:"isol_kiiikiii",name:"이솔", nameEn:"Isol",  group:"KiiiKiii", gender:"female", birthMonth:9,  birthDay:18, bio:"", photo:"images/kiiikiii_isol.jpg", startVotes:0 },
  { id:"sui_kiiikiii", name:"수이(KiiiKiii)", nameEn:"Sui",  group:"KiiiKiii", gender:"female", birthMonth:4,  birthDay:10, bio:"", photo:"images/kiiikiii_sui.jpg", startVotes:0 },
  { id:"haum_kiiikiii",name:"하음", nameEn:"Haum",  group:"KiiiKiii", gender:"female", birthMonth:11, birthDay:14, bio:"", photo:"images/kiiikiii_haum.jpg", startVotes:0 },
  { id:"kya_kiiikiii", name:"키야", nameEn:"Kya",  group:"KiiiKiii", gender:"female", birthMonth:12, birthDay:18, bio:"", photo:"images/kiiikiii_kya.jpg", startVotes:0 },

  /* ───────── IDID (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"yonghoon_idid", name:"장용훈", nameEn:"Jang Yonghoon", group:"IDID", gender:"male", birthMonth:4,  birthDay:20, bio:"", photo:"images/idid_yonghoon.jpg", startVotes:0 },
  { id:"minjae_idid",   name:"김민재", nameEn:"Kim Minjae", group:"IDID", gender:"male", birthMonth:8,  birthDay:17, bio:"", photo:"images/idid_minjae.jpg", startVotes:0 },
  { id:"wonbin_idid",   name:"박원빈", nameEn:"Park Wonbin", group:"IDID", gender:"male", birthMonth:4,  birthDay:19, bio:"", photo:"images/idid_wonbin.jpg", startVotes:0 },
  { id:"yuchan_idid",   name:"추유찬", nameEn:"Chu Yuchan", group:"IDID", gender:"male", birthMonth:10, birthDay:3,  bio:"", photo:"images/idid_yuchan.jpg", startVotes:0 },
  { id:"seonghyeon_idid",name:"박성현", nameEn:"Park Seonghyeon",group:"IDID", gender:"male", birthMonth:10, birthDay:5,  bio:"", photo:"images/idid_seonghyeon.jpg", startVotes:0 },
  { id:"junhyeok_idid", name:"백준혁", nameEn:"Baek Junhyeok", group:"IDID", gender:"male", birthMonth:6,  birthDay:7,  bio:"", photo:"images/idid_junhyeok.jpg", startVotes:0 },
  { id:"semin_idid",    name:"정세민", nameEn:"Jung Semin", group:"IDID", gender:"male", birthMonth:10, birthDay:10, bio:"", photo:"images/idid_semin.jpg", startVotes:0 },

  /* ───────── MEOVV (걸즈) · 신인, 특이사항 없음 ───────── */
  { id:"sooin_meovv", name:"수인", nameEn:"Sooin", group:"MEOVV", gender:"female", birthMonth:4,  birthDay:12, bio:"", photo:"images/meovv_sooin.jpg", startVotes:0 },
  { id:"gawon_meovv", name:"가원", nameEn:"Gawon", group:"MEOVV", gender:"female", birthMonth:4,  birthDay:27, bio:"", photo:"images/meovv_gawon.jpg", startVotes:0 },
  { id:"anna_meovv",  name:"안나", nameEn:"Anna", group:"MEOVV", gender:"female", birthMonth:11, birthDay:17, bio:"", photo:"images/meovv_anna.jpg", startVotes:0 },
  { id:"narin_meovv", name:"나린", nameEn:"Narin", group:"MEOVV", gender:"female", birthMonth:8,  birthDay:15, bio:"", photo:"images/meovv_narin.jpg", startVotes:0 },
  { id:"ella_meovv",  name:"엘라", nameEn:"Ella", group:"MEOVV", gender:"female", birthMonth:12, birthDay:1,  bio:"", photo:"images/meovv_ella.jpg", startVotes:0 },

  /* ───────── ALLDAY PROJECT (혼성) · 신인, 특이사항 없음 ───────── */
  { id:"annie_allday",  name:"애니", nameEn:"Annie", group:"ALLDAY PROJECT", gender:"female", birthMonth:1,  birthDay:23, bio:"", photo:"images/allday_annie.jpg", startVotes:0 },
  { id:"tarzan_allday", name:"타잔", nameEn:"Tarzan", group:"ALLDAY PROJECT", gender:"male",   birthMonth:9,  birthDay:27, bio:"", photo:"images/allday_tarzan.jpg", startVotes:0 },
  { id:"bailey_allday", name:"베일리", nameEn:"Bailey",group:"ALLDAY PROJECT", gender:"female", birthMonth:2,  birthDay:24, bio:"", photo:"images/allday_bailey.jpg", startVotes:0 },
  { id:"woochan_allday",name:"우찬", nameEn:"Woochan", group:"ALLDAY PROJECT", gender:"male",   birthMonth:1,  birthDay:20, bio:"", photo:"images/allday_woochan.jpg", startVotes:0 },
  { id:"youngseo_allday",name:"영서", nameEn:"Youngseo",group:"ALLDAY PROJECT", gender:"female", birthMonth:11, birthDay:13, bio:"", photo:"images/allday_youngseo.jpg", startVotes:0 },

  /* ───────── Kep1er (걸즈) · 명부에 올린 6인 ───────── */
  { id:"yujin_kep1er",   name:"최유진", nameEn:"Choi Yujin",   group:"Kep1er", gender:"female", birthMonth:8,  birthDay:12, bio:"", photo:"images/kep1er_yujin.jpg", startVotes:0 },
  { id:"xiaoting_kep1er",name:"샤오팅", nameEn:"Xiaoting",   group:"Kep1er", gender:"female", birthMonth:11, birthDay:12, bio:"", photo:"images/kep1er_xiaoting.jpg", startVotes:0 },
  { id:"chaehyun_kep1er",name:"김채현", nameEn:"Kim Chaehyun",   group:"Kep1er", gender:"female", birthMonth:4,  birthDay:26, bio:"", photo:"images/kep1er_chaehyun.jpg", startVotes:0 },
  { id:"dayeon_kep1er",  name:"김다연", nameEn:"Kim Dayeon",   group:"Kep1er", gender:"female", birthMonth:3,  birthDay:2,  bio:"", photo:"images/kep1er_dayeon.jpg", startVotes:0 },
  { id:"hikaru_kep1er",  name:"히카루", nameEn:"Hikaru",   group:"Kep1er", gender:"female", birthMonth:3,  birthDay:12, bio:"", photo:"images/kep1er_hikaru.jpg", startVotes:0 },
  { id:"bahiyyih_kep1er",name:"휴닝바히에", nameEn:"Bahiyyih",group:"Kep1er", gender:"female", birthMonth:7,  birthDay:27, bio:"", photo:"images/kep1er_bahiyyih.jpg", startVotes:0 },

  /* ───────── izna (걸즈) · 윤지윤 탈퇴→제외, 현재 6인 ───────── */
  { id:"mai_izna",      name:"마이", nameEn:"Mai",   group:"izna", gender:"female", birthMonth:10, birthDay:28, bio:"", photo:"images/izna_mai.jpg", startVotes:0 },
  { id:"jimin_izna",    name:"방지민", nameEn:"Bang Jimin", group:"izna", gender:"female", birthMonth:5,  birthDay:8,  bio:"", photo:"images/izna_jimin.jpg", startVotes:0 },
  { id:"koko_izna",     name:"코코", nameEn:"Koko",   group:"izna", gender:"female", birthMonth:11, birthDay:14, bio:"", photo:"images/izna_koko.jpg", startVotes:0 },
  { id:"sarang_izna",   name:"유사랑", nameEn:"Yoo Sarang", group:"izna", gender:"female", birthMonth:4,  birthDay:18, bio:"", photo:"images/izna_sarang.jpg", startVotes:0 },
  { id:"jeongeun_izna", name:"최정은", nameEn:"Choi Jeongeun", group:"izna", gender:"female", birthMonth:8,  birthDay:4,  bio:"", photo:"images/izna_jeongeun.jpg", startVotes:0 },
  { id:"sebi_izna",     name:"정세비", nameEn:"Jung Sebi", group:"izna", gender:"female", birthMonth:1,  birthDay:22, bio:"", photo:"images/izna_sebi.jpg", startVotes:0 },

  /* ───────── ALPHA DRIVE ONE (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"rio_ado",      name:"리오", nameEn:"Rio",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:8,  birthDay:22, bio:"", photo:"images/ado_rio.jpg", startVotes:0 },
  { id:"junseo_ado",   name:"준서(ALPHA DRIVE ONE)", nameEn:"Junseo",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:11, birthDay:20, bio:"", photo:"images/ado_junseo.jpg", startVotes:0 },
  { id:"arno_ado",     name:"아르노", nameEn:"Arno",group:"ALPHA DRIVE ONE", gender:"male", birthMonth:7,  birthDay:7,  bio:"", photo:"images/ado_arno.jpg", startVotes:0 },
  { id:"geonu_ado",    name:"건우", nameEn:"Geonu",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:4,  birthDay:11, bio:"", photo:"images/ado_geonu.jpg", startVotes:0 },
  { id:"sangwon_ado",  name:"상원", nameEn:"Sangwon",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:5,  birthDay:8,  bio:"", photo:"images/ado_sangwon.jpg", startVotes:0 },
  { id:"sinlong_ado",  name:"씬롱", nameEn:"Sinlong",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:3,  birthDay:11, bio:"", photo:"images/ado_sinlong.jpg", startVotes:0 },
  { id:"anshin_ado",   name:"안신", nameEn:"Anshin",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:12, birthDay:25, bio:"", photo:"images/ado_anshin.jpg", startVotes:0 },
  { id:"sanghyeon_ado",name:"상현", nameEn:"Sanghyeon",  group:"ALPHA DRIVE ONE", gender:"male", birthMonth:9,  birthDay:19, bio:"", photo:"images/ado_sanghyeon.jpg", startVotes:0 },

  /* ───────── 아이들 (걸즈) · 전 멤버 제외, 현재 5인 ───────── */
  { id:"miyeon_gidle", name:"미연", nameEn:"Miyeon", group:"아이들", gender:"female", birthMonth:1,  birthDay:31, bio:"", photo:"images/gidle_miyeon.jpg", startVotes:0 },
  { id:"minnie_gidle", name:"민니", nameEn:"Minnie", group:"아이들", gender:"female", birthMonth:10, birthDay:23, bio:"", photo:"images/gidle_minnie.jpg", startVotes:0 },
  { id:"soyeon_gidle", name:"소연", nameEn:"Soyeon", group:"아이들", gender:"female", birthMonth:8,  birthDay:26, bio:"", photo:"images/gidle_soyeon.jpg", startVotes:0 },
  { id:"yuqi_gidle",   name:"우기", nameEn:"Yuqi", group:"아이들", gender:"female", birthMonth:9,  birthDay:23, bio:"", photo:"images/gidle_yuqi.jpg", startVotes:0 },
  { id:"shuhua_gidle", name:"슈화", nameEn:"Shuhua", group:"아이들", gender:"female", birthMonth:1,  birthDay:6,  bio:"", photo:"images/gidle_shuhua.jpg", startVotes:0 },

  /* ───────── 엔플라잉 (보이즈 밴드) · 전 멤버 제외, 현재 5인 ───────── */
  { id:"seunghyub_nflying",name:"이승협", nameEn:"Lee Seunghyub", group:"엔플라잉", gender:"male", birthMonth:10, birthDay:31, bio:"리더/보컬/기타", photo:"images/nflying_seunghyub.jpg", startVotes:0 },
  { id:"chahun_nflying",   name:"차훈", nameEn:"Cha Hun",   group:"엔플라잉", gender:"male", birthMonth:7,  birthDay:12, bio:"기타", photo:"images/nflying_chahun.jpg", startVotes:0 },
  { id:"jaehyun_nflying",  name:"김재현", nameEn:"Kim Jaehyun", group:"엔플라잉", gender:"male", birthMonth:7,  birthDay:15, bio:"드럼", photo:"images/nflying_jaehyun.jpg", startVotes:0 },
  { id:"hweseung_nflying", name:"유회승", nameEn:"Yoo Hweseung", group:"엔플라잉", gender:"male", birthMonth:2,  birthDay:28, bio:"메인보컬", photo:"images/nflying_hweseung.jpg", startVotes:0 },
  { id:"dongsung_nflying", name:"서동성", nameEn:"Seo Dongsung", group:"엔플라잉", gender:"male", birthMonth:4,  birthDay:9,  bio:"베이스", photo:"images/nflying_dongsung.jpg", startVotes:0 },

  /* ───────── P1Harmony (보이즈) · 특이사항 없음 ───────── */
  { id:"keeho_p1h",   name:"기호", nameEn:"Keeho", group:"P1Harmony", gender:"male", birthMonth:9,  birthDay:27, bio:"", photo:"images/p1h_keeho.jpg", startVotes:0 },
  { id:"theo_p1h",    name:"테오", nameEn:"Theo", group:"P1Harmony", gender:"male", birthMonth:7,  birthDay:1,  bio:"", photo:"images/p1h_theo.jpg", startVotes:0 },
  { id:"jiung_p1h",   name:"지웅", nameEn:"Jiung", group:"P1Harmony", gender:"male", birthMonth:10, birthDay:7,  bio:"", photo:"images/p1h_jiung.jpg", startVotes:0 },
  { id:"intak_p1h",   name:"인탁", nameEn:"Intak", group:"P1Harmony", gender:"male", birthMonth:8,  birthDay:31, bio:"", photo:"images/p1h_intak.jpg", startVotes:0 },
  { id:"soul_p1h",    name:"소울", nameEn:"Soul", group:"P1Harmony", gender:"male", birthMonth:2,  birthDay:1,  bio:"", photo:"images/p1h_soul.jpg", startVotes:0 },
  { id:"jongseob_p1h",name:"종섭", nameEn:"Jongseob", group:"P1Harmony", gender:"male", birthMonth:11, birthDay:19, bio:"", photo:"images/p1h_jongseob.jpg", startVotes:0 },

  /* ───────── 앰퍼샌드원 (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"camden_amp",  name:"나캠든", nameEn:"Camden", group:"앰퍼샌드원", gender:"male", birthMonth:6,  birthDay:9,  bio:"", photo:"images/amp_camden.jpg", startVotes:0 },
  { id:"brian_amp",   name:"브라이언", nameEn:"Brian",group:"앰퍼샌드원", gender:"male", birthMonth:8,  birthDay:27, bio:"", photo:"images/amp_brian.jpg", startVotes:0 },
  { id:"jiho_amp",    name:"최지호", nameEn:"Jiho", group:"앰퍼샌드원", gender:"male", birthMonth:6,  birthDay:10, bio:"", photo:"images/amp_jiho.jpg", startVotes:0 },
  { id:"siyoon_amp",  name:"윤시윤", nameEn:"Siyoon", group:"앰퍼샌드원", gender:"male", birthMonth:1,  birthDay:8,  bio:"", photo:"images/amp_siyoon.jpg", startVotes:0 },
  { id:"kyrell_amp",  name:"카이렐", nameEn:"Kyrell", group:"앰퍼샌드원", gender:"male", birthMonth:7,  birthDay:3,  bio:"", photo:"images/amp_kyrell.jpg", startVotes:0 },
  { id:"makaya_amp",  name:"마카야", nameEn:"Makaya", group:"앰퍼샌드원", gender:"male", birthMonth:1,  birthDay:21, bio:"", photo:"images/amp_makaya.jpg", startVotes:0 },
  { id:"seungmo_amp", name:"김승모", nameEn:"Seungmo", group:"앰퍼샌드원", gender:"male", birthMonth:7,  birthDay:3,  bio:"", photo:"images/amp_seungmo.jpg", startVotes:0 },

  /* ───────── AxMxP (보이즈 밴드) · 신인, 특이사항 없음 ───────── */
  { id:"yujun_axmxp", name:"하유준", nameEn:"Ha Yujun", group:"AxMxP", gender:"male", birthMonth:7,  birthDay:6,  bio:"메인보컬/기타", photo:"images/axmxp_yujun.jpg", startVotes:0 },
  { id:"crew_axmxp",  name:"크루", nameEn:"Crew",   group:"AxMxP", gender:"male", birthMonth:6,  birthDay:27, bio:"드럼", photo:"images/axmxp_crew.jpg", startVotes:0 },
  { id:"shin_axmxp",  name:"김신", nameEn:"Kim Shin",   group:"AxMxP", gender:"male", birthMonth:11, birthDay:22, bio:"기타/보컬", photo:"images/axmxp_shin.jpg", startVotes:0 },
  { id:"juhwan_axmxp",name:"주환", nameEn:"Juhwan",   group:"AxMxP", gender:"male", birthMonth:6,  birthDay:29, bio:"베이스/보컬", photo:"images/axmxp_juhwan.jpg", startVotes:0 },

  /* ───────── 마마무 (걸즈) · 특이사항 없음 ───────── */
  { id:"solar_mamamoo",   name:"솔라", nameEn:"Solar", group:"마마무", gender:"female", birthMonth:2,  birthDay:21, bio:"", photo:"images/mamamoo_solar.jpg", startVotes:0 },
  { id:"moonbyul_mamamoo",name:"문별", nameEn:"Moonbyul", group:"마마무", gender:"female", birthMonth:12, birthDay:22, bio:"", photo:"images/mamamoo_moonbyul.jpg", startVotes:0 },
  { id:"wheein_mamamoo",  name:"휘인", nameEn:"Wheein", group:"마마무", gender:"female", birthMonth:4,  birthDay:17, bio:"", photo:"images/mamamoo_wheein.jpg", startVotes:0 },
  { id:"hwasa_mamamoo",   name:"화사", nameEn:"Hwasa", group:"마마무", gender:"female", birthMonth:7,  birthDay:23, bio:"", photo:"images/mamamoo_hwasa.jpg", startVotes:0 },

  /* ───────── 원위 (보이즈 밴드) · 특이사항 없음 ───────── */
  { id:"yonghoon_onewe",  name:"용훈", nameEn:"Yonghoon", group:"원위", gender:"male", birthMonth:8,  birthDay:17, bio:"리더/기타/메인보컬", photo:"images/onewe_yonghoon.jpg", startVotes:0 },
  { id:"harin_onewe",     name:"하린", nameEn:"Harin", group:"원위", gender:"male", birthMonth:3,  birthDay:29, bio:"드럼", photo:"images/onewe_harin.jpg", startVotes:0 },
  { id:"kanghyun_onewe",  name:"강현", nameEn:"Kanghyun", group:"원위", gender:"male", birthMonth:11, birthDay:24, bio:"기타", photo:"images/onewe_kanghyun.jpg", startVotes:0 },
  { id:"dongmyeong_onewe",name:"동명", nameEn:"Dongmyeong", group:"원위", gender:"male", birthMonth:1,  birthDay:10, bio:"키보드/보컬", photo:"images/onewe_dongmyeong.jpg", startVotes:0 },
  { id:"giuk_onewe",      name:"기욱", nameEn:"Giuk", group:"원위", gender:"male", birthMonth:1,  birthDay:24, bio:"베이스/랩", photo:"images/onewe_giuk.jpg", startVotes:0 },

  /* ───────── YOUNG POSSE (걸즈) · 특이사항 없음 ───────── */
  { id:"sunhye_yp",   name:"정선혜", nameEn:"Sunhye", group:"YOUNG POSSE", gender:"female", birthMonth:4,  birthDay:12, bio:"", photo:"images/yp_sunhye.jpg", startVotes:0 },
  { id:"yeonjung_yp", name:"위연정", nameEn:"Yeonjung", group:"YOUNG POSSE", gender:"female", birthMonth:9,  birthDay:1,  bio:"", photo:"images/yp_yeonjung.jpg", startVotes:0 },
  { id:"jiana_yp",    name:"지아나", nameEn:"Jiana", group:"YOUNG POSSE", gender:"female", birthMonth:2,  birthDay:2,  bio:"", photo:"images/yp_jiana.jpg", startVotes:0 },
  { id:"doeun_yp",    name:"도은", nameEn:"Doeun",   group:"YOUNG POSSE", gender:"female", birthMonth:12, birthDay:24, bio:"", photo:"images/yp_doeun.jpg", startVotes:0 },
  { id:"jieun_yp",    name:"한지은", nameEn:"Jieun", group:"YOUNG POSSE", gender:"female", birthMonth:11, birthDay:5,  bio:"", photo:"images/yp_jieun.jpg", startVotes:0 },

  /* ───────── 슈퍼주니어 (보이즈) · 명부에 올린 9인 ───────── */
  { id:"leeteuk_suju", name:"이특", nameEn:"Leeteuk", group:"슈퍼주니어", gender:"male", birthMonth:7,  birthDay:1,  bio:"", photo:"images/suju_leeteuk.jpg", startVotes:0 },
  { id:"heechul_suju", name:"희철", nameEn:"Heechul", group:"슈퍼주니어", gender:"male", birthMonth:7,  birthDay:10, bio:"", photo:"images/suju_heechul.jpg", startVotes:0 },
  { id:"yesung_suju",  name:"예성", nameEn:"Yesung", group:"슈퍼주니어", gender:"male", birthMonth:8,  birthDay:24, bio:"", photo:"images/suju_yesung.jpg", startVotes:0 },
  { id:"shindong_suju",name:"신동", nameEn:"Shindong", group:"슈퍼주니어", gender:"male", birthMonth:9,  birthDay:28, bio:"", photo:"images/suju_shindong.jpg", startVotes:0 },
  { id:"eunhyuk_suju", name:"은혁", nameEn:"Eunhyuk", group:"슈퍼주니어", gender:"male", birthMonth:4,  birthDay:4,  bio:"", photo:"images/suju_eunhyuk.jpg", startVotes:0 },
  { id:"siwon_suju",   name:"시원", nameEn:"Siwon", group:"슈퍼주니어", gender:"male", birthMonth:4,  birthDay:7,  bio:"", photo:"images/suju_siwon.jpg", startVotes:0 },
  { id:"donghae_suju", name:"동해", nameEn:"Donghae", group:"슈퍼주니어", gender:"male", birthMonth:10, birthDay:15, bio:"", photo:"images/suju_donghae.jpg", startVotes:0 },
  { id:"ryeowook_suju",name:"려욱", nameEn:"Ryeowook", group:"슈퍼주니어", gender:"male", birthMonth:6,  birthDay:21, bio:"", photo:"images/suju_ryeowook.jpg", startVotes:0 },
  { id:"kyuhyun_suju", name:"규현", nameEn:"Kyuhyun", group:"슈퍼주니어", gender:"male", birthMonth:2,  birthDay:3,  bio:"", photo:"images/suju_kyuhyun.jpg", startVotes:0 },

  /* ───────── 오마이걸 (걸즈) · 특이사항 없음 ───────── */
  { id:"hyojung_omg",  name:"효정", nameEn:"Hyojung", group:"오마이걸", gender:"female", birthMonth:7,  birthDay:28, bio:"", photo:"images/omg_hyojung.jpg", startVotes:0 },
  { id:"mimi_omg",     name:"미미", nameEn:"Mimi", group:"오마이걸", gender:"female", birthMonth:5,  birthDay:1,  bio:"", photo:"images/omg_mimi.jpg", startVotes:0 },
  { id:"yooa_omg",     name:"유아", nameEn:"YooA", group:"오마이걸", gender:"female", birthMonth:9,  birthDay:17, bio:"", photo:"images/omg_yooa.jpg", startVotes:0 },
  { id:"seunghee_omg", name:"승희", nameEn:"Seunghee", group:"오마이걸", gender:"female", birthMonth:1,  birthDay:25, bio:"", photo:"images/omg_seunghee.jpg", startVotes:0 },
  { id:"yubin_omg",    name:"유빈", nameEn:"Yubin", group:"오마이걸", gender:"female", birthMonth:9,  birthDay:9,  bio:"", photo:"images/omg_yubin.jpg", startVotes:0 },
  { id:"arin_omg",     name:"아린", nameEn:"Arin", group:"오마이걸", gender:"female", birthMonth:6,  birthDay:18, bio:"", photo:"images/omg_arin.jpg", startVotes:0 },

  /* ───────── 온앤오프 (보이즈) · 명부에 올린 6인 ───────── */
  { id:"hyojin_onf",   name:"효진", nameEn:"Hyojin",   group:"온앤오프", gender:"male", birthMonth:4,  birthDay:22, bio:"", photo:"images/onf_hyojin.jpg", startVotes:0 },
  { id:"etion_onf",    name:"이션", nameEn:"E-Tion",   group:"온앤오프", gender:"male", birthMonth:12, birthDay:24, bio:"", photo:"images/onf_etion.jpg", startVotes:0 },
  { id:"mk_onf",       name:"민균", nameEn:"MK",   group:"온앤오프", gender:"male", birthMonth:11, birthDay:16, bio:"", photo:"images/onf_mk.jpg", startVotes:0 },
  { id:"seungjun_onf", name:"승준", nameEn:"Seungjun",   group:"온앤오프", gender:"male", birthMonth:1,  birthDay:13, bio:"", photo:"images/onf_seungjun.jpg", startVotes:0 },
  { id:"wyatt_onf",    name:"와이엇", nameEn:"Wyatt", group:"온앤오프", gender:"male", birthMonth:1,  birthDay:23, bio:"", photo:"images/onf_wyatt.jpg", startVotes:0 },
  { id:"yuto_onf",     name:"유토", nameEn:"Yuto",   group:"온앤오프", gender:"male", birthMonth:3,  birthDay:16, bio:"", photo:"images/onf_yuto.jpg", startVotes:0 },

  /* ───────── ATEEZ (보이즈) · 특이사항 없음 ───────── */
  { id:"hongjoong_ateez",name:"홍중", nameEn:"Hongjoong", group:"ATEEZ", gender:"male", birthMonth:11, birthDay:7,  bio:"", photo:"images/ateez_hongjoong.jpg", startVotes:0 },
  { id:"seonghwa_ateez", name:"성화", nameEn:"Seonghwa", group:"ATEEZ", gender:"male", birthMonth:4,  birthDay:3,  bio:"", photo:"images/ateez_seonghwa.jpg", startVotes:0 },
  { id:"yunho_ateez",    name:"윤호", nameEn:"Yunho", group:"ATEEZ", gender:"male", birthMonth:3,  birthDay:23, bio:"", photo:"images/ateez_yunho.jpg", startVotes:0 },
  { id:"yeosang_ateez",  name:"여상", nameEn:"Yeosang", group:"ATEEZ", gender:"male", birthMonth:6,  birthDay:15, bio:"", photo:"images/ateez_yeosang.jpg", startVotes:0 },
  { id:"san_ateez",      name:"산", nameEn:"San",   group:"ATEEZ", gender:"male", birthMonth:7,  birthDay:10, bio:"", photo:"images/ateez_san.jpg", startVotes:0 },
  { id:"mingi_ateez",    name:"민기", nameEn:"Mingi", group:"ATEEZ", gender:"male", birthMonth:8,  birthDay:9,  bio:"", photo:"images/ateez_mingi.jpg", startVotes:0 },
  { id:"wooyoung_ateez", name:"우영(ATEEZ)", nameEn:"Wooyoung", group:"ATEEZ", gender:"male", birthMonth:11, birthDay:26, bio:"", photo:"images/ateez_wooyoung.jpg", startVotes:0 },
  { id:"jongho_ateez",   name:"종호", nameEn:"Jongho", group:"ATEEZ", gender:"male", birthMonth:10, birthDay:12, bio:"", photo:"images/ateez_jongho.jpg", startVotes:0 },

  /* ───────── xikers (보이즈) · 특이사항 없음 ───────── */
  { id:"minjae_xikers", name:"민재", nameEn:"Minjae", group:"xikers", gender:"male", birthMonth:4,  birthDay:10, bio:"", photo:"images/xikers_minjae.jpg", startVotes:0 },
  { id:"junmin_xikers", name:"준민", nameEn:"Junmin", group:"xikers", gender:"male", birthMonth:5,  birthDay:24, bio:"", photo:"images/xikers_junmin.jpg", startVotes:0 },
  { id:"sumin_xikers",  name:"수민(xikers)", nameEn:"Sumin", group:"xikers", gender:"male", birthMonth:4,  birthDay:7,  bio:"", photo:"images/xikers_sumin.jpg", startVotes:0 },
  { id:"jinsik_xikers", name:"진식", nameEn:"Jinsik", group:"xikers", gender:"male", birthMonth:7,  birthDay:30, bio:"", photo:"images/xikers_jinsik.jpg", startVotes:0 },
  { id:"hyunwoo_xikers",name:"현우", nameEn:"Hyunwoo", group:"xikers", gender:"male", birthMonth:12, birthDay:4,  bio:"", photo:"images/xikers_hyunwoo.jpg", startVotes:0 },
  { id:"junghoon_xikers",name:"정훈", nameEn:"Junghoon",group:"xikers", gender:"male", birthMonth:7,  birthDay:5,  bio:"", photo:"images/xikers_junghoon.jpg", startVotes:0 },
  { id:"seeun_xikers",  name:"세은(xikers)", nameEn:"Seeun", group:"xikers", gender:"male", birthMonth:8,  birthDay:17, bio:"", photo:"images/xikers_seeun.jpg", startVotes:0 },
  { id:"yujun_xikers",  name:"유준", nameEn:"Yujun", group:"xikers", gender:"male", birthMonth:10, birthDay:5,  bio:"", photo:"images/xikers_yujun.jpg", startVotes:0 },
  { id:"hunter_xikers", name:"헌터", nameEn:"Hunter", group:"xikers", gender:"male", birthMonth:10, birthDay:5,  bio:"", photo:"images/xikers_hunter.jpg", startVotes:0 },
  { id:"yechan_xikers", name:"예찬", nameEn:"Yechan", group:"xikers", gender:"male", birthMonth:10, birthDay:21, bio:"", photo:"images/xikers_yechan.jpg", startVotes:0 },

  /* ───────── TNX (보이즈) · 명부에 올린 5인 ───────── */
  { id:"taehun_tnx",   name:"최태훈", nameEn:"Choi Taehun", group:"TNX", gender:"male", birthMonth:11, birthDay:19, bio:"", photo:"images/tnx_taehun.jpg", startVotes:0 },
  { id:"hyunsoo_tnx",  name:"장현수", nameEn:"Jang Hyunsoo", group:"TNX", gender:"male", birthMonth:9,  birthDay:16, bio:"", photo:"images/tnx_hyunsoo.jpg", startVotes:0 },
  { id:"junhyeok_tnx", name:"천준혁", nameEn:"Chun Junhyeok", group:"TNX", gender:"male", birthMonth:9,  birthDay:20, bio:"", photo:"images/tnx_junhyeok.jpg", startVotes:0 },
  { id:"eunhwi_tnx",   name:"은휘", nameEn:"Eunhwi",   group:"TNX", gender:"male", birthMonth:11, birthDay:11, bio:"", photo:"images/tnx_eunhwi.jpg", startVotes:0 },
  { id:"sungjun_tnx",  name:"오성준", nameEn:"Oh Sungjun", group:"TNX", gender:"male", birthMonth:8,  birthDay:30, bio:"", photo:"images/tnx_sungjun.jpg", startVotes:0 },

  /* ───────── 베이비돈크라이 (걸즈) · 신인, 특이사항 없음 ───────── */
  { id:"yihyeon_bdc", name:"이현", nameEn:"Yihyeon", group:"베이비돈크라이", gender:"female", birthMonth:4,  birthDay:11, bio:"", photo:"images/bdc_yihyeon.jpg", startVotes:0 },
  { id:"kumi_bdc",    name:"쿠미", nameEn:"Kumi", group:"베이비돈크라이", gender:"female", birthMonth:8,  birthDay:30, bio:"", photo:"images/bdc_kumi.jpg", startVotes:0 },
  { id:"mia_bdc",     name:"미아", nameEn:"Mia", group:"베이비돈크라이", gender:"female", birthMonth:9,  birthDay:3,  bio:"", photo:"images/bdc_mia.jpg", startVotes:0 },
  { id:"benny_bdc",   name:"베니", nameEn:"Benny", group:"베이비돈크라이", gender:"female", birthMonth:12, birthDay:23, bio:"", photo:"images/bdc_benny.jpg", startVotes:0 },

  /* ───────── 트리플에스 (걸즈) · 24인, 전원 "트리플에스"로 표기 ───────── */
  { id:"yoonseoyeon_sss",name:"윤서연", nameEn:"Yoon Seoyeon", group:"트리플에스", gender:"female", birthMonth:8,  birthDay:6,  bio:"", photo:"images/sss_yoonseoyeon.jpg", startVotes:0 },
  { id:"jeonghyerin_sss",name:"정혜린", nameEn:"Jeong Hyerin", group:"트리플에스", gender:"female", birthMonth:4,  birthDay:12, bio:"", photo:"images/sss_jeonghyerin.jpg", startVotes:0 },
  { id:"leejiwoo_sss",   name:"이지우", nameEn:"Lee Jiwoo", group:"트리플에스", gender:"female", birthMonth:10, birthDay:24, bio:"", photo:"images/sss_leejiwoo.jpg", startVotes:0 },
  { id:"kimchaeyeon_sss",name:"김채연", nameEn:"Kim Chaeyeon", group:"트리플에스", gender:"female", birthMonth:12, birthDay:4,  bio:"", photo:"images/sss_kimchaeyeon.jpg", startVotes:0 },
  { id:"kimyuyeon_sss",  name:"김유연", nameEn:"Kim Yooyeon", group:"트리플에스", gender:"female", birthMonth:2,  birthDay:9,  bio:"", photo:"images/sss_kimyuyeon.jpg", startVotes:0 },
  { id:"kimsumin_sss",   name:"김수민", nameEn:"Kim Sumin", group:"트리플에스", gender:"female", birthMonth:10, birthDay:3,  bio:"", photo:"images/sss_kimsumin.jpg", startVotes:0 },
  { id:"kimnakyoung_sss",name:"김나경", nameEn:"Kim Nakyoung", group:"트리플에스", gender:"female", birthMonth:10, birthDay:13, bio:"", photo:"images/sss_kimnakyoung.jpg", startVotes:0 },
  { id:"gongyubin_sss",  name:"공유빈", nameEn:"Gong Yubin", group:"트리플에스", gender:"female", birthMonth:2,  birthDay:3,  bio:"", photo:"images/sss_gongyubin.jpg", startVotes:0 },
  { id:"kaede_sss",      name:"카에데", nameEn:"Kaede", group:"트리플에스", gender:"female", birthMonth:12, birthDay:20, bio:"", photo:"images/sss_kaede.jpg", startVotes:0 },
  { id:"seodahyun_sss",  name:"서다현", nameEn:"Seo Dahyun", group:"트리플에스", gender:"female", birthMonth:1,  birthDay:8,  bio:"", photo:"images/sss_seodahyun.jpg", startVotes:0 },
  { id:"kotone_sss",     name:"코토네", nameEn:"Kotone", group:"트리플에스", gender:"female", birthMonth:3,  birthDay:10, bio:"", photo:"images/sss_kotone.jpg", startVotes:0 },
  { id:"kwakyeonji_sss", name:"곽연지", nameEn:"Kwak Yeonji", group:"트리플에스", gender:"female", birthMonth:1,  birthDay:8,  bio:"", photo:"images/sss_kwakyeonji.jpg", startVotes:0 },
  { id:"nien_sss",       name:"니엔", nameEn:"Nien",   group:"트리플에스", gender:"female", birthMonth:6,  birthDay:2,  bio:"", photo:"images/sss_nien.jpg", startVotes:0 },
  { id:"parksohyun_sss", name:"박소현", nameEn:"Park Sohyun", group:"트리플에스", gender:"female", birthMonth:10, birthDay:13, bio:"", photo:"images/sss_parksohyun.jpg", startVotes:0 },
  { id:"sinwi_sss",      name:"신위", nameEn:"Xinyu",   group:"트리플에스", gender:"female", birthMonth:5,  birthDay:25, bio:"", photo:"images/sss_sinwi.jpg", startVotes:0 },
  { id:"mayu_sss",       name:"마유", nameEn:"Mayu",   group:"트리플에스", gender:"female", birthMonth:5,  birthDay:12, bio:"", photo:"images/sss_mayu.jpg", startVotes:0 },
  { id:"lin_sss",        name:"린", nameEn:"Lynn",     group:"트리플에스", gender:"female", birthMonth:4,  birthDay:12, bio:"", photo:"images/sss_lin.jpg", startVotes:0 },
  { id:"jubin_sss",      name:"주빈", nameEn:"Joobin",   group:"트리플에스", gender:"female", birthMonth:1,  birthDay:16, bio:"", photo:"images/sss_jubin.jpg", startVotes:0 },
  { id:"jeonghayeon_sss",name:"정하연", nameEn:"Jeong Hayeon", group:"트리플에스", gender:"female", birthMonth:8,  birthDay:1,  bio:"", photo:"images/sss_jeonghayeon.jpg", startVotes:0 },
  { id:"parksion_sss",   name:"박시온", nameEn:"Park Sion", group:"트리플에스", gender:"female", birthMonth:4,  birthDay:3,  bio:"", photo:"images/sss_parksion.jpg", startVotes:0 },
  { id:"kimchaewon_sss", name:"김채원", nameEn:"Kim Chaewon", group:"트리플에스", gender:"female", birthMonth:5,  birthDay:2,  bio:"", photo:"images/sss_kimchaewon.jpg", startVotes:0 },
  { id:"sullin_sss",     name:"설린", nameEn:"Sullin",   group:"트리플에스", gender:"female", birthMonth:11, birthDay:30, bio:"", photo:"images/sss_sullin.jpg", startVotes:0 },
  { id:"seoa_sss",       name:"서아", nameEn:"Seoa",   group:"트리플에스", gender:"female", birthMonth:6,  birthDay:11, bio:"", photo:"images/sss_seoa.jpg", startVotes:0 },
  { id:"jiyeon_sss",     name:"지연", nameEn:"Jiyeon",   group:"트리플에스", gender:"female", birthMonth:2,  birthDay:13, bio:"", photo:"images/sss_jiyeon.jpg", startVotes:0 },

  /* ───────── ARTMS (걸즈) · 특이사항 없음 ───────── */
  { id:"heejin_artms", name:"희진", nameEn:"Heejin", group:"ARTMS", gender:"female", birthMonth:10, birthDay:19, bio:"", photo:"images/artms_heejin.jpg", startVotes:0 },
  { id:"haseul_artms", name:"하슬", nameEn:"HaSeul", group:"ARTMS", gender:"female", birthMonth:8,  birthDay:18, bio:"", photo:"images/artms_haseul.jpg", startVotes:0 },
  { id:"kimlip_artms", name:"김립", nameEn:"Kim Lip", group:"ARTMS", gender:"female", birthMonth:2,  birthDay:10, bio:"", photo:"images/artms_kimlip.jpg", startVotes:0 },
  { id:"jinsoul_artms",name:"진솔", nameEn:"JinSoul", group:"ARTMS", gender:"female", birthMonth:6,  birthDay:13, bio:"", photo:"images/artms_jinsoul.jpg", startVotes:0 },
  { id:"choerry_artms",name:"최리", nameEn:"Choerry", group:"ARTMS", gender:"female", birthMonth:6,  birthDay:4,  bio:"", photo:"images/artms_choerry.jpg", startVotes:0 },

  /* ───────── IDNTT (보이즈) · 신인 (id3 정보 미공개로 제외) ───────── */
  { id:"dohoon_idntt",    name:"김도훈", nameEn:"Kim Dohoon", group:"IDNTT", gender:"male", birthMonth:3,  birthDay:3,  bio:"", photo:"images/idntt_dohoon.jpg", startVotes:0 },
  { id:"heeju_idntt",     name:"김희주", nameEn:"Kim Heeju", group:"IDNTT", gender:"male", birthMonth:10, birthDay:25, bio:"", photo:"images/idntt_heeju.jpg", startVotes:0 },
  { id:"taein_idntt",     name:"최태인", nameEn:"Choi Taein", group:"IDNTT", gender:"male", birthMonth:11, birthDay:17, bio:"", photo:"images/idntt_taein.jpg", startVotes:0 },
  { id:"jaeyoung_idntt",  name:"이재영", nameEn:"Lee Jaeyoung", group:"IDNTT", gender:"male", birthMonth:10, birthDay:3,  bio:"", photo:"images/idntt_jaeyoung.jpg", startVotes:0 },
  { id:"juho_idntt",      name:"김주호", nameEn:"Kim Juho", group:"IDNTT", gender:"male", birthMonth:7,  birthDay:28, bio:"", photo:"images/idntt_juho.jpg", startVotes:0 },
  { id:"namjiwoon_idntt", name:"남지운", nameEn:"Nam Jiwoon", group:"IDNTT", gender:"male", birthMonth:7,  birthDay:7,  bio:"", photo:"images/idntt_namjiwoon.jpg", startVotes:0 },
  { id:"hwanhee_idntt",   name:"이환희", nameEn:"Lee Hwanhee", group:"IDNTT", gender:"male", birthMonth:7,  birthDay:11, bio:"", photo:"images/idntt_hwanhee.jpg", startVotes:0 },
  { id:"cheongmyeong_idntt",name:"이청명", nameEn:"Lee Cheongmyeong",group:"IDNTT", gender:"male", birthMonth:6,  birthDay:4,  bio:"", photo:"images/idntt_cheongmyeong.jpg", startVotes:0 },
  { id:"towa_idntt",      name:"토와", nameEn:"Towa",   group:"IDNTT", gender:"male", birthMonth:4,  birthDay:9,  bio:"", photo:"images/idntt_towa.jpg", startVotes:0 },
  { id:"gyuhyuk_idntt",   name:"이규혁", nameEn:"Lee Gyuhyuk", group:"IDNTT", gender:"male", birthMonth:8,  birthDay:6,  bio:"", photo:"images/idntt_gyuhyuk.jpg", startVotes:0 },
  { id:"nuri_idntt",      name:"박누리", nameEn:"Park Nuri", group:"IDNTT", gender:"male", birthMonth:12, birthDay:4,  bio:"", photo:"images/idntt_nuri.jpg", startVotes:0 },
  { id:"seongjun_idntt",  name:"김성준", nameEn:"Kim Seongjun", group:"IDNTT", gender:"male", birthMonth:9,  birthDay:26, bio:"", photo:"images/idntt_seongjun.jpg", startVotes:0 },
  { id:"hanyejun_idntt",  name:"한예준", nameEn:"Han Yejun", group:"IDNTT", gender:"male", birthMonth:3,  birthDay:13, bio:"", photo:"images/idntt_hanyejun.jpg", startVotes:0 },
  { id:"gyeongbin_idntt", name:"최경빈", nameEn:"Choi Gyeongbin", group:"IDNTT", gender:"male", birthMonth:9,  birthDay:4,  bio:"", photo:"images/idntt_gyeongbin.jpg", startVotes:0 },
  { id:"eunsu_idntt",     name:"황은수", nameEn:"Hwang Eunsu", group:"IDNTT", gender:"male", birthMonth:6,  birthDay:10, bio:"", photo:"images/idntt_eunsu.jpg", startVotes:0 },

  /* ───────── 다크비 (보이즈) · 전 멤버 제외, 현재 8인 ───────── */
  { id:"leechan_dkb",  name:"이찬", nameEn:"Lee Chan",   group:"다크비", gender:"male", birthMonth:2,  birthDay:19, bio:"", photo:"images/dkb_leechan.jpg", startVotes:0 },
  { id:"d1_dkb",       name:"D1", nameEn:"D1",     group:"다크비", gender:"male", birthMonth:2,  birthDay:15, bio:"", photo:"images/dkb_d1.jpg", startVotes:0 },
  { id:"gk_dkb",       name:"GK", nameEn:"GK",     group:"다크비", gender:"male", birthMonth:9,  birthDay:29, bio:"", photo:"images/dkb_gk.jpg", startVotes:0 },
  { id:"heechan_dkb",  name:"희찬", nameEn:"Heechan",   group:"다크비", gender:"male", birthMonth:7,  birthDay:31, bio:"", photo:"images/dkb_heechan.jpg", startVotes:0 },
  { id:"lune_dkb",     name:"룬", nameEn:"Lune",     group:"다크비", gender:"male", birthMonth:2,  birthDay:27, bio:"", photo:"images/dkb_lune.jpg", startVotes:0 },
  { id:"junseo_dkb",   name:"준서(다크비)", nameEn:"Junseo",   group:"다크비", gender:"male", birthMonth:1,  birthDay:16, bio:"", photo:"images/dkb_junseo.jpg", startVotes:0 },
  { id:"yuku_dkb",     name:"유쿠", nameEn:"Yuku",   group:"다크비", gender:"male", birthMonth:5,  birthDay:12, bio:"", photo:"images/dkb_yuku.jpg", startVotes:0 },
  { id:"harryjune_dkb",name:"해리준", nameEn:"Harry June", group:"다크비", gender:"male", birthMonth:1,  birthDay:1,  bio:"", photo:"images/dkb_harryjune.jpg", startVotes:0 },

  /* ───────── 플레이브 (보이즈/버추얼) · 특이사항 없음 ───────── */
  { id:"yejun_plave", name:"예준", nameEn:"Yejun", group:"플레이브", gender:"male", birthMonth:9,  birthDay:12, bio:"버추얼 아이돌", photo:"images/plave_yejun.jpg", startVotes:0 },
  { id:"noah_plave",  name:"노아", nameEn:"Noah", group:"플레이브", gender:"male", birthMonth:2,  birthDay:10, bio:"버추얼 아이돌", photo:"images/plave_noah.jpg", startVotes:0 },
  { id:"bamby_plave", name:"밤비", nameEn:"Bamby", group:"플레이브", gender:"male", birthMonth:7,  birthDay:15, bio:"버추얼 아이돌", photo:"images/plave_bamby.jpg", startVotes:0 },
  { id:"eunho_plave", name:"은호", nameEn:"Eunho", group:"플레이브", gender:"male", birthMonth:5,  birthDay:24, bio:"버추얼 아이돌", photo:"images/plave_eunho.jpg", startVotes:0 },
  { id:"hamin_plave", name:"하민", nameEn:"Hamin", group:"플레이브", gender:"male", birthMonth:11, birthDay:1,  bio:"버추얼 아이돌", photo:"images/plave_hamin.jpg", startVotes:0 },

  /* ───────── Candy Shop (걸즈) · 특이사항 없음 ───────── */
  { id:"soram_cs",  name:"소람", nameEn:"Soram",   group:"Candy Shop", gender:"female", birthMonth:9,  birthDay:24, bio:"", photo:"images/cs_soram.jpg", startVotes:0 },
  { id:"yuina_cs",  name:"유이나", nameEn:"Yuina", group:"Candy Shop", gender:"female", birthMonth:2,  birthDay:27, bio:"", photo:"images/cs_yuina.jpg", startVotes:0 },
  { id:"sui_cs",    name:"수이(Candy Shop)", nameEn:"Sui",   group:"Candy Shop", gender:"female", birthMonth:8,  birthDay:15, bio:"", photo:"images/cs_sui.jpg", startVotes:0 },
  { id:"sarang_cs", name:"사랑", nameEn:"Sarang",   group:"Candy Shop", gender:"female", birthMonth:11, birthDay:30, bio:"", photo:"images/cs_sarang.jpg", startVotes:0 },
  { id:"julia_cs",  name:"줄리아", nameEn:"Julia", group:"Candy Shop", gender:"female", birthMonth:3,  birthDay:10, bio:"", photo:"images/cs_julia.jpg", startVotes:0 },

  /* ───────── FIFTY FIFTY (걸즈) · 특이사항 없음 ───────── */
  { id:"keena_ff",  name:"키나", nameEn:"Keena",   group:"FIFTY FIFTY", gender:"female", birthMonth:7,  birthDay:9,  bio:"", photo:"images/ff_keena.jpg", startVotes:0 },
  { id:"moon_ff",   name:"문샤넬", nameEn:"Moon", group:"FIFTY FIFTY", gender:"female", birthMonth:6,  birthDay:14, bio:"", photo:"images/ff_moon.jpg", startVotes:0 },
  { id:"yewon_ff",  name:"예원", nameEn:"Yewon",   group:"FIFTY FIFTY", gender:"female", birthMonth:3,  birthDay:18, bio:"", photo:"images/ff_yewon.jpg", startVotes:0 },
  { id:"hana_ff",   name:"하나", nameEn:"Hana",   group:"FIFTY FIFTY", gender:"female", birthMonth:9,  birthDay:5,  bio:"", photo:"images/ff_hana.jpg", startVotes:0 },
  { id:"athena_ff", name:"아테나", nameEn:"Athena", group:"FIFTY FIFTY", gender:"female", birthMonth:3,  birthDay:15, bio:"", photo:"images/ff_athena.jpg", startVotes:0 },

  /* ───────── STAYC (걸즈) · 특이사항 없음 ───────── */
  { id:"sumin_stayc", name:"수민(STAYC)", nameEn:"Sumin",   group:"STAYC", gender:"female", birthMonth:3,  birthDay:13, bio:"", photo:"images/stayc_sumin.jpg", startVotes:0 },
  { id:"sieun_stayc", name:"시은", nameEn:"Sieun",   group:"STAYC", gender:"female", birthMonth:8,  birthDay:1,  bio:"", photo:"images/stayc_sieun.jpg", startVotes:0 },
  { id:"isa_stayc",   name:"아이사", nameEn:"Isa", group:"STAYC", gender:"female", birthMonth:1,  birthDay:23, bio:"", photo:"images/stayc_isa.jpg", startVotes:0 },
  { id:"seeun_stayc", name:"세은(STAYC)", nameEn:"Seeun",   group:"STAYC", gender:"female", birthMonth:6,  birthDay:14, bio:"", photo:"images/stayc_seeun.jpg", startVotes:0 },
  { id:"yoon_stayc",  name:"윤", nameEn:"Yoon",     group:"STAYC", gender:"female", birthMonth:4,  birthDay:14, bio:"", photo:"images/stayc_yoon.jpg", startVotes:0 },
  { id:"jaee_stayc",  name:"재이", nameEn:"J",   group:"STAYC", gender:"female", birthMonth:12, birthDay:9,  bio:"", photo:"images/stayc_jaee.jpg", startVotes:0 },

  /* ───────── UNCHILD (걸즈) · 신인, 특이사항 없음 ───────── */
  { id:"yeeun_unchild",name:"박예은", nameEn:"Park Yeeun", group:"UNCHILD", gender:"female", birthMonth:12, birthDay:21, bio:"", photo:"images/unchild_yeeun.jpg", startVotes:0 },
  { id:"hiki_unchild", name:"히키", nameEn:"Hiki",   group:"UNCHILD", gender:"female", birthMonth:3,  birthDay:17, bio:"", photo:"images/unchild_hiki.jpg", startVotes:0 },
  { id:"tina_unchild", name:"티나", nameEn:"Tina",   group:"UNCHILD", gender:"female", birthMonth:3,  birthDay:9,  bio:"", photo:"images/unchild_tina.jpg", startVotes:0 },
  { id:"ako_unchild",  name:"아코", nameEn:"Ako",   group:"UNCHILD", gender:"female", birthMonth:7,  birthDay:8,  bio:"", photo:"images/unchild_ako.jpg", startVotes:0 },
  { id:"ibon_unchild", name:"이본", nameEn:"Ibon",   group:"UNCHILD", gender:"female", birthMonth:7,  birthDay:11, bio:"", photo:"images/unchild_ibon.jpg", startVotes:0 },
  { id:"haeun_unchild",name:"나하은", nameEn:"Na Haeun", group:"UNCHILD", gender:"female", birthMonth:1,  birthDay:16, bio:"", photo:"images/unchild_haeun.jpg", startVotes:0 },

  /* ───────── Billlie (걸즈) · 전 멤버 제외, 현재 7인 ───────── */
  { id:"moonsua_billlie", name:"문수아", nameEn:"Moon Sua", group:"Billlie", gender:"female", birthMonth:9,  birthDay:9,  bio:"", photo:"images/billlie_moonsua.jpg", startVotes:0 },
  { id:"suhyeon_billlie", name:"수현", nameEn:"Suhyeon",   group:"Billlie", gender:"female", birthMonth:1,  birthDay:15, bio:"", photo:"images/billlie_suhyeon.jpg", startVotes:0 },
  { id:"haram_billlie",   name:"하람", nameEn:"Haram",   group:"Billlie", gender:"female", birthMonth:1,  birthDay:13, bio:"", photo:"images/billlie_haram.jpg", startVotes:0 },
  { id:"tsuki_billlie",   name:"츠키", nameEn:"Tsuki",   group:"Billlie", gender:"female", birthMonth:9,  birthDay:21, bio:"", photo:"images/billlie_tsuki.jpg", startVotes:0 },
  { id:"sheon_billlie",   name:"션", nameEn:"Sheon",     group:"Billlie", gender:"female", birthMonth:1,  birthDay:28, bio:"", photo:"images/billlie_sheon.jpg", startVotes:0 },
  { id:"siyoon_billlie",  name:"시윤", nameEn:"Siyoon",   group:"Billlie", gender:"female", birthMonth:2,  birthDay:16, bio:"", photo:"images/billlie_siyoon.jpg", startVotes:0 },
  { id:"haruna_billlie",  name:"하루나", nameEn:"Haruna", group:"Billlie", gender:"female", birthMonth:1,  birthDay:30, bio:"", photo:"images/billlie_haruna.jpg", startVotes:0 },

  /* ───────── ARrC (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"kien_arrc",    name:"끼엔", nameEn:"Kien",   group:"ARrC", gender:"male", birthMonth:12, birthDay:19, bio:"", photo:"images/arrc_kien.jpg", startVotes:0 },
  { id:"hyunmin_arrc", name:"현민", nameEn:"Hyunmin",   group:"ARrC", gender:"male", birthMonth:4,  birthDay:11, bio:"", photo:"images/arrc_hyunmin.jpg", startVotes:0 },
  { id:"choihan_arrc", name:"최한", nameEn:"Choihan",   group:"ARrC", gender:"male", birthMonth:4,  birthDay:10, bio:"", photo:"images/arrc_choihan.jpg", startVotes:0 },
  { id:"andy_arrc",    name:"앤디", nameEn:"Andy",   group:"ARrC", gender:"male", birthMonth:4,  birthDay:19, bio:"", photo:"images/arrc_andy.jpg", startVotes:0 },
  { id:"rioto_arrc",   name:"리오토", nameEn:"Rioto", group:"ARrC", gender:"male", birthMonth:8,  birthDay:25, bio:"", photo:"images/arrc_rioto.jpg", startVotes:0 },
  { id:"doha_arrc",    name:"도하(ARrC)", nameEn:"Doha",   group:"ARrC", gender:"male", birthMonth:2,  birthDay:10, bio:"", photo:"images/arrc_doha.jpg", startVotes:0 },
  { id:"jibin_arrc",   name:"지빈", nameEn:"Jibin",   group:"ARrC", gender:"male", birthMonth:8,  birthDay:8,  bio:"", photo:"images/arrc_jibin.jpg", startVotes:0 },

  /* ───────── DRIPPIN (보이즈) · 특이사항 없음 ───────── */
  { id:"hyeop_drippin",   name:"이협", nameEn:"Lee Hyeop",   group:"DRIPPIN", gender:"male", birthMonth:8,  birthDay:13, bio:"", photo:"images/drippin_hyeop.jpg", startVotes:0 },
  { id:"yunseong_drippin",name:"황윤성", nameEn:"Hwang Yunseong", group:"DRIPPIN", gender:"male", birthMonth:10, birthDay:30, bio:"", photo:"images/drippin_yunseong.jpg", startVotes:0 },
  { id:"changuk_drippin", name:"주창욱", nameEn:"Joo Changuk", group:"DRIPPIN", gender:"male", birthMonth:7,  birthDay:25, bio:"", photo:"images/drippin_changuk.jpg", startVotes:0 },
  { id:"dongyun_drippin", name:"김동윤", nameEn:"Kim Dongyun", group:"DRIPPIN", gender:"male", birthMonth:2,  birthDay:18, bio:"", photo:"images/drippin_dongyun.jpg", startVotes:0 },
  { id:"minseo_drippin",  name:"김민서", nameEn:"Kim Minseo", group:"DRIPPIN", gender:"male", birthMonth:5,  birthDay:13, bio:"", photo:"images/drippin_minseo.jpg", startVotes:0 },
  { id:"junho_drippin",   name:"차준호", nameEn:"Cha Junho", group:"DRIPPIN", gender:"male", birthMonth:7,  birthDay:9,  bio:"", photo:"images/drippin_junho.jpg", startVotes:0 },

  /* ───────── ODD YOUTH (걸즈) · 신인, 특이사항 없음 ───────── */
  { id:"maika_oy",  name:"마이카", nameEn:"Maika", group:"ODD YOUTH", gender:"female", birthMonth:2,  birthDay:16, bio:"", photo:"images/oy_maika.jpg", startVotes:0 },
  { id:"maya_oy",   name:"마야", nameEn:"Maya",   group:"ODD YOUTH", gender:"female", birthMonth:6,  birthDay:19, bio:"", photo:"images/oy_maya.jpg", startVotes:0 },
  { id:"kani_oy",   name:"카니", nameEn:"Kani",   group:"ODD YOUTH", gender:"female", birthMonth:7,  birthDay:28, bio:"", photo:"images/oy_kani.jpg", startVotes:0 },
  { id:"summer_oy", name:"써머", nameEn:"Summer",   group:"ODD YOUTH", gender:"female", birthMonth:9,  birthDay:23, bio:"", photo:"images/oy_summer.jpg", startVotes:0 },
  { id:"yeeum_oy",  name:"예음", nameEn:"Yeeum",   group:"ODD YOUTH", gender:"female", birthMonth:12, birthDay:27, bio:"", photo:"images/oy_yeeum.jpg", startVotes:0 },

  /* ───────── KISS OF LIFE (걸즈) · 특이사항 없음 ───────── */
  { id:"julie_kol", name:"쥴리", nameEn:"Julie", group:"KISS OF LIFE", gender:"female", birthMonth:3,  birthDay:29, bio:"", photo:"images/kol_julie.jpg", startVotes:0 },
  { id:"natty_kol", name:"나띠", nameEn:"Natty", group:"KISS OF LIFE", gender:"female", birthMonth:5,  birthDay:30, bio:"", photo:"images/kol_natty.jpg", startVotes:0 },
  { id:"belle_kol", name:"벨", nameEn:"Belle",   group:"KISS OF LIFE", gender:"female", birthMonth:3,  birthDay:20, bio:"", photo:"images/kol_belle.jpg", startVotes:0 },
  { id:"haneul_kol",name:"하늘", nameEn:"Haneul", group:"KISS OF LIFE", gender:"female", birthMonth:5,  birthDay:25, bio:"", photo:"images/kol_haneul.jpg", startVotes:0 },

  /* ───────── QWER (걸즈 밴드) · 특이사항 없음 ───────── */
  { id:"chodan_qwer", name:"쵸단", nameEn:"Chodan",   group:"QWER", gender:"female", birthMonth:11, birthDay:1,  bio:"드럼", photo:"images/qwer_chodan.jpg", startVotes:0 },
  { id:"magenta_qwer",name:"마젠타", nameEn:"Magenta", group:"QWER", gender:"female", birthMonth:6,  birthDay:2,  bio:"베이스", photo:"images/qwer_magenta.jpg", startVotes:0 },
  { id:"hina_qwer",   name:"히나", nameEn:"Hina",   group:"QWER", gender:"female", birthMonth:1,  birthDay:30, bio:"기타/키보드", photo:"images/qwer_hina.jpg", startVotes:0 },
  { id:"siyeon_qwer", name:"시연", nameEn:"Siyeon",   group:"QWER", gender:"female", birthMonth:5,  birthDay:16, bio:"보컬", photo:"images/qwer_siyeon.jpg", startVotes:0 },

  /* ───────── 하이라이트 (보이즈) · 특이사항 없음 ───────── */
  { id:"doojoon_highlight", name:"윤두준", nameEn:"Yoon Doojoon", group:"하이라이트", gender:"male", birthMonth:7, birthDay:4,  bio:"", photo:"images/highlight_doojoon.jpg", startVotes:0 },
  { id:"yoseob_highlight",  name:"양요섭", nameEn:"Yang Yoseob", group:"하이라이트", gender:"male", birthMonth:1, birthDay:5,  bio:"", photo:"images/highlight_yoseob.jpg", startVotes:0 },
  { id:"gikwang_highlight", name:"이기광", nameEn:"Lee Gikwang", group:"하이라이트", gender:"male", birthMonth:3, birthDay:30, bio:"", photo:"images/highlight_gikwang.jpg", startVotes:0 },
  { id:"dongwoon_highlight",name:"손동운", nameEn:"Son Dongwoon", group:"하이라이트", gender:"male", birthMonth:6, birthDay:6,  bio:"", photo:"images/highlight_dongwoon.jpg", startVotes:0 },

  /* ───────── VIVIZ (걸즈) · 특이사항 없음 ───────── */
  { id:"eunha_viviz", name:"은하", nameEn:"Eunha", group:"VIVIZ", gender:"female", birthMonth:5, birthDay:30, bio:"", photo:"images/viviz_eunha.jpg", startVotes:0 },
  { id:"sinb_viviz",  name:"신비", nameEn:"SinB", group:"VIVIZ", gender:"female", birthMonth:6, birthDay:3,  bio:"", photo:"images/viviz_sinb.jpg", startVotes:0 },
  { id:"umji_viviz",  name:"엄지", nameEn:"Umji", group:"VIVIZ", gender:"female", birthMonth:8, birthDay:19, bio:"", photo:"images/viviz_umji.jpg", startVotes:0 },

  /* ───────── BADVILLAIN (걸즈) · 신인, 특이사항 없음 ───────── */
  { id:"emma_bv",   name:"엠마", nameEn:"Emma",     group:"BADVILLAIN", gender:"female", birthMonth:4,  birthDay:26, bio:"", photo:"images/bv_emma.jpg", startVotes:0 },
  { id:"chloe_bv",  name:"클로이 영", nameEn:"Chloe Young", group:"BADVILLAIN", gender:"female", birthMonth:10, birthDay:31, bio:"", photo:"images/bv_chloe.jpg", startVotes:0 },
  { id:"huey_bv",   name:"휴이", nameEn:"Huey",     group:"BADVILLAIN", gender:"female", birthMonth:11, birthDay:20, bio:"", photo:"images/bv_huey.jpg", startVotes:0 },
  { id:"ina_bv",    name:"이나", nameEn:"Ina",     group:"BADVILLAIN", gender:"female", birthMonth:6,  birthDay:8,  bio:"", photo:"images/bv_ina.jpg", startVotes:0 },
  { id:"yunseo_bv", name:"윤서", nameEn:"Yunseo",     group:"BADVILLAIN", gender:"female", birthMonth:7,  birthDay:3,  bio:"", photo:"images/bv_yunseo.jpg", startVotes:0 },
  { id:"bin_bv",    name:"빈", nameEn:"Bin",       group:"BADVILLAIN", gender:"female", birthMonth:11, birthDay:27, bio:"", photo:"images/bv_bin.jpg", startVotes:0 },
  { id:"kelly_bv",  name:"켈리", nameEn:"Kelly",     group:"BADVILLAIN", gender:"female", birthMonth:6,  birthDay:16, bio:"", photo:"images/bv_kelly.jpg", startVotes:0 },

  /* 이무진 → 솔로 */
  { id:"mujin_solo", name:"이무진", nameEn:"Lee Mujin", group:"솔로", gender:"male", birthMonth:12, birthDay:28, bio:"싱어송라이터", photo:"images/solo_mujin.jpg", startVotes:0 },

  /* ───────── 더윈드 (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"heesu_wind",    name:"김희수", nameEn:"Kim Heesu",  group:"더윈드", gender:"male", birthMonth:5,  birthDay:12, bio:"", photo:"images/wind_heesu.jpg", startVotes:0 },
  { id:"thanathon_wind",name:"타나톤", nameEn:"Thanathon",  group:"더윈드", gender:"male", birthMonth:4,  birthDay:5,  bio:"", photo:"images/wind_thanathon.jpg", startVotes:0 },
  { id:"hanbin_wind",   name:"최한빈", nameEn:"Choi Hanbin",  group:"더윈드", gender:"male", birthMonth:7,  birthDay:25, bio:"", photo:"images/wind_hanbin.jpg", startVotes:0 },
  { id:"hayuchan_wind", name:"박하유찬", nameEn:"Park Hayuchan",group:"더윈드", gender:"male", birthMonth:8,  birthDay:21, bio:"", photo:"images/wind_hayuchan.jpg", startVotes:0 },
  { id:"chanwon_wind",  name:"안찬원", nameEn:"Ahn Chanwon",  group:"더윈드", gender:"male", birthMonth:3,  birthDay:21, bio:"", photo:"images/wind_chanwon.jpg", startVotes:0 },
  { id:"hyunjun_wind",  name:"장현준", nameEn:"Jang Hyunjun",  group:"더윈드", gender:"male", birthMonth:10, birthDay:25, bio:"", photo:"images/wind_hyunjun.jpg", startVotes:0 },

  /* ───────── Apink (걸즈) · 명부에 올린 5인 ───────── */
  { id:"chorong_apink", name:"박초롱", nameEn:"Park Chorong", group:"Apink", gender:"female", birthMonth:3, birthDay:3,  bio:"", photo:"images/apink_chorong.jpg", startVotes:0 },
  { id:"bomi_apink",    name:"윤보미", nameEn:"Yoon Bomi", group:"Apink", gender:"female", birthMonth:8, birthDay:13, bio:"", photo:"images/apink_bomi.jpg", startVotes:0 },
  { id:"eunji_apink",   name:"정은지", nameEn:"Jung Eunji", group:"Apink", gender:"female", birthMonth:8, birthDay:18, bio:"", photo:"images/apink_eunji.jpg", startVotes:0 },
  { id:"namjoo_apink",  name:"김남주", nameEn:"Kim Namjoo", group:"Apink", gender:"female", birthMonth:4, birthDay:15, bio:"", photo:"images/apink_namjoo.jpg", startVotes:0 },
  { id:"hayoung_apink", name:"오하영", nameEn:"Oh Hayoung", group:"Apink", gender:"female", birthMonth:7, birthDay:19, bio:"", photo:"images/apink_hayoung.jpg", startVotes:0 },

  /* ───────── VERIVERY (보이즈) · 특이사항 없음 ───────── */
  { id:"dongheon_vvv", name:"동헌", nameEn:"Dongheon", group:"VERIVERY", gender:"male", birthMonth:8, birthDay:4,  bio:"", photo:"images/vvv_dongheon.jpg", startVotes:0 },
  { id:"hoyoung_vvv",  name:"호영", nameEn:"Hoyoung", group:"VERIVERY", gender:"male", birthMonth:8, birthDay:10, bio:"", photo:"images/vvv_hoyoung.jpg", startVotes:0 },
  { id:"minchan_vvv",  name:"민찬", nameEn:"Minchan", group:"VERIVERY", gender:"male", birthMonth:8, birthDay:27, bio:"", photo:"images/vvv_minchan.jpg", startVotes:0 },
  { id:"gyehyeon_vvv", name:"계현", nameEn:"Gyehyeon", group:"VERIVERY", gender:"male", birthMonth:5, birthDay:14, bio:"", photo:"images/vvv_gyehyeon.jpg", startVotes:0 },
  { id:"yeonho_vvv",   name:"연호", nameEn:"Yeonho", group:"VERIVERY", gender:"male", birthMonth:5, birthDay:31, bio:"", photo:"images/vvv_yeonho.jpg", startVotes:0 },
  { id:"yongseung_vvv",name:"용승", nameEn:"Yongseung", group:"VERIVERY", gender:"male", birthMonth:6, birthDay:17, bio:"", photo:"images/vvv_yongseung.jpg", startVotes:0 },
  { id:"kangmin_vvv",  name:"강민", nameEn:"Kangmin", group:"VERIVERY", gender:"male", birthMonth:1, birthDay:25, bio:"", photo:"images/vvv_kangmin.jpg", startVotes:0 },

  /* ───────── EVNNE (보이즈) · 특이사항 없음 ───────── */
  { id:"keita_evnne",        name:"케이타", nameEn:"Keita", group:"EVNNE", gender:"male", birthMonth:7, birthDay:4,  bio:"", photo:"images/evnne_keita.jpg", startVotes:0 },
  { id:"hanbin_evnne",       name:"박한빈", nameEn:"Park Hanbin", group:"EVNNE", gender:"male", birthMonth:3, birthDay:1,  bio:"", photo:"images/evnne_hanbin.jpg", startVotes:0 },
  { id:"jeonghyeon_evnne",   name:"이정현", nameEn:"Lee Jeonghyeon", group:"EVNNE", gender:"male", birthMonth:9, birthDay:11, bio:"", photo:"images/evnne_jeonghyeon.jpg", startVotes:0 },
  { id:"moonjeonghyeon_evnne",name:"문정현", nameEn:"Moon Jeonghyeon",group:"EVNNE", gender:"male", birthMonth:3, birthDay:31, bio:"", photo:"images/evnne_moonjeonghyeon.jpg", startVotes:0 },
  { id:"jihu_evnne",         name:"박지후", nameEn:"Park Jihu", group:"EVNNE", gender:"male", birthMonth:7, birthDay:14, bio:"", photo:"images/evnne_jihu.jpg", startVotes:0 },

  /* ───────── DAILY:DIRECTION (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"enkim_dd",   name:"EN KIM", nameEn:"EN KIM", group:"DAILY:DIRECTION", gender:"male", birthMonth:6,  birthDay:15, bio:"", photo:"images/dd_enkim.jpg", startVotes:0 },
  { id:"juhyung_dd", name:"김주형", nameEn:"Kim Juhyung", group:"DAILY:DIRECTION", gender:"male", birthMonth:3,  birthDay:15, bio:"", photo:"images/dd_juhyung.jpg", startVotes:0 },
  { id:"jihwan_dd",  name:"임지환", nameEn:"Im Jihwan", group:"DAILY:DIRECTION", gender:"male", birthMonth:5,  birthDay:24, bio:"", photo:"images/dd_jihwan.jpg", startVotes:0 },
  { id:"evan_dd",    name:"E-VAN", nameEn:"E-VAN",  group:"DAILY:DIRECTION", gender:"male", birthMonth:6,  birthDay:10, bio:"", photo:"images/dd_evan.jpg", startVotes:0 },
  { id:"wonwoo_dd",  name:"이원우", nameEn:"Lee Wonwoo", group:"DAILY:DIRECTION", gender:"male", birthMonth:10, birthDay:16, bio:"", photo:"images/dd_wonwoo.jpg", startVotes:0 },
  { id:"yoonseok_dd",name:"장윤석", nameEn:"Jang Yoonseok", group:"DAILY:DIRECTION", gender:"male", birthMonth:4,  birthDay:2,  bio:"", photo:"images/dd_yoonseok.jpg", startVotes:0 },

  /* ───────── 브브걸 (걸즈) · 현재 3인 ───────── */
  { id:"minyoung_bbg", name:"민영", nameEn:"Minyoung", group:"브브걸", gender:"female", birthMonth:9, birthDay:12, bio:"", photo:"images/bbg_minyoung.jpg", startVotes:0 },
  { id:"eunji_bbg",    name:"은지", nameEn:"Eunji", group:"브브걸", gender:"female", birthMonth:7, birthDay:19, bio:"", photo:"images/bbg_eunji.jpg", startVotes:0 },
  { id:"yuna_bbg",     name:"유나(브브걸)", nameEn:"Yuna", group:"브브걸", gender:"female", birthMonth:4, birthDay:6,  bio:"", photo:"images/bbg_yuna.jpg", startVotes:0 },

  /* ───────── FANTASY BOYS (보이즈) · 명부에 올린 4인 ───────── */
  { id:"hikari_fb",  name:"히카리", nameEn:"Hikari", group:"FANTASY BOYS", gender:"male", birthMonth:1, birthDay:21, bio:"", photo:"images/fb_hikari.jpg", startVotes:0 },
  { id:"lingqi_fb",  name:"링치", nameEn:"Lingqi",   group:"FANTASY BOYS", gender:"male", birthMonth:6, birthDay:4,  bio:"", photo:"images/fb_lingqi.jpg", startVotes:0 },
  { id:"wooseok_fb", name:"김우석", nameEn:"Kim Wooseok", group:"FANTASY BOYS", gender:"male", birthMonth:3, birthDay:12, bio:"", photo:"images/fb_wooseok.jpg", startVotes:0 },
  { id:"hyuntae_fb", name:"오현태", nameEn:"Oh Hyuntae", group:"FANTASY BOYS", gender:"male", birthMonth:8, birthDay:13, bio:"", photo:"images/fb_hyuntae.jpg", startVotes:0 },

  /* ───────── AB6IX (보이즈) · 현재 4인 ───────── */
  { id:"woong_ab6ix",   name:"전웅", nameEn:"Jeon Woong",   group:"AB6IX", gender:"male", birthMonth:10, birthDay:15, bio:"", photo:"images/ab6ix_woong.jpg", startVotes:0 },
  { id:"donghyun_ab6ix",name:"김동현", nameEn:"Kim Donghyun", group:"AB6IX", gender:"male", birthMonth:9,  birthDay:17, bio:"", photo:"images/ab6ix_donghyun.jpg", startVotes:0 },
  { id:"woojin_ab6ix",  name:"박우진", nameEn:"Park Woojin", group:"AB6IX", gender:"male", birthMonth:11, birthDay:2,  bio:"", photo:"images/ab6ix_woojin.jpg", startVotes:0 },
  { id:"daehwi_ab6ix",  name:"이대휘", nameEn:"Lee Daehwi", group:"AB6IX", gender:"male", birthMonth:1,  birthDay:29, bio:"", photo:"images/ab6ix_daehwi.jpg", startVotes:0 },

  /* ───────── UNIS (걸즈) · 특이사항 없음 ───────── */
  { id:"hyunju_unis", name:"진현주", nameEn:"Jin Hyunju",   group:"UNIS", gender:"female", birthMonth:11, birthDay:3,  bio:"", photo:"images/unis_hyunju.jpg", startVotes:0 },
  { id:"nana_unis",   name:"나나", nameEn:"Nana",     group:"UNIS", gender:"female", birthMonth:6,  birthDay:6,  bio:"", photo:"images/unis_nana.jpg", startVotes:0 },
  { id:"gehlee_unis", name:"젤리당카", nameEn:"Gehlee", group:"UNIS", gender:"female", birthMonth:8,  birthDay:19, bio:"", photo:"images/unis_gehlee.jpg", startVotes:0 },
  { id:"kotoko_unis", name:"코토코", nameEn:"Kotoko",   group:"UNIS", gender:"female", birthMonth:10, birthDay:28, bio:"", photo:"images/unis_kotoko.jpg", startVotes:0 },
  { id:"yoonha_unis", name:"방윤하", nameEn:"Bang Yoonha",   group:"UNIS", gender:"female", birthMonth:2,  birthDay:28, bio:"", photo:"images/unis_yoonha.jpg", startVotes:0 },
  { id:"elisia_unis", name:"엘리시아", nameEn:"Elisia", group:"UNIS", gender:"female", birthMonth:4,  birthDay:18, bio:"", photo:"images/unis_elisia.jpg", startVotes:0 },
  { id:"yoona_unis",  name:"오윤아", nameEn:"Oh Yoona",   group:"UNIS", gender:"female", birthMonth:10, birthDay:7,  bio:"", photo:"images/unis_yoona.jpg", startVotes:0 },
  { id:"seowon_unis", name:"임서원", nameEn:"Lim Seowon",   group:"UNIS", gender:"female", birthMonth:1,  birthDay:27, bio:"", photo:"images/unis_seowon.jpg", startVotes:0 },

  /* ───────── AHOF (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"steven_ahof",   name:"스티븐", nameEn:"Steven",     group:"AHOF", gender:"male", birthMonth:1,  birthDay:17, bio:"", photo:"images/ahof_steven.jpg", startVotes:0 },
  { id:"jeongwoo_ahof", name:"서정우", nameEn:"Seo Jeongwoo",     group:"AHOF", gender:"male", birthMonth:9,  birthDay:6,  bio:"", photo:"images/ahof_jeongwoo.jpg", startVotes:0 },
  { id:"woongki_ahof",  name:"차웅기", nameEn:"Cha Woongki",     group:"AHOF", gender:"male", birthMonth:4,  birthDay:23, bio:"", photo:"images/ahof_woongki.jpg", startVotes:0 },
  { id:"shuaibo_ahof",  name:"장슈아이보", nameEn:"Zhang Shuaibo", group:"AHOF", gender:"male", birthMonth:7,  birthDay:2,  bio:"", photo:"images/ahof_shuaibo.jpg", startVotes:0 },
  { id:"parkhan_ahof",  name:"박한", nameEn:"Park Han",       group:"AHOF", gender:"male", birthMonth:9,  birthDay:25, bio:"", photo:"images/ahof_parkhan.jpg", startVotes:0 },
  { id:"jl_ahof",       name:"제이엘", nameEn:"JL",     group:"AHOF", gender:"male", birthMonth:4,  birthDay:21, bio:"", photo:"images/ahof_jl.jpg", startVotes:0 },
  { id:"juwon_ahof",    name:"박주원", nameEn:"Park Juwon",     group:"AHOF", gender:"male", birthMonth:7,  birthDay:24, bio:"", photo:"images/ahof_juwon.jpg", startVotes:0 },
  { id:"zhien_ahof",    name:"즈언", nameEn:"Zhien",       group:"AHOF", gender:"male", birthMonth:10, birthDay:28, bio:"", photo:"images/ahof_zhien.jpg", startVotes:0 },
  { id:"daisuke_ahof",  name:"다이스케", nameEn:"Daisuke",   group:"AHOF", gender:"male", birthMonth:12, birthDay:25, bio:"", photo:"images/ahof_daisuke.jpg", startVotes:0 },

  /* ───────── THE SSYNDROME (보이즈 밴드) · 신인, 특이사항 없음 ───────── */
  { id:"junho_ssyn",   name:"석준호", nameEn:"Seok Junho", group:"THE SSYNDROME", gender:"male", birthMonth:2,  birthDay:13, bio:"키보드/보컬", photo:"images/ssyn_junho.jpg", startVotes:0 },
  { id:"heegyo_ssyn",  name:"양희교", nameEn:"Yang Heegyo", group:"THE SSYNDROME", gender:"male", birthMonth:4,  birthDay:18, bio:"기타/보컬", photo:"images/ssyn_heegyo.jpg", startVotes:0 },
  { id:"mingyu_ssyn",  name:"도민규", nameEn:"Do Mingyu", group:"THE SSYNDROME", gender:"male", birthMonth:10, birthDay:7,  bio:"베이스", photo:"images/ssyn_mingyu.jpg", startVotes:0 },
  { id:"jiyoung_ssyn", name:"정지영", nameEn:"Jung Jiyoung", group:"THE SSYNDROME", gender:"male", birthMonth:6,  birthDay:22, bio:"드럼", photo:"images/ssyn_jiyoung.jpg", startVotes:0 },
  { id:"shinsei_ssyn", name:"신세이", nameEn:"Shinsei", group:"THE SSYNDROME", gender:"male", birthMonth:10, birthDay:10, bio:"기타", photo:"images/ssyn_shinsei.jpg", startVotes:0 },

  /* ───────── 더보이즈 (보이즈) · 특이사항 없음 ───────── */
  { id:"sangyeon_tbz", name:"상연", nameEn:"Sangyeon",   group:"더보이즈", gender:"male", birthMonth:11, birthDay:4,  bio:"", photo:"images/tbz_sangyeon.jpg", startVotes:0 },
  { id:"jacob_tbz",    name:"제이콥", nameEn:"Jacob", group:"더보이즈", gender:"male", birthMonth:5,  birthDay:30, bio:"", photo:"images/tbz_jacob.jpg", startVotes:0 },
  { id:"younghoon_tbz",name:"영훈", nameEn:"Younghoon",   group:"더보이즈", gender:"male", birthMonth:8,  birthDay:8,  bio:"", photo:"images/tbz_younghoon.jpg", startVotes:0 },
  { id:"hyunjae_tbz",  name:"현재", nameEn:"Hyunjae",   group:"더보이즈", gender:"male", birthMonth:9,  birthDay:13, bio:"", photo:"images/tbz_hyunjae.jpg", startVotes:0 },
  { id:"juyeon_tbz",   name:"주연(더보이즈)", nameEn:"Juyeon",   group:"더보이즈", gender:"male", birthMonth:1,  birthDay:15, bio:"", photo:"images/tbz_juyeon.jpg", startVotes:0 },
  { id:"kevin_tbz",    name:"케빈", nameEn:"Kevin",   group:"더보이즈", gender:"male", birthMonth:2,  birthDay:23, bio:"", photo:"images/tbz_kevin.jpg", startVotes:0 },
  { id:"new_tbz",      name:"뉴", nameEn:"New",     group:"더보이즈", gender:"male", birthMonth:4,  birthDay:26, bio:"", photo:"images/tbz_new.jpg", startVotes:0 },
  { id:"q_tbz",        name:"큐", nameEn:"Q",     group:"더보이즈", gender:"male", birthMonth:11, birthDay:5,  bio:"", photo:"images/tbz_q.jpg", startVotes:0 },
  { id:"sunwoo_tbz",   name:"선우(더보이즈)", nameEn:"Sunwoo",   group:"더보이즈", gender:"male", birthMonth:4,  birthDay:12, bio:"", photo:"images/tbz_sunwoo.jpg", startVotes:0 },
  { id:"eric_tbz",     name:"에릭", nameEn:"Eric",   group:"더보이즈", gender:"male", birthMonth:12, birthDay:22, bio:"", photo:"images/tbz_eric.jpg", startVotes:0 },

  /* ───────── TUNEXX (보이즈) · 신인, 특이사항 없음 ───────── */
  { id:"donggyu_tunexx", name:"동규", nameEn:"Donggyu",   group:"TUNEXX", gender:"male", birthMonth:3,  birthDay:16, bio:"", photo:"images/tunexx_donggyu.jpg", startVotes:0 },
  { id:"inhu_tunexx",    name:"인후", nameEn:"Inhu",   group:"TUNEXX", gender:"male", birthMonth:1,  birthDay:22, bio:"", photo:"images/tunexx_inhu.jpg", startVotes:0 },
  { id:"taira_tunexx",   name:"타이라", nameEn:"Taira", group:"TUNEXX", gender:"male", birthMonth:4,  birthDay:3,  bio:"", photo:"images/tunexx_taira.jpg", startVotes:0 },
  { id:"sungjun_tunexx", name:"성준", nameEn:"Sungjun",   group:"TUNEXX", gender:"male", birthMonth:7,  birthDay:18, bio:"", photo:"images/tunexx_sungjun.jpg", startVotes:0 },
  { id:"jeon_tunexx",    name:"제온", nameEn:"Jeon",   group:"TUNEXX", gender:"male", birthMonth:7,  birthDay:20, bio:"", photo:"images/tunexx_jeon.jpg", startVotes:0 },
  { id:"sihwan_tunexx",  name:"시환", nameEn:"Sihwan",   group:"TUNEXX", gender:"male", birthMonth:11, birthDay:28, bio:"", photo:"images/tunexx_sihwan.jpg", startVotes:0 },
  { id:"atik_tunexx",    name:"아틱", nameEn:"Atik",   group:"TUNEXX", gender:"male", birthMonth:10, birthDay:9,  bio:"", photo:"images/tunexx_atik.jpg", startVotes:0 },

  /* 아이유 → 솔로 */
  { id:"iu_solo", name:"아이유", nameEn:"IU", group:"솔로", gender:"female", birthMonth:5, birthDay:16, bio:"싱어송라이터", photo:"images/solo_iu.jpg", startVotes:0 },

  /* ───────── TEMPEST (보이즈) · 특이사항 없음 ───────── */
  { id:"hanbin_tempest",    name:"한빈", nameEn:"Hanbin",  group:"TEMPEST", gender:"male", birthMonth:1, birthDay:19, bio:"", photo:"images/tempest_hanbin.jpg", startVotes:0 },
  { id:"hyeongseop_tempest",name:"형섭", nameEn:"Hyeongseop",  group:"TEMPEST", gender:"male", birthMonth:8, birthDay:9,  bio:"", photo:"images/tempest_hyeongseop.jpg", startVotes:0 },
  { id:"hyuk_tempest",      name:"혁", nameEn:"Hyuk",    group:"TEMPEST", gender:"male", birthMonth:4, birthDay:17, bio:"", photo:"images/tempest_hyuk.jpg", startVotes:0 },
  { id:"eunchan_tempest",   name:"은찬", nameEn:"Eunchan",  group:"TEMPEST", gender:"male", birthMonth:2, birthDay:27, bio:"", photo:"images/tempest_eunchan.jpg", startVotes:0 },
  { id:"lew_tempest",       name:"LEW", nameEn:"LEW",   group:"TEMPEST", gender:"male", birthMonth:4, birthDay:5,  bio:"", photo:"images/tempest_lew.jpg", startVotes:0 },
  { id:"taerae_tempest",    name:"태래", nameEn:"Taerae",  group:"TEMPEST", gender:"male", birthMonth:5, birthDay:9,  bio:"", photo:"images/tempest_taerae.jpg", startVotes:0 },

  /* ───────── 아스트로 (보이즈) · 故 문빈 포함, 현재 활동 5인 ───────── */
  { id:"mj_astro",     name:"MJ", nameEn:"MJ",    group:"아스트로", gender:"male", birthMonth:3, birthDay:5,  bio:"", photo:"images/astro_mj.jpg", startVotes:0 },
  { id:"jinjin_astro", name:"진진", nameEn:"JinJin",  group:"아스트로", gender:"male", birthMonth:3, birthDay:15, bio:"", photo:"images/astro_jinjin.jpg", startVotes:0 },
  { id:"eunwoo_astro", name:"차은우", nameEn:"Cha Eunwoo", group:"아스트로", gender:"male", birthMonth:3, birthDay:30, bio:"", photo:"images/astro_eunwoo.jpg", startVotes:0 },
  { id:"moonbin_astro",name:"문빈", nameEn:"Moonbin",  group:"아스트로", gender:"male", birthMonth:1, birthDay:26, bio:"故", photo:"images/astro_moonbin.jpg", startVotes:0 },
  { id:"sanha_astro",  name:"윤산하", nameEn:"Yoon Sanha", group:"아스트로", gender:"male", birthMonth:3, birthDay:21, bio:"", photo:"images/astro_sanha.jpg", startVotes:0 },

  /* ───────── &TEAM (보이즈) · 특이사항 없음 ───────── */
  { id:"k_andteam",       name:"케이", nameEn:"K",     group:"&TEAM", gender:"male", birthMonth:10, birthDay:21, bio:"", photo:"images/andteam_k.jpg", startVotes:0 },
  { id:"fuma_andteam",    name:"후마", nameEn:"Fuma",     group:"&TEAM", gender:"male", birthMonth:6,  birthDay:29, bio:"", photo:"images/andteam_fuma.jpg", startVotes:0 },
  { id:"nicholas_andteam",name:"니콜라스", nameEn:"Nicholas", group:"&TEAM", gender:"male", birthMonth:7,  birthDay:9,  bio:"", photo:"images/andteam_nicholas.jpg", startVotes:0 },
  { id:"ej_andteam",      name:"의주", nameEn:"EJ",     group:"&TEAM", gender:"male", birthMonth:9,  birthDay:7,  bio:"", photo:"images/andteam_ej.jpg", startVotes:0 },
  { id:"yuma_andteam",    name:"유마", nameEn:"Yuma",     group:"&TEAM", gender:"male", birthMonth:2,  birthDay:7,  bio:"", photo:"images/andteam_yuma.jpg", startVotes:0 },
  { id:"jo_andteam",      name:"조", nameEn:"Jo",       group:"&TEAM", gender:"male", birthMonth:7,  birthDay:8,  bio:"", photo:"images/andteam_jo.jpg", startVotes:0 },
  { id:"harua_andteam",   name:"하루아", nameEn:"Harua",   group:"&TEAM", gender:"male", birthMonth:5,  birthDay:1,  bio:"", photo:"images/andteam_harua.jpg", startVotes:0 },
  { id:"taki_andteam",    name:"타키", nameEn:"Taki",     group:"&TEAM", gender:"male", birthMonth:5,  birthDay:4,  bio:"", photo:"images/andteam_taki.jpg", startVotes:0 },
  { id:"maki_andteam",    name:"마키", nameEn:"Maki",     group:"&TEAM", gender:"male", birthMonth:2,  birthDay:17, bio:"", photo:"images/andteam_maki.jpg", startVotes:0 },

  /* ───────── n.SSign (보이즈) · 특이사항 없음 ───────── */
  { id:"kazuta_nssign",  name:"카즈타", nameEn:"Kazuta", group:"n.SSign", gender:"male", birthMonth:12, birthDay:31, bio:"", photo:"images/nssign_kazuta.jpg", startVotes:0 },
  { id:"doha_nssign",    name:"도하(n.SSign)", nameEn:"Doha",   group:"n.SSign", gender:"male", birthMonth:9,  birthDay:27, bio:"", photo:"images/nssign_doha.jpg", startVotes:0 },
  { id:"sungyoon_nssign",name:"성윤", nameEn:"Sungyoon",   group:"n.SSign", gender:"male", birthMonth:8,  birthDay:5,  bio:"", photo:"images/nssign_sungyoon.jpg", startVotes:0 },
  { id:"robin_nssign",   name:"로빈", nameEn:"Robin",   group:"n.SSign", gender:"male", birthMonth:4,  birthDay:3,  bio:"", photo:"images/nssign_robin.jpg", startVotes:0 },
  { id:"hanjun_nssign",  name:"한준", nameEn:"Hanjun",   group:"n.SSign", gender:"male", birthMonth:8,  birthDay:28, bio:"", photo:"images/nssign_hanjun.jpg", startVotes:0 },
  { id:"laurence_nssign",name:"로렌스", nameEn:"Laurence", group:"n.SSign", gender:"male", birthMonth:11, birthDay:7,  bio:"", photo:"images/nssign_laurence.jpg", startVotes:0 },
  { id:"huiwon_nssign",  name:"희원", nameEn:"Huiwon",   group:"n.SSign", gender:"male", birthMonth:11, birthDay:11, bio:"", photo:"images/nssign_huiwon.jpg", startVotes:0 },

  /* ───────── KATSEYE (걸즈) · 특이사항 없음 ───────── */
  { id:"manon_katseye",  name:"마농", nameEn:"Manon",     group:"KATSEYE", gender:"female", birthMonth:6,  birthDay:26, bio:"", photo:"images/katseye_manon.jpg", startVotes:0 },
  { id:"sophia_katseye", name:"소피아", nameEn:"Sophia",   group:"KATSEYE", gender:"female", birthMonth:12, birthDay:31, bio:"", photo:"images/katseye_sophia.jpg", startVotes:0 },
  { id:"daniela_katseye",name:"다니엘라", nameEn:"Daniela", group:"KATSEYE", gender:"female", birthMonth:7,  birthDay:1,  bio:"", photo:"images/katseye_daniela.jpg", startVotes:0 },
  { id:"lara_katseye",   name:"라라", nameEn:"Lara",     group:"KATSEYE", gender:"female", birthMonth:11, birthDay:3,  bio:"", photo:"images/katseye_lara.jpg", startVotes:0 },
  { id:"megan_katseye",  name:"메간", nameEn:"Megan",     group:"KATSEYE", gender:"female", birthMonth:2,  birthDay:10, bio:"", photo:"images/katseye_megan.jpg", startVotes:0 },
  { id:"yoonchae_katseye",name:"윤채", nameEn:"Yoonchae",    group:"KATSEYE", gender:"female", birthMonth:12, birthDay:6,  bio:"", photo:"images/katseye_yoonchae.jpg", startVotes:0 },

  /* ───────── god (보이즈) · 특이사항 없음 ───────── */
  { id:"joonhyung_god",name:"박준형", nameEn:"Park Joonhyung", group:"god", gender:"male", birthMonth:7,  birthDay:20, bio:"", photo:"images/god_joonhyung.jpg", startVotes:0 },
  { id:"kyesang_god",  name:"윤계상", nameEn:"Yoon Kyesang", group:"god", gender:"male", birthMonth:12, birthDay:20, bio:"", photo:"images/god_kyesang.jpg", startVotes:0 },
  { id:"danny_god",    name:"데니 안", nameEn:"Danny Ahn", group:"god", gender:"male", birthMonth:12, birthDay:22, bio:"", photo:"images/god_danny.jpg", startVotes:0 },
  { id:"hoyoung_god",  name:"손호영", nameEn:"Son Hoyoung", group:"god", gender:"male", birthMonth:3,  birthDay:26, bio:"", photo:"images/god_hoyoung.jpg", startVotes:0 },
  { id:"taewoo_god",   name:"김태우", nameEn:"Kim Taewoo", group:"god", gender:"male", birthMonth:5,  birthDay:12, bio:"", photo:"images/god_taewoo.jpg", startVotes:0 },

  /* ───────── 솔로 (추가분) ───────── */
  { id:"boa_solo",       name:"보아", nameEn:"BoA",   group:"솔로", gender:"female", birthMonth:11, birthDay:5,  bio:"솔로 가수", photo:"images/solo_boa.jpg", startVotes:0 },
  { id:"sunmi_solo",     name:"선미", nameEn:"Sunmi",   group:"솔로", gender:"female", birthMonth:5,  birthDay:2,  bio:"前 원더걸스", photo:"images/solo_sunmi.jpg", startVotes:0 },
  { id:"seongwu_solo",   name:"옹성우", nameEn:"Ong Seongwu", group:"솔로", gender:"male",   birthMonth:8,  birthDay:25, bio:"前 워너원", photo:"images/solo_seongwu.jpg", startVotes:0 },
  { id:"jaehwan_solo",   name:"김재환", nameEn:"Kim Jaehwan", group:"솔로", gender:"male",   birthMonth:5,  birthDay:27, bio:"前 워너원", photo:"images/solo_jaehwan.jpg", startVotes:0 },
  { id:"yoonjisung_solo",name:"윤지성", nameEn:"Yoon Jisung", group:"솔로", gender:"male",   birthMonth:3,  birthDay:8,  bio:"前 워너원", photo:"images/solo_yoonjisung.jpg", startVotes:0 },
  { id:"daniel_solo",    name:"강다니엘", nameEn:"Kang Daniel",group:"솔로", gender:"male",   birthMonth:12, birthDay:10, bio:"前 워너원", photo:"images/solo_daniel.jpg", startVotes:0 },

  /* ───────── 포레스텔라 (보이즈) · 크로스오버 보컬그룹 ───────── */
  { id:"doohoon_forestella",name:"배두훈", nameEn:"Bae Doohoon", group:"포레스텔라", gender:"male", birthMonth:7,  birthDay:15, bio:"테너", photo:"images/forestella_doohoon.jpg", startVotes:0 },
  { id:"hyungho_forestella",name:"강형호", nameEn:"Kang Hyungho", group:"포레스텔라", gender:"male", birthMonth:3,  birthDay:8,  bio:"테너/소프라노", photo:"images/forestella_hyungho.jpg", startVotes:0 },
  { id:"mingyu_forestella", name:"조민규", nameEn:"Cho Mingyu", group:"포레스텔라", gender:"male", birthMonth:11, birthDay:19, bio:"리더/테너", photo:"images/forestella_mingyu.jpg", startVotes:0 },
  { id:"woorim_forestella", name:"고우림", nameEn:"Ko Woorim", group:"포레스텔라", gender:"male", birthMonth:7,  birthDay:10, bio:"베이스", photo:"images/forestella_woorim.jpg", startVotes:0 },

  /* ───────── 루시 (보이즈 밴드) · 특이사항 없음 ───────── */
  { id:"yechan_lucy",  name:"신예찬", nameEn:"Shin Yechan", group:"루시", gender:"male", birthMonth:6, birthDay:13, bio:"바이올린", photo:"images/lucy_yechan.jpg", startVotes:0 },
  { id:"sangyeop_lucy",name:"최상엽", nameEn:"Choi Sangyeop", group:"루시", gender:"male", birthMonth:2, birthDay:27, bio:"보컬/기타", photo:"images/lucy_sangyeop.jpg", startVotes:0 },
  { id:"wonsang_lucy", name:"조원상", nameEn:"Cho Wonsang", group:"루시", gender:"male", birthMonth:8, birthDay:15, bio:"베이스", photo:"images/lucy_wonsang.jpg", startVotes:0 },
  { id:"gwangil_lucy", name:"신광일", nameEn:"Shin Gwangil", group:"루시", gender:"male", birthMonth:5, birthDay:25, bio:"드럼/보컬", photo:"images/lucy_gwangil.jpg", startVotes:0 },

  // ===== 명부 master list 전체 반영 완료 =====

];
