new Vue({
  el: "#app",
  data() {
    //https://img.youtube.com/vi/${id}/maxresdefault.jpg
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Re Aoharu x Luminous Memory",
          artist: "Pachi",
          cover: "https://img.youtube.com/vi/g_m2jUeWV4w/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/RE%20Aoharu%20x%20Luminous%20Memory%20-%20Blue%20Archive%20OST%20(Fan%20Remix).mp3",
          url: "https://youtube.com/watch?v=g_m2jUeWV4w",
          favorited: false
        },
        {
          name: "Koiiro Kobo AI Cover",
          artist: "Kobo Kanaeru Holo ID",
          cover: "https://img.youtube.com/vi/T2tN4EJgXYE/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/%E3%80%90Kobo%20Kanaeru%E3%80%91%E6%81%8B%E8%89%B2Koiiro%20-%20Mosawo%20Acoustic%20AI%20Cover%20%20KAN-ROM-IND%20Color%20Coded%20Lyrics.mp3",
          url: "https://youtu.be/T2tN4EJgXYE?si=nJ9kkTC69vbKBorT",
          favorited: false
        },
        {
          name: "Kawaikute Gomen Zeta Cover",
          artist: "Vestia Zeta Holo ID",
          cover: "https://img.youtube.com/vi/WDueRRGIKzw/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/%E5%8F%AF%E6%84%9B%E3%81%8F%E3%81%A6%E3%81%94%E3%82%81%E3%82%93%20%20Kawaikute%20Gomen%20%E3%80%90Cover%20%E2%99%A1%20Vestia%20Zeta%E3%80%91.mp3",
          url: "https://youtu.be/WDueRRGIKzw?si=wFV8-T7J0b_3PY-v",
          favorited: false
        },
        {
          name: "Gyutto Zeta Cover",
          artist: "Vestia Zeta Holo ID",
          cover: "https://img.youtube.com/vi/3Fb7Qv36of4/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/%E3%80%90Cover%E3%80%91%E3%81%8E%E3%82%85%E3%81%A3%E3%81%A8%E3%80%82(Gyutto)%20%20Vestia%20Zeta%20%E3%80%90Bossa%20Nova%E3%80%91.mp3",
          url: "https://youtu.be/3Fb7Qv36of4?si=mAhTHTyw4cyvbJbL",
          favorited: false
        },
        {
          name: "Seishun no Archive",
          artist: "Blue Archive",
          cover: "https://img.youtube.com/vi/H3-6keTNfJQ/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Blue%20Archive%20The%20Animation%20-%20Opening%20TV%20SIZE%20%E3%80%8CSeishun%20no%20Archive%E3%80%8DLyric%20Romaji,%20Sub%20ENID.mp3",
          url: "https://youtu.be/H3-6keTNfJQ?si=RFzvWHsmxUkkQC_Q",
          favorited: false
        },
        {
          name: "Paradoxes",
          artist: "Miyu Tomita",
          cover: "https://img.youtube.com/vi/ocDQUKDzKUc/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Date%20A%20Live%20Season%205%20-%20Opening%20Full%E3%80%8EPARADOXES%E3%80%8Fby%20Tomita%20Miyu%20(Lyrics%20KANROMENG).mp3",
          url: "https://youtu.be/ocDQUKDzKUc?si=fxj_QIbDswrbFzuf",
          favorited: false
        },
        {
          name: "Seandainya",
          artist: "Viera",
          cover: "https://img.youtube.com/vi/slCtw5FF-Qk/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Seandainya%20-%20Vierra%20%20Lirik%20Lagu.mp3",
          url: "https://youtu.be/slCtw5FF-Qk?si=h4RIGl_brsrkYtlE",
          favorited: false
        },
        {
          name: "Est-ce que tu m'aimes?",
          artist: "GIMS",
          cover: "https://img.youtube.com/vi/EXBC3VQttsw/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/gims-est-ce-que-tu-maimes-speed-up-tik-tok-version-128-ytshorts.savetube.me.mp3",
          url: "https://youtu.be/EXBC3VQttsw?si=8t4H0U6faOKD20sp",
          favorited: false
        },
        {
          name: "Dj Sweet Love Kharis Sopan",
          artist: "Dj Apin Rimex",
          cover: "https://img.youtube.com/vi/6vS8ucvLh28/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20SWEET%20LOVE%20KHARIS%20SOPAN%20SOUND%20Caro%20VIRAL%20TIK%20TOK%20TERBARU%202024!!.mp3",
          url: "https://youtu.be/6vS8ucvLh28?si=GUAAvz4eaw8MGqRp",
          favorited: false
        },
        {
          name: "Dj Geser Kiri Kanan",
          artist: "XPUTZ RMX",
          cover: "https://img.youtube.com/vi/GMfh8cDTdPM/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20GESER%20KIRI%20KANAN%20BREAKFUNK%20SOUND%20%E2%86%AFF%C3%A0ll%20%F0%9D%99%8F%F0%9D%99%A4%F0%9D%99%A5%E2%99%AC%F0%9F%83%8F%F0%9F%8C%A0%20VIRAL%20TIK%20TOK%20TERBARU%202024%20!!!.mp3",
          url: "https://youtu.be/GMfh8cDTdPM?si=8rzBtmiF0a0bY7xl",
          favorited: false
        },
        {
          name: "Dj Matame Matame",
          artist: "XPUTZ RMX",
          cover: "https://img.youtube.com/vi/wMlI8Dgjoq4/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20MATAME%20MATAME%20REMIX%20%5BDROP%20PLAT%20NGW%5D%20SOUND%20MASKHAT%204RACK%20VIRAL%20TIK%20TOK%20TERBARU%202024%20!!!.mp3",
          url: "https://youtu.be/wMlI8Dgjoq4?si=OI7a0BAgVNQkexlW",
          favorited: false
        },
        {
          name: "Dj Always",
          artist: "Dj Cantik",
          cover: "https://img.youtube.com/vi/MJEhAj7lcfs/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20ALWAYS%20Slow%20TikTok%20Remix%20_%20Terbaru%202021%20(DJ%20Cantik%20Remix)%20%20%20DJ%20ALWAYS%20Slow%20TikTok%20Remix%20Viral.mp3",
          url: "https://youtu.be/MJEhAj7lcfs?si=lktr2paWyMAMuVBA",
          favorited: false
        },
        {
          name: "Dj All The Kids Are Depresed",
          artist: "Dj Komang Rimex",
          cover: "https://img.youtube.com/vi/enOF7pT3Dh0/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20ALL%20THE%20KIDS%20ARE%20DEPRESSED%20JEDAG%20JEDUG%20FULL%20BEAT%20VIRAL%20TIKTOK%20TERBARU%202022%20%20DJ%20KOMANG%20RIMEX.mp3",
          url: "https://youtu.be/enOF7pT3Dh0?si=Pfisw8TW4iSjHyil",
          favorited: false
        },
        
        {
          name: "Dj Dinasty by Manok",
          artist: "Dj Alpin Remix",
          cover: "https://img.youtube.com/vi/LmRiSWv-dnE/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20DYNASTY%20BY%20MANOK%20VIRAL%20TIK%20TOK%20TERBARU%202024!!.mp3",
          url: "https://youtu.be/LmRiSWv-dnE?si=4prztk5CM_r8G2rk",
          favorited: false
        },
        {
          name: "Dj Smack That",
          artist: "Dj Mbi Remixer",
          cover: "https://img.youtube.com/vi/4QdUSrRrKxc/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20SMACK%20THAT%20-%20AKON%20JUNGLE%20DUCT%20MEDAN%20SOUND%20DANZZ%20TIKTOK%20VIRAL%202024%20TREND%20!!!!!.mp3",
          url: "https://youtu.be/4QdUSrRrKxc?si=9KmO0dODJ8Vly5li",
          favorited: false
        },
        {
          name: "DJ Tetap Dalam Jiwa",
          artist: "DJ Apriyantoft",
          cover: "https://img.youtube.com/vi/M88CB-G72_Q/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20BILA%20MEMANG%20HARUS%20BERPISAH%20AKU%20AKAN%20TETAP%20SETIA%20%20DJ%20TETAP%20DALAM%20JIWA%20VIR%20TIK%20TOK%20TERBARU%202024%20!.mp3",
          url: "https://youtu.be/M88CB-G72_Q?si=qWnMjNHocKsQ8an4",
          favorited: false
        },
        {
          name: "DJ Kamu Yang Kasih Tinggal",
          artist: "DJ Apriyantoft",
          cover: "https://img.youtube.com/vi/YFMuLoCWbyA/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20KAMU%20YANG%20KASIH%20TINGGAL%20UCIL%20PANGKI%20MELODY%20ULAR%20VIRAL%20TIK%20TOK%20TERBARU%202024%20YANG%20KALIAN%20CARI%20!.mp3",
          url: "https://youtu.be/YFMuLoCWbyA?si=8QyX0UoLQPdm6ps0",
          favorited: false
        },
        {
          name: "DJ Hissatsu Teleport",
          artist: "Ragil YETE",
          cover: "https://img.youtube.com/vi/MufEjZeQ8bo/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/DJ%20BREAKFUNK%20HISSATSU%20TELEPORT%20JKT48%20(JURUS%20RAHASIA)%20%5BRagil%20YETE%20X%20YOO%20YETE%5D.mp3",
          url: "https://youtu.be/MufEjZeQ8bo?si=t3oti2KfJpcXScig",
          favorited: false
        },
        {
          name: "Don't Be Shy",
          artist: "Alosa & Jaime Deraz",
          cover: "https://img.youtube.com/vi/jkTx3gYsh_E/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Don't%20Be%20Shy%20(Lyrics).mp3",
          url: "https://youtu.be/jkTx3gYsh_E?si=ZM8rzzVO2i_gfj8t",
          favorited: false
        },
        {
          name: "Down",
          artist: "Robbe, Bersage & Nitto-Onna",
          cover: "https://img.youtube.com/vi/27T4BAq7Q-0/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Down%20(Lyrics).mp3",
          url: "https://youtu.be/27T4BAq7Q-0?si=I3IdcXxX7aRx4Opd",
          favorited: false
        },
        {
          name: "It's Not Fair",
          artist: "Kenya Grace",
          cover: "https://img.youtube.com/vi/R05_40A9pAI/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20It's%20Not%20Fair%20(Lyrics).mp3",
          url: "https://youtu.be/R05_40A9pAI?si=Tj9NvNKwqGzzZ6y0",
          favorited: false
        },
        {
          name: "Keep You Warm",
          artist: "Slander & William Black",
          cover: "https://img.youtube.com/vi/C7HBNBjBYxA/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Keep%20You%20Warm%20(Lyrics).mp3",
          url: "https://youtu.be/C7HBNBjBYxA?si=kaY8y0oa5ESP1-3V",
          favorited: false
        },
        {
          name: "Million Dolar",
          artist: "FVTM, Fyrell & ITALEE",
          cover: "https://img.youtube.com/vi/vgazjjVaYGA/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Million%20Dollar%20Baby%20(Lyrics).mp3",
          url: "https://youtu.be/vgazjjVaYGA?si=NzK-NaY7-ujTl8Fq",
          favorited: false
        },
        {
          name: "Myself & I",
          artist: "The FatRat & RIELL",
          cover: "https://img.youtube.com/vi/A-PMzdjIKWo/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Myself%20&%20I%20(TheFatRat%20&%20RIELL)%20(Lyrics).mp3",
          url: "https://youtu.be/A-PMzdjIKWo?si=d0RNUYHRFW4DSVjg",
          favorited: false
        },
        {
          name: "On My Way",
          artist: "Boostereo ft. Solina",
          cover: "https://img.youtube.com/vi/iRnBUTdO90c/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20On%20My%20Way%20(Lyrics).mp3",
          url: "https://youtu.be/iRnBUTdO90c?si=4uaIBVd1f57l6JYh",
          favorited: false
        },
        {
          name: "Payphone",
          artist: "Alema & ROBBE",
          cover: "https://img.youtube.com/vi/67C1pMy-Yy0/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Payphone%20-%20(Lyrics).mp3",
          url: "https://youtu.be/67C1pMy-Yy0?si=FS1sUvUzwBVD2WCm",
          favorited: false
        },
        {
          name: "Padam Padam",
          artist: "Ken & Veronica Brafo",
          cover: "https://img.youtube.com/vi/2EzSCKS0UBU/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Padam%20Padam%20(Lyrics).mp3",
          url: "https://youtu.be/2EzSCKS0UBU?si=1h2UI00xlQg2JxbU",
          favorited: false
        },
        {
          name: "Villain",
          artist: "K/DA ft. Madison Bear & Kim Petras",
          cover: "https://img.youtube.com/vi/1gQcSSUKcZg/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20VILLAIN%20(Lyrics).mp3",
          url: "https://youtu.be/1gQcSSUKcZg?si=ZiKmNQr1F7YGZynn",
          favorited: false
        },
        {
          name: "Water",
          artist: "GOODSCANDAL",
          cover: "https://img.youtube.com/vi/deKICP3y_K4/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/Nightcore%20-%20Water%20(Lyrics).mp3",
          url: "https://youtu.be/deKICP3y_K4?si=-AUcd_XxdXSYbmHj",
          favorited: false
        },
        {
          name: "Constant Moderato",
          artist: "Blue Archive",
          cover: "https://img.youtube.com/vi/SHkF48SgiSA/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/%E3%83%96%E3%83%AB%E3%83%BC%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96%20Blue%20Archive%20OST%201.%20Constant%20Moderato.mp3",
          url: "https://youtu.be/SHkF48SgiSA?si=rSG860xlTkZukZnd",
          favorited: false
        },
        {
          name: "Usagi flap",
          artist: "Blue Archive",
          cover: "https://img.youtube.com/vi/toPWvdaC84w/maxresdefault.jpg",
          source: "https://github.com/SyariffH/Media/raw/main/Audio/%E3%83%96%E3%83%AB%E3%83%BC%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96%20Blue%20Archive%20OST%20113.%20Usagi%20Flap.mp3",
          url: "https://youtu.be/toPWvdaC84w?si=BE5t7TVyvB9yQkb7",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
