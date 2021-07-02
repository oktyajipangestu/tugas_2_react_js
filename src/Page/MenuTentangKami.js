import { Component } from "react";

class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
                tentang: "Warung Nusantara Adalah Restoran Yang Bernuansa Masakan Nusantara, Kami Ada Untuk Membantu Anda Menikmati Makanan Khas Dari Nusantara"
            }
    }

    render() {
        return (
            <div>
                <center>
                <p>Tentang Kami</p>
                {this.state.tentang}
                </center>

            </div>
        );
    }
}

export default MenuTentangKami;