const app = Vue.createApp({
    data() {
        return {
            picture: 'https://www.freeiconspng.com/thumbs/allah-png/allah-png-hd-1.png',
            arabText: 'ArabicVersionText',
            arti: 'Lorem ipsum ini adalah arti',
            nama_surat: 'Yusuf',
            trans_surat: 'Human',
            surat_ke: 68,
            ayat_ke: 1
        }
    },
    methods: {
        async getInspiration() {
            var me = this;
            var ayat = Math.floor(Math.random() * 6236) + 1
            var url = "https://api.alquran.cloud/ayah/" + ayat + "/en.asad";
            var urlArabic = "https://api.alquran.cloud/ayah/" + ayat;
            $.getJSON(urlArabic, function(data) {
                // console.log(data);
                me.arabText = data.data.text;
            });

            $.getJSON(url, function(data) {
                // console.log(data);
                var surah = data.data.surah.englishName;
                var surah_trans = data.data.surah.englishNameTranslation;
                var surat_ke = data.data.surah.number;
                var ayat_ke = data.data.numberInSurah;
                me.arti = data.data.text;
                me.nama_surat = surah;
                me.trans_surat = surah_trans;
                me.surat_ke = surat_ke;
                me.ayat_ke = ayat_ke;
            });
        }
    },
    created() {
        console.log("OKE");
        this.getInspiration();
    }
});

app.mount('#app');