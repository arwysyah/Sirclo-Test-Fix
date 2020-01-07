//sebuah kapal punya properties
//tipe perahu motor
//kapl pesiar
//perahulayar

class Kapal {
  constructor(mesin, name, color) {
    this.mesin = mesin;
   
    this.name = name;

    this.color = color;
  }

  berlabuh() {
    return `${this.name} is akan di pindahkan di seberang pelabuhan!`;
  }

  changeColor() {
    return `warna telah berubah menjadi ${this.color} !`;
  }
}
class KapalPesiar extends Kapal {
  constructor(mesin, alat,waktu) {
    super(mesin )
    this.waktu = waktu
    this.alat=alat
  }
  nyalakanMesin() {
    return `mesin kapal bermerk ${this.mesin} mesin telah dinyalakan`;
  }

  matikan() {
    return ` mesin ${this.mesin} telah dimatikan dan ${this.alat} berhenti pada pukul ${this.waktu}`;
  }
}

class PerahuLayar extends Kapal {
  constructor(mesin, alat, price) {
    super(mesin, price);
    this.alat=alat
  }
  nyalakanMesin() {
    return `kapal hanya menggunakan ${this.mesin} `;
  }

  mengangkut() {
    return `kapal mengangkut ${this.alat} dan jaring`;
  }
}

class PerahuMotor extends Kapal {
  constructor(mesin, alat,price) {
    super(mesin);
    this.alat=alat
    this.price=price
  }
  nyalakanMesin() {
    return `mesin kapal bermerk ${this.mesin} mesin telah dinyalakan`;
  }

  mundur() {
    return ` mesin ${this.mesin}  dan ${this.alat} berhenti`;
  }
  pembelian() {
    return `perahu dibeli dengan harga ${2 * this.price}`;
  }
}

const newBoat = new Kapal(
  "Rolls-Royce",
  "Roda Pemutar",
  16000000,
  "Titanic",
  "merah"
);
console.log(newBoat.changeColor());

const newKapalPesiar = new KapalPesiar("Rolls-Royce", "Roda Pemutar", '20.00 WIB');
console.log(newKapalPesiar.nyalakanMesin());
console.log(newKapalPesiar.matikan());

const newPerahulayar = new PerahuLayar("angin", "pancing", 16000000);
console.log(newPerahulayar.nyalakanMesin());
console.log(newPerahulayar.mengangkut());

newKapalMotor = new PerahuMotor("Suzuki DF", "kemudi", 259900000);
console.log(newKapalMotor.pembelian());
console.log(newKapalMotor.mundur());
