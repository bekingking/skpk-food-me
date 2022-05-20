let menu = [
    {
        kode: "BRG001",
        nama: "Jus",
        stock: Number(10),
        harga: Number(15000),
        foto: "https://asset.kompas.com/crops/7_zKY8FWOdyIJ3APqJ46TBi4Er4=/0x0:780x390/750x500/data/photo/2013/04/15/1108374-jus-buah-780x390.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG002",
        nama: "Bakso",
        stock: Number(20),
        harga: Number(15000),
        foto: "https://cdns.klimg.com/merdeka.com/i/w/news/2021/08/27/1345870/content_images/670x335/20210827142321-1-ilustrasi-bakso-009-tantri-setyorini.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG003",
        nama: "Heci",
        stock: Number(100),
        harga: Number(2000),
        foto: "https://img-global.cpcdn.com/recipes/cec9f6bf89a382a3/751x532cq70/heci-ote-ote-bakwan-sayur-foto-resep-utama.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG004",
        nama: "Permen",
        stock: Number(1000),
        harga: Number(500),
        foto: "https://cdn1-production-images-kly.akamaized.net/aGsJSE-5PlZOIBar0T3L1ecKXRA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2054451/original/070398300_1522833158-iStock-153502589.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG005",
        nama: "Air Mineral",
        stock: Number(50),
        harga: Number(6000),
        foto: "https://media.suara.com/pictures/970x544/2018/03/22/72249-air-mineral-kemasan-atau-air-minum-kemasan.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG006",
        nama: "Boba6",
        stock: Number(10),
        harga: Number(5000),
        foto: "https://asset.kompas.com/crops/aP_98iCv79Qo41hFBjRvIQ8YyG8=/0x0:1000x667/750x500/data/photo/2019/09/26/5d8c4fff5f34c.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG007",
        nama: "Boba7",
        stock: Number(10),
        harga: Number(5000),
        foto: "https://asset.kompas.com/crops/aP_98iCv79Qo41hFBjRvIQ8YyG8=/0x0:1000x667/750x500/data/photo/2019/09/26/5d8c4fff5f34c.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG008",
        nama: "Boba8",
        stock: Number(10),
        harga: Number(5000),
        foto: "https://asset.kompas.com/crops/aP_98iCv79Qo41hFBjRvIQ8YyG8=/0x0:1000x667/750x500/data/photo/2019/09/26/5d8c4fff5f34c.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG009",
        nama: "Boba9",
        stock: Number(10),
        harga: Number(5000),
        foto: "https://asset.kompas.com/crops/aP_98iCv79Qo41hFBjRvIQ8YyG8=/0x0:1000x667/750x500/data/photo/2019/09/26/5d8c4fff5f34c.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG010",
        nama: "Boba10",
        stock: Number(10),
        harga: Number(5000),
        foto: "https://asset.kompas.com/crops/aP_98iCv79Qo41hFBjRvIQ8YyG8=/0x0:1000x667/750x500/data/photo/2019/09/26/5d8c4fff5f34c.jpg",
        rating: "5.0"
    },
];

let keranjang = [{
        kode: "BRG005",
        jumlah: Number(10)
    },
    {
        kode: "BRG001",
        jumlah: Number(10)
    }
];

function TambahKeKeranjang (menu, record) {
    if (Cari(menu[record].kode, keranjang)){
        console.log("+=1");
    } else {
        console.log("Push "+menu[record].nama);
    }
}

function Cari (kode, array) {
    for (object in array) {
        if (array[object].kode == kode){
            return true;
        } else {
            return false;
        }
    }
}

console.log(menu);

function CariMakanan (nama_makanan) {
    for (index in menu) {
        if (menu[index].nama == nama_makanan){
            return true;
        }
    }
}



function Show (nama){
    alert("Hey "+nama);
}

// let nama_makanan = prompt("Masukkan nama makanan yang ingin dicari");
// if(CariMakanan(nama_makanan)){
//     alert("Makanan ketemu");
// } else {
//     alert("Makanan tidak ketemu");
// }
// for (record in menu) {
//     document.write("<li>"+menu[record].nama+
//     "<button id='Tambah'> Masukkan keranjang </button> </li>");
// }

// document.getElementById("Tambah").onclick();



