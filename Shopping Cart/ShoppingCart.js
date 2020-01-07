class Cart {
  
  constructor() {
    this.barang = []
    this.kuantitas = []
  }

  tambahProduk(nama, kuantitas) {
    if (this.barang.includes(nama)) {
      this.kuantitas[this.barang.indexOf(nama)] += kuantitas
    } else {
      this.barang.push(nama)
      this.kuantitas.push(kuantitas)  
    }
  }

  hapusProduk (nama) {
    const index = this.barang.indexOf(nama)
    if (index != -1) {
      this.barang.splice(index, 1)
    this.kuantitas.splice(index, 1)
    }
  }

  tampilkanCart  ()  {
    for (let i = 0; i < this.barang.length; i++) {
      console.log(`${this.barang[i]} ${this.kuantitas[i]}`)
    }
  }
}

const keranjang = new Cart()

keranjang.tambahProduk('Pisang Hijau', 2)
keranjang.tambahProduk('Semangka Kuning', 3)
keranjang.tambahProduk('Apel Merah', 1)
keranjang.tambahProduk('Apel Merah', 4)
keranjang.tambahProduk('Apel Merah', 2)
keranjang.hapusProduk('Semangka Kuning')
keranjang.hapusProduk('Semangka Merah')
keranjang.tampilkanCart()