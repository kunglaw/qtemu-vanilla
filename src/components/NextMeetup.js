import React from "react"
import "./NextMeetup.css"

import Text from "./Text"

class NextMeetup extends React.Component {

    render() {
        return(
            <section id="next-meetup">
                <div className="container">
                    <h2> Next Meetup </h2>
                    <div className="content">
                        <p><b>Description</b></p>

                        <Text>HACKTIV8 Open House merupakan sebuah acara yang memberikan 
                        kesempatan bagi siapa saja yang tertarik dengan program pelatihan 
                        di HACKTIV8 untuk melihat secara langsung Campus HACKTIV8 dan 
                        mulai mengenal program-program yang ada disini.</Text>

                        <Text>Di acara ini, partisipan akan:</Text>
                            <ul>
                                <li>Diperkenalkan lebih detail mengenai program dan 
                                kurikulum HACKTIV8.</li>

                                <li>Mengikuti sesi tanya jawab.</li>

                                <li>Tur keliling kampus untuk melihat langsung 
                                    kegiatan para murid di HACKTIV8 </li>
                            </ul>
                        
                            <Text> Selain itu, instruktur kami juga akan membagikan 
                            pengalaman dia dalam hal karir sebagai seorang 
                            developer, dengan harapan dapat menginspirasi kamu 
                            semua yang memiliki ketertarikan dalam dunia teknologi. </Text>

                            <Text>Dapatkan KODE PROMO SPESIAL untuk program kami khusus bagi 
                            kamu yang menghadiri acara ini.</Text>

                            <Text>Tunggu apa lagi? Daftarkan dirimu sekarang!</Text>

                            <Text>For more information, contact:</Text>

                            <div>(+62) 819 0887 8010</div>
                            <a href="#">admissions@hacktiv8.com</a>
                    </div>
                </div>
                
            </section>

        )
    }

}

export default NextMeetup