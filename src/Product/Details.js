import './product.css';
import Product from './Product';
import 'font-awesome/css/font-awesome.min.css'

function Details() {
    return (

        <section id="product">
            <h1>HOME AUDIO SPEAKERS</h1>
            <div className="product-box">
                <Product name="boAt Stone 350 10 W Bluetooth Speaker" image="https://rukminim1.flixcart.com/image/416/416/kh3qkcw0-0/speaker/mobile-tablet-speaker/c/o/r/stone-350-boat-original-imafx745hkzdqkys.jpeg?q=70" price="₹1,499" shipping="Free Shipping" />
                <Product name="boAt Stone 1200F with upto 9 Hours Battery, IPX7 and RGB LEDs 14 W Bluetooth Speaker" image="https://rukminim1.flixcart.com/image/416/416/ktszgy80/speaker/mobile-tablet-speaker/h/0/8/stone-1200f-boat-original-imag72dhdzrqku83.jpeg?q=70" price="₹3,949" shipping="Free Shipping" />
                <Product name="boAt Stone 190F 5 W Bluetooth Speaker" image="https://rukminim1.flixcart.com/image/416/416/kc3p30w0/speaker/mobile-tablet-speaker/z/v/f/stone-190-stone-190f-boat-original-imaftbffgmzwyyqe.jpeg?q=70" price="₹999" shipping="Free Shipping" />
                <Product name="ZEBRONICS Zeb-Vita Plus 16 W Bluetooth Home Audio Speaker" image="https://rukminim1.flixcart.com/image/416/416/k8j3gcw0/speaker/laptop-desktop-speaker/z/o/q/zeb-vita-plus-zebronics-original-imafqgwdkguzvagy.jpeg?q=70" price="₹1,499" shipping="Free Shipping" />
                <Product name="boAt Stone Cuboid with upto 5.5 Hours Playback 5 W Bluetooth Speaker" image="https://rukminim1.flixcart.com/image/416/416/ktep2fk0/speaker/mobile-tablet-speaker/s/w/v/stone-cuboid-boat-original-imag6r87fmhbtckr.jpeg?q=70" price="₹1,199" shipping="Free Shipping" />
                <Product name="JBL Clip4 5 W Bluetooth Speaker" image="https://rukminim1.flixcart.com/image/416/416/km57hjk0/speaker/mobile-tablet-speaker/n/3/9/jblclip4blk-jbl-original-imagf4y5ghzvhnxu.jpeg?q=70" price="₹4,212" shipping="Free Shipping" />
            </div>
        </section>
    )
}

export default Details;