function bukaForm(namaProduk, hargaProduk) {
    document.getElementById('produk').value = namaProduk;
    document.getElementById('harga').value = hargaProduk;
    document.getElementById('form-pemesanan').scrollIntoView();
}

function kirimPesan(event) {
    event.preventDefault();
    
    const produk = document.getElementById('produk').value;
    const harga = document.getElementById('harga').value;
    const nama = document.getElementById('nama').value;
    const nohp = document.getElementById('nohp').value;
    const alamat = document.getElementById('alamat').value;
    
    const pesan = `Halo, saya ingin memesan: 
- Produk: ${produk}
- Harga: Rp${harga}
- Nama: ${nama}
- No. HP: ${nohp}
- Alamat: ${alamat}`;
    
    const url = `https://wa.me/62895604450508? text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}
