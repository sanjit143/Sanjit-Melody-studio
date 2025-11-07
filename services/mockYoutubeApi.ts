import type { YouTubePlaylist } from '../types';

const playlistsData: YouTubePlaylist[] = [
  {
    id: 'PLgzIe1joGEyJUtbKe2EkhEunDDa7Yf1k_',
    title: 'My Own Songs | আমার নিজের গান 🎵',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/LpnShH-Miv4/mqdefault.jpg',
    videos: [
      { id: 'LpnShH-Miv4', title: 'Tomar Sure Sur Melate | তোমার সুরে সুর মেলাতে', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/LpnShH-Miv4/mqdefault.jpg', duration: '4:15',
        uploadDate: 'May 5, 2023', viewCount: '1.2M views', likeCount: '32K likes',
        lyrics: [
          { time: 10, text: 'তোমার সুরে সুর মেলাতে, আমার গানের ভাষা।' },
          { time: 15, text: 'তোমার চোখে চোখ রাখতে, আমার নতুন করে বাঁচা।' },
          { time: 20, text: 'এই মন তোকে চায়, শুধু তোকে চায়,' },
          { time: 25, text: 'দিন রাত শুধু তোকে খুঁজে যায়।' },
        ]
      },
      { id: 'D6_Ab7j2Q2E', title: 'Tumi Chara | তুমি ছাড়া', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/D6_Ab7j2Q2E/mqdefault.jpg', duration: '3:50', uploadDate: 'Jun 12, 2022', viewCount: '890K views', likeCount: '21K likes' },
      { id: 'yS_5L4e45dE', title: 'Bondhu Tumi | বন্ধু তুমি', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/yS_5L4e45dE/mqdefault.jpg', duration: '5:02', uploadDate: 'Sep 3, 2022', viewCount: '1.5M views', likeCount: '45K likes' },
      { id: 'u4d8iI6Q_qQ', title: 'Mon Boleche | মন বলেছে', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/u4d8iI6Q_qQ/mqdefault.jpg', duration: '4:24', uploadDate: 'Jan 20, 2023', viewCount: '750K views', likeCount: '18K likes' },
      { id: '9rGGTDX8V18', title: 'Tor Mon Paray | তোর মন পাড়ায়', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/9rGGTDX8V18/mqdefault.jpg', duration: '4:26', uploadDate: 'Feb 14, 2023', viewCount: '2.1M views', likeCount: '55K likes' },
      { id: 'uL07hRUnk7Q', title: 'O Priya | ও প্রিয়া', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/uL07hRUnk7Q/mqdefault.jpg', duration: '4:30', uploadDate: 'Mar 1, 2023', viewCount: '980K views', likeCount: '28K likes' },
      { id: 'lYj430M8dNc', title: 'Apsara | অপ্সরা', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/lYj430M8dNc/mqdefault.jpg', duration: '3:25', uploadDate: 'Apr 19, 2023', viewCount: '1.8M views', likeCount: '40K likes' },
      { id: 'x408e_g-Vwg', title: 'Tomar Chokhe | তোমার চোখে', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/x408e_g-Vwg/mqdefault.jpg', duration: '3:59', uploadDate: 'Jul 25, 2023', viewCount: '650K views', likeCount: '15K likes' },
      { id: 'a-w56-vS_Sk', title: 'Tomake Chai | তোমাকে চাই', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/a-w56-vS_Sk/mqdefault.jpg', duration: '3:37', uploadDate: 'Aug 2, 2023', viewCount: '1.3M views', likeCount: '35K likes' },
      { id: 'Wn7f1k-U_k4', title: 'Ektu Ektu Kore | একটু একটু করে', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/Wn7f1k-U_k4/mqdefault.jpg', duration: '3:55', uploadDate: 'Oct 10, 2023', viewCount: '1.1M views', likeCount: '30K likes' },
      { id: 's5m-B_j4c-g', title: 'Kichu Kotha | কিছু কথা', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/s5m-B_j4c-g/mqdefault.jpg', duration: '4:45', uploadDate: 'Nov 1, 2023', viewCount: '800K views', likeCount: '22K likes' },
      { id: 'h2A4i4-g1kY', title: 'Ogo Maa | ওগো মা', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/h2A4i4-g1kY/mqdefault.jpg', duration: '5:01', uploadDate: 'May 10, 2024', viewCount: '500K views', likeCount: '12K likes' },
      { id: 'J8fT-bC_7Jk', title: 'Joy Joy Maa | জয় জয় মা', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/J8fT-bC_7Jk/mqdefault.jpg', duration: '4:10', uploadDate: 'Oct 2, 2023', viewCount: '450K views', likeCount: '11K likes' },
      { id: 'Yv8_G1j-K_k', title: 'Dil Kyun | দিল কিউ', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/Yv8_G1j-K_k/mqdefault.jpg', duration: '4:05', uploadDate: 'Feb 1, 2024', viewCount: '600K views', likeCount: '14K likes' },
      { id: 'l-Oq7k7f-9c', title: 'Mon Khujeche Tomake | মন খুঁজেছে তোমাকে', channelTitle: 'MR SANJIT SINGH', thumbnailUrl: 'https://i.ytimg.com/vi/l-Oq7k7f-9c/mqdefault.jpg', duration: '3:45', uploadDate: 'Mar 15, 2024', viewCount: '950K views', likeCount: '25K likes'}
    ]
  },
  {
    id: 'PLgzIe1joGEyJAfF6C2ZP7ux2OcehTAyd5',
    title: '❤️ Romantic Hindi Songs',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/_X57Aai_2uk/mqdefault.jpg',
    videos: [
      { id: '_X57Aai_2uk', title: 'Tum Hi Ho', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/_X57Aai_2uk/mqdefault.jpg', duration: '4:22',
        uploadDate: 'Mar 29, 2013', viewCount: '1.1B views', likeCount: '8.1M likes',
        lyrics: [
          { time: 15.5, text: 'Hum tere bin ab reh nahi sakte' },
          { time: 19.5, text: 'Tere bina kya wajood mera' },
          { time: 23.5, text: 'Tujhse juda gar ho jaayenge' },
          { time: 27.5, text: 'Toh khud se hi ho jaayenge judaa' },
          { time: 31, text: '' },
          { time: 32, text: 'Kyunki tum hi ho' },
          { time: 36, text: 'Ab tum hi ho' },
          { time: 40, text: 'Zindagi ab tum hi ho' },
          { time: 44, text: 'Chain bhi, mera dard bhi' },
          { time: 48, text: 'Meri aashiqui ab tum hi ho' },
        ]
      },
      { id: '284Ov7ysY_8', title: 'Channa Mereya', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/284Ov7ysY_8/mqdefault.jpg', duration: '4:49', uploadDate: 'Sep 29, 2016', viewCount: '890M views', likeCount: '6.5M likes' },
      { id: 'x_elT6zkqN0', title: 'Agar Tum Saath Ho', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/x_elT6zkqN0/mqdefault.jpg', duration: '5:41', uploadDate: 'Oct 7, 2015', viewCount: '700M views', likeCount: '5M likes' },
      { id: 'Y9-l9_Ea_bM', title: 'Ve Maahi', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/Y9-l9_Ea_bM/mqdefault.jpg', duration: '3:43', uploadDate: 'Jan 1, 2019', viewCount: '950M views', likeCount: '7.2M likes' },
      { id: 'Jtn_2d3y_C4', title: 'Tujhe Kitna Chahne Lage', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/Jtn_2d3y_C4/mqdefault.jpg', duration: '4:44', uploadDate: 'May 31, 2019', viewCount: '1.2B views', likeCount: '9M likes' },
      { id: '65_y_sL2XpY', title: 'Kalank Title Track', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/65_y_sL2XpY/mqdefault.jpg', duration: '5:11', uploadDate: 'Mar 29, 2019', viewCount: '600M views', likeCount: '4.8M likes' },
      { id: 'yJkEE80s-9g', title: 'Pal', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/yJkEE80s-9g/mqdefault.jpg', duration: '4:03', uploadDate: 'Sep 12, 2018', viewCount: '450M views', likeCount: '4M likes' },
      { id: 'hz_B-2_eWxI', title: 'Dekha Hazaro Dafaa', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/hz_B-2_eWxI/mqdefault.jpg', duration: '3:30', uploadDate: 'Aug 19, 2016', viewCount: '380M views', likeCount: '3.5M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyLuEfudw72rHOV5GpPfMQFB',
    title: '❤️ রোমান্টিক বাংলা গান',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/7l_Q3g2y38U/mqdefault.jpg',
    videos: [
      { id: '7l_Q3g2y38U', title: 'Tomake Chuye Dilam', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/7l_Q3g2y38U/mqdefault.jpg', duration: '3:18',
        uploadDate: 'Feb 1, 2018', viewCount: '150M views', likeCount: '1.2M likes',
        lyrics: `তোমাকে ছুঁয়ে দিলাম, 
আমার এই অন্তহীন ভালোবাসায়।
তোমার নামে লিখে দিলাম,
আমার সব কবিতা আর গান।`
      },
      { id: 'WPSZAi2sO1k', title: 'Bhalobashar Morshum', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/WPSZAi2sO1k/mqdefault.jpg', duration: '3:01', uploadDate: 'Feb 10, 2020', viewCount: '80M views', likeCount: '800K likes' },
      { id: 'a4FWaVzG3n4', title: 'Tumi Jake Bhalobaso', channelTitle: 'Anupam Roy', thumbnailUrl: 'https://i.ytimg.com/vi/a4FWaVzG3n4/mqdefault.jpg', duration: '4:55', uploadDate: 'Dec 22, 2015', viewCount: '200M views', likeCount: '1.5M likes' },
      { id: 'Joxk_TjFj-o', title: 'Egiye De', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/Joxk_TjFj-o/mqdefault.jpg', duration: '3:56', uploadDate: 'May 2, 2016', viewCount: '120M views', likeCount: '950K likes' },
      { id: 'fybJm3_p2-E', title: 'Tumi Ashbe Bole', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/fybJm3_p2-E/mqdefault.jpg', duration: '4:21', uploadDate: 'Sep 25, 2010', viewCount: '50M views', likeCount: '400K likes' },
      { id: 's2nQCA2L2PA', title: 'Projapoti Mon', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/s2nQCA2L2PA/mqdefault.jpg', duration: '3:45', uploadDate: 'Sep 1, 2017', viewCount: '90M views', likeCount: '750K likes' },
      { id: 'SJeWJ5pbtbE', title: 'Keno Je Toke', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/SJeWJ5pbtbE/mqdefault.jpg', duration: '3:12', uploadDate: 'Jan 15, 2014', viewCount: '110M views', likeCount: '880K likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyKDqSt-yNK_isZUuFvw3i9z',
    title: 'Best Hindi Songs 🎶',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/mqdefault.jpg',
    videos: [
      { id: 'BddP6PYo2gs', title: 'Kesariya', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/mqdefault.jpg', duration: '4:28', uploadDate: 'Apr 17, 2022', viewCount: '550M views', likeCount: '6M likes' },
      { id: 'so8i_gu37nU', title: 'Apna Bana Le', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/so8i_gu37nU/mqdefault.jpg', duration: '4:21', uploadDate: 'Nov 8, 2022', viewCount: '400M views', likeCount: '4.5M likes' },
      { id: 'MJyKN-8G6_I', title: 'Shayad', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/MJyKN-8G6_I/mqdefault.jpg', duration: '4:09', uploadDate: 'Jan 22, 2020', viewCount: '800M views', likeCount: '7.8M likes' },
      { id: 'A1KTg20s_kU', title: 'Raataan Lambiyan', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/A1KTg20s_kU/mqdefault.jpg', duration: '3:50', uploadDate: 'Jul 30, 2021', viewCount: '900M views', likeCount: '8.5M likes' },
      { id: 'vGq6pW_2J24', title: 'Manike', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/vGq6pW_2J24/mqdefault.jpg', duration: '3:17', uploadDate: 'Sep 16, 2022', viewCount: '300M views', likeCount: '3.5M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyIA3QxGJ2AXmPO9FqwFhQzY',
    title: 'Best Bengali Songs 🎶',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/Rk2y1mghV_8/mqdefault.jpg',
    videos: [
      { id: 'Rk2y1mghV_8', title: 'Amake Amar Moto Thakte Dao', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/Rk2y1mghV_8/mqdefault.jpg', duration: '5:35', uploadDate: 'Mar 1, 2010', viewCount: '180M views', likeCount: '1.4M likes' },
      { id: '8jpkM9i3dwY', title: 'Bojhena Shey Bojhena', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/8jpkM9i3dwY/mqdefault.jpg', duration: '4:00', uploadDate: 'Dec 12, 2012', viewCount: '160M views', likeCount: '1.1M likes' },
      { id: 'T289sBK0k3o', title: 'Ekla Cholo Re', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/T289sBK0k3o/mqdefault.jpg', duration: '3:20', uploadDate: 'Aug 1, 2012', viewCount: '40M views', likeCount: '350K likes' },
      { id: 'b9oY_2w5D80', title: 'Chirodini Tumi Je Amar', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/b9oY_2w5D80/mqdefault.jpg', duration: '5:02', uploadDate: 'Nov 6, 2013', viewCount: '250M views', likeCount: '2M likes' },
      { id: 'Y8U5IWe-C-s', title: 'Jodi Kokhono', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/Y8U5IWe-C-s/mqdefault.jpg', duration: '5:04', uploadDate: 'Feb 14, 2014', viewCount: '30M views', likeCount: '280K likes' },
      { id: 'hie0Z-pAU2s', title: 'Monta Re', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/hie0Z-pAU2s/mqdefault.jpg', duration: '4:52', uploadDate: 'Jun 1, 2013', viewCount: '130M views', likeCount: '1M likes' },
      { id: 'V5cMuR0d20Q', title: 'Tomra Ekhono Ki', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/V5cMuR0d20Q/mqdefault.jpg', duration: '6:10', uploadDate: 'Jul 15, 2011', viewCount: '45M views', likeCount: '380K likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyJpT1Pvur7QTv24nW640S83',
    title: '💔 Sad Songs | Bollywood',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/rC8-021PA-s/mqdefault.jpg',
    videos: [
      { id: 'rC8-021PA-s', title: 'Tujhe Bhula Diya', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/rC8-021PA-s/mqdefault.jpg', duration: '4:40', uploadDate: 'Oct 2, 2010', viewCount: '400M views', likeCount: '2.5M likes' },
      { id: 'RKioC8_2e5c', title: 'Mann Bharryaa 2.0', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/RKioC8_2e5c/mqdefault.jpg', duration: '4:26', uploadDate: 'Aug 15, 2021', viewCount: '350M views', likeCount: '4M likes' },
      { id: 'Zes_4aZYR9I', title: 'Pachtaoge', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/Zes_4aZYR9I/mqdefault.jpg', duration: '3:46', uploadDate: 'Aug 23, 2019', viewCount: '700M views', likeCount: '6.8M likes' },
      { id: 'u3u228q2SqI', title: 'Phir Bhi Tumko Chaahunga', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/u3u228q2SqI/mqdefault.jpg', duration: '5:51', uploadDate: 'Apr 18, 2017', viewCount: '1.3B views', likeCount: '9.5M likes' },
      { id: 'w4-P6kQ_0Yk', title: 'Bekhayali', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/w4-P6kQ_0Yk/mqdefault.jpg', duration: '6:11', uploadDate: 'May 24, 2019', viewCount: '650M views', likeCount: '6.2M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyKVKIsWQReFHiXQw9LVDPfx',
    title: '💔 দুঃখের গান | Sad Bangla',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/e8C0H5s_3qI/mqdefault.jpg',
    videos: [
      { id: 'e8C0H5s_3qI', title: 'Shei Tumi', channelTitle: 'Ayub Bachchu', thumbnailUrl: 'https://i.ytimg.com/vi/e8C0H5s_3qI/mqdefault.jpg', duration: '4:06', uploadDate: 'Apr 25, 2010', viewCount: '90M views', likeCount: '700K likes' },
      { id: 'wP7j83vCEs8', title: 'Ekhon Onek Raat', channelTitle: 'Anupam Roy', thumbnailUrl: 'https://i.ytimg.com/vi/wP7j83vCEs8/mqdefault.jpg', duration: '3:30', uploadDate: 'Mar 23, 2013', viewCount: '85M views', likeCount: '650K likes' },
      { id: 'O7GzVsG2I-M', title: 'Ferari Mon', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/O7GzVsG2I-M/mqdefault.jpg', duration: '4:52', uploadDate: 'Jun 1, 2012', viewCount: '75M views', likeCount: '500K likes' },
      { id: '1nTlAcYvN6s', title: 'Bhenge Mor Ghorer Chabi', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/1nTlAcYvN6s/mqdefault.jpg', duration: '3:35', uploadDate: 'Aug 10, 2011', viewCount: '25M views', likeCount: '200K likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyIV0Cwd7rXgMid_Pf3511tC',
    title: '🎉 Party Songs / Dance Hits',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/Ym3T9F1R_UI/mqdefault.jpg',
    videos: [
      { id: 'Ym3T9F1R_UI', title: 'Kala Chashma', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/Ym3T9F1R_UI/mqdefault.jpg', duration: '3:07', uploadDate: 'Jul 27, 2016', viewCount: '1.4B views', likeCount: '7.8M likes' },
      { id: 'uF5v_s_d_3o', title: 'Kar Gayi Chull', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/uF5v_s_d_3o/mqdefault.jpg', duration: '3:07', uploadDate: 'Feb 17, 2016', viewCount: '900M views', likeCount: '5.5M likes' },
      { id: '8v-TWxPWIWc', title: 'The Punjaabban Song', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/8v-TWxPWIWc/mqdefault.jpg', duration: '3:19', uploadDate: 'May 28, 2022', viewCount: '250M views', likeCount: '2.8M likes' },
      { id: 'c62-tNvaR0U', title: 'Ghungroo', channelTitle: 'YRF', thumbnailUrl: 'https://i.ytimg.com/vi/c62-tNvaR0U/mqdefault.jpg', duration: '5:02', uploadDate: 'Sep 5, 2019', viewCount: '600M views', likeCount: '5.1M likes' },
      { id: '1q8-_LrhvPA', title: 'Badri Ki Dulhania', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/1q8-_LrhvPA/mqdefault.jpg', duration: '3:26', uploadDate: 'Feb 26, 2017', viewCount: '1.1B views', likeCount: '7.5M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyJhwyFdxtMz8eOpFajbKgzW',
    title: '🕺 পার্টি ও নাচের গান',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/v_9r2Jg-s_M/mqdefault.jpg',
    videos: [
      { id: 'v_9r2Jg-s_M', title: 'Tumpa', channelTitle: 'The Confused Picture', thumbnailUrl: 'https://i.ytimg.com/vi/v_9r2Jg-s_M/mqdefault.jpg', duration: '3:01', uploadDate: 'Nov 12, 2020', viewCount: '200M views', likeCount: '1.8M likes' },
      { id: 'oGneA-3a6fE', title: 'Pagla Dance', channelTitle: 'Surinder Films', thumbnailUrl: 'https://i.ytimg.com/vi/oGneA-3a6fE/mqdefault.jpg', duration: '3:31', uploadDate: 'May 2, 2014', viewCount: '150M views', likeCount: '900K likes' },
      { id: 'LwRIXz6iSAs', title: 'Sohag Chand', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/LwRIXz6iSAs/mqdefault.jpg', duration: '2:40', uploadDate: 'Apr 20, 2018', viewCount: '110M views', likeCount: '850K likes' },
      { id: 'YgUfKzf_P7M', title: 'Keno Dure Thako', channelTitle: 'SVF Music', thumbnailUrl: 'https://i.ytimg.com/vi/YgUfKzf_P7M/mqdefault.jpg', duration: '4:26', uploadDate: 'Aug 17, 2012', viewCount: '95M views', likeCount: '700K likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyLwNG7_LXQWNCrcsXL9ID4x',
    title: '💃 Bollywood Classics',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/H2-GI2-3O-w/mqdefault.jpg',
    videos: [
      { id: 'H2-GI2-3O-w', title: 'Mere Sapno Ki Rani', channelTitle: 'Saregama Music', thumbnailUrl: 'https://i.ytimg.com/vi/H2-GI2-3O-w/mqdefault.jpg', duration: '5:00', uploadDate: 'Apr 11, 2012', viewCount: '300M views', likeCount: '1.5M likes' },
      { id: 'yLQ_A4503o0', title: 'Chura Liya Hai Tumne Jo Dil Ko', channelTitle: 'Saregama Music', thumbnailUrl: 'https://i.ytimg.com/vi/yLQ_A4503o0/mqdefault.jpg', duration: '4:49', uploadDate: 'May 1, 2010', viewCount: '450M views', likeCount: '2.2M likes' },
      { id: '95p02r2y_pI', title: 'O Mere Dil Ke Chain', channelTitle: 'Saregama Music', thumbnailUrl: 'https://i.ytimg.com/vi/95p02r2y_pI/mqdefault.jpg', duration: '4:35', uploadDate: 'May 5, 2011', viewCount: '350M views', likeCount: '1.8M likes' },
      { id: 'vo1MyF1_q4g', title: 'Pal Pal Dil Ke Paas', channelTitle: 'Saregama Music', thumbnailUrl: 'https://i.ytimg.com/vi/vo1MyF1_q4g/mqdefault.jpg', duration: '5:27', uploadDate: 'Jul 2, 2009', viewCount: '280M views', likeCount: '1.6M likes' },
      { id: 'd_vKDM83G-s', title: 'Gulabi Ankhen', channelTitle: 'Saregama Music', thumbnailUrl: 'https://i.ytimg.com/vi/d_vKDM83G-s/mqdefault.jpg', duration: '3:19', uploadDate: 'Oct 1, 2013', viewCount: '400M views', likeCount: '2.5M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyI7n_Q9i04WOXqG74nPlD5M',
    title: '🔥 Best Motivational Music',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/gPLK_a-I-Ew/mqdefault.jpg',
    videos: [
      { id: 'gPLK_a-I-Ew', title: 'Lakshya', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/gPLK_a-I-Ew/mqdefault.jpg', duration: '6:14', uploadDate: 'Nov 1, 2012', viewCount: '150M views', likeCount: '1.2M likes' },
      { id: 't9-CS2v8wcc', title: 'Zinda', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/t9-CS2v8wcc/mqdefault.jpg', duration: '3:32', uploadDate: 'Jun 21, 2013', viewCount: '200M views', likeCount: '1.8M likes' },
      { id: 'wuVOgbLn2oY', title: 'Kar Har Maidaan Fateh', channelTitle: 'T-Series', thumbnailUrl: 'https://i.ytimg.com/vi/wuVOgbLn2oY/mqdefault.jpg', duration: '5:11', uploadDate: 'Jun 10, 2018', viewCount: '300M views', likeCount: '3M likes' },
      { id: '9P0A60f2yVI', title: 'Chak De! India', channelTitle: 'YRF', thumbnailUrl: 'https://i.ytimg.com/vi/9P0A60f2yVI/mqdefault.jpg', duration: '4:43', uploadDate: 'Jun 6, 2012', viewCount: '250M views', likeCount: '2.2M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyLF_IfmRusUcRfLbE2bH9B8',
    title: '🎤 LIVE Session Experience',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/y_j81JcWS3I/mqdefault.jpg',
    videos: [
      { id: 'y_j81JcWS3I', title: 'Arijit Singh - MTV Unplugged', channelTitle: 'MTV India', thumbnailUrl: 'https://i.ytimg.com/vi/y_j81JcWS3I/mqdefault.jpg', duration: '9:58', uploadDate: 'Nov 10, 2013', viewCount: '180M views', likeCount: '1.5M likes' },
      { id: 'j9zYU_cmOMc', title: 'Atif Aslam - Live Performance', channelTitle: 'Various Artists', thumbnailUrl: 'https://i.ytimg.com/vi/j9zYU_cmOMc/mqdefault.jpg', duration: '8:45', uploadDate: 'May 5, 2015', viewCount: '120M views', likeCount: '1M likes' },
      { id: 'X0oGk_Y2p2I', title: 'Kun Faya Kun - Coke Studio', channelTitle: 'Coke Studio', thumbnailUrl: 'https://i.ytimg.com/vi/X0oGk_Y2p2I/mqdefault.jpg', duration: '7:56', uploadDate: 'Jun 22, 2012', viewCount: '350M views', likeCount: '3.2M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyIkJl1G7gyvQIiZKZSnvQ7E',
    title: 'Songs of Freedom & Patriotism',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/iSm4-a2l2yA/mqdefault.jpg',
    videos: [
      { id: 'iSm4-a2l2yA', title: 'Maa Tujhe Salaam', channelTitle: 'Sony Music India', thumbnailUrl: 'https://i.ytimg.com/vi/iSm4-a2l2yA/mqdefault.jpg', duration: '6:15', uploadDate: 'May 1, 2014', viewCount: '220M views', likeCount: '2.5M likes' },
      { id: 'JHi-gG63_sA', title: 'Sandese Aate Hain', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/JHi-gG63_sA/mqdefault.jpg', duration: '10:19', uploadDate: 'Jan 25, 2015', viewCount: '400M views', likeCount: '3.8M likes' },
      { id: 'wF_B_aagLfI', title: 'Teri Mitti', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/wF_B_aagLfI/mqdefault.jpg', duration: '5:20', uploadDate: 'Mar 15, 2019', viewCount: '750M views', likeCount: '7M likes' },
      { id: 'BKx_B1_2uaQ', title: 'Ae Watan', channelTitle: 'Zee Music Company', thumbnailUrl: 'https://i.ytimg.com/vi/BKx_B1_2uaQ/mqdefault.jpg', duration: '3:57', uploadDate: 'May 8, 2018', viewCount: '280M views', likeCount: '3.1M likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyLa3GIwD1IoeLDYZi2JQfyC',
    title: 'তৃণমূল কংগ্রেসের শ্রেষ্ঠ গান',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/pE2oGDoM08o/mqdefault.jpg',
    videos: [
      { id: 'pE2oGDoM08o', title: 'Khela Hobe', channelTitle: 'TMC', thumbnailUrl: 'https://i.ytimg.com/vi/pE2oGDoM08o/mqdefault.jpg', duration: '1:30', uploadDate: 'Feb 20, 2021', viewCount: '25M views', likeCount: '300K likes' },
      { id: 'F3-S1-aAjQc', title: 'TMC New Song 2021', channelTitle: 'TMC', thumbnailUrl: 'https://i.ytimg.com/vi/F3-S1-aAjQc/mqdefault.jpg', duration: '4:18', uploadDate: 'Mar 5, 2021', viewCount: '15M views', likeCount: '180K likes' },
      { id: '9qcz3N2GThI', title: 'Didi abar asche', channelTitle: 'TMC', thumbnailUrl: 'https://i.ytimg.com/vi/9qcz3N2GThI/mqdefault.jpg', duration: '3:05', uploadDate: 'Mar 1, 2021', viewCount: '10M views', likeCount: '150K likes' },
    ]
  },
  {
    id: 'PLgzIe1joGEyKQyyPLNh-J_11165-SkSmq',
    title: 'Kids & Nursery Songs',
    channelTitle: 'MR SANJIT SINGH',
    thumbnailUrl: 'https://i.ytimg.com/vi/M3-b8K-b2Qo/mqdefault.jpg',
    videos: [
      { id: 'M3-b8K-b2Qo', title: 'Lakdi Ki Kathi', channelTitle: 'Jingle Toons', thumbnailUrl: 'https://i.ytimg.com/vi/M3-b8K-b2Qo/mqdefault.jpg', duration: '3:58', uploadDate: 'Jun 25, 2013', viewCount: '1.2B views', likeCount: '3.5M likes' },
      { id: 'h6-YQh-k-lI', title: 'Nani Teri Morni', channelTitle: 'Jingle Toons', thumbnailUrl: 'https://i.ytimg.com/vi/h6-YQh-k-lI/mqdefault.jpg', duration: '3:11', uploadDate: 'May 10, 2014', viewCount: '900M views', likeCount: '2.8M likes' },
      { id: '5IOyn9u3S0s', title: 'Chanda Mama Door Ke', channelTitle: 'Infobells', thumbnailUrl: 'https://i.ytimg.com/vi/5IOyn9u3S0s/mqdefault.jpg', duration: '2:15', uploadDate: 'Sep 1, 2014', viewCount: '850M views', likeCount: '2.5M likes' },
    ]
  }
];

export const getPlaylists = (): YouTubePlaylist[] => {
  return playlistsData;
};